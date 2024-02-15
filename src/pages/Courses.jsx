import React from 'react'
import { useSelector  } from 'react-redux'
import { jwtDecode } from 'jwt-decode'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

function Courses() {

  const [users, setUsers] = useState([]);


  useEffect(() => {
    const endpoint = "http://127.0.0.1:8000/courses/allCourses";
    fetch(`${endpoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.detail == "empty") {
          setUsers([]);
        } else {
          setUsers(data);
          console.log(data);
          

        }
      });
  }, []);



  return (
    <>
    <div className='max-w-7xl p-3 mx-auto'>
        <div className='flex'>
        <Link to="/founder/addCourses">
          <button className="bg-green-500 text-white px-4 py-2 rounded mr-2">
            AddCourse
          </button>
        </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {users.map((user, index) => {
          return (
            <div className="bg-white border border-gray-200 shadow-md rounded-xl" key={index}>
              <div className="p-5 flex flex-col">
                <h5 className="text-2xl md:text-2xl text-purple-500 font-medium mt-1 text-center">
                  {user.name}
                </h5>
                <p className="text-black text-lg mt-1">Description: {user.description}</p>
                <p className="text-black text-lg mt-1">Duration: {user.duration}</p>
                <p className="text-black text-lg mt-1">StartDate: {user.startDate}</p>
                <p className="text-black text-lg mt-1">Fees: {user.fees}</p>
                <p className="text-black text-lg mt-1">Discount: {user.discount}</p>
                <p className="text-black text-lg mt-1">DiscountUpTo: {user.discountUpTo}</p>
                <p className="text-black text-lg mt-1">Teachers: 
                {user.teachers.map((teacher, index) => {
                  return (
                    <div key={index}>
                      <p className="text-black text-lg mt-1">{teacher.batch}</p>
                      <p className="text-black text-lg mt-1">{teacher.college}</p>
                      <p className="text-black text-lg mt-1">{teacher.department}</p>
                      <p className="text-black text-lg mt-1">{teacher.name}</p>
                      <p className="text-black text-lg mt-1">{teacher.phone}</p>
                      
                    </div>
                  )
                })}
                
                </p>
                

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
  )
}

export default Courses