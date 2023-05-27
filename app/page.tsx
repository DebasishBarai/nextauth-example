import { getServerSession } from 'next-auth';
import Link from 'next/link';
import React from 'react';
import { authOptions } from './api/auth/[...nextauth]/route';

const Home = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className='min-h-screen min-w-full bg-slate-800 text-slate-200 text-4xl flex flex-col justify-center items-center'>
      <div>
        {!session ? (
          <div>
            <h1>You are not authorized to view this page</h1>
            <Link href='/api/auth/signin'>
              <button className='text-[#28A0F1] border-[0.125em] border-[#28A0F1] border-solid rounded-lg p-2 m-2 shadow-[0_0_10px_2px_#28A0F1,_0_0_10px_2px_#28A0F1_inset] [text-shadow:_0_0_0.125em] hover:text-[#1E293B] hover:bg-[#28A0F1] hover:shadow-[0_0_100px_10px_#28A0F1] hover:[text-shadow:_none]'>
                Login
              </button>
            </Link>
          </div>
        ) : (
          <div>
            <h1>Hi {JSON.stringify(session.user?.name)}</h1>
            <Link href='/api/auth/signout'>
              <button className='text-[#28A0F1] border-[0.125em] border-[#28A0F1] border-solid rounded-lg p-2 m-2 shadow-[0_0_10px_2px_#28A0F1,_0_0_10px_2px_#28A0F1_inset] [text-shadow:_0_0_0.125em] hover:text-[#1E293B] hover:bg-[#28A0F1] hover:shadow-[0_0_100px_10px_#28A0F1] hover:[text-shadow:_none]'>
                Logout
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
