import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import './App.css';

const App = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const response = await axios.get("http://localhost:5000/api/students");
    setStudents(response.data);
  };

  const addStudent = async (formData) => {
    await axios.post("http://localhost:5000/api/students", formData);
    fetchStudents();
  };

  const deleteStudent = async (id) => {
    await axios.delete(`http://localhost:5000/api/students/${id}`);
    fetchStudents();
  };

  return (
    <div className="App app-container">
      <div className="sidebar">
        <h1>Recording Student System</h1>
        <StudentForm addStudent={addStudent} />
      </div>
      <div className="student-panel">
        <StudentList students={students} deleteStudent={deleteStudent} />
      </div>
    </div>
  );
};

export default App;

