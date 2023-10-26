import React from "react";
import { useState } from "react";
import Planets from "./Planets";
import People from "./People";

const Starwars = () => {
  let [page, setPage] = useState("none");

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-zinc-900 gap-4">
      <h1 className="md:text-5xl text-xl font-bold text-yellow-400 py-6">
        Welcome to Star Wars
      </h1>
      <p className="text-white text-lg font-bold">Select what do you want to view:</p>


    <div className="md:w-[20%] w-full flex justify-between px-4 py-4">
      <button
        className=" w-[6rem] h-[6rem] bg-blue-500 text-white rounded-lg "
        onClick={() => setPage("planets")}
      >
        Planets
      </button>
      <button
        className=" w-[6rem] h-[6rem] bg-blue-500 text-white rounded-lg"
        onClick={() => setPage("chars")}
      >
        People
      </button>
      </div>
      {page === "planets" ? <Planets /> : null}
      {page === "chars" ? <People /> : null}

  
    </div>
  );
};

export default Starwars;
