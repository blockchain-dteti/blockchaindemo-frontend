import { React, useState } from "react";
import Definput from "./Definput";
import DefDropdown from "./DefDropdown";
import Image from "next/image";
import icon_dropdown from "../assets/dropdown.svg";
import { companies } from "@/data/data";

export default function Container(props) {
  const [open, setOpen] = useState(false);
  const openContainer = () => setOpen(!open);

  return (
    <div>
      <div className="flex gap-3">
        <p className="text-xl text-black font-bold">
          Container {props.index + 1}
        </p>
        <Image
          onClick={openContainer}
          className={` ${open ? "pt-[3px]" : "rotate-180 pb-[3px]"}`}
          src={icon_dropdown}
          alt="image"
        />
      </div>
      <div
        className={`${
          open ? "hidden" : "show"
        } bg-slate-200 p-8 rounded-xl mt-3 border border-slate-300 space-y-10`}
      >
        <Definput
          label="Size Type"
          placeholder="45-100"
          textValue={props.container.sizeType}
          setTextValue={(val) => props.changeContainer("sizeType", val)}
        />
        <Definput
          label="Gross Weight"
          placeholder="21686.66"
          textValue={props.container.grossWeight}
          setTextValue={(val) => props.changeContainer("grossWeight", val)}
        />

        <DefDropdown
          label="Depo Name"
          datas={companies.map((data) => data.name)}
          placeholder={companies[0].name}
          textValue={props.container.depoName?.name}
          setTextValue={(index) =>
            props.changeContainer("depoName", companies[index])
          }
        />
        <Definput
          label="Phone Number"
          placeholder={companies[0].phoneNumber}
          textValue={props.container.depoName?.phoneNumber}
        />
      </div>
    </div>
  );
}
