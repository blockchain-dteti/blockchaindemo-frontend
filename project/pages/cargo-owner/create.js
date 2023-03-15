import Navbar from "@/components/Navbar";
import { React, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DefDropDown from "@/components/DefDropdown";
import Container from "@/components/Container";
import { shipping_agents, ports, companies } from "@/data/data";

function addEmptyContainer() {
  return {
    sizeType: undefined,
    grossWeight: undefined,
    depoName: undefined,
  };
}

export default function create() {
  const [shipper, setShipper] = useState("");
  const [notifyParty, setNotifyParty] = useState("");
  const [consignee, setConsignee] = useState("");
  const [shippingAgency, setShippingAgency] = useState("");
  const [portDischarge, setPortDischarge] = useState("");
  const [portDelivery, setPortDelivery] = useState("");
  const [portLoading, setPortLoading] = useState("");
  const [containers, setContainers] = useState([addEmptyContainer()]);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const loadingToast = toast("Sedang memproses...", {
        autoClose: false,
        type: "loading",
      });

      const data = {
        shippingAgencyId: shippingAgency?.id,
        notifyPartyId: notifyParty?.id,
        consigneeId: consignee?.id,
        shipperId: shipper?.id,
        portOfDischargeId: portDischarge?.id,
        portOfDeliveryId: portDelivery?.id,
        portOfLoadingId: portLoading?.id,
        containers: containers.map((container) => ({
          sizeType: container.sizeType,
          grossWeight: Number(container.grossWeight),
          depoId: container.depoName.id,
        })),
      };
      const reqBody = JSON.stringify(data);
      await fetch("http://localhost:5000/api/do", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: reqBody,
      });

      toast.dismiss(loadingToast);
      toast.success("Data sukses terkirim", {
        hideProgressBar: false,
        autoClose: 2000,
        theme: "colored",
      });
    } catch (error) {
      console.error(error);

      toast.dismiss(loadingToast);
      toast(error, {
        hideProgressBar: true,
        autoClose: 2000,
        type: "error",
      });
    }
  }

  function addContainer() {
    setContainers((prev) => [...prev, addEmptyContainer()]);
  }

  function changeContainer(index, key, value) {
    const _containers = [...containers];
    _containers[index][key] = value;
    setContainers(_containers);
  }

  return (
    <div className="h-100% bg-[#EBEFF2]">
      <Navbar />
      <div className="p-32 flex flex-col space-y-16">
        <div>
          <p className="text-4xl text-black font-bold mb-8">
            Request Delivery Order
          </p>
          <div className="space-y-10 p-10 bg-slate-200 shadow-sm border border-slate-300 rounded-xl">
            <DefDropDown
              label="Shipping Agency"
              datas={shipping_agents.map((data) => data.name)}
              placeholder={shipping_agents[0].name}
              textValue={shippingAgency.name}
              setTextValue={(index) =>
                setShippingAgency(shipping_agents[index])
              }
            />
            <DefDropDown
              label="Notify Party"
              datas={companies.map((data) => data.name)}
              placeholder={companies[0].name}
              textValue={notifyParty.name}
              setTextValue={(index) => setNotifyParty(companies[index])}
            />
            <DefDropDown
              label="Consignee"
              datas={companies.map((data) => data.name)}
              placeholder={companies[0].name}
              textValue={consignee.name}
              setTextValue={(index) => setConsignee(companies[index])}
            />
            <DefDropDown
              label="Shipper/Exporter"
              datas={companies.map((data) => data.name)}
              placeholder={companies[0].name}
              textValue={shipper.name}
              setTextValue={(index) => setShipper(companies[index])}
            />
            <DefDropDown
              label="Port of Discharge"
              datas={ports.map((data) => data.name)}
              placeholder={ports[0].name}
              textValue={portDischarge.name}
              setTextValue={(index) => setPortDischarge(ports[index])}
            />
            <DefDropDown
              label="Port of Delivery"
              datas={ports.map((data) => data.name)}
              placeholder={ports[0].name}
              textValue={portDelivery.name}
              setTextValue={(index) => setPortDelivery(ports[index])}
            />
            <DefDropDown
              label="Port of Loading"
              datas={ports.map((data) => data.name)}
              placeholder={ports[0].name}
              textValue={portLoading.name}
              setTextValue={(index) => setPortLoading(ports[index])}
            />
          </div>
        </div>
        <div className="space-y-8">
          <p className="text-3xl text-black font-bold">Detail Container</p>
          <div className="space-y-8">
            {containers.map((container, index) => (
              <Container
                key={index}
                index={index}
                container={container}
                changeContainer={(key, value) =>
                  changeContainer(index, key, value)
                }
              />
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
