import React from 'react';
import styled, { keyframes } from 'styled-components';
import { rollIn } from 'react-animations';

const Rollin =  styled.div`animation: 2s ${keyframes `${rollIn}`} `;


const Weather = props => {
  return(
    <div className="weather__info">
      {
        props.city && props.country && <Rollin><p className='weather__key'>Location:
        <span className='weather__value'> {props.city},{props.country}</span>
        </p></Rollin>
      }

      {
        props.temperature && <Rollin><p className='weather__key'>Temperature:
        <span className='weather__value'> {props.temperature} °F</span>
        </p></Rollin>
      }

      {
        props.temp_max && <Rollin><p className='weather__key'>Temperature High:
        <span className='weather__value'> {props.temp_max} °F</span>
        </p></Rollin>
      }

      {
        props.temp_min && <Rollin><p className='weather__key'>Temperature Low:
        <span className='weather__value'> {props.temp_min} °F</span>
        </p></Rollin>
      }

      {
        props.description && <Rollin><p className='weather__key'>Conditions:
        <span className='weather__value'> {props.description}</span>
        </p></Rollin>
      }

    <div className="weather__error">
      {props.error && <p>{props.error}</p>}
    </div>

    </div>
  )
}

export default Weather
