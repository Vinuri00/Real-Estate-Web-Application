// When a admin registers, the following validation is performed
export const validateLawyerRegister = (req, res, next) => {
    const { fullName, userName, email, contactNumber, password, companyName, licenseNumber, yearsOfExperience } = req.body;
  
    if (!fullName || !userName || !email || !contactNumber || !password || !licenseNumber || !yearsOfExperience) {
      return res.status(400).json({ message: "Please enter all fields" });
    }
  
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "password must be at least 6 characters long" });
    }
  
    if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      return res.status(400).json({ message: "Invalid email" });
    }
  
    if (!fullName) {
      return res.status(400).json({ message: "Please enter fullName" });
    }
  
    if (!userName) {
      return res.status(400).json({ message: "Please enter userName" });
    }
  
    if (!email) {
      return res.status(400).json({ message: "Please enter email" });
    }
  
    if (!contactNumber) {
      return res.status(400).json({ message: "Please enter contactNumber" });
    }

    if (!password) {
      return res.status(400).json({ message: "Please enter password" });
    }

    if (!companyName) {
        return res.status(400).json({ message: "Please enter companyName" });
      }
  

    if (!licenseNumber) {
      return res.status(400).json({ message: "Please enter licenseNumber" });
    }

    if (!yearsOfExperience) {
      return res.status(400).json({ message: "Please enter yearsOfExperience" });
    }
  
    next();
  };
  
  // When a admin logs in, the following validation is performed
  export const validateLawyerLogin = (req, res, next) => {
    const { userName, password } = req.body;
  
    if (!userName || !password) {
      return res.status(400).json({ message: "Please enter all fields" });
    }
  
    if (!userName) {
      return res.status(400).json({ message: "Please enter userName" });
    }
  
    if (!password) {
      return res.status(400).json({ message: "Please enter password" });
    }
  
    next();
  };
  