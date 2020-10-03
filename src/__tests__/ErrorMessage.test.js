import { shallow } from 'enzyme';
import React from 'react';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<ErrorMessage />);
});

describe('ErrorMessage', () => {
  it('should render without error', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should render correct text', () => {
    expect(wrapper.find('p').text()).toBe('Oh no! Something went wrong 😭');
  });
});
