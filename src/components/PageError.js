import React from 'react';

import './styles/PageError.css';

function PageError(props) {
  return <div className="PageError">❌{props.error.message}😱</div>; //recibe el error que indicamos en sus props en badges
}

export default PageError;
