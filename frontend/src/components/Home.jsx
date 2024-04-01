import React from "react";
import AiBot from "./AIBot";
import UserInput from "./UserInput";

const Home = () => {
  return (
    <div className="colored1 rounded-3xl shadow-2xl w-auto h-full pb-20 maskUsage p-5 ">
      <h1 className="mx-auto mt-5 text-white font-bold text-2xl">
        Welcome to your lab assistant!
      </h1>
      <UserInput />
      <AiBot />
    </div>
  );
};

export default Home;
