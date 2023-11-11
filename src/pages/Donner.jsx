import React from "react";
import MoneyCard from "../Components/MoneyCard";

const Donner = () => {
  return (
    <div className=" w-full min-h-screen px-[10px]  py-6">
      <p className="text-xl font-semibold tracking-wide">Donation</p>
      <div className="mt-5 px-10  w-full h-[50px] bg-[#132043] rounded-t-lg grid grid-cols-5 py-2 text-white">
        <p>Name</p>
        <p>Email</p>
        <p>Payment Date</p>
        <p>payment mode</p>
        <p>paymant amount</p>
      </div>
      <div>
        {[1, 1, 1, 1, 1, 1, 1, 1].map((item) => (
          <MoneyCard />
        ))}
      </div>
    </div>
  );
};

export default Donner;
