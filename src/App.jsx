import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { getRandomDimension } from "./helpers/random";
import Location from "./components/Location";
import ResidentList from "./components/ResidentList";

import portal from "/public/bg/portal.png"
import title from "/public/bg/title.png"
import bgHeader from "/public/bg/bg-header.png"
import bgBody from "/public/bg/bg-body.png"
function App() {
  const [location, setlocation] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newLocation = e.target.locationId.value;
    const URL = `https://rickandmortyapi.com/api/location/${newLocation}`;

    console.log(URL)
    axios
      .get(URL)
      .then((res) => setlocation(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    const URL = `https://rickandmortyapi.com/api/location/${getRandomDimension()}`;

    axios
      .get(URL)
      .then((res) => setlocation(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App font-fira-code ">
      <img className="absolute -top-[150px] p-4  animate-spin-slow left-0 right-0   m-auto max-h-[400px] desktop:animate-none desktop:h-[150px] desktop:w-[700px] desktop:top-[20%]" src={portal} alt="" />
        <img className="absolute -top-[150px] p-4  animate-spin-slow left-0 right-0   m-auto max-h-[400px] desktop:animate-none desktop:h-[150px] desktop:w-[700px] desktop:top-[75%]" src={portal} alt="" />
      <div className=" h-[600px] bg-[url('/public/bg/bg-header.png')] desktop:h-screen">
        
        
        <img className="absolute p-3 mt-8 left-[50%] -translate-x-[50%] desktop:left-[15%]"  src={title} alt="" />
        
      
      <form onSubmit={handleSubmit} className=" w-full pt-[340px] flex-col justify-center px-[5%] desktop:pt-[70px] ">
        <div className="border-[#8EFF8B] border-[1px]  flex max-w-[900px]  m-auto desktop:mr-0 desktop:w-[40%]">
          <input
            id="locationId"
            type="number"
            placeholder="Type a location Id..."
            className="outline-none w-[70%] bg-transparent text-white/30 p-3 caret-[#8EFF8B] focus:text-white"
          />
          <button className="w-[30%] border-[#8EFF8B] border-[1px] bg-[#8EFF8B]/50 text-white py-2 hover:bg-[#8EFF8B] ">
            Search <i className="inline bx bx-search"></i>
          </button>
        </div>
        { !location ? <h2 className=" text-[#8EFF8B] text-[20px] font-medium block text-center mt-10  ">Welcome to the crazy universe!</h2> : <Location className="desktop:absolute desktop:top-[40%]"  location={location} />}
        
      </form>
      </div>
<div className="  left-0 right-0 min-h-screen min-w-full bg-[url('/public/bg/bg-body.png')] bg-body bg-center bg-repeat-y pt-24 pb-24 
 desktop:bg-none desktop:absolute  desktop:min-h-0 desktop:min-w-0 desktop:overflow-y-scroll desktop:h-[50vh] desktop:w-[600px] desktop:top-[28%]  desktop:pt-0 desktop:pb-0 desktop:m-auto">
      
      <ResidentList  location={location} />
      </div>
    </div>
  );
}

export default App;
