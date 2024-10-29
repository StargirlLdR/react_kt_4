import React from 'react';

const roundRating = (rating) => Math.round(rating);

const Stars = ({ rating }) => {
  const roundedRating = roundRating(rating);
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span
        key={i}
        className={`fa fa-star${i <= roundedRating ? ' active' : ''}`}
      />
    );
  }

  return <div className="stars">{stars}</div>;
};

export default Stars;
