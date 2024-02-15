import React from "react";

function UpdateTeacher() {
  return (
    <div className="p-3 max-w-2xl mx-auto w-full">
      <h1 className="text-2xl text-purple-500 text-center">Update the user</h1>
      <form className="flex flex-col gap-2">
        <input
          type="email"
          placeholder="Email"
          className=" p-3 rounded-lg bg-slate-100"
          id="email"
          required
        />
        <input
          type="text"
          placeholder="Phone"
          className=" p-3 rounded-lg bg-slate-100"
          id="phone"
          required
        />
        <input
          type="text"
          placeholder="Name"
          className=" p-3 rounded-lg bg-slate-100"
          id="name"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className=" p-3 rounded-lg bg-slate-100"
          id="password"
          required
        />
        <input
          type="text"
          placeholder="Batch"
          className=" p-3 rounded-lg bg-slate-100"
          id="batch"
          required
        />
        <input
          type="text"
          placeholder="College"
          className=" p-3 rounded-lg bg-slate-100"
          id="college"
          required
        />
        <input
          type="text"
          placeholder="University"
          className=" p-3 rounded-lg bg-slate-100"
          id="university"
          required
        />
        <input
          type="text"
          placeholder="Department"
          className=" p-3 rounded-lg bg-slate-100"
          id="department"
          required
        />
        <input
          type="text"
          placeholder="Subject"
          className=" p-3 rounded-lg bg-slate-100"
          id="subject"
          required
        />
        <button
          type="submit"
          className="bg-purple-700 text-white py-2 rounded-lg
                        uppercase hover:opacity-90"
        >
          Update
        </button>
      </form>
    </div>
  );
}

export default UpdateTeacher;
