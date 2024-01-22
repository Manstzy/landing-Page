import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";


const SignUp = () => {
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
  const {user ,signUp} = useContext(AuthContext)
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await signUp(email , password)
      navigate("/login")
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="/"
        />
        <div className="fixed bg-black/40 top-0 right-0 w-full h-screen"></div>
        <div className="bg-black/75 w-[450px] h-[600px] mx-auto relative top-24 px-16 py-16 ">
          <h3 className="font-bold text-white text-3xl">Sign Up</h3>
          <form onSubmit={handleSubmit} className="p-1 flex flex-col">
            <input
              onChange={e => setEmail(e.target.value)}
              autoComplete="email"
              type="text"
              placeholder="Email"
              className="bg-gray-700 px-3 w-full p-3 mt-5"
            />
            <input
              onChange={e => setPassword(e.target.value)}
              autoComplete="current-password"
              type="password"
              placeholder="Password"
              className="bg-gray-700 px-3 w-full p-3 mt-4"
            />
            <button className="bg-red-600 w-full px-3 text-white font-bold rounded-sm mt-8 py-3 ">
              Sign Up
            </button>
            <div className="flex justify-between text-gray-600 mt-6">
              <p className="text-sm">
                <input type="checkbox" className="mr-2" /> Remember me
              </p>
              <p className="text-sm">
                Need Help ?
              </p>
            </div>
            <p className="text-gray-600 text-md mt-8">
            Already subscribed to Netflix? <Link to={"/login"} className="text-white"> Sign In</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
