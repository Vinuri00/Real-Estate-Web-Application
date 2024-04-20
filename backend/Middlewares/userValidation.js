export const validateUserRegister = (req, res, next) => {
    const { fullName, userName, email, contactNumber, password } = req.body;
    
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
    
    next();
};

// When a user logs in, the following validation is performed
export const validateUserLogin = (req, res, next) => {
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