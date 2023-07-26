import React from "react";
import { useNavigate } from "react-router-dom";
const About = () => {
    const navigate = useNavigate ();
    const handleClick = () => {
        navigate("/");
    };

  return (
    <>
      <div className="about">
        <header className="form-label">
          <h1>Introducing the "GitHub Project README Generator"</h1>
        </header>
        <section>
          <p>
            🚀 <b>Elevate Your Project's Visibility:</b> With our easy-to-use
            README generator, you can now create eye-catching and informative
            READMEs that will captivate potential users and contributors alike!
          </p>
          <br />
          <p>
            ⏱ <b>Save Time and Effort:</b> No need to spend hours crafting the
            perfect README. Our tool dynamically generates a README for your
            project, so you can focus on what really matters - building your
            project!
          </p>
          <br />
          <p>
            💡 <b>Showcase Your Project Features:</b> Highlight the key
            features, installation steps, and usage guide of your project with
            beautiful formatting, making it easier for others to understand and
            use your code.
          </p>
          <br />

          <p>
            🎨 <b>Customize Your README:</b> Personalize your project's README
            with different themes and layouts. Choose from various options to
            match your project's style and personality.
          </p>
          <br />
          <p>
            🌟 <b>Open Source and Free:</b> Our tool is built by developers, for
            developers. It's completely open-source and free to use, helping the
            community thrive!
          </p>
          <br />
          <button onClick={handleClick} class="btn">
            Get Started Now
          </button>
        </section>
      </div>
    </>
  );
};

export default About;
