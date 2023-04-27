import React from 'react';
import {Link} from 'react-router-dom';

const Begin = () => {
  return (
    <div>
        { <Link to={"/home"}>Go to Home Page!</Link>}
    </div>
  )
}

export default Begin