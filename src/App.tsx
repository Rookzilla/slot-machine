import React from 'react';
import SlotMachine from './components/slotMachine/slotMachine';
import { Plate, ProductionsTagline } from './styles/App.styles';

const App: React.FC = () => {
  return (
    <div className="App" style={{ backgroundColor: '#8EB2C1' }}>
      <Plate id={"background-plate"}>
      <SlotMachine/>
      </Plate>
      <ProductionsTagline id={'productions-tagline'}>andrew brown productions</ProductionsTagline>
    </div>
  );
};

export default App;
