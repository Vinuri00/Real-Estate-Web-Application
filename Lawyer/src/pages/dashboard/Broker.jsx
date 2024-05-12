import { useEffect, useState } from 'react'
import axios, { GET_BOOKINGS_BY_LAWYERID } from '@/api/axios';
import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from "@material-tailwind/react";
import { LawyerModel } from '@/models/brokers';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

const Bookings =  () => {
  const token =  Cookies.get('token');

  const decodedToken = jwtDecode(token);

    const [bookings, setBookings] = useState([LawyerModel]);
  
    useEffect(() => {
      const fetchBookings = async () => {
        try {
          const response = await axios.get(`${GET_BOOKINGS_BY_LAWYERID}/${decodedToken.lawyerId}`);
          
          setBookings(response.data);

  
        } catch (error) {
          console.error('Error fetching booking data:', error);
        }
      }; 

      fetchBookings();
    }, []);


  console.log(bookings)

  
  return (
    <>
      <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url('/img/background-image.png')] bg-cover bg-center">
      <div className="absolute inset-0 h-full w-full bg-gray-900/75">
        <div className="flex h-full items-center justify-center">
          <p className="text-4xl font-bold text-white">Manage Bookings</p>
        </div>
      </div>
      </div>
      <div className='mb-8 flex flex-col gap-12'>
        <div className='container max-auto px-4 py-8'>
          <div className='-mx-4 overflow-x-auto'>
            <table className='min-w-full divide-y divide-gray-200'>
              <thead className='bg-gray-50'>
                <tr>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider'>
                    Full Name 
                  </th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider'>
                    Contact Number
                  </th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider'>
                    NIC Number
                  </th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider'>
                   Property Type
                  </th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider'>
                    Date
                  </th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider'>
                    Schedule
                  </th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200'>
                {bookings.map(booking => (
                  <tr key={booking._id}>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <div className='flex items-center'>
                        <img
                          className='rounded-full w-20 h-20'
                          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV3XeKXPIxJP-R6Hg0d2x2DCxnKV_sT04umGCOTuiNIQ&s'
                          alt='image description'
                        />
                        <div className='ml-4'>{booking.userId.fullName}</div>
                      </div>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      {booking.userId.contactNumber}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      {booking.userNICNumber}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      {booking.propertyType}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      {booking.date}
                    </td>

                    <td className='px-6 py-4 whitespace-nowrap'>
                      
                      <Link to={`/dashboard/video-call`}>
                        <Button
                          className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-2 md:mt-0'
                          color='blue'
                        >
                          Schedule
                        </Button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bookings;
