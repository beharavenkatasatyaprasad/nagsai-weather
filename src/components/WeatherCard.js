import React from 'react';

export default function WeatherCard({ response }) {
  if (!response)
    return (
      <div className='text-center mt-3'>
        <p>Please enter a city...</p>
      </div>
    );
  return (
    <div className='d-flex justify-content-center mt-5 w-100'>
      <div className='card text-center' style={{ width: '18rem' }}>
        <div className='card-body'>
          <h5 className='card-title d-flex justify-content-center align-items-center'>
            {response?.request?.query}{' '}
            <img
              src={`${response?.current?.weather_icons && response?.current?.weather_icons[0]}`}
              alt='Weather icon'
              width='30px'
              className='mx-2'
            />
          </h5>
          <p className='card-text mb-0'>Temperature: {response?.current?.temperature}°C</p>
          <p className='card-text mb-0'>Feels Like: {response?.current?.feelslike}°C</p>
          <p className='card-text mb-0'>Weather: {response?.current?.weather_descriptions[0]}</p>
          <p className='card-text mb-0'>Wind Speed: {response?.current?.wind_speed} km/h</p>
          <p className='card-text mb-0'>Wind Direction: {response?.current?.wind_dir}</p>
          <p className='card-text mb-0'>Pressure: {response?.current?.pressure} mb</p>
          <p className='card-text mb-0'>Precipitation: {response?.current?.precip} mm</p>
          <p className='card-text mb-0'>Humidity: {response?.current?.humidity}%</p>
          <p className='card-text mb-0'>Cloud Cover: {response?.current?.cloudcover}%</p>
          <p className='card-text mb-0'>Visibility: {response?.current?.visibility} km</p>
          <p className='card-text mb-0'>UV Index: {response?.current?.uv_index}</p>
          <p className='card-text mb-0'>Is Day: {response?.current?.is_day === 'yes' ? 'Yes' : 'No'}</p>
          <p className='card-text mb-0'>Local Time: {response?.location?.localtime}</p>
        </div>
      </div>
    </div>
  );
}
