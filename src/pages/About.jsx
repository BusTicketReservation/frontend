import React, { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";


function About() {

  const {currentUser} = useSelector((state) => state.user);
  const [data, setData] = useState(null);
  const [users, setUsers] = useState([]);

  const [search, setSearch] = useState("");

  var toke
  if (currentUser != null) {
    toke = currentUser.accessToken;
  }

  const handleSearch = () => {
    const endpoint = `http://127.0.0.1:8000/founder/searchTeacher?search=${search}`;
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
            //setUsers([]);
          } else {
            setData(data);
            console.log(data);
            if( data && data.teacher){
              setUsers(data.teacher);
              
            }
          }
        });
  }

  useEffect(() => {
    handleSearch();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  }
  

  return (
    <>
    <div className="max-w-7xl p-3 mx-auto">
      <div className="flex">
        <Link to="/create">
          <button className="bg-green-500 text-white px-4 py-2 rounded mr-2">
            Add New Teacher
          </button>
        </Link>
        <Link to="/founderinfo">
          <button className="bg-green-500 text-white px-4 py-2 rounded mr-2">
            Founder Info
          </button>
        </Link>
        <form action="" className="ml-[400px]" onSubmit={handleSubmit}>
            <input type="text" name="search" placeholder="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-3 py-2 font-semibold placeholder:gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"/>
        </form>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {users.map((user, index) => {
          return (
            <div className="bg-white border border-gray-200 rounded-xl shadow-md" key={index}>
              <div className="p-5 flex flex-col">
                <h5 className="text-2xl md:text-2xl text-black font-medium mt-1">
                  Name: {user.name}
                </h5>
                <p className="text-black text-lg mt-1">Batch: {user.batch}</p>
                <p className="text-black text-lg mt-1">College: {user.college}</p>
                <p className="text-black text-lg mt-1">University: {user.university}</p>
                <p className="text-black text-lg mt-1">Department: {user.department}</p>
                <p className="text-black text-lg mt-1">Subject: {user.subject}</p>
                <p className="text-black text-lg mt-1">Phone: {user.phone}</p>
                <p className="text-black text-lg mt-1">Email: {user.email}</p>

                <div className="mt-4 flex justify-end space-x-2">
                  
                  
                </div>
              </div>
            </div>
          );
        })}
        
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default About;
