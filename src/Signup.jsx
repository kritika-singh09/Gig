import React, { useState } from "react";
import "./App.css"; // Import Tailwind CSS
import { Link } from "react-router-dom";
const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    referralName: "",
    userName: "",
    password: "",
    confirmPassword: "",
    userType: "",
    location: "",
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = () => {
    setFormData({ ...formData, termsAccepted: !formData.termsAccepted });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900 to-black flex justify-center items-center p-4">
      <div className="bg-black p-10 rounded-2xl shadow-2xl w-full max-w-4xl border border-purple-600">
        <h1 className="text-4xl text-purple-400 font-bold text-center mb-6">
          Create an Account
        </h1>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" className="input-field bg-purple-800 text-white border border-purple-500" />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="input-field bg-purple-800 text-white border border-purple-500" />
          <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" className="input-field bg-purple-800 text-white border border-purple-500" />
          <input type="text" name="referralName" value={formData.referralName} onChange={handleChange} placeholder="Referral Name" className="input-field bg-purple-800 text-white border border-purple-500" />
          <input type="text" name="userName" value={formData.userName} onChange={handleChange} placeholder="Username" className="input-field bg-purple-800 text-white border border-purple-500" />
          <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" className="input-field bg-purple-800 text-white border border-purple-500" />
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm Password" className="input-field bg-purple-800 text-white border border-purple-500" />
          <select name="userType" value={formData.userType} onChange={handleChange} className="input-field bg-purple-800 text-white border border-purple-500">
            <option value="">Select User Type</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>
          <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Location" className="input-field bg-purple-800 text-white border border-purple-500 md:col-span-2" />
          <div className="flex items-center md:col-span-2">
            <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleCheckboxChange} className="mr-2" />
            <label className="text-purple-400">I agree to the <span className="text-purple-500 font-semibold">Terms and Conditions</span></label>
          </div>
        
          <button to="/HeroSection"type="submit" className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-300 md:col-span-2">
          <Link to="/">Sign Up</Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
