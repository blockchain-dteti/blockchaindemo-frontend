import { React, useState, useEffect } from "react";
import Definput from "./Definput";
import DefDropdown from "./DefDropdown";
import Image from "next/image";
import icon_dropdown from "../assets/dropdown.svg";

export default function Container(props) {
  const [open, setOpen] = useState(false);
  const openContainer = () => setOpen(!open);

  const [sizeType, setSizeType] = useState("");
  const [grossWeight, setGrossWeight] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [depoName, setDepoName] = useState("");

  const depo_name = [
    "PT Segara Pasific Maju (SPM)",
    "PT. Bina Sinar Amity (BSA)",
    "PT. Dunia Express (DUNEX)",
    "PT. Bina Sinar Amity (BSA) - Serang",
  ];

  const container = {
    "size type": sizeType,
    "gross weight": grossWeight,
    "phone number": phoneNumber,
    "depo name": depoName,
  };

  //   useEffect(() => {
  //     props.containerData(container);
  //   }, [container]);

  return (
    <div key={props.index}>
      <div className="flex gap-3">
        <p className="text-xl text-black font-bold">Container {props.index}</p>
        <Image
          onClick={openContainer}
          className={` ${open ? "pt-[3px]" : "rotate-180 pb-[3px]"}`}
          src={icon_dropdown}
          alt="image"
        ></Image>
      </div>
      <div
        className={`${
          open ? "hidden" : "show"
        } bg-slate-200 p-8 rounded-xl mt-3 border border-slate-300 space-y-10`}
      >
        <Definput
          label="Size Type"
          placeholder="45-10"
          textValue={setSizeType}
        />
        <Definput
          label="Gross Weight"
          placeholder="21686.66"
          textValue={setGrossWeight}
        />

        <DefDropdown
          label="Depo Name"
          datas={depo_name}
          placeholder={depo_name[0]}
          textValue={setDepoName}
        />

        <Definput
          label="Phone Number"
          placeholder="92-21-44-01-592(6520)"
          textValue={setPhoneNumber}
        />
      </div>
    </div>
  );
}
