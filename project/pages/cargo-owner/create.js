import Definput from "@/components/Definput";
import Navbar from "@/components/Navbar";
import { React, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DefDropDown from "@/components/DefDropdown";
import Container from "@/components/Container";

export default function create() {
  const [shipper, setShipper] = useState("");
  const [notifyParty, setNotifyParty] = useState("");
  const [consignee, setConsignee] = useState("");
  const [shippingAgency, setShippingAgency] = useState("");
  const [portDischarge, setPortDischarge] = useState("");
  const [portDelivery, setPortDelivery] = useState("");
  const [portLoading, setPortLoading] = useState("");
  const [container, setContainer] = useState([]);

  const notify = () =>
    toast("Data sukses terkirim", {
      hideProgressBar: true,
      autoClose: 2000,
      type: "success",
    });

  function handleSubmit() {
    notify();
    console.log(data);
  }

  const data = {
    "notify party": notifyParty,
    consignee: consignee,
    "shipping agency": shippingAgency,
    "shipper/exporters": shipper,
    "port of discharge": portDischarge,
    "port of delivery": portDelivery,
    "port of loading": portLoading,
  };
  // const addContainer = () => count.push(count[count.length - 1] + 1);
  const [count, setCount] = useState([1]);
  const addContainer = () =>
    setCount((prevCount) => [...prevCount, prevCount.length + 1]);

  // const addContainerData = () =>
  //   setContainer((prevContainer) => [...prevContainer]);

  return (
    <div className="h-100% bg-[#EBEFF2]">
      <Navbar />
      <div className="p-32 flex flex-col space-y-10">
        <div>
          <p className="text-4xl text-black font-bold mb-8">
            Request Delivery Order
          </p>
          <div className="space-y-10 p-10 bg-slate-200 shadow-sm border border-slate-300 rounded-xl">
            <DefDropDown
              label="Shipping Agency"
              datas={shipping_agency}
              placeholder={shipping_agency[0]}
              textValue={setShippingAgency}
            />
            <Definput
              label="Notify Party"
              placeholder="PT.Macoline Indonesia, Ruko Komplek Puri Mutiara BLO"
              textValue={setNotifyParty}
            />
            <Definput
              label="Consignee"
              placeholder="PT.Macoline Indonesia, Ruko Komplek Puri Mutiara BLO"
              textValue={setConsignee}
            />
            <Definput
              label="Shipper/Exporter"
              placeholder="China Coast Freight co., ltd Tianjin Branchunt M,"
              textValue={setShipper}
            />
            <DefDropDown
              label="Port of Discharge"
              datas={port_of_discharge}
              placeholder={port_of_discharge[0]}
              textValue={setPortDischarge}
            />
            <DefDropDown
              label="Port of Delivery"
              datas={port_of_delivery}
              placeholder={port_of_delivery[0]}
              textValue={setPortDelivery}
            />
            <DefDropDown
              label="Port of Loading"
              datas={port_of_loading}
              placeholder={port_of_loading[0]}
              textValue={setPortLoading}
            />
          </div>
        </div>
        <div className="space-y-8">
          <p className="text-3xl text-black font-bold">Detail Container</p>
          <div className="space-y-8">
            {count.map((index) => (
              <Container index={index} />
            ))}
          </div>
        </div>
        <div>
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
              onClick={handleSubmit}
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

const shipping_agency = [
  "Korean Marine Transport",
  "Sarana Trans Asia",
  "Tri Marina Globanusa",
  "Samudera Jaya Makmur",
];
const port_of_discharge = [
  "Jakarta, Java, Indonesia",
  "Banten, Java, Indonesia",
  "Lampung, Sumatera, Indonesia",
  "Kepulauan Riau, Sumatera, Indonesia",
];
const port_of_delivery = [
  "Jakarta, Java, Indonesia",
  "Banten, Java, Indonesia",
  "Lampung, Sumatera, Indonesia",
  "Kepulauan Riau, Sumatera, Indonesia",
];
const port_of_loading = [
  "Guangzhou, China",
  "Xingang, China",
  "Pasir Panjang, Singapore",
  "Hong Kong, China",
];
const depo_name = [
  "PT Segara Pasific Maju (SPM)",
  "PT. Bina Sinar Amity (BSA)",
  "PT. Dunia Express (DUNEX)",
  "PT. Bina Sinar Amity (BSA) - Serang",
];
