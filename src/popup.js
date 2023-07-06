import React, { useEffect, useState } from 'react';
import './Popup.css';
import cross from'./cross-23.svg'
import axios from 'axios';

const joke_api = 'https://api.chucknorris.io/jokes/random?category=';

const Popup = ({ isOpen , close ,name }) => {
    const [joke ,setjoke] = useState('')
    
    const fetchjoke = () => {
        if (!isOpen) return;
        axios.get(`${joke_api}${name}`)
        .then((res)=>{
            setjoke(res.data.value)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(()=>{
        fetchjoke()
    },[name,isOpen])
    
    if (!isOpen) return null;

    return (
        <div className='popup shadow rounded '>
            <img src={cross} onClick={()=>close()} className='popup-close-button'/> 
            <div className='row justify-content-center align-items-center mx-xl-5'>
            <h1 className='text-white'> {name} </h1>  
            <div className='border p-xl-5'>
                <p className='my-xl-5 text-white fw-bold '>"{joke}"</p>
                <button className='btn btn-primary w-xl-50' onClick={()=>fetchjoke()}>Next joke</button>
            </div>
            
            </div>
            
        </div>
    );
};

export default Popup;