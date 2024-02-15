import React from "react";
import { Link  , useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


function AddCourses() {

  const { currentUser } = useSelector((state) => state.user);
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  const [addCourse, setAddCourse] = useState({
    name: "",
    description: "",
    duration: 0,
    startDate: "",
    fees: 0,
    discount: 0,
    discountUpTo: "",
    teachersUserName: [],
  });

  var toke;
  if (currentUser != null) {
    toke = currentUser.accessToken;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    if (name === "teachersUserName") {
      // Split the input value into an array of usernames
      const teacherUserNames = value.split(",").map((username) => username.trim());
      setAddCourse({ ...addCourse, [name]: teacherUserNames });
    } else if (name === "duration" || name === "fees" || name === "discount") {
      // Parse value as integer for duration, fees, discount
      const integerValue = parseInt(value);
      setAddCourse({ ...addCourse, [name]: isNaN(integerValue) ? "" : integerValue });
    } else if (name === "startDate" || name === "discountUpTo") {
      // Parse value as Date for startDate, discountUpTo
      setAddCourse({ ...addCourse, [name]: new Date(value) });
    } else {
      // For other input fields, set value directly
      setAddCourse({ ...addCourse, [name]: value });
    }
  };
  
  
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const endpoint = "http://127.0.0.1:8000/founder/addCourses";
    fetch(`${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + toke,
      },
      body: JSON.stringify(addCourse),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.detail == "empty") {
          setData(null);
        } else {
          setData(data);
          console.log(data);
        }
      });
      //navigate('/courses')
  }


  return (
    <div className="max-w-7xl p-3 mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7 text-purple-500">
        Add New Course
      </h1>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          className=" p-3 rounded-lg bg-slate-100"
          id="name"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="description"
          className=" p-3 rounded-lg bg-slate-100"
          id="description"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          placeholder="duration"
          className=" p-3 rounded-lg bg-slate-100"
          id="duration"
          onChange={handleChange}
          required
        />
        <input
          type="date"
          placeholder="startDate"
          className=" p-3 rounded-lg bg-slate-100"
          id="startDate"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          placeholder="fees"
          className=" p-3 rounded-lg bg-slate-100"
          id="school"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          placeholder="discount"
          className=" p-3 rounded-lg bg-slate-100"
          id="discount"
          onChange={handleChange}
          required
        />
        <input
          type="date"
          placeholder="discountUpTo"
          className=" p-3 rounded-lg bg-slate-100"
          id="discountUpTo"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="teachersUserName"
          className=" p-3 rounded-lg bg-slate-100"
          id="teachersUserName"
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="bg-purple-600 p-3 rounded-lg text-white font-semibold"
        >Submit</button>
      </form>
    </div>
  );
}

export default AddCourses;
