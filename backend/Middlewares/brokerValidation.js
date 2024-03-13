export const validateBrokerAdd = (req, res, next) => {
  const { fullName, email, contactNumber, address, city } = req.body;

  if (!fullName || !email || !contactNumber || !address || !city) {
    return res.status(400).json({ message: "Please enter all fields" });
  }

  if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
    return res.status(400).json({ message: "Invalid email" });
  }

  if (!fullName) {
    return res.status(400).json({ message: "Please enter Full Name" });
  }

  if (!email) {
    return res.status(400).json({ message: "Please enter Email" });
  }

  if (!contactNumber) {
    return res.status(400).json({ message: "Please enter Contact Number" });
  }

  if (!address) {
    return res.status(400).json({ message: "Please enter Address" });
  }
  if (!city) {
    return res.status(400).json({ message: "Please enter City" });
  }

  next();
};

// Create function for validate broker id

export const validateBrokerID = (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: "Please enter broker id" });
  }

  next();
};


// Create function for validate broker id with body
export const validateBrokerIDWithBody = (req, res, next) => {
  const { id } = req.params;
  const { fullName, email, contactNumber, address, city } = req.body;
  if (!id) {
    return res.status(400).json({ message: "Please enter broker id" });
  } 

  next();
};