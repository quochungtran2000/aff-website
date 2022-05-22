import MainLayout from 'components/Layout';
import React from 'react';
import { useUser } from 'context/userContext';

export default function ProfilePage() {
  const { user } = useUser();

  return (
    <MainLayout>
      <div className="h-screen w-1/3 m-auto my-20 bg-white px-5 rounded-md py-10">
        <div className="flex">
          <div className="w-1/5 bg-slate-100 rounded-lg">
            <img
              className="rounded-lg p-2 "
              src={`${user?.imgURL ?? `https://joeschmoe.io/api/v1/${user?.fullname}`}`}
            ></img>
            <p>{user?.role ? user.role : ''}</p>
          </div>
          {/* <div className="ml-16 ">
            <p className="text-3xl font-bold mb-2 truncate ...">{user?.email}</p>
            <p className="truncate ... mb-2">
              Full Name: <span className="font-medium">{user?.fullname}</span>
            </p>
            <p className="truncate ...">
              Number Phone: <span className="font-medium">{user?.phoneNumber}</span>
            </p>
            <div className="my-10 flex">
              <button className="bg-red-700 py-3 px-8 rounded-lg text-white hover:bg-transparent hover:text-red-700 border-red-700 border-4 transition-all duration-500">
                Account Details
              </button>
              <button className="bg-black text-white rounded-lg py-3 px-4 ml-5">Log Out</button>
            </div>
          </div> */}
        </div>
      </div>
    </MainLayout>
  );
}
