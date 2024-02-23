import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Rating = ({ value }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= value) {
      stars.push(<FaStar key={i} className="text-yellow-500" />);
    } else if (i - 0.5 === value) {
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-gray-300" />);
    }
  }

  return <div className="flex">{stars}</div>;
};

export default Rating;
