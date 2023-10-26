import React from 'react'
import { useQuery } from "react-query";
import ShowP from "./ShowP";

  


const People = () => {

    const fetchPlanets = async () => {
        const res = await fetch("http://swapi.dev/api/people/");
        return res.json();
      };
    
      const { data, status } = useQuery("people", fetchPlanets);
    
  return (
    <>
    <div className="flex flex-col items-center h-full  w-full gap-4 bg-zinc-900">
      <h1 className="text-4xl font-bold text-white py-10">People</h1>
      {status === "error" && (
        <p className="text-lg text-yellow-400">Error fetching data</p>
      )}
      {status === "loading" && (
        <p className="text-lg text-yellow-400">Fetching data...</p>
      )}
      {status === "success" && (
        <div className="w-[80%]">
          {data.results.map((people) => (
            <ShowP key={people.name} people={people} />
          ))}
        </div>
      )}
    </div>
  </>
  )
}

export default People



/*import React from "react";
import { useQuery } from "react-query";
import Planet from "./Planet";
function App() {
  const fetchPlanets = async () => {
    const res = await fetch("http://swapi.dev/api/planets/");
    return res.json();
  };

  const { data, status } = useQuery("planets", fetchPlanets);

  return (
    
  );
}

export default App;

 */