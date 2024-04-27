import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import axios from '@/api/axios'
import { CREATE_NEW_BROKER_URL } from '@/api/axios'
import { BrokerModel } from '@/models/brokers'
import { validateAddBroker } from '@/validations/broker'

const AddBroker = () => {
  const navigate = useState()
  const [userData, setUserData] = useState(BrokerModel)

  const [image, setImage] = useState('')

  const handleInputChange = e => {
    const { name, value } = e.target
    setUserData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const convertToBase64 = e => {
    const reader = new FileReader()
    reader.readAsDataURL(e.target.files[0])

    reader.onload = function () {
      setImage(reader.result)
    }
  }

  const onSubmit = async e => {
    e.preventDefault()

    if (validateAddBroker()) {
      try {
        const { fullName, email, contactNumber, address, city } = userData
        const response = await axios.post(CREATE_NEW_BROKER_URL, {
          fullName,
          email,
          contactNumber,
          address,
          city,
          image // Send the image as well
        })

        console.log(response.data)

        // Clear the form after successul submission
        setUserData({
          fullName: '',
          email: '',
          contactNumber: '',
          address: '',
          city: ''
        })

        // Show success message
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'New broker has been added successfully!'
        }).then(result => {
          navigate('/dasboard/broker')
        })
      } catch (error) {
        console.error('Error in adding a new broker:', error)
        // Show error message
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong! Please try again.'
        })
      }
    }
  }

  return (
    <>
      <div>
        <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url('/img/background-image.png')] bg-cover bg-center">
          <div className='absolute inset-0 h-full w-full bg-gray-900/75'>
            <div className='flex h-full items-center justify-center'>
              <p className='text-4xl font-bold text-white'>Add Brokers</p>
            </div>
          </div>
        </div>
        <div className='mb-8 mt-12 flex flex-col gap-12'>
          <div className='container mx-auto p-4'>
            <form className='max-w-md mx-auto border border-gray-500 rounded-md p-4'>
              <div className='mb-4 '>
                <label
                  htmlFor='fullName'
                  className='block text-sm font-medium text-gray-600'
                >
                  Broker's Full Name
                </label>
                <input
                  className='mt-1 p-2 block w-full border rounded-md border-gray-500'
                  id='fullName'
                  name='fullName'
                  value={userData.fullName}
                  onChange={handleInputChange}
                ></input>
                <div>
                  <div className='mb-4'>
                    <label
                      htmlFor='email'
                      className='block text,-sm font-medium text-gray-600'
                    >
                      Broker's Email
                    </label>
                    <input
                      className='mt-1 p-2 block w-full border rounded-md border-gray-500'
                      id='email'
                      value={userData.email}
                      onChange={handleInputChange}
                    ></input>
                  </div>
                  <div>
                    <label
                      htmlFor='fullName'
                      className='block text-sm font-medium text-gray-600'
                    >
                      Broker's Contact Number
                    </label>
                    <input
                      className='mt-1 p-2 block w-full border rounded-md border-gray-500'
                      type='number'
                      id='contactNumber'
                      name='contactNumber'
                      value={userData.contactNumber}
                      onChange={handleInputChange}
                      pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                      maxLength={10}
                      inputmode='numeric'
                    ></input>
                  </div>
                  <div className='mb-4 '>
                    <label
                      htmlFor='address'
                      className='block text-sm font-medium text-gray-600'
                    >
                      Broker's Address
                    </label>
                    <input
                      className='mt-1 p-2 block w-full border rounded-md border-gray-500'
                      id='address'
                      name='address'
                      value={userData.address}
                      onChange={handleInputChange}
                    ></input>
                  </div>
                  <div className='mb-6 pt-4'>
                    <label className='block text-sm font-medium text-gray-600 '>
                      Broker's City
                    </label>
                    <input
                      className='mt-1 p-2 block w-full border rounded-md border-gray-500'
                      id='city'
                      name='city'
                      value={userData.city}
                      onChange={handleInputChange}
                    ></input>
                  </div>
                  <div className='mb-6 pt-4'>
                    <label className='block text-sm font-medium text-gray-600 '>
                      Upload the Broker's image
                    </label>
                    <div className='mb-8'>
                      <input
                        type='file'
                        name='file'
                        id='file'
                        className='sr-only'
                        onChange={convertToBase64}
                      />
                      {image === '' || image == null ? (
                        ''
                      ) : (
                        <img width={100} height={100} src={image} alt='' />
                      )}
                      <label
                        htmlFor='file'
                        className='relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-gray-600 p-12 text-center'
                      >
                        <div>
                          <span className='mb-2 block text-xl font-semibold text-gray-600'>
                            Drop files here
                          </span>
                          <span className='mb-2 block text-base font-medium text-gray-600'>
                            Or
                          </span>
                          <span className='inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-gray-600'>
                            Browse
                          </span>
                        </div>
                      </label>
                    </div>
                  </div>

                  <button
                    type='submit'
                    className='bg-green-500 text-white px-4 py-2 rounded-md w-full'
                    onClick={onSubmit}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddBroker
