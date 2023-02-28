import Definput from "@/components/Definput";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import icon_dropdown from "../../assets/dropdown.svg";
import { React, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DefDropDown from "@/components/DefDropdown";

export default function create() {
  const notify = () =>
    toast("Data sukses terkirim", {
      hideProgressBar: true,
      autoClose: 2000,
      type: "success",
    });

  // const addContainer = () => count.push(count[count.length - 1] + 1);
  const [count, setCount] = useState([1]);
  const addContainer = () =>
    setCount((prevCount) => [...prevCount, prevCount.length + 1]);
  
  const [open, setOpen] = useState(false);
  const openContainer = () =>
    setOpen(!open);
  
  return (
    <div className="h-100% bg-[#EBEFF2]">
      <Navbar />
      <div className="p-32">
        <p className="text-4xl text-black font-bold pb-10">
          Request Delivery Order
        </p>
        <div className="">
          <DefDropDown
            label="Shipping Agency"
            datas={shipping_agency}
            placeholder={shipping_agency[0]}   
          />
          <Definput
            label="Notify Party"
            placeholder="PT.Macoline Indonesia, Ruko Komplek Puri Mutiara BLO"
          />
          <Definput
            label="Consignee"
            placeholder="PT.Macoline Indonesia, Ruko Komplek Puri Mutiara BLO"
          />
          <Definput
            label="Shipper/Exporter"
            placeholder="China Coast Freight co., ltd Tianjin Branchunt M,"
          />
          <DefDropDown
            label="Port of Discharge" 
            datas={port_of_discharge}
            placeholder={port_of_discharge[0]}   
          />
          <DefDropDown
            label="Port of Delivery"
            datas={port_of_delivery}
            placeholder={port_of_delivery[0]}   
          />
          <DefDropDown
            label="Port of Loading" 
            datas={port_of_loading}
            placeholder={port_of_loading[0]}   
          />
          <p className="text-3xl text-black font-bold py-10">
            Detail Container
          </p>
          <div className="space-y-16">
            {count.map((index) => (
              <div key={index}>
                <div className="flex gap-3">
                  <p className="text-xl text-black font-bold">
                    Container {index}
                  </p>
                  <Image onClick={openContainer} className={open ? null : 'rotate-180' } src={icon_dropdown} alt="image"></Image>
                </div>
                <div className={open ? 'hidden' : 'show'}>
                  <Definput label="Size Type" placeholder="45-10" />
                  <Definput label="Gross Weight" placeholder="21686.66" />
                  <DefDropDown
                    label="Depo Name"
                    datas={depo_name}
                    placeholder={depo_name[0]}   
                  />
                  <Definput
                    label="Phone Number"
                    placeholder="92-21-44-01-592(6520)"
                  />                  
                </div>
              </div>
            ))}
          </div>
          <button
            className="bg-[#798BFE] py-3 px-6 rounded-md text-xl font-bold drop-shadow-lg mt-3 hover:bg-[#71B6F9]"
            onClick={addContainer}
          >
            + Add Container
          </button>
          <br />
          <input
            type="file"
            className="bg-[#798BFE] py-3 px-6 rounded-md text-xl font-bold drop-shadow-lg mt-3 hover:bg-[#71B6F9]"
            multiple
          />
          <div className="flex justify-end">
            <button
              onClick={notify}
              className="bg-[#798BFE] py-3 px-6 rounded-md text-xl font-bold drop-shadow-lg mt-3 hover:bg-[#71B6F9]"
            >
              Send
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

const shipping_agency = ['Korean Marine Transport','Sarana Trans Asia','Tri Marina Globanusa', 'Samudera Jaya Makmur'];
const port_of_discharge = ['Jakarta, Java, Indonesia','Banten, Java, Indonesia','Lampung, Sumatera, Indonesia', 'Kepulauan Riau, Sumatera, Indonesia'];
const port_of_delivery = ['Jakarta, Java, Indonesia','Banten, Java, Indonesia','Lampung, Sumatera, Indonesia', 'Kepulauan Riau, Sumatera, Indonesia'];
const port_of_loading = ['Guangzhou, China','Xingang, China','Pasir Panjang, Singapore', 'Hong Kong, China'];
const depo_name = ['PT Segara Pasific Maju (SPM)','PT. Bina Sinar Amity (BSA)','PT. Dunia Express (DUNEX)', 'PT. Bina Sinar Amity (BSA) - Serang'];