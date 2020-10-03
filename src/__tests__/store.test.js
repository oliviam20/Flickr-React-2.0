import React from 'react';
import { mount } from 'enzyme';
import { store } from '../reducer/store';
import App from '../App/App';
import CardList from '../components/CardList/CardList';
import Card from '../components/Card/Card';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import Loader from '../components/Loader/Loader';
import ImageLink from '../components/ImageLink/ImageLink';
import FormattedText from '../components/FormattedText/FormattedText';
import FormattedDate from '../components/FormattedDate/FormattedDate';
import Button from '../components/Button/Button';
import Tag from '../components/Tag/Tag';

const resultItem = {
  author: 'nobody@flickr.com ("Ken Kawamura")',
  date_taken: '2020-10-03T05:31:05-08:00',
  link: 'https://example-link.com',
  media: { m: 'https://example-live-link.com' },
  tags: 'blue sea sky island',
  title: 'Sapphire'
};

const initialState = {
  error: false,
  images: [],
  loading: false
};

const mockFn = jest.fn();

let wrapper;
beforeEach(() => {
  wrapper = mount(<store.Provider
    value={{
      state: initialState,
      dispatch: mockFn
    }}
  >
    <App />
  </store.Provider>);
});

describe('store reducer', () => {
  it('should render initial state', async () => {
    expect(wrapper.find(CardList).length).toBe(1);
    expect(wrapper.find(ErrorMessage).length).toBe(0);
    expect(wrapper.find(Loader).length).toBe(0);
  });

  it('should render error', async () => {
    const state = {
      error: true,
      images: [],
      loading: false
    }
    wrapper.setProps({
      value: {
        state,
        dispatch: mockFn
      }
    });
    expect(wrapper.find(ErrorMessage).length).toBe(1);
  });

  it('should render loader', async () => {
    const state = {
      error: false,
      images: [],
      loading: true
    };
    wrapper.setProps({
      value: {
        state,
        dispatch: mockFn
      }
    });
    expect(wrapper.find(ErrorMessage).length).toBe(0);
    expect(wrapper.find(Loader).length).toBe(1);
  });

  it('should render images', async () => {
    const state = {
      error: false,
      images: [resultItem],
      loading: false
    }
    wrapper.setProps({
      value: {
        state,
        dispatch: mockFn
      }
    });
    expect(wrapper.find(ErrorMessage).length).toBe(0);
    expect(wrapper.find(Loader).length).toBe(0);
    expect(wrapper.find(CardList).length).toBe(1);
    expect(wrapper.find(Card).length).toBe(1);
    expect(wrapper.find(ImageLink).length).toBe(1);
    expect(wrapper.find(FormattedText).length).toBe(1);
    expect(wrapper.find(FormattedDate).length).toBe(1);
    expect(wrapper.find(Button).length).toBe(6);
    expect(wrapper.find(Tag).length).toBe(4);
  });
});
