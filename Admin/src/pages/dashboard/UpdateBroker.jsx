import { useEffect, useState } from 'react'
import { Navigate, useParams, useNavigate } from 'react-router-dom'
import axios, { GET_ONE_BROKER, UPDATE_BROKER_BY_ID_URL } from '@/api/axios'
import Swal from 'sweetalert2'
import { BrokerModel } from '@/models/brokers';

const UpdateBroker = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  /* const [broker, setBroker] = useState(null);
  const [fullName, setBrokerName] = useState('');
  const [email, setBrokerEmail] = useState('');
  const [contactNumber, setBrokerContactNumber ] = useState(0);
  const [address, setBrokerAddress] = useState('');
  const [city, setBrokerCity] = useState('');
  const [Loading, setLoading] = useState(true);
  const [error, setError] = useState(null); */

  // This BrokerModel contains the fullName, email, contactNumber, address, and city fields
  const [brokerData, setBrokerData] = useState(BrokerModel);

  useEffect(() => {
    const fetchBroker = async () => {
      try {
        const response = await axios.get(`${GET_ONE_BROKER}/${id}`);
        setBrokerData(response.data);
        /* setBroker(response.data);
        setBrokerName(response.data.fullName);
        setBrokerEmail(response.data.email);
        setBrokerContactNumber(response.data.contactNumber);
        setBrokerAddress(response.data.address);
        setBrokerCity(response.data.city); */
      } catch (error) {
        setError('Failed to fetch broker data.')
        console.error(error)
      } finally {
        // setLoading(false)
      }
    }

    fetchBroker()
  }, [id]);

  console.log(brokerData);

  const handleUpdate = async (e) => {
    e.preventDefault();
    
    try {
      await axios.put(`${UPDATE_BROKER_BY_ID_URL}/${id}`, {
        fullName: brokerData.fullName,
        email: brokerData.email,
        contactNumber: brokerData.contactNumber,
        address: brokerData.address,
        city: brokerData.city,
      });

      // Display success message
      Swal.fire('Success', 'Broker details updated successfully!', 'success').then((result) => {
        navigate("/brokers");
      });

      // Redirect to dashboard

    } catch (error) {
      // setError('Failed to update broker details.');
      console.error(error);

      // Display error message
      Swal.fire('Error', 'Failed to update broker details!', 'error');
    }
  };

 /*  if (Loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!broker) {
    return <div>Broker not found</div>
  } */
 
  return (
    <div className='min-h-screen bg-blue-gray-50/50'>
      <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url('/img/background-image.png')] bg-cover bg-center">
        <div className='absolute inset-0 h-full w-full bg-gray-900/75'>
          <div className='flex h-full items-center justify-center'>
            <p className='text-4xl font-bold text-white'>Update Brokers</p>
          </div>
        </div>
      </div>
      <div className='min-h-screen bg-gray-100 flex items-center justify-center'>
        <div className='max-w-md w-full p-6 space-y-6 bg-white rounded-xl shadow-md'>
          <div className='mb-4'>
            <label
              htmlFor='brokerNameInput'
              className='block text-sm font-medium text-gray-600'
            >
              Broker Name
            </label>
            <input
              type='text'
              className='mt-1 p-2 block w-full border rounded-md border-gray-500'
              id='fullNameInput'
              name='fullName'
              value={brokerData.fullName}
              onChange={
                (e) => setBrokerData({...brokerData, fullName: e.target.value})
              }
            />

            <div className="my-4">
              <div className='flex flex-col'>
                <label
                  htmlFor='brokerNameInput'
                  className='block text-sm font-medium text-gray-600'
                >
                  Broker Email
                </label>
                <input
                  type='text'
                  className='mt-1 p-2 block w-full border rounded-md border-gray-500'
                  id='emailInput'
                  name='email'
                  value={brokerData.email}
                  onChange={(e) => setBrokerData({...brokerData, email: e.target.value})}
                />
              </div>
            </div>

            <div className="my-4">
              <div className='flex flex-col'>
                <label
                  htmlFor='contactNumberInput'
                  className='block text-sm font-medium text-gray-600'
                >
                  Broker Contact Number
                </label>
                <input
                  type='text'
                  className='mt-1 p-2 block w-full border rounded-md border-gray-500'
                  id='contactNumberInput'
                  name='contactNumber'
                  value={brokerData.contactNumber}
                  onChange={
                    (e) => setBrokerData({...brokerData, contactNumber: e.target.value})
                  }
                />
              </div>
            </div>

            <div className="my-4">
              <div className='flex flex-col'>
                <label
                  htmlFor='addressInput'
                  className='block text-sm font-medium text-gray-600'
                >
                  Broker Address
                </label>
                <input
                  type='text'
                  className='mt-1 p-2 block w-full border rounded-md border-gray-500'
                  id='addressInput'
                  name='address'
                  value={brokerData.address}
                  onChange={(e) => setBrokerData({...brokerData, address: e.target.value})}
                />
              </div>
            </div>

            <div className="my-4">
              <div className='flex flex-col'>
                <label
                  htmlFor='cityInput'
                  className='block text-sm font-medium text-gray-600'
                >
                  Broker City
                </label>
                <input
                  type='text'
                  className='mt-1 p-2 block w-full border rounded-md border-gray-500'
                  id='cityInput'
                  name='city'
                  value={brokerData.city}
                  onChange={(e) => setBrokerData({...brokerData, city: e.target.value})}
                />
              </div>
            </div>

            <button
              className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none w-full"
              onClick={handleUpdate} 
            >
              Update Broker Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateBroker
