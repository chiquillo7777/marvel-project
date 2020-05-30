import React, { useState } from 'react';
import './styles.css';
import Body from './components/Body'
import { Nav } from './components/Nav'
import Page2 from './components/Page2'

function App() {
  const [location, setLocation] = useState(1);
  return (
    <div className="App">
      <Nav navigation={setLocation} />
      {location === 1 ? <Body /> : <Page2 />}
    </div>
  );
}





export default App;
