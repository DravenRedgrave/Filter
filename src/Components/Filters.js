import React from 'react';

export default function Filters(props) {
  const onChoose = props.onChoose;
  const categories = props.categories;

  return (
    <div class="filters">
      {categories.map(cat => (
        <button
          onClick={() => onChoose(cat)}
          className={props.activeTag === cat ? 'black button' : 'button'}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
