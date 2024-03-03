// When a admin registers, the following validation is performed
export const validateAdminRegister = (req, res, next) => {
  const { fullName, username, email, password } = req.body;

  if (!fullName || !username || !email || !password) {
    return res.status(400).json({ message: "Please enter all fields" });
  }

  if (password.length < 6) {
    return res
      .status(400)
      .json({ message: "Password must be at least 6 characters long" });
  }

  if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
    return res.status(400).json({ message: "Invalid email" });
  }

  if (!fullName) {
    return res.status(400).json({ message: "Please enter Full Name" });
  }

  if (!username) {
    return res.status(400).json({ message: "Please enter Username" });
  }

  if (!email) {
    return res.status(400).json({ message: "Please enter Email" });
  }

  if (!password) {
    return res.status(400).json({ message: "Please enter Password" });
  }

  next();
};

// When a admin logs in, the following validation is performed
export const validateAdminLogin = (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Please enter all fields" });
  }

  if (!username) {
    return res.status(400).json({ message: "Please enter Username" });
  }

  if (!password) {
    return res.status(400).json({ message: "Please enter Password" });
  }

  next();
};
