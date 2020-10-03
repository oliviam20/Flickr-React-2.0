import { mount } from 'enzyme';
import React from 'react';
import Button from '../components/Button/Button';
import InputText from '../components/InputText/InputText';
import Search from '../components/Search/Search';
// import { clearImages } from '../actions/index';
import * as action from '../actions/index';

const mockFn = jest.fn();
const defaultProps = {
  onHandleTagChange: mockFn,
  onHandleSearch: mockFn,
  clearImages: mockFn,
  query: 'bike'
}
let wrapper;
beforeEach(() => {
  wrapper = mount(<Search {...defaultProps} />);
});

describe('Search', () => {
  it('should render one <Button /> component', () => {
    expect(wrapper.find(Button).length).toBe(1)
  });

  it('should render one <InputText /> component', () => {
    expect(wrapper.find(InputText).length).toBe(1)
  });

  it('should call onHandleSearch when pressing Enter in input text', () => {
    wrapper.find('input').simulate('keydown', { keyCode: 13 });
    expect(defaultProps.onHandleSearch).toHaveBeenCalledTimes(1);
  });

  it('should call onHandleTagChange when changing text in input', () => {
    wrapper.find('input').simulate('change', { taget: { value: 's' }});
    expect(defaultProps.onHandleTagChange).toHaveBeenCalledTimes(2);
  });
});
