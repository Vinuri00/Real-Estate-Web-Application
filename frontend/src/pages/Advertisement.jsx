import { useState } from 'react';
import axios from 'axios';

const AdvertisementForm = () => {
const [formData, setFormData] = useState({
    title: '',
    description: '',
    ownerName: '',
    contactNumber: '',
    price: '',
    location: '',
    images: []
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const images = Array.from(e.target.files);
    if (images.length <= 5) {
        setFormData({ ...formData, images });
        setErrorMessage('');
    } else {
        // Display an error message or prevent further image selection
        setErrorMessage('You can only upload up to 5 images');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if there are more than 5 images before submitting the form
    if (formData.images.length > 5) {
        setErrorMessage('You can only upload up to 5 images');
    }

    const formDataToSend = new FormData();
    formData.images.forEach((image, index) => {
      formDataToSend.append(`image${index + 1}`, image);
    });

    try {
      const response = await axios.post('/api/advertisement', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen mt-16">
      <div className="bg-white p-8 rounded shadow-2xl w-full md:w-1/2">
        <h2 className="text-2xl font-bold text-center mb-5">
          Advertisement Details
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="mb-5">
            <label htmlFor="title" className="block mb-2 font-medium text-green-800">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="bg-green-50 border 
                       border-green-500 
                       text-black
                       dark:text-black
                       placeholder-green-700
                       focus:ring-green-500
                       focus:border-green-700
                       dark:bg-green-100
                       dark:border-green-500
                       text-sm rounded-lg block w-full p-2.5"
              placeholder="Advertisement Title"
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="description" className="block mb-2 font-medium text-green-800">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="bg-green-50 border 
                       border-green-500 
                       text-black
                       dark:text-black
                       placeholder-green-700
                       focus:ring-green-500
                       focus:border-green-700
                       dark:bg-green-100
                       dark:border-green-500
                       text-sm rounded-lg block w-full p-2.5"
              placeholder="Advertisement Description"
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="ownerName" className="block mb-2 font-medium text-green-800">
              Owner Name
            </label>
            <input
              type="text"
              id="ownerName"
              name="ownerName"
              value={formData.ownerName}
              onChange={handleChange}
              className="bg-green-50 border 
                       border-green-500 
                       text-black
                       dark:text-black
                       placeholder-green-700
                       focus:ring-green-500
                       focus:border-green-700
                       dark:bg-green-100
                       dark:border-green-500
                       text-sm rounded-lg block w-full p-2.5"
              placeholder="Owner Name"
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="contactNumber" className="block mb-2 font-medium text-green-800">
              Contact Number
            </label>
            <input
              type="text"
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className="bg-green-50 border 
                       border-green-500 
                       text-black
                       dark:text-black
                       placeholder-green-700
                       focus:ring-green-500
                       focus:border-green-700
                       dark:bg-green-100
                       dark:border-green-500
                       text-sm rounded-lg block w-full p-2.5"
              placeholder="Contact Number"
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="price" className="block mb-2 font-medium text-green-800">
              Price
            </label>
            <input
              type="text"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="bg-green-50 border 
                       border-green-500 
                       text-black
                       dark:text-black
                       placeholder-green-700
                       focus:ring-green-500
                       focus:border-green-700
                       dark:bg-green-100
                       dark:border-green-500
                       text-sm rounded-lg block w-full p-2.5"
              placeholder="Price"
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="location" className="block mb-2 font-medium text-green-800">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="bg-green-50 border 
                       border-green-500 
                       text-black
                       dark:text-black
                       placeholder-green-700
                       focus:ring-green-500
                       focus:border-green-700
                       dark:bg-green-100
                       dark:border-green-500
                       text-sm rounded-lg block w-full p-2.5"
              placeholder="Location"
              required
            />
          </div>

          <div className="mb-5">
            <label htmlFor="images" className="block mb-2 font-medium text-green-800">
              Images (Up to 5 images)
            </label>
            <input
              type="file"
              id="images"
              name="images"
              accept="image/*"
              multiple
              onChange={handleImageChange}
              className="bg-green-50 border 
                         border-green-500 
                         text-black
                         dark:text-black
                         placeholder-green-700
                         focus:ring-green-500
                         focus:border-green-700
                         dark:bg-green-100
                         dark:border-green-500
                         text-sm rounded-lg block w-full p-2.5"
            ></input>
          </div>
          {errorMessage && (
            <div className="text-red-600">{errorMessage}</div>
          )}

          <div className="flex justify-center">
            <button
               type="submit"
               className="w-full md:w-9/10 bg-green-600 hover:bg-green-900 text-white px-4 py-1.5 rounded mt-8" 
            >
                Create My Advertisement
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdvertisementForm;
