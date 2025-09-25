import { FaStar } from 'react-icons/fa'; // Or your chosen icon

const Star = ({ color = 'gold', size = '20px' }) => {
  return <FaStar style={{ color, fontSize: size }} />;
};

export default Star;