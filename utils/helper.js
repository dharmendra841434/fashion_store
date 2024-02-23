export function calculateDiscountedPrice(originalPrice, discountPercentage) {
  if (originalPrice < 0 || discountPercentage < 0 || discountPercentage > 100) {
    return "Invalid input. Please provide valid values.";
  }

  const discountAmount = (originalPrice * discountPercentage) / 100;
  const discountedPrice = originalPrice - discountAmount;

  return Math.floor(discountedPrice);
}

export const colors = {
  black: "#191919",
  blue: "#1D2B53",
  cream: "#FFE7C1",
  purple: "#872341",
  cream404: "#FECDA6",
  green404: "#99B080",
  gray: "#A4AB9D",
};

export function generateOTP() {
  // Generate a random 4-digit number
  const otp = Math.floor(100000 + Math.random() * 900000);
  return otp;
}

export function sortString(inputString, maxLength) {
  if (inputString?.length > maxLength) {
    return inputString?.substring(0, maxLength - 3) + "...";
  } else {
    return inputString;
  }
}
