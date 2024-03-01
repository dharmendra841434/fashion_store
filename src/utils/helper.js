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

export const addingToCart = (
  cartItems,
  single_product_data,
  selectedSize,
  activeImage
) => {
  let details = [...cartItems];
  details.push({
    ...single_product_data,
    size: selectedSize,
    selectedColor: activeImage,
    quantity: 1,
  });
  return details;
};

export const sizeChart = [
  { size: "S", chest: 34, waist: 26, hips: 36 },
  { size: "M", chest: 36, waist: 28, hips: 38 },
  { size: "L", chest: 38, waist: 30, hips: 40 },
  { size: "XL", chest: 40, waist: 32, hips: 42 },
];

export function isAddedToCart(array, id) {
  //console.log(array[0]?._id === id, 'akjsiku');
  return array?.length > 0 && array?.some((obj) => obj._id === id);
}

export function getLocation() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            accuracy: position.coords.accuracy,
          });
        },
        (error) => {
          reject(error);
        },
        {
          maximumAge: 0, // Request fresh location
          timeout: 5000, // Timeout in milliseconds (5 seconds in this case)
          enableHighAccuracy: true, // Request high accuracy
        }
      );
    } else {
      reject(new Error("Geolocation is not supported by this browser."));
    }
  });
}

export function calculateTotalPrice(objectsArray) {
  let total = objectsArray?.reduce((total, obj) => {
    return (
      total + obj?.quantity * calculateDiscountedPrice(obj.price, obj.discount)
    );
  }, 0);

  return total;
}
export function calculateTotalAtualPrice(objectsArray) {
  let total = objectsArray?.reduce((total, obj) => {
    return total + obj?.quantity * obj.price;
  }, 0);

  return total;
}

export function changeSelectedColor(array, id, newValue) {
  const updatedArray = array.map((item) => {
    if (item._id === id) {
      // Modify the specified field for the object with the matching ID
      return { ...item, selectedColor: newValue };
    }
    return item;
  });

  return updatedArray;
}
export function changeSelectedSize(array, id, newValue) {
  const updatedArray = array.map((item) => {
    if (item._id === id) {
      // Modify the specified field for the object with the matching ID
      return { ...item, size: newValue };
    }
    return item;
  });

  return updatedArray;
}

export function increasQty(array, id, preValue) {
  const updatedArray = array.map((item) => {
    if (item._id === id) {
      // Modify the specified field for the object with the matching ID
      return { ...item, quantity: preValue + 1 };
    }
    return item;
  });

  return updatedArray;
}

export function decreasQty(array, id, preValue) {
  const updatedArray = array.map((item) => {
    if (item._id === id) {
      // Modify the specified field for the object with the matching ID
      return { ...item, quantity: preValue - 1 };
    }
    return item;
  });

  return updatedArray;
}
