'use client'
import { useUserContext } from '@/context/Provider';
import Image from 'next/image';

const ProfilePage = () => {
  const { userData } = useUserContext() 
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <div className="flex justify-center">
          <Image
            src="/path-to-profile-picture.jpg" 
            alt="User Profile"
            width={300}
            height={300}
            className="w-32 h-32 rounded-full border-4 border-gray-300"
          />
        </div>
        <div className="mt-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">{userData?.first_name} {userData?.second_name}</h2>
        </div>
        <div className="mt-4 text-center">
          {/* <button className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none">
            Edit Profile
          </button> */}
        </div>
        <div className="mt-8">
          <h3 className="text-lg font-medium text-gray-800">Account Details</h3>
          <ul className="mt-2 text-gray-600">
            <li><span className="font-semibold">Email:</span> {userData?.email}</li>
            {/* <li><span className="font-semibold">Username:</span> {userData?.username}</li>
            <li><span className="font-semibold">Phone:</span> {userData?.phone}</li>
            <li><span className="font-semibold">Address:</span> {userData?.address}</li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
