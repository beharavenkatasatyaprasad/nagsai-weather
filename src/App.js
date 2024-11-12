import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import WeatherCard from './components/WeatherCard';

function App() {
  const [response, setResponse] = useState(null);

  const handleSearch = async (city) => {
    const url = `http://api.weatherstack.com/current?access_key=d3c1f5b2ebfb059d8a893012d4bb8596&query=${city}`;

    const response = await fetch(url);
    const jsonFormattedResp = await response.json();
    setResponse(jsonFormattedResp);
  };

  return (
    <div className='App'>
      <Navbar handleSearch={handleSearch} />
      <WeatherCard response={response} />
    </div>
  );
}

export default App;
