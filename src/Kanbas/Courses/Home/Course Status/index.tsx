import "./index.css";
import { FaBan, FaCheckCircle, FaFileImport, FaCaretRight, FaDotCircle, FaChartArea, FaBullhorn, FaBell } from "react-icons/fa";
function Status() {
    return (
      <div>
        <h2>Status</h2>
        <div className="flex-grow-0 me-2 d-none d-lg-block">
            <h3>Course Status</h3>
            <button className="menu-buttons" type="button">
                <span className="course-setting-icon"><FaBan/></span>Unpublished</button>
            <button className="menu-buttons btn-published" type="button">
                <span className="course-setting-icon"><FaCheckCircle/></span>Published</button>
            <ul className="list-course-status">
                <li><button className="menu-buttons">
                <span className="course-setting-icon"><FaFileImport/></span>Import Existing Content</button></li>
                <li><button className="menu-buttons">
                <span className="course-setting-icon"><FaCaretRight/></span>Import From Commons</button></li>
                <li><button className="menu-buttons">
                <span className="course-setting-icon"><FaDotCircle/></span>Choose Home Page</button></li>
                <li><button className="menu-buttons">
                <span className="course-setting-icon"><FaChartArea/></span>View Course Stream</button></li>
                <li><button className="menu-buttons">
                <span className="course-setting-icon"><FaBullhorn/></span>New Announcement</button></li>
                <li><button className="menu-buttons">
                <span className="course-setting-icon"><FaChartArea/></span>New Analytics</button></li>
                <li><button className="menu-buttons">
                <span className=""><FaBell/></span>View Course Notifications</button></li>
            </ul> 
            <h3>To Do</h3>
            <hr/>
            <span>Grade A1-ENV+HTML</span>
            <p></p>
            <h3>Coming up</h3>
            <a href="#">View Calender</a>
            <hr/>
            <span className="list-upcoming-lectures">
                <li><a href="#">Lecture CS4550.12631.202410 </a></li>
                <li><a href="#">Lecture CS4550.12631.202410 </a></li>
                <li><a href="#">CS5610 06 SP23 Lecture </a></li>
            </span>
        </div>
      </div>
    );
  }
  export default Status;