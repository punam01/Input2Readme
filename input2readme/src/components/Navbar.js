import React, { useState } from "react";
import axios from "axios";
import Alert from "./Alert";
import { useNavigate } from "react-router-dom";
import { AiOutlineStar, AiOutlineFork, AiOutlineRead } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
const Navbar = () => {
  const owner = "punam01"; // Replace with the repository owner's username
  const repo = "Input2Readme"; // Replace with the repository name
  const accessToken="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";
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  // eslint-disable-next-line
  const [alertMessage, setAlertMessage] = useState("");
  const [starCount, setStarCount] = useState(0); // eslint-disable-line no-unused-vars
  const [forkCount, setForkCount] = useState(0); // eslint-disable-line no-unused-vars
  const handleAlertClose = () => {
    setShowAlert(false);
    setAlertMessage("");
  };
  const handleForkClick = async () => {
    try {
      const response = await axios.post(
        `https://api.github.com/repos/${owner}/${repo}/forks`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.status === 202) {
        const forksResponse = await axios.get(
          `https://api.github.com/repos/${owner}/${repo}`
        );
        setForkCount(forksResponse.data.forks_count);
        console.log("Repository forked successfully!");
        setAlertMessage("Repository forked successfully!🎉");
      } else {
        console.error("Unable to fork the repository.");
      }
    } catch (error) {
      console.error("Error while forking the repository:", error);
      setAlertMessage(
        "Error while forking the repository. Please try again later."
      );
    }
    setShowAlert(true);
  };
  const handleStarClick = async () => {
  try {
    const response = await axios.put(
      `https://api.github.com/user/starred/${owner}/${repo}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (response.status === 204) {
      const starsResponse = await axios.get(
        `https://api.github.com/repos/${owner}/${repo}`
      );
      setStarCount(starsResponse.data.stargazers_count);
      setAlertMessage("Repository starred successfully!🎉");
      setShowAlert(true);
      // Perform any additional actions or show a success message if needed.
    } else {
      console.error("Unable to star the repository.");
      // Handle the error appropriately.
    }
  } catch (error) {
    console.error("Error while starring the repository:", error);
    setAlertMessage(
      "Error while starring the repository. Please try again later."
    );
    setShowAlert(true);
  }
};

  const handleBlogClick = () => {
    window.location.href = "https://medium.com/@punamkumavat01";
  };
  const handleClick = () => {
    navigate("/");
  };
  const handleUse = () => {
    navigate("/use");
  };
  const handleContributorsClick = () => {
    navigate("/contributors");
  };
  return (
    <>
      <nav>
        <p className="logo" onClick={handleClick}>
          Input2Readme
        </p>
        <ul className="nav-links">
          <p align="center">
            <img
              src="https://komarev.com/ghpvc/?username=punam01&label=Profile%20views&color=0e75b6&style=flat"
              alt="punam01"
              className="prof"
            />
          </p>
          <li onClick={handleUse}>
            <p>How to Use?</p>
          </li>
          <li onClick={handleBlogClick}>
            <AiOutlineRead className="icon" />
            <p>Read Blog</p>
          </li>
          <li onClick={handleContributorsClick}>
            <FaGithub className="icon" />
            <p>Check our Contributors</p>
          </li>
          <li
            onClick={async () => {
              await handleStarClick();
            }}
          >
            <AiOutlineStar className="icon" />
            <p>Star this repository {starCount?starCount:""}</p>
          </li>
          <li
            onClick={async () => {
              await handleForkClick(); // Show the alert after forking the repository
            }}
          >
            <AiOutlineFork className="icon" />
            <p>Fork this repository {forkCount?forkCount:""}</p>
          </li>
        </ul>
      </nav>
      {showAlert && <Alert message={alertMessage} onClose={handleAlertClose} />}
    </>
  );
};
export default Navbar;
