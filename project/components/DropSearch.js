import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

const DropSearch = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full relative focus:outline-none border border-[#293165] hover:border-[#71B6F9] rounded-md">
      <div
        onClick={() => setOpen(!open)}
        className={`bg-white text-black w-full p-3 flex items-center justify-between rounded ${
          !props.textValue && "text-gray-400 italic"
        }`}
      >
        {props.textValue ? props.textValue : props.placeholder}
        <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
      </div>
      <ul
        className={`bg-white text-black mt-2 overflow-y-auto absolute z-10 shadow-lg shadow-slate-500/20 rounded-md w-full ${
          open
            ? "max-h-60 outline outline-offset-0 outline-1 outline-white"
            : "max-h-0"
        } `}
      >
        <div className="flex items-center px-2 sticky top-0 bg-white ">
          <AiOutlineSearch size={18} className="text-gray-700" />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Search..."
            className="placeholder:text-gray-500 p-2 outline-none bg-transparent text-black w-full"
          />
        </div>
        {props.datas?.map((data, index) => (
          <li
            key={index}
            className={`p-2 text-sm hover:bg-sky-600 hover:text-white
            ${data === props.textValue && "bg-sky-600 text-white"}
            ${
              data.toLowerCase().includes(inputValue.toLowerCase())
                ? "block"
                : "hidden"
            }`}
            onClick={() => {
              if (data !== props.textValue) {
                props.setTextValue(index);
                setOpen(false);
                setInputValue("");
              }
            }}
          >
            {data}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropSearch;
