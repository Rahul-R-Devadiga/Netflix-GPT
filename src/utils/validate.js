export const checkValidData = (email, password) => {
  const isEmailValid =
    /^([a-zA-Z0-9._]+@(gmail\.com|yahoo\.com|outlook\.com))$/.test(email);
  const isPasswordValid =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password);
  if (!isEmailValid) return "Email Id is not valid";
  if (!isPasswordValid) return "Password is not valid";
  return null;
};
