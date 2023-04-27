import React from 'react';
import {useParams} from 'react-router-dom';

const Params = (props) => {

    const {word,color,backColor} = useParams();
  return (
    <div>
        {
            isNaN(word)?
            <p style={{color:color, backgroundColor:backColor}}>This is a word:{word}</p>:
            <p style={{color:color, backgroundColor:backColor}}>This is a number:{word}</p>
        }   
    </div>
  )
}

export default Params