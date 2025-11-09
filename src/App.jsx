

import './App.css'
import Actor from './Actor';
import Counter from './Counter';
import { Suspense } from 'react';
import Users from './Users';
import Friends from './Friends';
import Players from './Players';

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
                  .then(res => res.json())


    const fetchFriends = async () =>{
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      return res.json();
    }              
function App() {
  
  const actors = ['Bappa Raj', 'Omar Sunny', 'Salman Shah'];

  const friendsPromise = fetchFriends();
  
  return (
    <>
      
      <h1>React Core Concepts</h1>

      <Players></Players>

      <Suspense fallback={<h3>Loading ...</h3>}>
          <Users fetchUsers={fetchUsers}></Users>
      </Suspense>

      <Suspense fallback={<h3>Friends are coming...</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>

      {/* <Counter></Counter> */}
      {/* {
        actors.map(actor => <Actor actor={actor}></Actor>)
      } */}
      
    </>
  )
}

export default App
