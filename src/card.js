import React from 'react'

export default function Card({name,onclick}) {

  return (
    <div className='col-xl-3 col-sm-3 my-xl-2' style={{cursor:'pointer'}} onClick={()=>onclick(name)}>
        <div className='card bg-white px-xl-4 py-xl-5'>
        <h1 className='fs-xl-6' style={{color:'darkblue'}}>{name}</h1>
        <p className='d-none d-md-block' style={{color:'purple'}}>Unlimited Jokes on {name}</p>
        </div>
    </div>
  )
}
