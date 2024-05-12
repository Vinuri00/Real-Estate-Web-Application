export const validateBooking = (req, res, next) => {
  const { userId, lawyerId, userNICNumber, propertyType, date } = req.body;

  if (!userId || !lawyerId || !userNICNumber || !propertyType || !date) {
    return res.status(400).json({ message: "Please enter all fields" });
  }

  if (!userId) {
    return res.status(400).json({ message: "Please enter userId" });
  }

  if (!lawyerId) {
    return res.status(400).json({ message: "Please enter lawyerId" });
  }

  if (!userNICNumber) {
    return res.status(400).json({ message: "Please enter userNICNumber" });
  }

  if (!propertyType) {
    return res.status(400).json({ message: "Please enter your propertyType" });
  }

  if (!date || isNaN(Date.parse(date))) {
    return res.status(400).json({ message: "Invalid date" });
  }

  next();
};
