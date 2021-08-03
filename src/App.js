import React from 'react';
import './App.scss';
import Button from './components/Button';

const App = () => {
  return (
    <div className="App">
      <div className="buttons">
        <Button size="large">BUTTON</Button>
        <Button color="grey" fullWidth>BUTTON</Button>
        <Button size="small" color="pink" outline>
          BUTTON
        </Button>
      </div>
    </div>
  );
};

export default App;
