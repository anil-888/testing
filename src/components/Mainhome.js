import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
    return (
        
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.srisailadevasthanam.org/static/media/sd-banner-1.eae349b0.jpg"
            alt="First slide"
          />
         
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.srisailadevasthanam.org/static/media/sd-slider-spcl-1.8a79b6d5.jpg"
            alt="Second slide"
          />
  
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.srisailadevasthanam.org/static/media/sd-banner-2.d8939803.jpg"
            alt="Third slide"
          />
  
          
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.srisailadevasthanam.org/static/media/sd-banner-3.2d2249a6.jpg"
            alt="Third slide"
          />
  
          
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.srisailadevasthanam.org/static/media/sd-banner-4.49a8b4e8.jpg"
            alt="Third slide"
          />
       </Carousel.Item>

       <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.srisailadevasthanam.org/static/media/sd-banner-5.3f25adf9.jpg"
            alt="Third slide"
          />
       </Carousel.Item>
      </Carousel>
    );
  }
  
  export default UncontrolledExample;



