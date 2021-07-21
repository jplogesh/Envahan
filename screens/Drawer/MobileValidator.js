export function MobileValidator(mobilenumber) {
  if (!mobilenumber) return "mobileNumber can't be empty.";
  if (mobilenumber.length < 10)
    return "Mobilenumber must be at least 10 characters long.";
  if (mobilenumber.length > 10)
    return "Mobilenumber must be in 10 characters long.";
  return "";
}
