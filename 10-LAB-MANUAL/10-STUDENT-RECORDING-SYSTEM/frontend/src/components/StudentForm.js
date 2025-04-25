import React, { useState } from "react";

const StudentForm = ({ addStudent }) => {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  const courses = [
    "Bachelor of Science in Information Technology",
    "Bachelor of Science in Office Administration",
    "Bachelor of Science in Accounting Information System",
    "Certificate in Computer Sciences",
    "Certificate in Office Administration",
    "Certificate in Hotel and Restaurant Management",
    "Associate in Business Administration",
    "Associate in Accounting Information System",
    "Associate in Human Resource Development",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && course) {
      addStudent(name, course);
      setName("");
      setCourse("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Student Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter student name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="course">Select Course:</label>
        <select
          id="course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        >
          <option value="">Select a course</option>
          {courses.map((courseOption, index) => (
            <option key={index} value={courseOption}>
              {courseOption}
            </option>
          ))}
        </select>
      </div>

      <button type="submit">Add Student</button>
    </form>
  );
};

export default StudentForm;