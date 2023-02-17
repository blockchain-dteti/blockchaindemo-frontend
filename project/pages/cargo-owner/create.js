import Definput from '@/components/Definput'
import Navbar from '@/components/Navbar'
import Image from "next/image";
import icon_dropdown from "../../assets/dropdown.svg";
import React from 'react'

export default function create() {
  return (
    <div className="h-100% bg-[#EBEFF2]">
      <Navbar/>
      <div className='p-32'>
        <p className="text-4xl text-black font-bold pb-10">Request Delivery Order</p>
        <div className='px-36'>      
          <Definput label='Shipping Agency' placeholder='Korean Marine Transport'/>
          <Definput label='Notify Party' placeholder='PT.Macoline Indonesia, Ruko Komplek Puri Mutiara BLO'/>
          <Definput label='Consignee' placeholder='PT.Macoline Indonesia, Ruko Komplek Puri Mutiara BLO'/>
          <Definput label='Shipper/Exporter' placeholder='China Coast Freight co., ltd Tianjin Branchunt M,'/>
          <Definput label='Port of Discharge' placeholder='Xingang, China'/>
          <Definput label='Port of Delivery' placeholder='Jakarta, Java, Indonesia'/>
          <Definput label='Port of Loading' placeholder='Jakarta, Java, Indonesia'/>
          <p className="text-3xl text-black font-bold py-10">Detail Container</p>
          <div className='flex gap-3'>
            <p className="text-xl text-black font-bold">Container 1</p>
            <Image className="" src={icon_dropdown} alt="image"></Image>
          </div>
          <div>
            <Definput label='Size Type' placeholder='45-10'/>
            <Definput label='Gross Weight' placeholder='21686.66'/>
            <Definput label='Depo Name' placeholder='PT. Segara Pacific Maju (SPM)'/>
            <Definput label='Phone Number' placeholder='92-21-44-01-592(6520)'/>
          </div>          
          <button className='bg-[#798BFE] py-3 px-6 rounded-md text-xl font-bold drop-shadow-lg mt-3'>+ Add Container</button><br/>
          <input type="file" className='bg-[#798BFE] py-3 px-6 rounded-md text-xl font-bold drop-shadow-lg mt-3' multiple/>
          <div className='flex justify-end'>
            <button className='bg-[#798BFE] py-3 px-6 rounded-md text-xl font-bold drop-shadow-lg mt-3'>Send</button>
          </div>          
        </div>        
      </div>              
    </div>
  )
}