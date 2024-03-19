import { Link } from 'react-router-dom'
import React from 'react';
import { useEffect, useState } from 'react'
import axios, { GET_ALL_LAWYERS } from '@/api/axios';
import { LawyerModel } from '@/models/lawyers';
import Swal from 'sweetalert2';

const LawyerComponent = () => {
    const [ lawyer, setLawyer ] = useState([LawyerModel]);

    useEffect(() => {
      const fetchLawyers = async () => {
        try {
          const response = await axios.get(GET_ALL_LAWYERS);
          console.log(response.data);
          setLawyer(response.data);
        } catch (error) {
          console.error('Error fetching lawyers data:', error);
        }
    };
    fetchLawyers();
  
    }, []);
  
    const handleApprove = async (lawyerId) => {
      try {
        const result = await Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, approve it!' 
        });
        
        if (result.isConfirmed) {
          await axios.put(`/lawyers/approve/${lawyerId}`);
          setLawyer(lawyer.filter((lawyer) => lawyer._id !== lawyerId));
          Swal.fire({
            title: 'Approved!',
            text: 'The lawyer has been approved.',
            icon: 'success'
          });
        }
      } catch (error) {
        console.error('Error approving lawyer:', error);
        Swal.fire({
          title: 'Error!',
          text: 'Failed to approve the lawyer.',
          icon: 'error'
        });
      }
    };
  
    const handleReject = async (lawyerId) => {
      // Implement reject functionality or navigation to the reject page
      // Example: history.push(`/dashboard/lawyers/reject/${lawyerId}`);
    };
  
    return (
      <>
        <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url('/img/background-image.png')] bg-cover bg-center">
          <div className='absolute inset-0 h-full w-full bg-gray-900/75'>
            <div className='flex h-full items-center justify-center'>
              <p className='text-4xl font-bold text-white'>Manage Lawyers</p>
            </div>
          </div>
        </div>
        <div className='mb-8 flex flex-col gap-12'>
          <div className='container max-auto px-4 py-8'>
            {/* <Link
              to={'/dashboard/lawyers/add-new'}
              className='block md:inline-block mb-4'
            >
              <button className='mb-3 md:mb-0 md:mr-3' color='green'>
                Approve Lawyers
              </button>
            </Link> */}
            <div className='-mx-4 overflow-x-auto'>
              <table className='min-w-full divide-y divide-gray-200'>
                <thead className='bg-gray-50'>
                  <tr>
                    {/* <th className='px-6 py-3 text-left text-xs front-medium text-gray-700 uppercase tracking-wider'>
                      Lawyer Name / Image
                    </th> */}
                    <th className='px-6 py-3 text-left text-xs front-medium text-gray-700 uppercase tracking-wider'>
                      Full Name
                    </th>
                    <th className='px-6 py-3 text-left text-xs front-medium text-gray-700 uppercase tracking-wider'>
                      Username
                    </th>
                    <th className='px-6 py-3 text-left text-xs front-medium text-gray-700 uppercase tracking-wider'>
                      Email
                    </th>
                    <th className='px-6 py-3 text-left text-xs front-medium text-gray-700 uppercase tracking-wider'>
                      Contact Number
                    </th>
                    <th className='px-6 py-3 text-left text-xs front-medium text-gray-700 uppercase tracking-wider'>
                      Company Name
                    </th>
                    <th className='px-6 py-3 text-left text-xs front-medium text-gray-700 uppercase tracking-wider'>
                      License Number
                    </th>
                    <th className='px-6 py-3 text-left text-xs front-medium text-gray-700 uppercase tracking-wider'>
                      Years Of Experience
                    </th>
                    <th className='px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider'>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200'>
                  {lawyer.map(lawyer => (
                    <tr key={lawyer._id}>
                      
                      <td className='px-6 py-4 whitespace-nowrap'>
                        {lawyer.fullName}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        {lawyer.username}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        {lawyer.email}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        {lawyer.contactNumber}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        {lawyer.companyName}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        {lawyer.licenseNumber}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        {lawyer.yearsOfExperience}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        <button
                          onClick={() => handleApprove(lawyer._id)}
                          className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded md:mr-2'
                          color='green'
                        >
                          Approve
                        </button>
                        <Link to={`/dashboard/lawyers/update/${lawyer._id}`}>
                          <button
                            className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-2 md:mt-0'
                            color='red'
                          >
                            Reject
                          </button>
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
}

export default LawyerComponent