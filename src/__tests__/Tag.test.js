import { shallow } from 'enzyme';
import React from 'react';
import Tag from '../components/Tag/Tag';
import Button from '../components/Button/Button';

const defaultProps = {
  tag: "hello",
  onHandleSearch: jest.fn()
};
let wrapper;
beforeEach(() => {
  wrapper = shallow(<Tag {...defaultProps} />);
});

describe('Tag', () => {
  it('should render without error', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should render one Button', () => {
    expect(wrapper.find(Button)).toHaveLength(1);
  });

  it('onHandleSearch should be called', () => {
    wrapper.find(Button).simulate('click');
    expect(defaultProps.onHandleSearch).toHaveBeenCalledTimes(1);
    expect(defaultProps.onHandleSearch).toHaveBeenCalledWith(undefined, 'hello');
  });
});
