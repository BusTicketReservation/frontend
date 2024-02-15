import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function FounderInfo() {
  const { currentUser } = useSelector((state) => state.user);
  const [data, setData] = useState(null);

  var toke
  if( currentUser != null){
    toke = currentUser.accessToken;
  }

  useEffect(() => {
    const endpoint = "http://127.0.0.1:8000/founder/profile";
    fetch(`${endpoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + toke,
      },
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
  }, []);


  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    position: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const endpoint = "http://127.0.0.1:8000/founder/profileUpdate";
    fetch(`${endpoint}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + toke,
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.detail == "empty") {
          setData(null);
        }
        else {
          setData(data);
          console.log(data);
        }
      });
  }

  return (
    <div className="flex justify-center">
      <div className="max-w-2xl mx-auto w-full">
        <h1 className="text-center text-purple-500 mt-5 text-2xl">
          Founder Info
        </h1>
        <div className="flex justify-center items-center mt-10 mr-10">
          <div className="bg-gray-100 w-[500px] rounded-lg">
            <div className="p-5 flex flex-col">
              <h5 className="text-2xl md:text-lg text-black font-medium">
                <span className="text-red-400">Email: </span>
                {data && data.email}
              </h5>
              <p className="text-black text-lg">
                Phone: {data && data.phone}
              </p>
              <p className="text-black text-lg">
                Name: {data && data.name}
              </p>
              <p className="text-black text-lg">
                Position: {data && data.position}
              </p>
              <p className="text-black text-lg">
                Username: {data && data.userName}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="ml-10 max-w-2xl mx-auto w-full">
        <h1 className="text-center text-purple-500 mt-5 text-2xl">
          Update Founder Info
        </h1>
        <form className="mt-5" onSubmit={handleSubmit}>
          <div className="flex flex-col ">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 rounded-lg bg-slate-100"
            />
          </div>
          <div className="flex flex-col ">
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="p-3 rounded-lg bg-slate-100"
            />
          </div>
          <div className="flex flex-col ">
            <label>Position</label>
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="p-3 rounded-lg bg-slate-100"
            />
          </div>
          
          <div className="flex justify-end mt-1">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FounderInfo;
