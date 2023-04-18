import React, { useEffect, useState } from 'react'
import Location from './Location'

import {allUniverse}  from "../helpers/allUnivers";
import axios from 'axios';


function Search({location, handleSumbit, setlocation}) {
  const [locations, setlocations] = useState([]);
  const [value, setValue] = useState('');

  const handleValue = (event) =>{
    event.preventDefault()
    setValue(event.target.value)
    console.log(value)
    
  }

  const searchlocation = (id) =>{
    const URL = `https://rickandmortyapi.com/api/location/${id}`;

    axios
      .get(URL)
      .then((res) => setlocation(res.data))
      .catch((err) => console.log(err));
  }

  useEffect(() =>{
    const URL = `https://rickandmortyapi.com/api/location/${allUniverse()}`
    
    axios.get(URL).then((res) => setlocations(res.data)).catch((err) => console.log(err))
  },[location])

  return (
    <>
    <form onSubmit={handleSumbit} className=" w-full pt-[340px] flex-col justify-center px-[5%] desktop:pt-[70px] ">
        <div className="border-[#8EFF8B] border-[1px]  flex max-w-[900px]  m-auto desktop:mr-0 desktop:w-[40%]" >
          <input
            id="locationId"
            type="text"
            placeholder="Type a location Id..."
            value={value}
            onChange={handleValue}
            className="outline-none w-[70%] bg-transparent text-white/30 p-3 caret-[#8EFF8B] focus:text-white"
          />
          
          <button className="w-[30%] border-[#8EFF8B] border-[1px] bg-[#8EFF8B]/50 text-white py-2 hover:bg-[#8EFF8B] ">
            Search <i className="inline bx bx-search"></i>
          </button>
          
        </div>
        <ul className='m-auto border-2 border-[#8EFF8B] rounded-b-md desktop:mr-0 desktop:w-[40%] desktop:overflow-y-scroll desktop:max-h-[10vh]'>
      
      {
         locations?.filter((item) => {
          const searchTerm = value.toLowerCase()
          const fullTerm = item.name.toLowerCase()

          return searchTerm && fullTerm.startsWith(searchTerm) && !(fullTerm === searchTerm)
        }).map((name) => <li key={name.name} onClick={() =>{
          searchlocation(name.id)
          setValue(name.name)
        }
        } className='text-white cursor-pointer hover:text-[#8EFF8B]' >{name.name}</li>).splice(0,10)
      }
  </ul>
        { !location ? <h2 className=" text-[#8EFF8B] text-[20px] font-medium block text-center mt-10  ">Welcome to the crazy universe!</h2> : <Location className=""  location={location} />}
        
      </form>
     
      
      </>
  )
}

export default Search
