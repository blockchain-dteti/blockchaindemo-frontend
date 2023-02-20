import React from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import { HiOutlineTrash } from "react-icons/hi2";

export default function TableBody(props) {
  return (
    <div className="grid grid-cols-6 w-full text-black">
      <p className="px-10 py-4 bg-gray-100 inline-flex justify-center items-center border-r border-gray-300">
        {props.do_number}
      </p>
      <p className="px-10 py-4 bg-gray-100 inline-flex justify-center items-center border-r border-gray-300">
        {props.shipping_agency}
      </p>
      <p className="px-10 py-4 bg-gray-100 inline-flex justify-center items-center border-r border-gray-300">
        {props.status}
      </p>
      <p className="px-10 py-4 bg-gray-100 inline-flex justify-center items-center border-r border-gray-300">
        {props.expired_date}
      </p>
      <div className="col-span-2 bg-gray-100 justify-center flex px-5 py-3 space-x-20">
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
