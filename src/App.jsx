

import './App.css'
import Actor from './Actor';
import Counter from './Counter';

function App() {
  
  const actors = ['Bappa Raj', 'Omar Sunny', 'Salman Shah'];
  
  return (
    <>
      
      <h1>React Core Concepts</h1>

      <Counter></Counter>
      {/* {
        actors.map(actor => <Actor actor={actor}></Actor>)
      } */}
      
    </>
  )
}

export default App
