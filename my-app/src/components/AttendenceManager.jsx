import React, { useState } from "react";

function AttendanceManager() {
  // Initial student data
  const initialStudents = [
    { id: 1, name: "Alice", present: true },
    { id: 2, name: "Bob", present: false },
    { id: 3, name: "Charlie", present: true },
    { id: 4, name: "Diana", present: false },
    { id: 5, name: "Ethan", present: true },
  ];

  const [students, setStudents] = useState(initialStudents);
  const [filter, setFilter] = useState("All");

  // Toggle attendance for a student by id
  const toggleAttendance = (id) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id
          ? { ...student, present: !student.present }
          : student
      )
    );
  };

  // Compute total present
  const totalPresent = students.filter((s) => s.present).length;

  // Filter students based on dropdown selection
  const filteredStudents = students.filter((student) => {
    if (filter === "Present") return student.present;
    if (filter === "Absent") return !student.present;
    return true; // All
  });

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Attendance Manager</h1>

      <div style={{ marginBottom: "10px" }}>
        <label>Filter: </label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Present">Present</option>
          <option value="Absent">Absent</option>
        </select>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {filteredStudents.map((student) => (
          <li
            key={student.id}
            style={{
              marginBottom: "10px",
              color: student.present ? "green" : "red",
            }}
          >
            {student.name} —{" "}
            <strong>{student.present ? "Present" : "Absent"}</strong>
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => toggleAttendance(student.id)}
            >
              Toggle
            </button>
          </li>
        ))}
      </ul>

      <h3>Total Present: {totalPresent}</h3>
    </div>
  );
}

export default AttendanceManager;

