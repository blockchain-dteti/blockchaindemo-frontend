import { React, useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import TableBody from "@/components/TableBody";

export default function list() {
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    setFilter("Requested");
  }, []);

  const handleClick = (status) => setFilter(status);

  return (
    <div className="flex flex-col bg-bgcolor w-screen h-screen">
      <Navbar />
      <div className="p-32 h-full flex flex-col">
        <div className="flex justify-between text-black">
          <p className="text-4xl font-bold">List Request Delivery Order</p>
          <input className="bg-white w-[24vw] border border-gray-300 drop-shadow-sm px-5 py-1"></input>
        </div>
        <p className="text-black">{filter}</p>
        <div className="w-max flex text-black bg-gray-300/60 rounded-t-xl font-semibold mt-12 ">
          <button
            className={` ${
              filter === "Requested" ? "bg-abu" : "hover:bg-gray-300"
            } px-16 py-2 rounded-t-xl`}
            onClick={() => handleClick("Requested")}
          >
            Requested
          </button>
          <button
            className={` ${
              filter === "Done" ? "bg-abu" : "hover:bg-gray-300"
            } px-16 py-2 rounded-t-xl`}
            onClick={() => handleClick("Done")}
          >
            Done
          </button>
          <button
            className={` ${
              filter === "Expired" ? "bg-abu" : "hover:bg-gray-300"
            } px-16 py-2 rounded-t-xl`}
            onClick={() => handleClick("Expired")}
          >
            Expired
          </button>
        </div>
        <div className="h-full bg-abu flex flex-col w-full p-8">
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
            {data
              .filter((data) => data.status.includes(filter))
              .map((item, index) => (
                <TableBody
                  do_number={item.do_number}
                  shipping_agency={item.shipping_agency}
                  status_text={item.status_text}
                  status={item.status}
                  expired_date={item.expired_date}
                  index={index + 1}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    do_number: "1234567",
    shipping_agency: "blackphanter",
    status: "Requested",
    status_text: "On Progress",
    expired_date: "Not Yet",
  },
  {
    do_number: "7777777",
    shipping_agency: "whitetiger",
    status: "Requested",
    status_text: "On Progress",
    expired_date: "Not Yet",
  },
  {
    do_number: "6666666",
    shipping_agency: "scarletwitch",
    status: "Requested",
    status_text: "On Progress",
    expired_date: "Not Yet",
  },
  {
    do_number: "1010101",
    shipping_agency: "nightwings",
    status: "Requested",
    status_text: "On Progress",
    expired_date: "Not Yet",
  },
  {
    do_number: "021412",
    shipping_agency: "stratatatdduu",
    status: "Requested",
    status_text: "On Progress",
    expired_date: "Not Yet",
  },
  {
    do_number: "5123124",
    shipping_agency: "kAmUnAnYa",
    status: "Requested",
    status_text: "On Progress",
    expired_date: "Not Yet",
  },
  {
    do_number: "9876543",
    shipping_agency: "swansong",
    status: "Done",
    status_text: "Approved",
    expired_date: "28-02-2023",
  },
  {
    do_number: "0000123",
    shipping_agency: "slytherin",
    status: "Done",
    status_text: "Rejected",
    expired_date: "28-02-2023",
  },
  {
    do_number: "999923",
    shipping_agency: "gryffindor",
    status: "Expired",
    status_text: "Rejected",
    expired_date: "28-02-2023",
  },
  {
    do_number: "1231234",
    shipping_agency: "skeledirge",
    status: "Expired",
    status_text: "Approved",
    expired_date: "02-04-2023",
  },
  {
    do_number: "4213112",
    shipping_agency: "something",
    status: "Done",
    status_text: "Approved",
    expired_date: "32-03-2023",
  },
];
