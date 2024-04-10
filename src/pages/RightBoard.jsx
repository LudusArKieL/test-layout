import { CustomLink } from '../script/link.js'
import { FiArrowRight } from "react-icons/fi";
import { FaNoteSticky } from "react-icons/fa6";
import { FaItunesNote } from "react-icons/fa";
import { SiSimpleanalytics } from "react-icons/si";
import { GiSkills } from "react-icons/gi";
import { AiOutlineQuestionCircle, AiOutlineExclamationCircle } from "react-icons/ai";
import { LuAlarmClock } from "react-icons/lu";
import "../Style/rightboard.css";

export default function Rightboard({ toggleRightboard }) {
  return (
    <div className="rightboard-container">
      <FiArrowRight className="arrow-btn" onClick={toggleRightboard} />
      <div className="tool">
        <FaNoteSticky className="notes" />
        <LuAlarmClock className="timer" />
        <GiSkills className="skills" />
        <FaItunesNote className="Spotify" />
        <SiSimpleanalytics className="analysis" />
      </div>
      <hr />
      <div className="information">
        <CustomLink to="/about">
          <AiOutlineExclamationCircle/>
        </CustomLink>
      <AiOutlineQuestionCircle className="question" />
    </div>
    </div >
  );
}
