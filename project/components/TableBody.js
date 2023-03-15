import React from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import { HiOutlineTrash } from "react-icons/hi2";
import { MdOutlineMoreTime } from "react-icons/md";
import "react-tooltip/dist/react-tooltip.css";
import uppercaseFirstCharOfEachWord from "@/helper/uppercaseEachFirstChar";
import Link from "next/link";

export default function TableBody(props) {
  return (
    <div
      className={`${
        props.index % 2 === 0 ? "bg-gray-200" : "bg-gray-100"
      } grid grid-cols-6 w-full text-black`}
    >
      <p className="px-10 py-4 inline-flex justify-center items-center border-r border-gray-300">
        {props.doNumber}
      </p>
      <p className="px-10 py-4 inline-flex justify-center items-center border-r border-gray-300">
        {props.shippingAgency}
      </p>
      <div className="px-10 py-4  inline-flex justify-center items-center border-r border-gray-300">
        <p
          className={`${
            props.status.toLowerCase() === "on process" ? "bg-yellow-500" : ""
          } ${
            props.status.toLowerCase() === "approved"
              ? "bg-green-500/80"
              : "bg-red-500/80"
          } px-6 py-1 rounded-full text-center`}
        >
          {uppercaseFirstCharOfEachWord(props.status)}
        </p>
      </div>
      <div className="px-10 py-4 inline-flex justify-center items-center border-r border-gray-300">
        <p
          className={`${
            !props.doExpiredDate
              ? "bg-indigo-400 px-6 py-1 rounded-full text-center"
              : ""
          }`}
        >
          {props.doExpiredDate ?? "Not Yet"}
        </p>
      </div>
      <div className="col-span-2 justify-center items-center flex px-5 py-3">
        <Link
          href={`/cargo-owner/detail?id=${props.id}`}
          title="Detail"
          className="h-fit p-4 rounded-full text-indigo-800 bg-gray-300 hover:bg-indigo-800 hover:text-white mx-8"
        >
          <IoDocumentTextOutline className="scale-150" />
        </Link>
        <button
          title="Extend"
          className={`${
            props.status === "Expired" ? "" : "hidden"
          } h-fit p-4 rounded-full text-indigo-800 bg-gray-300 hover:bg-indigo-800 hover:text-white mx-8`}
        >
          <MdOutlineMoreTime className="scale-150" />
        </button>
        <button
          title="Delete"
          className="h-fit p-4 rounded-full text-indigo-800 bg-gray-300 hover:bg-indigo-800 hover:text-white mx-8"
        >
          <HiOutlineTrash className="scale-150" />
        </button>
      </div>
    </div>
  );
}
