'use client'
import { signOut } from 'next-auth/react'
import React from 'react'

const Logout = () => {

  return (
    <main className="bg-[#1E293B] min-h-screen min-w-full grid place-items-center">
  <div className="bg-[rgba(255,_255,_255,_0.05)] w-80 rounded-2xl shadow-2xl flex flex-col justify-center">
    <div className="m-4 p-4 box-border">
      <h1 className="p-4 pl-0 text-[#28A0F1]">Are you sure you want to  Sign Out?</h1>
    </div>
    
    <div className="m-4 p-4 mt-0 pt-0 box-border grid">
      <button  onClick={() => signOut({ callbackUrl: '/' })} className="text-[#28A0F1] border-[0.125em] border-[#28A0F1] border-solid rounded-lg p-2 m-2 shadow-[0_0_10px_2px_#28A0F1,_0_0_10px_2px_#28A0F1_inset] [text-shadow:_0_0_0.125em] hover:text-[#1E293B] hover:bg-[#28A0F1] hover:shadow-[0_0_100px_10px_#28A0F1] hover:[text-shadow:_none]">Sign Out</button>
    </div>
  </div>
</main>
  )
}

export default Logout