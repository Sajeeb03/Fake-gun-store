

import { useState } from 'react';
import AllGuns from './components/AllGuns/AllGuns';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [count, setCount] = useState(0)
  const increaseCount = () => setCount(count + 1);
  return (
    <div className="App">
      <Navbar count={count}></Navbar>
      <AllGuns counterIncrease={increaseCount} />
    </div>
  );
}

export default App;
