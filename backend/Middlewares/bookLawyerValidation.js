export const validateBooking = (req, res, next) => {
  const { fullName, contactNumber, nicNumber, email, propertyType } = req.body;

  if (!fullName || !contactNumber || !nicNumber || !email || !propertyType) {
    return res.status(400).json({ message: "Please enter all fields" });
  }

  
  if (!fullName) {
    return res.status(400).json({ message: "Please enter Broker Name" });
  }

  if (!contactNumber) {
    return res.status(400).json({ message: "Please enter Contact Number" });
  }
  
  if (!nicNumber) {
    return res.status(400).json({ message: "Please enter NIC Number" });
  }

  if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
    return res.status(400).json({ message: "Invalid email" });
  }

  if (!propertyType) {
    return res.status(400).json({ message: "Please enter your property type" });
  }

  next();
};
