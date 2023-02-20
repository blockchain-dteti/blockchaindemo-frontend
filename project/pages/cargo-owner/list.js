import React from "react";
import Navbar from "@/components/Navbar";
import TableBody from "@/components/TableBody";

const data = [
  {
    do_number: "1234567",
    shipping_agency: "blackphanter",
    status: "pending",
    expired_date: "28-02-2023",
  },
];

export default function list() {
  return (
    <div className="flex flex-col bg-bgcolor w-screen h-screen">
      <Navbar />
      <div className="p-32">
        <div className="flex justify-between text-black">
          <p className="text-4xl font-bold">List Request Delivery Order</p>
          <input className="bg-white w-[24vw] border border-gray-300 drop-shadow-sm px-5 py-1"></input>
        </div>
        <div className="mt-12">
          <div className="w-max flex text-black bg-gray-400/80 rounded-t-xl font-semibold">
            <button className="px-16 py-2 rounded-t-xl hover:bg-blue-300">
              Requested
            </button>
            <button className="px-16 py-2 rounded-t-xl hover:bg-blue-300">
              Done
            </button>
            <button className="px-16 py-2 rounded-t-xl hover:bg-blue-300">
              Expired
            </button>
          </div>
          <div className="flex flex-col w-full px-10 py-5 bg-gray-400/80">
            <div className="font-semibold grid grid-cols-6">
              <p className="px-10 py-2 bg-indigo-900 text-center items-center">
                DO Number
              </p>
              <p className="px-10 py-2 bg-indigo-900 text-center items-center">
                Shipping Agency
              </p>
              <p className="px-10 py-2 bg-indigo-900 text-center items-center">
                Status
              </p>
              <p className="px-10 py-2 bg-indigo-900 text-center items-center">
                Expired Date
              </p>
              <p className="px-10 py-2 bg-indigo-900 text-center col-span-2 items-center">
                Action
              </p>
            </div>
            <div>
              {data.map((item) => (
                <TableBody
                  do_number={item.do_number}
                  shipping_agency={item.shipping_agency}
                  status={item.status}
                  expired_date={item.expired_date}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
