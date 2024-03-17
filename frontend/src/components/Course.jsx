import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import authSlice from "../slices/authSlice";

function Course({ course }) {
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <div
      onClick={() => {
        navigate(
          `/${course.id}?githuburl=${course.githuburl}?coursename=${course.title}`
        );
      }}
      className=" cursor-pointer flex gap-y-2  py-3 rounded-md px-2 flex-col items-center w-[300px] min-h-[200px] bg-gray-200 hover:scale-[1.02] transition-all duration-200"
    >
      <img
        className="w-[250px] h-[250px] rounded-md"
        alt=""
        src={course.thumbnail}
      />
      <div className=" flex flex-col justify-center items-center">
        <p className=" font-bold text-2xl">{course.title}</p>
        <p className=" px-4 text-justify">{course.description}</p>
      </div>
      {/* <button className=" rounded-md hover:bg-blue-500  bg-blue-600 py-2 px-3 text-white  flex justify-center items-center">
        {userInfo ? "Get Started" : "Buy Now"}
      </button> */}
    </div>
  );
}

export default Course;
