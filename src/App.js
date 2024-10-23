import { useState } from 'react';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [response, setResponse] = useState(null);

  const handleSearch = async () => {
    const url = `http://api.weatherstack.com/current?access_key=d3c1f5b2ebfb059d8a893012d4bb8596&query=${city}`;

    const response = await fetch(url);
    console.log(response);
    const jsonFormattedResp = await response.json();
    setResponse(jsonFormattedResp);
  };
  return (
    <div className='App'>
      <input onChange={(e) => setCity(e.currentTarget.value)} type='text' />
      <button onClick={handleSearch}>Search</button>
      <div className=''>{JSON.stringify(response)}</div>
    </div>
  );
}

export default App;
