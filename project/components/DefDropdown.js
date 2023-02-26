import React from 'react'
import DropSearch from './DropSearch'

export default function DefDropdown(props) {
    return (  
        <div className='grid grid-cols-[302px_auto] mb-10 items-center'>
            <label className='text-black font-medium text-xl'>{props.label}</label>
            <DropSearch placeholder={props.placeholder} datas={props.datas}/>
        </div>
    )
}