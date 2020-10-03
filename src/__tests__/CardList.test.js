import { shallow } from 'enzyme';
import React from 'react';
import Card from '../components/Card/Card';
import CardList from '../components/CardList/CardList';

const defaultProps = {
  onHandleSearch: jest.fn(),
  images: [
    {
      author: 'Jen',
      date_taken: '2020-09-24T07:27:58-08:00',
      link: 'https://www.flickr.com/photos/gusdiaz/50407712198/',
      media: {
        m: 'https://live.staticflickr.com/65535/50407712198_009caf0011_m.jpg'
      },
      tags: 'sunrise teddy sea',
      title: 'beach'
    }
  ]
};

let wrapper;
beforeEach(() => {
  wrapper = shallow(<CardList {...defaultProps} />);
});

describe('CardList', () => {
  it('should render without error', () => {
    expect(wrapper.find('div').at(0).prop('className')).toEqual('card-list-wrapper');
  });
});
