import React, { useEffect, useState } from 'react'
import ResidentCard from './ResidentCard'

function ResidentList({location}) {
  const [currentPage, setCurrentPage] = useState(1);
  const RESIDENTS_PER_PAGE = 20
  const quntityPages = Math.ceil(location?.residents.length / RESIDENTS_PER_PAGE)

  const arrayPages = []

  for (let i = 1; i <= quntityPages; i++) {
    arrayPages.push(i)
    
  }
  const startCut = currentPage * RESIDENTS_PER_PAGE - RESIDENTS_PER_PAGE
  const endCut = currentPage * RESIDENTS_PER_PAGE

  const residents = location?.residents
  useEffect(()=>{
    setCurrentPage(1)
  },[location])
  return (
    <>
    <section className=" left-0 top-0 bottom-0 right-0 p-4 grid  gap-x-6 gap-y-10  auto-rows-auto grid-cols-[repeat(auto-fill,_minmax(240px,_1fr))]  max-w-[1200px]   m-auto desktop:grid-cols-1 ">
{
        /* residents?.map((resident) => (
          <ResidentCard  key={resident} resident={resident} />
        ) ) */
        residents?.slice(startCut, endCut).map((resident) => (
          <ResidentCard  className=""  key={resident} resident={resident} />
        ) )

}    </section>
<ul className='flex gap-4 justify-center pt-10 pb-4'>
  {
    arrayPages.map(page => <li key={page} onClick={() => (setCurrentPage(page))} className={`p-3 cursor-pointer text-white ${page === currentPage && "bg-green-700  font-bold"}`}>{page}</li>)
  }
</ul>
    </>
  )
}

export default ResidentList
