import logo from './logo.svg';
import './App.css';
import Display from './components/display';
import Button from './components/buttons';

import {useState} from 'react'

function App() {

  const [counter, setCount] = useState(0);
  const [name, setName] = useState("Martin");

  const changeName = ()=>{
    setName("Bophelo")
  }

  const changeNumber= ()=>{
    setCount(100)
  }

  const increment= ()=>{
    let sum = counter + 1;
    setCount(sum);
  }

  const decrement= ()=>{

    if(counter==0){

      setCount(0)

    }else{

    let sum = counter - 1;
    setCount(sum); 
  }
}



  return (
    <div className="App">

      <h1>{name}</h1>
      <h1>{counter}</h1>
     
     <Display counter={counter}/>

     <Button increment={increment} decrement={decrement}/>

     <button onClick={changeNumber}>Set number</button>

     <button onClick={changeName}>Set name</button>
    </div>
  );
}

export default App;
