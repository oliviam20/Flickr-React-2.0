import { shallow } from 'enzyme';
import React from 'react';
import Heading from '../components/Heading/Heading';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Heading text="i love pizza" />);
});

describe('Heading', () => {
  it('should render without error', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should render the heading text', () => {
    expect(wrapper.find('h1').text()).toEqual('i love pizza');
  })
});
