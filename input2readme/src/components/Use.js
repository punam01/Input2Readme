import React from "react";
import video from "../video/input2readme.mp4";
const Use = () => {
  return (
    <div className="use">
      <header className="form-label">
        <h1>How to Use?</h1>
      </header>
      <section>
        <p>
          Creating a project README is an <b>essential part</b> of any <b>software
          development project.</b> A README provides crucial information about your
          project, making it easier for others to understand and use your code.{" "}
        </p>
        <br />
        <ol>
          <li>
            <h3>📛 Project Name and Description </h3> Start with a clear and
            concise project name followed by a brief description of what your
            project does. This should be the first thing users see when they
            visit your repository.
          </li>
          <br />
          <li>
            <h3>📋 Table of Contents </h3> Create a table of contents to give
            users a quick overview of what's covered in the README. This helps
            them find specific sections easily.
          </li>
          <br />
          <li>
            <h3>📥 Installation </h3> Provide step-by-step instructions on how
            to install your project. Include any dependencies, libraries, or
            software needed to run your project.
          </li>
          <br />
          <li>
            <h3>📖 Usage Guide </h3> Explain how to use your project once it's
            installed, and any additional information that helps users get
            started quickly.
          </li>
          <br />
          <li>
            <h3>🎨 Features </h3> Highlight the key features of your project.
          </li>
          <br />
          <li>
            <h3>🤝 Contributing Guidelines </h3> Encourage others to contribute
            to your project by providing guidelines on how to do so. Include
            information about pull requests, issue reporting, and code
            formatting.
          </li>
          <br />
          <li>
            <h3>📝 License </h3> State the license under which your project is
            released. This clarifies how others can use, modify, and distribute
            your code.
          </li>
        </ol>
        <br />
        <p style={{ backgroundColor: "#e0fb4a" }}>
          By following these steps, you can create a comprehensive and
          informative README that will help others understand and use your
          project effectively. A well-written README not only showcases your
          project but also reflects your professionalism and consideration for
          your users and contributors.
        </p>
        <div className="video-container">
          <h2>Video Example</h2>
          <video width="640" height="360" controls>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </div>
  );
};

export default Use;
