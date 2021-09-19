import React from 'react';
import Project from './Project';

export default function Projects(props) {
  return (
    <div class="images">
      {props.pics.map((pic, i) => (
        <Project
          pic={pic}
          key={Math.random()
            .toString()
            }
        />
      ))}
    </div>
  );
}
