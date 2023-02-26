import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Definput from "@/components/Definput";
import surat from "../../assets/surat.png";

export default function detail_reject() {
  return (
    <div className="flex flex-col bg-bgcolor w-screen h-screen">
      <Navbar />
      <div className="w-screen bg-[#EBEFF2] p-32">
        <Link
          className="bg-[#2F88FF] py-2 px-16 rounded-md text-[16px] font-bold drop-shadow-lg"
          href="/cargo-owner/list"
        >
          Back
        </Link>
        <h1 className="text-[40px] text-black font-bold mb-8 mt-6">
          Delivery Order Detail
        </h1>
        <div className="grid grid-cols-10 gap-3">
          <div className="col-span-3">
            <div className="h-[560px] p-8 rounded-md bg-white items-center flex justify-center">
              <p className="text-[30px] text-black font-bold">No Preview DO</p>
            </div>
            <button className="bg-[#798BFE] py-2 px-8 mt-8 rounded-md text-[16px] text-[#293165] font-bold drop-shadow-lg">
              Documents check
            </button>
          </div>
          <div className="col-span-7 pl-28">
            <div className="mb-16 relative">
              <p className="w-max absolute top-0 right-0 text-sm text-white py-1 rounded-lg px-10 bg-[#E42626]">
                Status DO Reject
              </p>
            </div>
            <Definput label="Shipping Agency" value="Korean Marine Transport" />
            <Definput
              label="Notify Party"
              value="PT.Macoline Indonesia, Ruko Komplek Puri Mutiara BLO"
            />
            <Definput
              label="Consigne"
              value="PT.Macoline Indonesia, Ruko Komplek Puri Mutiara BLO"
            />
            <Definput
              label="Shipper/Exporter"
              value="China Coast Freight co., ltd Tianjin Branchunt M,"
            />
            <Definput label="Port of Discharge" value="Xingang, China" />
            <Definput
              label="Port of Delivery"
              value="Jakarta, Java, Indonesia"
            />
            <Definput
              label="Port of Loading"
              value="Jakarta, Java, Indonesia"
            />
            <p className="text-3xl text-black font-bold mt-6">
              Detail Container
            </p>
            <p className="text-xl text-black font-bold mt-3 mb-7">
              Container 1
            </p>
            <Definput label="Size Type" value="45-10" />
            <Definput label="Gross Weight" value="21686.66" />
            <Definput
              label="Depo Name"
              value="PT.Masaji Tatanan Container Indonesia"
            />
            <Definput label="Phone Number" value="92-21-44-01-592(6520)" />
            <Definput label="Reason" value="Dokumen isn't complete" />
          </div>
        </div>
      </div>
    </div>
  );
}
