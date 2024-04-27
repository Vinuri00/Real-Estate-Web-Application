import { runToast } from "./toast";

export const validateAddBroker = (fullName, email, contactNumber, address, city) => {
    if (!fullName) {
        runToast("Please enter the broker's full name!", "errot");
        return false;
    }

    if(!email) {
        runToast("Please enter the email of the broker!", "error");
        return false;
    }

    if(!contactNumber) {
        runToast("Please enter the broker's contact number!", "error");
        return false;
    }

    if(!address) {
        runToast("Please enter the broker's address!", "error");
        return false;
    }

    if(!city) {
        runToast("Please enter the broker's city!", "error");
        return false;
    }

    return true;
}