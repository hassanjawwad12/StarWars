import React from "react";
import { useQuery } from "react-query";
import Planet from "./Planet";
function App() {
  const fetchPlanets = async () => {
    const res = await fetch("http://swapi.dev/api/planets/");
    return res.json();
  };

  const { data, status } = useQuery("planets", fetchPlanets);

  return (
    <>
      <div className="flex flex-col items-center  w-full min-h-screen gap-4 bg-zinc-900">
        <h1 className="text-4xl font-bold text-white py-10">Planets</h1>
        {status === "error" && (
          <p className="text-lg text-yellow-400">Error fetching data</p>
        )}
        {status === "loading" && (
          <p className="text-lg text-yellow-400">Fetching data...</p>
        )}
        {status === "success" && (
          <div className="w-[80%]">
            {data.results.map((planet) => (
              <Planet key={planet.name} planet={planet} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default App;

/*

import React, { useState } from 'react';
import { usePaginatedQuery } from 'react-query';
import Planet from './Planet';

const fetchPlanets = async (key, page) => {
  const res = await fetch(`http://swapi.dev/api/planets/?page=${page}`);
  return res.json();
}

const Planets = () => {
  const [ page, setPage ] = useState(1);
  const { 
    resolvedData, 
    latestData, 
    status 
  } = usePaginatedQuery(['planets', page], fetchPlanets);

  return (
    <div>
      <h2>Planets</h2>

      {status === 'loading' && (
        <div>Loading data</div>
      )}

      {status === 'error' && (
        <div>Error fetching data</div>
      )}

      {status === 'success' && (
        <>
          <button 
            onClick={() => setPage(old => Math.max(old - 1, 1))} 
            disabled={page === 1}>
            Previous Page
          </button>
          <span>{ page }</span>
          <button 
            onClick={() => setPage(old => (!latestData || !latestData.next ? old : old + 1))} 
            disabled={!latestData || !latestData.next}>
            Next page
          </button>
          <div>
            { resolvedData.results.map(planet => <Planet key={planet.name} planet={planet} /> ) }
          </div>
        </>
      )} 
    </div>
  );
}
 
 */
