import React from 'react';

const Section = ({ title, subtitle, onclick, children }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p data-testid="subTitle">{subtitle}</p>
      {children}
      <button onClick={onclick}>
        Vote for {title}
      </button>
    </div>
  );
};

export default Section;