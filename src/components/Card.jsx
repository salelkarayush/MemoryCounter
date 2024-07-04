import {useState} from 'react';

export default function Card({img, name, handleOnClick}){
    const [isClicked, setIsClicked] = useState(false);
    return (
        <button
          onClick={() => handleOnClick(isClicked, setIsClicked)}
          className='Card'>
          <img
            className='cardimg'
            src={img}
            alt='pokemon'
          />
    
          <p className='cardname'>{name}</p>
        </button>
      );

}