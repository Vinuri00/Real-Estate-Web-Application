import { useNavigate } from 'react-router-dom'
import React from 'react'
import { useEffect, useState } from 'react'
import axios, {
  GET_ALL_ADVERTISEMENTS,
  APPROVE_ADVERTISEMENT,
  REJECT_ADVERTISEMENT
} from '@/api/axios'
import Swal from 'sweetalert2'
import { Button } from '@material-tailwind/react'
import { AdvertisementModel } from '@/models/advertisements'

const AdvertisementComponent = () => {
  const [advertisement, setAdvertisement] = useState([AdvertisementModel])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchAdvertisements = async () => {
      try {
        const response = await axios.get(GET_ALL_ADVERTISEMENTS)
        console.log(response.data)
        setAdvertisement(response.data)
      } catch (error) {
        console.error('Error fetching advertisements data', error)
      }
    }

    fetchAdvertisements()
  }, [])

  const handleApprove = async (advertisementId) => {
    try {
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, approve it!'
      })

      if (result.isConfirmed) {
        const res = await axios.put(
          `${APPROVE_ADVERTISEMENT}/${advertisementId}`
        )

        if (res.status !== 200) {
          throw new Error('Failed to approve the advertisement')
        }

        Swal.fire({
          title: 'Approved!',
          text: 'The advertisement has been approved.',
          icon: 'success'
        }).then(() => {
          navigate(0)
        })
      }
    } catch (error) {
      console.error('Error approving the advertisement:', error)
      Swal.fire({
        title: 'Error!',
        text: 'Failed to approve the advertisement.',
        icon: 'error'
      })
    }
  }

  const handleReject = async (advertisementId) => {
    try {
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, reject it!'
      })

      if (result.isConfirmed) {
        const res = await axios.put(
          `${REJECT_ADVERTISEMENT}/${advertisementId}`
        )

        if (res.status !== 200) {
          throw new Error('Failed to reject the advertisement')
        }

        Swal.fire({
          title: 'Rejected!',
          text: 'The advertisement has been rejected.',
          icon: 'success'
        }).then(() => {
          navigate(0)
        })
      }
    } catch (error) {
      console.error('Error rejecting the advertisement:', error)
      Swal.fire({
        title: 'Error!',
        text: 'Failed to reject the advertisement.',
        icon: 'error'
      })
    }
  }

  return (
    <>
      <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url('/img/background-image.png')] bg-cover bg-center">
        <div className='absolute inset-0 h-full w-full bg-gray-900/75'>
          <div className='flex h-full items-center justify-center'>
            <p className='text-4xl font-bold text-white'>Manage Advertisement</p>
          </div>
        </div>
      </div>
      <div className='mb-8 flex flex-col gap-12'>
        <div className='container max-auto px-4 py-8'>
          {/* <Link
                  to={'/dashboard/advertisement/add-new'}
                  className='block md:inline-block mb-4'
                >
                  <button className='mb-3 md:mb-0 md:mr-3' color='green'>
                    Approve Advertisement
                  </button>
                </Link> */}
          <div className='-mx-4 overflow-x-auto'>
            <table className='min-w-full divide-y divide-gray-200'>
              <thead className='bg-gray-50'>
                <tr>
                  <th className='px-6 py-3 text-left text-xs front-medium text-gray-700 uppercase tracking-wider'>
                    Title
                  </th>
                  <th className='px-6 py-3 text-left text-xs front-medium text-gray-700 uppercase tracking-wider'>
                    Description
                  </th>
                  <th className='px-6 py-3 text-left text-xs front-medium text-gray-700 uppercase tracking-wider'>
                    Owner's Name
                  </th>
                  <th className='px-6 py-3 text-left text-xs front-medium text-gray-700 uppercase tracking-wider'>
                    Contact Number
                  </th>
                  {/* <th className='px-6 py-3 text-left text-xs front-medium text-gray-700 uppercase tracking-wider'>
                    Images
                  </th> */}
                  <th className='px-6 py-3 text-left text-xs front-medium text-gray-700 uppercase tracking-wider'>
                    Price (LKR)
                  </th>
                  <th className='px-6 py-3 text-left text-xs front-medium text-gray-700 uppercase tracking-wider'>
                    Location
                  </th>
                  <th className='px-6 py-3 text-left text-xs front-medium text-gray-700 uppercase tracking-wider'>
                    Advertisement Status
                  </th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider'>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200'>
                {advertisement.map(advertisement => (
                  <tr key={advertisement._id}>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      {advertisement.title}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      {advertisement.description}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      {advertisement.ownerName}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      {advertisement.contactNumber}
                    </td>
                    {/* <td className='px-6 py-4 whitespace-nowrap'>
                      {advertisement.image}
                    </td> */}
                    <td className='px-6 py-4 whitespace-nowrap'>
                      {advertisement.price}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      {advertisement.location}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      {/* Shorten if */}
                      {advertisement.status == 0
                        ? "Pending"
                        : advertisement.status == 1
                        ? "Approved"
                        : "Rejected"}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <Button
                        onClick={() => handleApprove(advertisement._id)}
                        className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded md:mr-2'
                        color='green'
                      >
                        Approve
                      </Button>

                      <Button
                        onClick={() => handleReject(advertisement._id)}
                        className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded md:mr-2'
                        color='red'
                      >
                        Reject
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdvertisementComponent