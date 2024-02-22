import "./index.css";
function Status() {
    return (
      <div>
        <h2>Status</h2>
        <div className="flex-grow-0 me-2 d-none d-lg-block">
            <h3>Course Status</h3>
            <button className="menu-buttons" type="button">
                <i className="fa-solid fa-ban course-setting-icon"></i>Unpublished</button>
            <button className="menu-buttons btn-published" type="button">
                <i className="fa-solid fa-circle-check course-setting-icon"></i>Published</button>
            <ul className="list-course-status">
                <li><button className="menu-buttons">
                <i className="fa-solid fa-file-import course-setting-icon"></i>Import Existing Content</button></li>
                <li><button className="menu-buttons">
                <i className="fa fa-right-from-bracket course-setting-icon"></i>Import From Commons</button></li>
                <li><button className="menu-buttons">
                <i className="fa-regular fa-circle-dot course-setting-icon"></i>Choose Home Page</button></li>
                <li><button className="menu-buttons">
                <i className="fa-solid fa-chart-simple course-setting-icon"></i>View Course Stream</button></li>
                <li><button className="menu-buttons">
                <i className="fa-solid fa-bullhorn course-setting-icon"></i>New Announcement</button></li>
                <li><button className="menu-buttons">
                <i className="fa-solid fa-chart-simple course-setting-icon"></i>New Analytics</button></li>
                <li><button className="menu-buttons">
                <i className="fa-regular fa-bell course-setting-icon"></i>View Course Notifications</button></li>
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