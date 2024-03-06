import React, { useState } from "react";
import FormContainer from "../components/FormContainer";
import { Form } from "react-bootstrap";
import queryString from "query-string";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { toast } from "react-toastify";

function CoursePage() {
  const [isLoading, setisLoading] = useState(false);
  const location = useLocation();
  const { githuburl, coursetitle } = queryString.parse(location.search);
  const userInfo = useSelector((state) => state.auth);
  // console.log(userInfo.userInfo._id);
  const [link, setLink] = useState("");
  const saveLinkToUserCourses = async () => {
    try {
      // console.log("Mein run hua");
      setisLoading(true);
      const response = await fetch(
        "http://localhost:5001/api/users/add-course-url",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: userInfo.userInfo._id, // You need to replace this with the actual userId
            courseName: coursetitle,
            courseUrl: link,
          }),
        }
      );
      setisLoading(false);

      if (!response.ok) {
        throw new Error("Failed to save link");
      }

      // Optionally, you can show a success message or perform other actions here
      console.log("Link saved successfully");
      toast.success("Link Saved Successfully!!!");
      setLink("");
    } catch (error) {
      console.error("Error saving link:", error);
    }
  };
  return (
    <div className="flex flex-col justify-center items-start gap-y-5">
      <p>Click the button below to download the Notebook from GitHub</p>
      <a
        href={githuburl}
        target="_blank"
        className=" hover:bg-blue-400  transition-all duration-300 no-underline cursor-pointer py-2 px-5 bg-blue-600 rounded-md font-semibold text-white"
      >
        Click Here
      </a>
      <Form.Group className="my-2" controlId="password">
        <Form.Label>Enter your Notebooks Public Link</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Public Link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        ></Form.Control>
      </Form.Group>
      <button
        onClick={saveLinkToUserCourses}
        className=" hover:bg-blue-400 transition-all duration-300 no-underline cursor-pointer py-2 px-5 bg-blue-600 rounded-md font-semibold text-white"
      >
        {isLoading ? (
          <div className=" flex w-full justify-center">
            <ThreeDots
              visible={true}
              height="21"
              width="50"
              color="#ffffff"
              radius="9"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        ) : (
          <div
            className="
                "
          >
            Submit
          </div>
        )}
      </button>
    </div>
  );
}

export default CoursePage;
