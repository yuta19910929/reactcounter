import React, { useState } from 'react';
import { Button } from '@mui/material';
import './App.css';

const App: React.VFC = () => {
  const [count, setCount] = useState(0);

  const countUp = () =>{
    setCount(count + 1);
  }

  const countDown = () =>{
    setCount(count - 1);
  }

  const countInit = () =>{
    setCount(count * 0);
  }

  return (
    <div className="App">
      <h1>カウンター</h1>
      <p>{count}</p>
      <Button
        sx={{ mx:1 }}
        variant="contained"
        size="large"
        onClick={countUp}>
        プラス
      </Button>
      <Button
        sx={{ mx:1 }}
        variant="contained"
        size="large"
        onClick={countDown}>
        マイナス
      </Button>
      <Button
        sx={{ mx:1 }}
        variant="outlined"
        color="error"
        size="large"
        onClick={countInit}>
        0に戻す
      </Button>
    </div>
  );
}

export default App;
