import React from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import Card from '../Card/Card';
import './CardList.scss';

const CardList = ({
  onHandleSearch,
  images
}) => {
  const cardsArr = images.map((img, index) => (
    <div
      key={`${img.date_taken}${img.title}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Card
        author={img.author}
        date={img.date_taken}
        thumbnail={img.media.m}
        tags={img.tags}
        title={img.title}
        fullImage={img.link}
        onHandleSearch={onHandleSearch}
      />
    </div>
  ));
  return (
    <div className="card-list-wrapper">
      <ReactCSSTransitionGroup
        transitionName="fade"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={1}
      >
        {cardsArr.length && cardsArr}
      </ReactCSSTransitionGroup>
    </div>
  )
};

CardList.defaultProps = {
  images: []
}

CardList.propTypes = {
  onHandleSearch: PropTypes.func.isRequired,
  images: PropTypes.array
}

export default CardList;
