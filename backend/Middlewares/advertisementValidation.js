export const validateAdvertisement = (req, res, next) => {
    const { title, description, ownerName, contactNumber, image, price, location } = req.body;

    if (!title) {
        return res.status(400).json({ message: "Please enter the title" });
    }

    if (!description) {
        return res.status(400).json({ message: "Please enter the description" });
    }

    if (!ownerName) {
        return res.status(400).json({ message: "Please enter the owner's name" });
    }

    if (!contactNumber) {
        return res.status(400).json({ message: "Please enter contact number" });
    }

    // if (!image) {
    //     return res.status(400).json({ message: "Please add images of the land" });
    // }

    if (!price) {
        return res.status(400).json({ message: "Please enter the price" });
    }

    if (!location) {
        return res.status(400).json({ message: "Please enter the location" });
    }    

    next();
};

