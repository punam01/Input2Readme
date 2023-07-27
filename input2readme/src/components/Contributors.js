import React, { useState, useEffect } from "react";
import axios from "axios";

const Contributors = () => {
  const [contributors, setContributors] = useState([]);

  useEffect(() => {
    const fetchContributors = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/repos/punam01/Input2Readme/contributors"
        );
        setContributors(response.data);
      } catch (error) {
        console.error("Error fetching contributors:", error);
      }
    };

    fetchContributors();
  }, []);

  return (
    <>
      <div className="about">
        <header className="form-label">
          <h1>Project Contributors</h1>
        </header>
        <ul className="contributors-list">
          {contributors.map((contributor) => (
            <li key={contributor.id} className="contributor-item">
              <a
                href={contributor.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="contributor-link"
              >
                <img
                  src={contributor.avatar_url}
                  alt={contributor.login}
                  className="contributor-image"
                />
                <p className="contributor-name">{contributor.login}</p>
              </a>
            </li>
          ))}
        </ul>
        <br/>
        <h2>
          Get your name in the list of contributors!"</h2><p> Remember, contributing to
          open-source projects like Input2Readme can be a rewarding experience,
          and it helps the community grow and improve together.</p>
          <p>Happy contributing! 🚀🌟🤝</p> 
      </div>
    </>
  );
};

export default Contributors;
