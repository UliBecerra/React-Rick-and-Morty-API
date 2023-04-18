import axios from "axios";
import React, { useEffect, useState } from "react";

const residentStatus = {
  Alive: 'bg-green-500',
  Dead: 'bg-red-500',
  unknown: 'bg-gray-500'
}

function ResidentCard({ resident }) {
  const [residentInfo, setResidentInfo] = useState();


  useEffect(() => {
    axios
      .get(resident)
      .then((res) => setResidentInfo(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <article className="border  border-[#8EFF8B] text-white desktop:flex desktop:w-[100%] desktop:m-auto desktop:text-[#0E3D0D] desktop:bg-[#ffffff]/80 " >
      <div className="relative ">
        <img className="w-full h-full" src={residentInfo?.image} alt="" />
        <div className="absolute bottom-4  left-1/2 -translate-x-1/2 bg-[#020A02]/60  p-1 px-2 flex gap-2 items-center rounded-sm ">
          <div className={`w-3 h-3 rounded-full ${residentStatus[residentInfo?.status]}`} ></div>
         <span>{ residentInfo?.status}</span>
        </div>
      </div>
      <section className="w-full max-h-full flex-col justify-center  items-center  p-5">
        
        <h3 className="block text-[32px] font-[700] pt-3 desktop:text-center desktop:border-b-2 desktop:border-[#084851]  ">{residentInfo?.name}</h3>
       
   
        <ul className="  grid gap-1 w-[100%] pt-3  desktop:justify-center " >
          <li className=" flex gap-1 items-center">
            <span className="text-[16px] font-light text-[#938686] w-[100px] desktop:text-[#2CB129]" >Spacies </span>
            <span className="text-[20px] font-semibold ">{residentInfo?.species}</span>
          </li>
          <li className="flex gap-1 items-center">
            <span className="text-[16px] font-medium text-[#938686] min-w-[100px] desktop:text-[#2CB129]"  >Origin </span>
            <span className="text-[20px] font-semibold  ">{residentInfo?.origin.name}</span>
          </li>
          <li className="flex gap-1  items-center ">
            <span className="text-[16px] font-light text-[#938686] w-[100px] desktop:text-[#2CB129] " >Times appear </span>
            <span className="text-[20px] font-semibold  ">{residentInfo?.episode.length}</span>
          </li>
        </ul>
      </section>
    </article>
  )
}

export default ResidentCard;
