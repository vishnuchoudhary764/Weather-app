// import React, { useEffect, useState } from 'react';
import "./Theme.css"
import themeLogo from '../assets/themes.png'

const Theme = (props) => {
  
  return (
    <div>
      <section className='theme'>
        <button className="theme-btn" onClick={props.toggleTheme}>
          <img src={themeLogo} alt="Theme Toggle" />
        </button>
      </section>

    </div>

  );
};

export default Theme;

