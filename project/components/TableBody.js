import React from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import { HiOutlineTrash } from "react-icons/hi2";

export default function TableBody(props) {
  return (
    <div
      className={`${
        props.index % 2 === 0 ? "bg-gray-200" : "bg-gray-100"
      } grid grid-cols-6 w-full text-black`}
    >
      <p className="px-10 py-4 inline-flex justify-center items-center border-r border-gray-300">
        {props.do_number}
      </p>
      <p className="px-10 py-4 inline-flex justify-center items-center border-r border-gray-300">
        {props.shipping_agency}
      </p>
      <div className="px-10 py-4  inline-flex justify-center items-center border-r border-gray-300">
        <p
          className={`${
            props.status === "On Progress" ? "bg-yellow-500" : ""
          } ${
            props.status === "Accepted" ? "bg-green-500" : "bg-red-500"
          } px-4 py-1 rounded-full`}
        >
          {props.status}
        </p>
      </div>
      <p className="px-10 py-4 inline-flex justify-center items-center border-r border-gray-300">
        {props.expired_date}
      </p>
      <div className="col-span-2 justify-center flex px-5 py-3 space-x-20">
        <button className="p-4 rounded-full text-indigo-800 bg-gray-300 hover:bg-indigo-800 hover:text-white">
          <IoDocumentTextOutline className="scale-150" />
        </button>
        <button className="p-4 rounded-full text-indigo-800 bg-gray-300 hover:bg-indigo-800 hover:text-white">
          <HiOutlineTrash className="scale-150" />
        </button>
      </div>
    </div>
  );
}
