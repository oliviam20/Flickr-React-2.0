import { shallow } from 'enzyme';
import React from 'react';
import FormattedDate from '../components/FormattedDate/FormattedDate';

const defaultProps = {
  date: "2020-01-02T10:29:28-08:00"
};
let wrapper;
beforeEach(() => {
  wrapper = shallow(<FormattedDate {...defaultProps} />);
});

describe('FormattedDate', () => {
  it('should render without error', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should render correct date', () => {
    expect(wrapper.find('p').text()).toEqual('3 January 2020');
  });
});
