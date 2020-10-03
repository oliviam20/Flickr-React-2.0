import { mount } from 'enzyme';
import React from 'react';
import App from '../App/App';

let wrapper;
beforeEach(() => {
  wrapper = mount(<App />);
});
console.log(wrapper.debug())

describe('App', () => {
  it('should render without error', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
