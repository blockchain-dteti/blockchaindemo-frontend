import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Definput from "@/components/Definput";
import surat from "../../assets/do.jpg";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

export default function Detail() {
  const router = useRouter();
  const [data, setData] = useState();

  useEffect(() => {
    if (!router.isReady) return;
    const { id } = router.query;
    if (!id) return;

    (async () => {
      try {
        const res = await fetch(
          "http://localhost:5000/api/do?includes=Container,ShippingAgency,NotifyParty,Consignee,Shipper,PortOfDischarge,PortOfDelivery,PortOfLoading,Depo",
          {
            method: "GET",
          }
        );
        const data = await res.json();
        const containers = [];
        await Promise.all(
          data[0].Containers.map(async (container) => {
            const resDepo = await fetch(
              `http://localhost:5000/api/company?id=${container.depoId}`,
              {
                method: "GET",
              }
            );
            const dataDepo = await resDepo.json();
            containers.push({
              sizeType: container.sizeType,
              grossWeight: container.grossWeight,
              depoName: dataDepo[0].name,
              phoneNumber: dataDepo[0].phoneNumber,
            });
          })
        );
        setData({
          ...data[0],
          Containers: containers
        })
      } catch (error) {
        console.error(error);
        toast(error, {
          hideProgressBar: true,
          autoClose: 2000,
          type: "error",
        });
      }
    })();
  }, [router.isReady, router.query]);

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
            <div className="h-[560px] p-8 rounded-md bg-white items-center flex justify-center overflow-hidden">
              <Image className="object-fill" src={surat} alt="image"></Image>
            </div>
            <button className="bg-[#798BFE] py-2 px-16 mt-8 rounded-md text-[#293165] text-[16px] font-bold drop-shadow-lg">
              Print DO
            </button>
          </div>
          <div className="col-span-7 pl-28">
            <div className="mb-16 relative">
              {/* <p className="w-max absolute top-0 right-0 text-sm text-white py-1 rounded-lg px-10 bg-[#E42626]">
                Status DO Reject
              </p> */}
            </div>
            <Definput
              label="Shipping Agency"
              textValue={data?.ShippingAgency?.name}
            />
            <Definput
              label="Notify Party"
              textValue={data?.NotifyParty?.name}
            />
            <Definput label="Consignee" textValue={data?.Consignee?.name} />
            <Definput
              label="Shipper/Exporter"
              textValue={data?.Shipper?.name}
            />
            <Definput
              label="Port of Discharge"
              textValue={data?.PortOfDischarge?.name}
            />
            <Definput
              label="Port of Delivery"
              textValue={data?.PortOfDelivery?.name}
            />
            <Definput
              label="Port of Loading"
              textValue={data?.PortOfLoading?.name}
            />
            <p className="text-3xl text-black font-bold mt-6">
              Detail Container
            </p>
            {data?.Containers.map((container, index) => (
              <div key={index}>
                <p className="text-xl text-black font-bold mt-3 mb-7">
                  Container {index + 1}
                </p>
                <Definput label="Size Type" textValue={container.sizeType} />
                <Definput
                  label="Gross Weight"
                  textValue={container.grossWeight}
                />
                <Definput
                  label="Depo Name"
                  textValue={container.depoName}
                />
                <Definput
                  label="Phone Number"
                  textValue={container.phoneNumber}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
