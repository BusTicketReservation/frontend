import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


function CreateTeacher() {

    const { currentUser } = useSelector((state) => state.user);
    const [data, setData] = useState(null);
    const navigate = useNavigate();

    const [addTeacher, setAddTeacher] = useState({
        email: '',
        phone: '',
        name: '',
        password: '',
        batch: '',
        college: '',
        university: '',
        department: '',
        subject: ''
    });

    var toke;
    if (currentUser != null) {
        toke = currentUser.accessToken;
    }

    const handleChange = (e) => {
        setAddTeacher({ ...addTeacher, [e.target.id]: e.target.value });
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      const endpoint = "http://127.0.0.1:8000/founder/registerTeacher";
      fetch(`${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + toke,
        },
        body: JSON.stringify(addTeacher),
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
        navigate('/about')
    }

  return (
    <div className="p-3 max-w-2xl mx-auto w-full">
        <h1 className="text-2xl text-purple-500 text-center">Add New Teacher</h1>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit} >
        <input
          type="email"
          placeholder="Email"
          className=" p-3 rounded-lg bg-slate-100"
          id="email"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Phone"
          className=" p-3 rounded-lg bg-slate-100"
          id="phone"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Name"
          className=" p-3 rounded-lg bg-slate-100"
          id="name"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className=" p-3 rounded-lg bg-slate-100"
          id="password"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Batch"
          className=" p-3 rounded-lg bg-slate-100"
          id="batch"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="College"
          className=" p-3 rounded-lg bg-slate-100"
          id="college"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="University"
          className=" p-3 rounded-lg bg-slate-100"
          id="university"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Department"
          className=" p-3 rounded-lg bg-slate-100"
          id="department"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Subject"
          className=" p-3 rounded-lg bg-slate-100"
          id="subject"
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="bg-purple-700 text-white py-2 rounded-lg
                        uppercase hover:opacity-90"
        >Submit</button>
      </form>
    </div>
  );
}

export default CreateTeacher;
