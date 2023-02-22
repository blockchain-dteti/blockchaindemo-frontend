import React from "react";
import Image from "next/image";
import icon_create from "../../assets/create.svg";
import icon_list from "../../assets/list.svg";
import icon_time from "../../assets/time.svg";
import Navbar from "@/components/Navbar";

export default function dashboard() {
  return (
    <div><Navbar/>
    <div className="w-screen bg-[#EBEFF2] p-36 pt-24">
      <p className="text-[52px] text-[#293165] font-bold mb-28">Cargo Owner Dashboard</p>
      <div className="flex justify-center space-x-24">
        <div className="w-full bg-white items-center flex flex-col p-16 rounded-xl border border-gray-400 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-[1.005] hover:shadow-xl hover:shadow-slate-200 hover:bg-sky-50 duration-300 mb-5">
            <div className="h-[105px] items-center flex mb-12 py-10">
                <Image className="py-10 scale-125" src={icon_create} alt="image"></Image>
            </div>
            <p className="text-[22px] text-black font-bold mb-12">Create Request Delivery Order</p>
            <div className="text-black text-[19px]">
                <p className="mb-3">1. Create Request Delivery Order through create request menu</p>
                <p className="mb-3">2. Fill all section based on container and other important data</p>
                <p>3. Click send button to submit delivery order request</p>
            </div>
        </div>
        <div className="w-full bg-white items-center flex flex-col p-16 rounded-xl border border-gray-400 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-[1.005] hover:shadow-xl hover:shadow-slate-200 hover:bg-sky-50 duration-300 mb-5">
            <div className="h-[105px] items-center flex justify-center mb-12 py-10">
                <Image className="scale-125" src={icon_list} alt="image"></Image>
            </div>
            <p className="text-[22px] text-black font-bold mb-12">List Request Delivery Order</p>
            <div className="text-black text-[19px]">
                <p className="mb-3">1. See all request list to know delivery order process (requested, done, and expired)</p>
                <p>2. Select filter based on request that want to check or through searching</p>
            </div>
        </div>
        <div className="w-full bg-white items-center flex flex-col p-16 rounded-xl border border-gray-400 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-[1.005] hover:shadow-xl hover:shadow-slate-200 hover:bg-sky-50 duration-300 mb-5">
            <div className="h-[105px] items-center flex mb-12 py-10">
                <Image className="scale-125" src={icon_time} alt="image"></Image>
            </div>
            <p className="text-[22px] text-black font-bold mb-12">Extend Request Delivery Order</p>
            <div className="text-black text-[19px]">
                <p className="mb-3">1. See expired request trough request list menu with select expired filter</p>
                <p className="mb-3">2. Choose extend through extended button</p>
                <p>3. There is summary form to extend delivery order</p>
            </div>
        </div>
      </div>
    </div>
    </div>
  );
}
