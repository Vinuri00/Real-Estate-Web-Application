export const validateLogin = (name, value) => {
  switch (name) {
    case "username":
      if (value.trim() === "") {
        return "UserName is required!";
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

    default:
      break;
  }
};
