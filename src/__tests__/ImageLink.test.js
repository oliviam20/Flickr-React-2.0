import { shallow } from 'enzyme';
import React from 'react';
import ImageLink from '../components/ImageLink/ImageLink';

const defaultProps = {
  link: 'https://full-link-example.com',
  thumbnail: 'https://example.com',
  title: 'Cute little kittens'
};
let wrapper;
beforeEach(() => {
  wrapper = shallow(<ImageLink {...defaultProps} />);
});

describe('ImageLink', () => {
  it('should render without error', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should render an anchor element', () => {
    expect(wrapper.find('a')).toHaveLength(1);
  });

  it('should render a img element', () => {
    expect(wrapper.find('img')).toHaveLength(1);
  });

  it('should render a div element containing a span element', () => {
    expect(wrapper.find('div')).toHaveLength(1);
    expect(wrapper.find('div').contains(<span className="overlay-text">Open</span>)).toEqual(true);
  });

  it('should have correct attributes', () => {
    expect(wrapper.find('a').prop('href')).toEqual('https://full-link-example.com');
    expect(wrapper.find('img').prop('alt')).toEqual('Cute little kittens');
    expect(wrapper.find('img').prop('src')).toEqual('https://example.com');
  });
});
