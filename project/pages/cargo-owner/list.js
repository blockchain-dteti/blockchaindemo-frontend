import { React, useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import TableBody from "@/components/TableBody";
import moment from "moment";
import { toast } from "react-toastify";

export default function list() {
  const [filter, setFilter] = useState("Requested");
  const [data, setData] = useState([]);
  const handleClick = (status) => setFilter(status);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          "http://localhost:5000/api/do?includes=ShippingAgency",
          {
            method: "GET",
          }
        );

        const data = (await res.json()).map((data) => ({
          ...data,
          category:
            data.status === "ON PROCESS"
              ? "Requested"
              : data.status === "APPROVED"
              ? "Done"
              : moment(data.doExpiredDate).isAfter(moment())
              ? "Expired"
              : undefined,
          doExpiredDate: data.doExpiredDate
            ? moment(data.doExpiredDate).format("DD-MM-YYYY")
            : undefined,
          shippingAgency: data.ShippingAgency.name,
          ShippingAgency: undefined,
        }));

        setData(data);
      } catch (error) {
        console.error(error);

        toast(error, {
          hideProgressBar: true,
          autoClose: 2000,
          type: "error",
        });
      }
    })();
  }, []);

  return (
    <div className="flex flex-col bg-bgcolor w-screen min-h-screen">
      <Navbar />
      <div className="p-32 h-full flex flex-col">
        <div className="flex justify-between text-black">
          <p className="text-4xl font-bold">List Request Delivery Order</p>
          <input className="bg-white w-[24vw] border border-gray-300 drop-shadow-sm px-5 py-1"></input>
        </div>
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
          <div className="font-semibold grid grid-cols-6 items-center bg-indigo-900">
            <p className="px-10 py-2 text-center items-center">DO Number</p>
            <p className="px-10 py-2 text-center items-center">
              Shipping Agency
            </p>
            <p className="px-10 py-2 text-center items-center">Status</p>
            <p className="px-10 py-2 text-center items-center">Expired Date</p>
            <p className="px-10 py-2 text-center col-span-2 items-center">
              Action
            </p>
          </div>
          <div>
            {data
              .filter((data) => data.category.includes(filter))
              .map((item, index) => (
                <TableBody
                  id={item.id}
                  key={item.doNumber}
                  doNumber={item.doNumber}
                  shippingAgency={item.shippingAgency}
                  status={item.status}
                  category={item.category}
                  doExpiredDate={item.doExpiredDate}
                  index={index + 1}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
