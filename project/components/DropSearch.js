import React, { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

const DropSearch = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full relative focus:outline-none border border-[#293165] hover:border-[#71B6F9] rounded-md">
      <div
        onClick={() => setOpen(!open)}
        className={`bg-white text-black w-full p-3 flex items-center justify-between rounded ${
          !selected && "text-gray-400 italic"
        }`}
      >
        {selected
          ? selected
          : props.placeholder}
        <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
      </div>
      <ul
        className={`bg-white text-black mt-2 overflow-y-auto absolute w-full ${
          open ? "max-h-60" : "max-h-0"
        } `}
      >
        <div className="flex items-center px-2 sticky top-0 bg-white">
          <AiOutlineSearch size={18} className="text-gray-700" />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder="Search..."
            className="placeholder:text-gray-500 p-2 outline-none bg-transparent text-black w-full"
          />
        </div>
        {props.datas?.map((data) => (
          <li
            key={data}
            className={`p-2 text-sm hover:bg-sky-600 hover:text-white
            ${
              data?.toLowerCase() === selected?.toLowerCase() &&
              "bg-sky-600 text-white"
            }
            ${
              data?.toLowerCase().startsWith(inputValue)
                ? "block"
                : "hidden"
            }`}
            onClick={() => {
              if (data?.toLowerCase() !== selected.toLowerCase()) {
                setSelected(data);
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