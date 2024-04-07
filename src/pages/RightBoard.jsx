import { FiArrowRight } from "react-icons/fi";
import "../Style/rightboard.css";

export default function Rightboard({toggleRightboard}) {
  return (
    <div className="rightboard-container">
      {/* Use onClick to call the boardOpen function */}
      <FiArrowRight className="arrow-btn" onClick={toggleRightboard} />
    </div>
  );
}
