
import { shallow } from 'enzyme';
import React from 'react';
import Loader from '../components/Loader/Loader';

describe('Loader', () => {
  it('should render without error', () => {
    const wrapper = shallow(<Loader />);
    expect(wrapper.exists()).toBe(true);
  })
});