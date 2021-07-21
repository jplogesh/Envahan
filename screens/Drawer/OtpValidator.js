export function otpValidator(number) {
  if (!number) return "OTP fields can't be empty.";
  if (number.length < 4) return;
  return "";
}
