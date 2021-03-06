import { shallow } from 'enzyme';
import React from 'react';
import InputText from '../components/InputText/InputText';

const mockFn = jest.fn();
const defaultProps = {
  query: 'puppy',
  onHandleChange: mockFn,
  onHandleKeyDown: mockFn
};
let wrapper;
beforeEach(() => {
  wrapper = shallow(<InputText {...defaultProps} />);
});

describe('InputText', () => {
  it('should render without error', () => {
    expect(wrapper.find('input')).toHaveLength(1);
  });

  it('should have correct attributes', () => {
    expect(wrapper.find('input').prop('value')).toEqual('puppy');
  });

  it('should call onHandleKeyDown on key press', () => {
    wrapper.find('input').simulate('keydown', { key: 'Enter' });
    expect(defaultProps.onHandleKeyDown).toHaveBeenCalledTimes(1);
  });

  it('should call onHandleChange on change', () => {
    wrapper.find('input').simulate('change', { target: { name: 'name', value: '123' } });
    expect(defaultProps.onHandleChange).toHaveBeenCalledTimes(2);
  });
});
