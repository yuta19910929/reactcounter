import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import './App.css';

const App: React.FC = () => {

  const [count, setCount] = useState<number>(0);
  const [value, setValue] = useState<number>(1);

  const countUp = () => {
    setCount((prevCount) => prevCount + value);
    console.log(count);
  }

  const countDown = () => {
    setCount((prevCount) => prevCount - value);
  }

  const countInit = () => {
    setCount((prevCount) => prevCount * 0);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.valueAsNumber);
  };

  return (
    <div className="App">
      <h1>カウンター</h1>
      <p>{count}</p>
      <div className="textBox">
        <TextField
          id="filled-number"
          label="加算・加減値を入力"
          color="primary"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleChange}
        />
      </div>
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
