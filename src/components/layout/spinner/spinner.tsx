import React from 'react';
import './spinner.css'

const Spinner = () => {
    return (
      <div className="container">
        <div className="child">
          <div className="lds-double-ring">
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    );
  };
export default Spinner;