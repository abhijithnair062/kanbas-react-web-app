import "./index.css";
import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle, FaPlus } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <>
             
      <div className="top-row">
                <input className="my-1 form-control w-25 d-inline-block" type="text" placeholder="Search for assignments" />
                <span className="float-end">
                    <button className="menu-buttons" type="button">
                        <i className="fa-solid fa-plus course-setting-icon"><FaPlus/></i>
                        Group
                        </button>
                    <button className="menu-buttons assignment" type="button">
                        <i className="fa-solid fa-plus course-setting-icon"><FaPlus/></i>
                        Assignment
                        </button>
                            <a href="#"><button className="menu-buttons"><i className="fa fa-ellipsis-v"><FaEllipsisV/></i></button></a>
                </span>
        </div>
        
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div>
            <FaEllipsisV className="me-2" /> ASSIGNMENTS
            <span className="float-end">
            <button type="button" className="weightage-assignment" disabled>40% of Total</button>
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