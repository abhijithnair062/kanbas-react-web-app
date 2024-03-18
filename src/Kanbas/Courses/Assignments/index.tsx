import "./index.css";
import React, { useState } from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle, FaPlus } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { KanbasState } from "../../store";
import { deleteAssignment } from "./assignmentsReducer";
function Assignments() {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const assignments = useSelector((state: KanbasState) =>
      state.assignmentsReducer.assignments);
  function deleteHndlr(id: any) {
      const confirmed = window.confirm("Confirm deletion of this assignment?");
      if (confirmed) dispatch(deleteAssignment(id));
  }
  return (
    <>
             
      <div className="top-row">
                <input className="my-1 form-control w-25 d-inline-block" type="text" placeholder="Search for assignments" />
                <span className="float-end">
                    <button className="menu-buttons" type="button">
                        <i className="fa-solid fa-plus course-setting-icon"><FaPlus/></i>
                        Group
                        </button>
                        <Link
                          to={`/Kanbas/Courses/${courseId}/Assignments/new`}>
                          <button className="menu-buttons assignment" type="button">
                          <i className="fa-solid fa-plus course-setting-icon"><FaPlus/></i>
                          Assignment
                          </button></Link>
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
          {assignments.filter(
                            (assignment) => assignment.course === courseId).map((assignment) => (
              <li className="list-group-item">
                <FaEllipsisV className="me-2" />
                <Link
                   to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                <span className="float-end">
                  <button className="btn btn-danger mx-2 rounded px-2" onClick={() => { deleteHndlr(assignment._id) }}>Delete</button>
                  <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
              </li>))}
          </ul>
        </li>
      </ul>
    </>
);}
export default Assignments;