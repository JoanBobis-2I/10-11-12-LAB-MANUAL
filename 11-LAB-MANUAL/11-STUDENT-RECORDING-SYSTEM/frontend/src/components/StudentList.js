import React from "react";

const StudentList = ({ students, deleteStudent }) => {
  return (
    <ul>
      {students.map((student) => (
        <li key={student.id} className="student-card">
          {student.image && (
            <div className="student-avatar">
              <img src={`http://localhost:5000${student.image}`} alt="Student" />
            </div>
          )}
          <div className="student-name">{student.name}</div>
          <div className="student-course">{student.course}</div>
          <button onClick={() => deleteStudent(student.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default StudentList;

