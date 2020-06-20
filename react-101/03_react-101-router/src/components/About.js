import React from 'react';
import Rainbow from '../hoc/Rainbow';

const About = () => {
  return (
    <div className='container'>
      <h4 className='center'>About</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eveniet, sequi suscipit assumenda ex distinctio ipsam a accusantium officia quibusdam neque.
        Voluptates distinctio in, ipsam odit deleniti laborum eius expedita.
      </p>
    </div>
  );
};

export default Rainbow(About);
