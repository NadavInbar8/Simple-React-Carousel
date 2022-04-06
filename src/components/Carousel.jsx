/* eslint-disable */
import React, { useEffect, useState } from 'react';
import one from '../assets/pics/1.jpg';
import two from '../assets/pics/2.jpg';
import three from '../assets/pics/3.jpg';
import four from '../assets/pics/4.jpg';
import arrow from '../assets/pics/arrow_w.svg';

const data = [
  { picNum: 1, subtitle: 'hello world', img: one },
  { picNum: 2, subtitle: 'hello world', img: two },
  { picNum: 3, subtitle: 'hello world', img: three },
  { picNum: 4, subtitle: 'hello world', img: four },
];

const Carousel = () => {
  const [currImg, setCurrImg] = useState(0);
  const [intervalId, setIntervalId] = useState(0);
  //   let carouselInterval;
  useEffect(() => {
    startGalleryInterval();
  }, []);

  const startGalleryInterval = () => {
    stopGalleryInterval();
    const carouselInterval = setInterval(() => {
      changeImg(true);
    }, 5000);
    setIntervalId(carouselInterval);
  };

  const stopGalleryInterval = () => {
    clearInterval(intervalId);
    setIntervalId(0);
  };

  const changeImg = (value) => {
    setCurrImg((prevImg) => {
      if (value) {
        return prevImg + 1 < data.length ? prevImg + 1 : 0;
      } else {
        return prevImg - 1 >= 0 ? prevImg - 1 : data.length - 1;
      }
    });
  };

  return (
    <div className='carousel'>
      <div
        className='carousel-inner'
        style={{ backgroundImage: `url(${data[currImg].img})` }}
      >
        <div></div>
        <div className='carousel-arrows flex'>
          <div className='carousel-arrow' onClick={() => changeImg(false)}>
            <img className='left' src={arrow} alt='arrow' />
          </div>
          <div className='carousel-arrow' onClick={() => changeImg(true)}>
            <img src={arrow} alt='arrow' />
          </div>
        </div>
        <div className='carousel-bullets'>
          <ul>
            {data.map((photo, idx) => (
              <li
                key={photo.picNum}
                className='bullet'
                onClick={() => {
                  setCurrImg(idx);
                  startGalleryInterval();
                }}
                style={currImg === idx ? { backgroundColor: 'white' } : {}}
              ></li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <div
          className='button'
          style={{ padding: '4px' }}
          onClick={startGalleryInterval}
        >
          Start
        </div>
        <div
          className='button'
          style={{ padding: '4px' }}
          onClick={stopGalleryInterval}
        >
          Stop
        </div>
      </div>
    </div>
  );
};

export default Carousel;
