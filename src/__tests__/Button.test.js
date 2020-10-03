import { shallow } from 'enzyme';
import React from 'react';
import Button from '../components/Button/Button';

const mockFn = jest.fn();
const defaultProps = {
  text: 'i love pizza',
  onClick: mockFn
}
let wrapper;
beforeEach(() => {
  wrapper = shallow(<Button {...defaultProps} />);
});

describe('Button', () => {
  it('should render button', () => {
    expect(wrapper.find('button')).toHaveLength(1)
  });

  it('should render correct text', () => {
    expect(wrapper.find('button').text()).toBe('i love pizza')
  });

  it('should render correct children', () => {
    wrapper.setProps({
      text: '',
      children: <i className="fa fa-search" />
    })
    expect(wrapper.find('button').containsMatchingElement(<i className="fa fa-search" />)).toBe(true);
  });

  it('should call fucntion on click', () => {
    wrapper.find('button').simulate('click');
    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
  });
});