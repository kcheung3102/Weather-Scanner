import React from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeInDown, zoomIn } from 'react-animations';

const FadeInDown =  styled.div`animation: 2s ${keyframes `${fadeInDown}`} `;

const ZoomIn =  styled.div`animation: 2s ${keyframes `${zoomIn}`} `;


const Titles =(props) => {
  return(
    <div>
        <FadeInDown><h1 className="title-container__title">Weather App</h1></FadeInDown>
        <ZoomIn><p className="title-container__subtitle">Whats the weather in your city?</p></ZoomIn>
    </div>

  )

}

export default Titles;
