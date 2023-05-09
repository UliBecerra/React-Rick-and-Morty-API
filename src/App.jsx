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
import Search from "./components/Search";
function App() {
  const [location, setlocation] = useState();

  const [currentPage, setCurrentPage] = useState(1);

  const RESIDENTS_PER_PAGE = 20
  const quntityPages = Math.ceil(location?.residents.length / RESIDENTS_PER_PAGE)

  const arrayPages = []

  for (let i = 1; i <= quntityPages; i++) {
    arrayPages.push(i)
    
  }
  const startCut = currentPage * RESIDENTS_PER_PAGE - RESIDENTS_PER_PAGE
  const endCut = currentPage * RESIDENTS_PER_PAGE
 
  

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
     console.log(URL)
    axios
      .get(URL)
      .then((res) => setlocation(res.data))
      .catch((err) => console.log(err));

      
  }, []);

  return (
    <div className="App font-fira-code relative overflow-hidden  ">
      <img className="absolute -top-[150px] p-4  animate-spin-slow left-0 right-0   m-auto max-h-[400px] desktop:hidden " src={portal} alt="" />
      {(location?.residents.length > 0) ? (
        <>
        <img className="absolute -top-[150px] p-4  animate-spin-slow left-0 right-0   m-auto max-h-[400px] desktop:animate-pulse desktop:h-[150px] desktop:w-[700px] desktop:top-[20%] " src={portal} alt="" />
        <img className="absolute -top-[150px] p-4  animate-spin-slow left-0 right-0   m-auto max-h-[400px] desktop:animate-pulse desktop:h-[150px] desktop:w-[700px] desktop:top-[75%]" src={portal} alt="" />
        </>
      ) : <img className="hidden desktop:inline-block absolute  p-4  animate-spin-slow top-0 bottom-0 left-0 right-0   m-auto h-[65vh] " src={portal} alt="" />

      }
      
      <div className="  bg-[url('/public/bg/bg-header.png')] max-h-screen desktop:h-screen">
        
        
        <img className="absolute p-3 mt-8 left-[50%] -translate-x-[50%] desktop:left-[15%]"  src={title} alt="" />
        
      
      <Search location={location} handleSumbit={handleSubmit} setlocation={setlocation}/>
      </div>
      
         <div className={`left-0 right-0 min-h-screen min-w-full  bg-[url('/public/bg/bg-body.png')] bg-bodyP  bg-repeat-y pt-24 desktop:pb-48 -translate-y-[1px]
        desktop:bg-none desktop:absolute ${location?.residents <= 0 && 'desktop:hidden'}  desktop:min-h-0 desktop:min-w-0 desktop:overflow-y-scroll desktop:h-[55vh] desktop:w-[600px] desktop:top-[28%]  desktop:pt-0 desktop:pb-0 desktop:m-auto`}>
             
             <ResidentList  location={location} startCut={startCut} endCut={endCut} setCurrentPage={setCurrentPage} arrayPages={arrayPages} currentPage={currentPage}/>
             </div>
      
             <div className="hidden desktop:inline-block absolute left-0 right-0 top-[90vh]  ">
             <ul className='flex justify-center gap-6 pt-10 pb-4'>
{
    arrayPages.map(page => <li key={page} onClick={() => (setCurrentPage(page))} className={` p-3 cursor-pointer text-white ${page === currentPage && "bg-green-700  font-bold"}`}>{page}</li>)
  }
</ul>
             </div>
    </div>
  );
}

export default App;
