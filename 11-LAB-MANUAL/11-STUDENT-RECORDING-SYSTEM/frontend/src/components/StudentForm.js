import React, { useState } from "react";
import axios from "axios";

const StudentForm = ({ addStudent }) => {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");

  const courses = [
    "Bachelor of Science Information Technology (BSIT)",
    "Certificate in Computer Sciences (CCS)",
    "Bachelor of Science in Office Administration (BSOA)",
    "Certificate in Office Administration (COA)",
    "Associate in Business Administration (ABA)",
    "Associate in Accounting Information System (AAIS)",
    "Associate in Human Resource Development (AHRD)",
    "Associate in Hotel and Restaurant Technology (AHRT)",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !course) {
      setMessage("Please fill in all fields.");
      return;
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("course", course);
    if (image) formData.append("image", image);

    await addStudent(formData);
    setName("");
    setCourse("");
    setImage(null);
    setMessage("Student added successfully!");
  };

  return (
    <div className="text-center">
      <form onSubmit={handleSubmit} className="student-form">
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-input"
        />
        <select
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          className="form-select"
        >
          <option value="" disabled>
            Select a Course
          </option>
          {courses.map((course, index) => (
            <option key={index} value={course}>
              {course}
            </option>
          ))}
        </select>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="form-file-input"
        />
        <button type="submit" className="form-button">
          Add Student
        </button>
      </form>
      <p className="success-message">{message}</p>
    </div>
  );
};

export default StudentForm;
