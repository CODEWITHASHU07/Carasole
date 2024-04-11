import React from 'react';

function Card({ Img, title, count }) {
    console.log(count)
  return (
    <>
      <div id='Card' style={{ transform: `translateX(${-count * 320}px)` }}>
        <div id='Img'><img src={Img} alt={title} /></div>
        <div id='content'>
          <p>Spanish</p>
        </div>
      </div>
    </>
  );
}

export default Card;
