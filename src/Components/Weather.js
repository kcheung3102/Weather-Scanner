import React from 'react';
import styled, { keyframes } from 'styled-components';
import { rollIn } from 'react-animations';




const Weather = props => {
  return(
    <div className="weather__info">
      {
        props.city && props.country && <p className='weather__key'>Location:
        <span className='weather__value'> {props.city},{props.country}</span>
        </p>
      }

      {
        props.temperature && <p className='weather__key'>Temperature:
        <span className='weather__value'> {props.temperature} °F</span>
        </p>
      }

      {
        props.temp_max && <p className='weather__key'>Temperature High:
        <span className='weather__value'> {props.temp_max} °F</span>
        </p>
      }

      {
        props.temp_min && <p className='weather__key'>Temperature Low:
        <span className='weather__value'> {props.temp_min} °F</span>
        </p>
      }

      {
        props.description &&<p className='weather__key'>Conditions:
        <span className='weather__value'> {props.description}</span>
        </p>
      }

    <div className="weather__error">
      {props.error && <p>{props.error}</p>}
    </div>

    </div>
  )
}

export default Weather
