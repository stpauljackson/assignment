import { useEffect,useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import Card from './card';
import Popup from './popup';

const categoryAPI = 'https://api.chucknorris.io/jokes/categories'

function App() 
{
  const [Cat, setCat] = useState([])
  const [open, setopen] = useState(false)
  const [name, setname] = useState('')
  
  useEffect(() => {
    axios.get(categoryAPI)
    .then((res)=>{
        setCat(res.data)
        console.log(res)
    })
    .catch((err)=>{
      console.log(err)
    })
  }, [])

  const close = () => {
    setopen(false)
  }
  const handleClick = (name) => {
    console.log(name)
    setname(name)
    setopen(true)
  }
  
  useEffect(()=>console.log('changed') , [name])

  return (
    <div className="App" style={{display:'grid'}}>
        <h1 className=' fs-2 mb-4 fw-bold' style={{color:'green'}}>Chuck Norries</h1>
        <Popup isOpen={open} name={name} close={()=>close()}/>
          <div className="row justify-content-center align-items-center m-auto" style={{width:'65vw'}}>
          {Cat.map((x)=>(<Card key={x} onclick={handleClick} name={x}/>))}
          </div>
    </div>
  );
}

export default App;
