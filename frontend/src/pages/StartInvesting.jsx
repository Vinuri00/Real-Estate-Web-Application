import { useEffect, useState } from 'react'

const StartInvesting = () => {
  const [advertisements, setAdvertisement] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/advertisements/get-all")
      .then(response => response.json())
      .then(data => setAdvertisement(data))
      .catch(error => console.error('Error fetching advertisements', error))
  }, [])
  
  return (
    <>
      <div className='px-28'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-14'>
          {advertisements.map(advertisement => (
            <div
              key={advertisement._id}
              className='w-full max-w-sm rounded-lg shadow-md
                border-gray-200
                dark:bg-green-100
                dark:border-gray-700'
            >
              <a href='#'>
                <img
                  className='rounded-t-lg'
                  src='https://t3.ftcdn.net/jpg/05/56/88/18/360_F_556881864_T6KNWit9nKkRcgo7543KQQDJfIDvtocG.jpg'
                  alt=''
                />
              </a>
              <div className='p-4'>

                <a href='#'>
                  <h5 className='mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-black'>
                    {advertisement.title}
                    {/* Noteworthy technology acquisitions 2021 */}
                  </h5>
                </a>

                <p className='mb-3 font-normal text-center text-gray-700 dark:text-gray-700'>
                  {advertisement.description}
                  {/* Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order. */}
                </p>

                <div className="text-sm text-black dark:text-black mt-2">
                    Owner Name: {advertisement.ownerName}
                </div>

                <div className="text-sm text-black dark:text-black mt-2">
                    Contact Number: {advertisement.contactNumber}
                </div>

                <div className="text-sm text-black dark:text-black mt-2">
                    Price: {advertisement.price}
                </div>

                <div className="text-sm text-black dark:text-black mt-2">
                    Location: {advertisement.location}
                </div>

                <div className='flex justify-center pt-5'>
                  {' '}
                  {/* Center the button */}
                  <a
                    href='#'
                    className='inline-flex items-center px-3 py-2 font-medium text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
                  >
                    Read more
                    <svg
                      className='rtl:rotate-180 w-3.5 h-3.5 ms-2'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 14 10'
                    >
                      <path
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M1 5h12m0 0L9 1m4 4L9 9'
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))} 
        </div>
      </div>
    </>
  )
}

export default StartInvesting
