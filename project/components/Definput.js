import { React, useState, useEffect } from "react";

export default function Definput(props) {
  const [textValue, setTextValue] = useState("");

  useEffect(() => {
    props.textValue(textValue);
  }, [textValue]);

  return (
    <div className="grid grid-cols-[302px_auto] items-center">
      <label className="text-black font-medium text-xl">{props.label}</label>
      <input
        className="bg-white text-black focus:outline-none border border-[#293165] hover:border-[#71B6F9] shadow-inner rounded-md p-2 w-auto h-[47px] placeholder:italic"
        placeholder={props.placeholder}
        value={props.value}
        onChange={(e) => setTextValue(e.target.value)}
      />
    </div>
  );
}
