import React, { useState } from "react";
import { useTheme } from "../../../context/ColorContext";

function NewAdmission() {
  const { color } = useTheme();

  const studentDetails = [
    { label: "Student Name", data: "studentName", type: "text" },
    { label: "Adhar Number", data: "adharNumber", type: "number" },
    { label: "Mobile No.", data: "mobileNumber", type: "number" },
    { label: "Full Address", data: "fullAddress", type: "text" },
    { label: "Date Of Birth", data: "dateOfBirth", type: "date" },
    { label: "Bank Account No.", data: "bankAccountNo", type: "number" },
    { label: "Bank IFSC Code", data: "bankIFSC", type: "text" },
    { label: "Bank Name", data: "bankName", type: "text" },
    { label: "Student Category", data: "category", type: "text" },
    { label: "Religion", data: "religion", type: "text" },
    { label: "Nationality", data: "nationality", type: "text" },
    { label: "Last School Name", data: "lastSchoolName", type: "text" },
    { label: "Last School UIDAS No", data: "lastSchoolUDIAS", type: "text" },
    { label: "PEN No.", data: "penNo", type: "text" },
    { label: "Email Address", data: "email", type: "email" },
    {
      label: "Parents Ration Card No.",
      data: "parentsRationCardNo",
      type: "text",
    },
    { label: "Ration Card Type", data: "rationCardType", type: "text" },
    { label: "Student Weight", data: "weight", type: "number" },
    { label: "Student Length", data: "length", type: "number" },
    { label: "Student Blood Group", data: "bloodGroup", type: "text" },
  ];

  const fatherDetails = [
    { label: "Father Name", data: "fatherName", type: "text" },
    { label: "Father Occupation", data: "fatherOccupation", type: "text" },
    {
      label: "Father Mobile Number",
      data: "fatherMobileNumber",
      type: "number",
    },
    { label: "Father Adhar Number", data: "fatherAdharNumber", type: "number" },
    { label: "Father Education", data: "fatherEducation", type: "text" },
  ];

  const motherDetails = [
    { label: "Mother Name", data: "motherName", type: "text" },
    { label: "Mother Occupation", data: "motherOccupation", type: "text" },
    { label: "Mother Adhar No.", data: "motherAdharNo", type: "number" },
    { label: "Mother Education", data: "motherEducation", type: "text" },
  ];

  const guardianDetails = [
    { label: "Guardian Name", data: "guardianName", type: "text" },
    { label: "Guardian Occupation", data: "guardianOccupation", type: "text" },
    {
      label: "Guardian Mobile Number",
      data: "guardianMobileNumber",
      type: "number",
    },
  ];

  const [formData, setFormData] = useState({
    studentName: "",
    adharNumber: "",
    mobileNumber: "",
    fullAddress: "",
    dateOfBirth: "",
    bankAccountNo: "",
    bankIFSC: "",
    category: "",
    religion: "",
    nationality: "",
    lastSchoolName: "",
    lastSchoolUDIAS: "",
    penNo: "",
    email: "",
    parentsRationCardNo: "",
    rationCardType: "",
    weight: "",
    length: "",
    bloodGroup: "",
    fatherName: "",
    fatherOccupation: "",
    fatherMobileNumber: "",
    fatherAdharNo: "",
    fatherEducation: "",
    motherName: "",
    motherOccupation: "",
    motherAdharNo: "",
    motherEducation: "",
    guardianName: "",
    guardianAddress: "",
    guardianMobileNo: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data: ", formData);
    // Logic to save or preview data
  };

  return (
    <div className="">
      <div className="text-sm font-medium  border-b border-slate-400/70">
        Total New Admission This Year :{" "}
        <span style={{ color: color }}>450</span>
      </div>
      <div className=" p-5">
        <div className="text-center text-2xl font-medium">Admission Form</div>
        <div className="flex flex-col border border-slate-400/40 sm:max-w-[80vw] msm:max-w-[90vw] m-auto sm:h-20 msm:h-40  bg-slate-100/50 dark:bg-slate-800/50 shadow-md shadow-slate-900/10 sm:flex-row justify-evenly font-medium mt-10 text-lg items-center">
          <div>
            Choose Class :{" "}
            <select
              name=""
              id=""
              className="w-16 duration-200 hover:cursor-pointer outline-none font-bold text-center bg-slate-100 dark:bg-slate-800 border border-slate-500/50 rounded-md"
            >
              <option value="" className="hover:bg-slate-400">
                1
              </option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value="">5</option>
              <option value="">6</option>
              <option value="">7</option>
              <option value="">8</option>
              <option value="">9</option>
              <option value="">10</option>
              <option value="">11</option>
              <option value="">12</option>
            </select>
          </div>
          <div>
            Choose Section :{" "}
            <select
              name=""
              id=""
              className="w-16 duration-200 hover:cursor-pointer outline-none font-bold text-center bg-slate-100 dark:bg-slate-800 border border-slate-500/50 rounded-md "
            >
              <option value="">A</option>
              <option value="">B</option>
              <option value="">C</option>
              <option value="">D</option>
            </select>{" "}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="sm:max-w-[80vw] msm:max-w-[90vw] border border-slate-400/40  mx-auto p-8  shadow-md shadow-slate-950/20  mt-10 bg-slate-100/50 dark:bg-slate-800/50 duration-200"
        >
          {/* Student Section */}
          <h2 className="text-xl font-semibold mb-4">Student Details</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 ">
            {studentDetails.map((item, key) => {
              const fromDataVal = item.data;
              return (
                <div key={key}>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 duration-200">
                    {item.label}
                  </label>
                  <input
                    type={item.type}
                    name={item.data}
                    onChange={handleChange}
                    value={formData.formDataVal}
                    className="mt-1 block w-full border border-slate-500/50 bg-slate-100 dark:bg-slate-700/30 outline-none rounded-md p-2 transition-all duration-200 text-lg"
                  />
                </div>
              );
            })}

            {/* Add more fields similarly for other student details */}
          </div>

          {/* Father's Section */}
          <h2 className="text-xl font-semibold mt-8 mb-4">Father Details</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 ">
            {fatherDetails.map((item, key) => {
              const fromDataVal = item.data;
              return (
                <div key={key}>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 duration-200">
                    {item.label}
                  </label>
                  <input
                    type={item.type}
                    name={item.data}
                    onChange={handleChange}
                    value={formData.formDataVal}
                    className="mt-1 block w-full border border-slate-500/50 bg-slate-100 dark:bg-slate-700/30 outline-none rounded-md p-2 transition-all duration-200 text-lg"
                  />
                </div>
              );
            })}

          </div>

          {/* Mother's Section */}
          <h2 className="text-xl font-semibold mt-8 mb-4">Mother Details</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 ">
            {motherDetails.map((item, key) => {
              const fromDataVal = item.data;
              return (
                <div key={key}>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 duration-200">
                    {item.label}
                  </label>
                  <input
                    type={item.type}
                    name={item.data}
                    onChange={handleChange}
                    value={formData.formDataVal}
                    className="mt-1 block w-full border border-slate-500/50 bg-slate-100 dark:bg-slate-700/30 outline-none rounded-md p-2 transition-all duration-200 text-lg"
                  />
                </div>
              );
            })}

          </div>

          {/* Guardian Section */}
          <h2 className="text-xl font-semibold mt-8 mb-4">Guardian Details</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 ">
            {guardianDetails.map((item, key) => {
              const fromDataVal = item.data;
              return (
                <div key={key}>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 duration-200">
                    {item.label}
                  </label>
                  <input
                    type={item.type}
                    name={item.data}
                    onChange={handleChange}
                    value={formData.formDataVal}
                    className="mt-1 block w-full border border-slate-500/50 bg-slate-100 dark:bg-slate-700/30 outline-none rounded-md p-2 transition-all duration-200 text-lg"
                  />
                </div>
              );
            })}

          </div>

          {/* Buttons */}
          <div className="mt-8 flex justify-end space-x-4">
            <button
              type="button"
              className="bg-gray-600 text-white px-4 py-2 rounded-md"
            >
              Preview
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewAdmission;
