import { useState } from "react";
import axios, { CREATE_ADVERTISEMENTS } from "../api/axios";

const AdvertisementForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    ownerName: "",
    contactNumber: "",
    price: "",
    location: "",
    images: [],
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "images") {
      const images = Array.from(files);
      const imageFiles = images.slice(0, 5);
      setFormData({ ...formData, images: imageFiles });
      setErrorMessage("");
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const convertToBase64 = async (files) => {
    // console.log(files);
    const promises = files.map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });
    });

    try {
      const base64Images = await Promise.all(promises);
      return base64Images;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const handleImageChange = async (e) => {
    const images = Array.from(e.target.files);
    if (images.length <= 5) {
      // Check if the total size of the images is less than 5MB
      const maxSize = 5 * 1024 * 1024; // 5MB
      const oversizedFiles = images.filter((file) => file.size > maxSize);
      if (oversizedFiles.length > 0) {
        setErrorMessage("Please upload images less than 5MB");
        return;
      }

      const base64Images = await convertToBase64(images);
      setFormData({ ...formData, images: base64Images });
      setErrorMessage("");
    } else {
      // Display an error message or prevent further image selection
      setErrorMessage("You can only upload up to 5 images");
    }
  };

  // const[image, setImage] = useState("");

  // const convertToBase64 = (e) => {
  //   // console.log(e);
  //   var reader = new FileReader();
  //   reader.readAsDataURL(e.target.files[0]);
  //   reader.onload = function () {
  //     console.log(reader.result); // This will log the base64 encoded string
  //     setImage()
  //   };
  //   reader.onerror = (error) => {
  //     console.log("Error: ", error);
  //   };
  // };

  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if there are more than 5 images before submitting the form
    // if (formData.images.length > 5) {
    //   setErrorMessage("You can only upload up to 5 images");
    //   return;
    // }

    const advertisementData = {
      title: formData.title,
      description: formData.description,
      ownerName: formData.ownerName,
      contactNumber: formData.contactNumber,
      price: formData.price,
      location: formData.location,
      images: formData.images,
    };

    // console.log(advertisementData);

    try {
      const response = await axios.post(
        CREATE_ADVERTISEMENTS,
        JSON.stringify(advertisementData),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(response.data);
      // Optionally, reset the form fields after successful submission
      setFormData({
        title: "",
        description: "",
        ownerName: "",
        contactNumber: "",
        price: "",
        location: "",
        images: [],
      });
      setSuccessMessage("Advertisement created successfully");
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
            <label
              htmlFor="title"
              className="block mb-2 font-medium text-green-800"
            >
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
            <label
              htmlFor="description"
              className="block mb-2 font-medium text-green-800"
            >
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
            <label
              htmlFor="ownerName"
              className="block mb-2 font-medium text-green-800"
            >
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
            <label
              htmlFor="contactNumber"
              className="block mb-2 font-medium text-green-800"
            >
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
            <label
              htmlFor="price"
              className="block mb-2 font-medium text-green-800"
            >
              Price per perch
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
            <label
              htmlFor="location"
              className="block mb-2 font-medium text-green-800"
            >
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
            <label
              htmlFor="images"
              className="block mb-2 font-medium text-green-800 auth-inner"
            >
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

            {/* {image=="" || image==null?"": <img width={100} height={100} src={image}></img>} */}
          </div>
          {errorMessage && <div className="text-red-600">{errorMessage}</div>}

          {successMessage && (
            <div className="text-green-600">{successMessage}</div>
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
