import { shallow } from 'enzyme';
import React from 'react';
import FormattedText from '../components/FormattedText/FormattedText';

const defaultProps = {
  text: 'nobody@flickr.com ("thomasgorman1")'
};
let wrapper;
beforeEach(() => {
  wrapper = shallow(<FormattedText {...defaultProps} />);
});

describe('FormattedDate', () => {
  it('should render without error', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should render correct date', () => {
    expect(wrapper.find('p').text()).toEqual('thomasgorman1');
  });
});
