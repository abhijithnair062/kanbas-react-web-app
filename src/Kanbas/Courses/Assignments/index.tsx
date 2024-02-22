import "./index.css";
import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <>
      {            
      <div className="top-row">
                <input className="form-control w-25 d-inline-block" type="text" placeholder="Search for assignments" />
                <span className="float-end">
                    <button className="menu-buttons" type="button">
                        <i className="fa-solid fa-plus course-setting-icon"></i>
                        Group
                        </button>
                    <button className="menu-buttons assignment" type="button">
                        <i className="fa-solid fa-plus course-setting-icon"></i>
                        Assignment
                        </button>
                            <a href="/Kanbas/Courses/Assignments/Edit/screen.html"><button className="menu-buttons"><i className="fa fa-ellipsis-v"></i></button></a>
                </span>
        </div>
        }
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div>
            <FaEllipsisV className="me-2" /> ASSIGNMENTS
            <span className="float-end">
              <FaCheckCircle className="text-success" />
              <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment) => (
              <li className="list-group-item">
                <FaEllipsisV className="me-2" />
                <Link
                   to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                <span className="float-end">
                  <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
              </li>))}
          </ul>
        </li>
      </ul>
    </>
);}
export default Assignments;