import React from "react";
import axios from "axios";

const StudentList = ({ students, deleteStudent }) => {
  return (
    <div className="list-container">
      <h2>Student List</h2>
      <ul>
        {students.length === 0 ? (
          <p>No students added yet.</p>
        ) : (
          students.map((student) => (
            <li key={student.id} className="student-item">
              {student.name} - {student.course}
              <button
                className="delete-button"
                onClick={() => deleteStudent(student.id)}
              >
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default StudentList;