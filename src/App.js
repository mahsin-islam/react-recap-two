import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [nayoks, setNayoks] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setNayoks(data))
  },[])
  // const nayoks = ['Jasim', 'Sakib Khan', 'Bappa Raj', 'Omar Sani', 'Alomgir' ];
  // const nayoks = [{name: 'Jasim', age: 56 },{name: 'Sakib Khan', age: 45 },{name: 'Omar Sani', age: 30 }];
  return (
    <div className="App">
      <MovieCounter></MovieCounter>
      {/* <MovieCounter></MovieCounter> */}
      {
        nayoks.map(nayok => <Nayok name={nayok.name} age={nayok.age} key={nayok.id}></Nayok>)
      }
      {/* <Nayok name={nayoks[1]} age="56"></Nayok>
      <Nayok name="Sakib Khan"></Nayok>
      <Nayok name="Bappa Raj"></Nayok>
      <Nayok></Nayok> */}
      <header className="App-header">

      </header>
    </div>
  );
}

function MovieCounter(){
  const [count, setCount] = useState(0);

  const handleClick = () => setCount(count + 1);
  return (
    <div>
      <button onClick={handleClick}>Add Movie</button>
      <h5>Number Of Movies: {count}</h5>
      <MovieDisplay movies={count}></MovieDisplay>
    </div>
  )
}

function MovieDisplay(props){
  return <h4>Movies I have acted: {props.movies}</h4>
}
function Nayok(props) {
  console.log(props)
  const nayokStyle = {
    border: '2px solid purple',
    margin: '20px'
  }
  return (
    <div style={nayokStyle}>
      <h1>AMi Nayok-{props.name}</h1>
      <h3>I have done {props.age || 30} movies</h3>
    </div>
  )
}
export default App;
