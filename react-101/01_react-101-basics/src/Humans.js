import React from 'react';
import './Humans.css';
//functional component
const Humans = ({ humans, removeHuman }) => {
  //destructuring when receiving

  const humansList = humans.map(human => {
    return human.age > 18 ? (
      <div className='human' key={human.id}>
        <div>Name: {human.name}</div>
        <div>Age: {human.age}</div>
        <div>Profession: {human.profession}</div>
        <button
          onClick={() => {
            removeHuman(human.id);
          }}
        >
          Remove
        </button>
        <hr />
      </div>
    ) : null;
  });

  return <div className='humans-list'>{humansList}</div>;
};

export default Humans;
