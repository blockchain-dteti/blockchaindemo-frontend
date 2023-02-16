import React from "react";
import Image from "next/image";
import icon_create from "../../assets/create.svg";
import icon_list from "../../assets/list.svg";
import icon_time from "../../assets/time.svg";

export default function dashboard() {
  return (
    <div className="w-screen h-screen bg-[#EBEFF2] p-36 pt-16">
      <p className="text-[52px] text-[#293165] font-bold mb-28">Shipping Line Dashboard</p>
      <div className="w-full flex items-center justify-center space-x-24 px-48">
        <div className="h-[550px] w-full bg-white items-center flex flex-col p-16 rounded-xl border border-gray-400 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-[1.005] hover:shadow-xl hover:shadow-slate-200 hover:bg-sky-50 duration-300 mb-5">
            <div className="h-[105px] items-center flex justify-center mb-12 py-10">
                <Image className="scale-125" src={icon_list} alt="image"></Image>
            </div>
            <p className="text-[22px] text-black font-bold mb-12">List Request Delivery Order</p>
            <div className="text-black text-[19px]">
                <p className="mb-3">1. See all request list to know delivery order process (requested, done, and expired)</p>
                <p>2. Select Search to view the applications to be analyzed and verified</p>
            </div>
        </div>
        <div className="h-[550px] w-full bg-white items-center flex flex-col p-16 rounded-xl border border-gray-400 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-[1.005] hover:shadow-xl hover:shadow-slate-200 hover:bg-sky-50 duration-300 mb-5">
            <div className="h-[105px] items-center flex mb-12 py-10">
                <Image className="scale-125" src={icon_time} alt="image"></Image>
            </div>
            <p className="text-[22px] text-black font-bold mb-12">Extend Request Delivery Order</p>
            <div className="text-black text-[19px]">
                <p className="mb-3">1. Check the request for an extension of the Delivery Order validity period via the extend request menu</p>
                <p className="mb-3">2. Select an extension via the extend button</p>
                <p>3. You can see the summary form to view the request for an extension of the delivery order validity period</p>
            </div>
        </div>
      </div>
    </div>
  );
}
