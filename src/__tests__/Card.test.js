import { shallow } from 'enzyme';
import React from 'react';
import Card from '../components/Card/Card';
import Button from '../components/Button/Button';
import FormattedDate from '../components/FormattedDate/FormattedDate';
import FormattedText from '../components/FormattedText/FormattedText';
import ImageLink from '../components/ImageLink/ImageLink';
import Tag from '../components/Tag/Tag';

const defaultProps = {
  author: 'teddy',
  date: '2019-07-30T18:22:16-08:00',
  thumbnail: 'https://example-thumbnail.com',
  tags: 'cute teddy bear',
  title: 'fluffy brown bear',
  fullImage: 'https://example-full-image.com',
  onHandleSearch: jest.fn()
};

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Card {...defaultProps} />);
});

describe('Card', () => {
  it('should render one figure element', () => {
    expect(wrapper.find('figure')).toHaveLength(1);
  });

  it('should render one figcaption element', () => {
    expect(wrapper.find('figcaption')).toHaveLength(1);
  });

  it('should render one <ImageLink /> component', () => {
    expect(wrapper.find(ImageLink)).toHaveLength(1);
  });

  it('should render one <FormattedText /> component', () => {
    expect(wrapper.find(FormattedText)).toHaveLength(1);
  });

  it('should render one <FormattedDate /> component', () => {
    expect(wrapper.find(FormattedDate)).toHaveLength(1);
  });

  it('should render one <Button /> component', () => {
    expect(wrapper.find(Button)).toHaveLength(1);
  });

  it('should render three <Tag /> components', () => {
    expect(wrapper.find(Tag)).toHaveLength(3);
  });
});
