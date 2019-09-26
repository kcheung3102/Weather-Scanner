import React from 'react';


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
        <span className='weather__value'> {props.temperature}</span>
        </p>
      }

      {
        props.temp_max && <p className='weather__key'>Temperature High:
        <span className='weather__value'> {props.temp_max}</span>
        </p>
      }

      {
        props.temp_min && <p className='weather__key'>Temperature Low:
        <span className='weather__value'> {props.temp_min}</span>
        </p>
      }

      {props.humidity && <p className='weather__key'>Humidity:
        <span className='weather__value'> {props.humidity}</span>
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
