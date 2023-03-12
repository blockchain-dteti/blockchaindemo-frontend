import { React, useEffect, useState } from "react";
import DropSearch from "./DropSearch";

export default function DefDropdown(props) {
  const [selectedData, setSelectedData] = useState("");
  useEffect(() => {
    props.textValue(selectedData);
  }, [selectedData]);

  return (
    <div className="grid grid-cols-[302px_auto] items-center">
      <label className="text-black font-medium text-xl">{props.label}</label>
      <DropSearch
        placeholder={props.placeholder}
        datas={props.datas}
        textValue={setSelectedData}
      />
    </div>
  );
}
