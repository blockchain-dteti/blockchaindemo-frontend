import React from 'react';
import Link from 'next/link';

export default function index() {
  return (
    <div className='w-screen h-screen bg-[#EBEFF2]'>
        <div className='flex items-center justify-center py-56'>
            <div className='max-w-xl w-full'>
                <p className="text-[40px] text-[#293165] text-center font-bold mb-2">Log In for Your Account</p>
                <p className="text-[16px] text-[#293165] text-center mb-5">Please select your account type before login</p>
                <div className='flex items-center justify-center'>
                    <div className="block px-16 py-16 rounded-lg shadow-lg bg-[#293165] items-center text-center space-y-16">
                        <div>
                            <Link className='text-[22px] text-[#293165] font-bold bg-[#EBEFF2] py-3 px-12 rounded-lg transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-[1.005] hover:bg-sky-200 duration-300 mb-5' href="/cargo-owner/login">Log In as Cargo Owner</Link>
                        </div>
                        <div>
                            <Link className='text-[22px] text-[#293165] font-bold bg-[#EBEFF2] py-3 px-12 rounded-lg transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-[1.005] hover:bg-sky-200 duration-300 mb-5' href="/shipping-line/login">Log In as Shipping Line</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
