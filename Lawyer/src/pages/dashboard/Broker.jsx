import { useEffect, useState } from 'react'
import axios, { GET_ALL_BROKERS, DELETE_BROKER_BY_ID_URL } from '@/api/axios';
import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from "@material-tailwind/react";
import { BrokerModel } from '@/models/brokers';
import Swal from 'sweetalert2';

const Brokers = () => {
    const [brokers, setBrokers] = useState([BrokerModel]);
  
    useEffect(() => {
      const fetchBrokers = async () => {
        try {
          const response = await axios.get(GET_ALL_BROKERS);
          console.log(response.data);
          setBrokers(response.data);
  
        } catch (error) {
          console.error('Error fetching brokers data:', error);
        }
      }; 
      fetchBrokers();
    }, []);
  
      const handleDelete = async (brokerId) => {
        try {
          const result = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          });
  
      if (result.isConfirmed) {
        await axios.delete(`${DELETE_BROKER_BY_ID_URL}/${brokerId}`);
        setBrokers(brokers.filter((broker) => broker._id !== brokerId));
  
        Swal.fire({
          title: 'Deleted!',
          text: 'The broker has been deleted.',
          icon: 'success'
        });
      }
    } catch (error) {
      console.error('Error deleting broker:', error);
      Swal.fire({
        title: 'Error!',
        text: 'Failed to delete the broker.',
        icon: 'error'
      });
    }
  };
  
  const handleEdit = (brokerId) => {
    // Implement edit functionality or navigation to the edit page
    // Example: history.push(`/dashboard/brokers/update/${brokerId}`);
  };
  return (
    <>
      <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url('/img/background-image.png')] bg-cover bg-center">
      <div className="absolute inset-0 h-full w-full bg-gray-900/75">
        <div className="flex h-full items-center justify-center">
          <p className="text-4xl font-bold text-white">Manage Brokers</p>
        </div>
      </div>
      </div>
      <div className='mb-8 flex flex-col gap-12'>
        <div className='container max-auto px-4 py-8'>
          <Link
            to={'/dashboard/brokers/add-new'}
            className='block md:inline-block mb-4'
          >
            <Button className='mb-3 md:mb-0 md:mr-3' color='green'>
              Add a New Broker
            </Button>
          </Link>
          <div className='-mx-4 overflow-x-auto'>
            <table className='min-w-full divide-y divide-gray-200'>
              <thead className='bg-gray-50'>
                <tr>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider'>
                    Broker Name / Image
                  </th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider'>
                    Email
                  </th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider'>
                    Contact Number
                  </th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider'>
                    Address
                  </th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider'>
                    City
                  </th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider'>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200'>
                {brokers.map(broker => (
                  <tr key={broker._id}>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <div className='flex items-center'>
                        <img
                          className='rounded-full w-20 h-20'
                          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV3XeKXPIxJP-R6Hg0d2x2DCxnKV_sT04umGCOTuiNIQ&s'
                          alt='image description'
                        />
                        <div className='ml-4'>{broker.fullName}</div>
                      </div>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      {broker.email}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      {broker.contactNumber}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      {broker.address}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      {broker.city}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <Button
                        onClick={() => handleDelete(broker._id)}
                        className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded md:mr-2'
                        color='red'
                      >
                        Delete
                      </Button>
                      <Link to={`/dashboard/brokers/update/${broker._id}`}>
                        <Button
                          className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-2 md:mt-0'
                          color='blue'
                        >
                          Edit
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

export default Brokers;
