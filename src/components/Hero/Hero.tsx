import React from 'react';

type Props = {
  title?: string;
  paragraph?: string;
};

const Hero = (props: Props) => {
  return (
    <div style={{ backgroundColor: 'orange', padding: 10, margin: 10 }}>
      <h1>{props.title}</h1>
      <p>{props.paragraph}</p>
    </div>
  );
};

export default Hero;
