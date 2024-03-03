export const validateRegister = (name, value) => {
  switch (name) {
    case "fullName":
      if (value.trim() === "") {
        return "Full Name is required!";
      }
      break;

    case "email":
      if (!/\S+@\S+.\S+/.test(value)) {
        return "Email is not valid!";
      }
      break;

    case "password":
      if (
        value.length < 6 ||
        !/[A-Z]/.test(value) ||
        !/[!@#$%^&*]/.test(value)
      ) {
        const message =
          "Password must be at least 6 characters! include: \n Should include at least one capital letter! \n Should include at least one symbol!";
        return message;
      }
      break;

    case "phone":
      if (!/^\+\d{1,3} \d{3} \d{3} \d{3}$/.test(value)) {
        return "Phone number is not valid";
      }
      break;

    case "address":
      if (value.trim() === "") {
        return "Address is required";
      }
      break;

    case "companyName":
      if (value.trim() === "") {
        return "Company Name is required";
      }
      break;

    case "licenseNumber":
      if (value.trim() === "") {
        return "License Number is required";
      }
      break;

    case "yearsOfExperience":
      if (value.trim() === "") {
        return "Years of Experience is required";
      }
      break;

    case "areaOfExpertise":
      if (value.trim() === "") {
        return "Area of Expertise is required";
      }
      break;

    default:
      break;
  }
};
