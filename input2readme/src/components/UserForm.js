import { useState } from "react";

const UserForm = () => {
  const [projectName, setProjectName] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [description, setDescription] = useState("");
  const [installation, setInstallation] = useState({
    checked: true,
    guide: "",
  });
  const [useage, setUseage] = useState({
    checked: true,
    guide: "",
  });
  const [feature, setFeature] = useState({
    checked: true,
    guide: "",
  });
  const [techUsed, setTechUsed] = useState({
    checked: true,
    guide: "",
  });
  const [gettingStarted, setGettingStarted] = useState({
    checked: true,
    guide: "",
  });
  const [contribute, setContribute] = useState({
    checked: true,
    guide: "",
  });
  const [license, setLicense] = useState({
    checked: true,
    guide: "",
  });
  const handleProjectNameChange = (e) => {
    setProjectName(e.target.value);
    console.log(projectName);
  };

  const handleSubTitleChange = (e) => {
    setSubTitle(e.target.value);
    console.log(subTitle);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    console.log(description);
  };

  const handleInstallationChange = (e) => {
    if (e.target.name === "checked") {
      setInstallation({
        ...installation,
        [e.target.name]: !e.target.checked,
      });
    } else {
      setInstallation({
        ...installation,
        [e.target.name]: e.target.value,
      });
    }
    console.log(installation);
  };
  const handleUseageChange = (e) => {
    if (e.target.name === "checked") {
      setUseage({
        ...useage,
        [e.target.name]: !e.target.checked,
      });
    } else {
      setUseage({
        ...useage,

        [e.target.name]: e.target.value,
      });
    }
    console.log(useage);
  };
  const handleFeatureChange = (e) => {
    if (e.target.name === "checked") {
      setFeature({
        ...feature,
        [e.target.name]: !e.target.checked,
      });
    } else {
      setFeature({
        ...feature,

        [e.target.name]: e.target.value,
      });
    }
    console.log(feature);
  };
  const handleTechUsedChange = (e) => {
    if (e.target.name === "checked") {
      setTechUsed({
        ...techUsed,
        [e.target.name]: !e.target.checked,
      });
    } else {
      setTechUsed({
        ...techUsed,
        [e.target.name]: e.target.value,
      });
    }
    console.log(techUsed);
  };
  const handleGettingStartedChange = (e) => {
    if (e.target.name === "checked") {
      setGettingStarted({
        ...gettingStarted,
        [e.target.name]: !e.target.checked,
      });
    } else {
      setGettingStarted({
        ...gettingStarted,
        [e.target.name]: e.target.value,
      });
    }
    console.log(gettingStarted);
  };
  const handleContributeChange = (e) => {
    if (e.target.name === "checked") {
      setContribute({
        ...contribute,
        [e.target.name]: !e.target.checked,
      });
    } else {
      setContribute({
        ...contribute,
        [e.target.name]: e.target.value,
      });
    }
    console.log(contribute);
  };
  const handleLicenseChange = (e) => {
    if (e.target.name === "checked") {
      setLicense({
        ...license,
        [e.target.name]: !e.target.checked,
      });
    } else {
      setLicense({
        ...license,
        [e.target.name]: e.target.value,
      });
    }
    console.log(license);
  };

  // Add other event handlers for the checkboxes and input fields

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      projectName,
      subTitle,
      description,
      installation,
      useage,
      feature,
      techUsed,
      gettingStarted,
      contribute,

      license,
    };
    console.log(data);
    
  };
  return (
    <>
      <form>
        <div className="form-group">
          <label htmlFor="title" className="form-label">
            Project name
          </label>
          <div className="form-input-group">
            <input
              type="text"
              className="form-text-input"
              id="title"
              name="title"
              defaultValue="Welcome to 🙋"
              readOnly
            />
            <input
              type="text"
              className="form-text-input"
              id="title"
              name="title"
              placeholder="EX. Awesome Blogging Platform"
              on
              onChange={handleProjectNameChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="subtitle " className="form-label">
            Sub-Title
          </label>
          <div className="form-input-group">
            <input
              type="text"
              className="form-text-input subtitle"
              id="subtitle "
              name="subtitle "
              placeholder="EX. Empower Your Voice, Share Your Stories."
              onChange={handleSubTitleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <div className="form-input-group">
            <input
              type="text"
              className="form-text-input subtitle"
              id="description "
              name="description "
              placeholder="EX. A short description of your project."
              onChange={handleDescriptionChange}
            />
          </div>
        </div>
        {/*TABLE OF CONTENT*/}
        <div className="form-group">
          <label htmlFor="table_of_content " className="form-label">
            Table of Content
          </label>
          {/*INSTALLATION-SECTION*/}
          <div className="check-group">
            <div className="left">
              <input
                type="checkbox"
                className="form-control"
                id="checked"
                name="checked"
                readOnly
                onChange={handleInstallationChange}
              />
              <label htmlFor="checked" className="form-label check">
                Installation
              </label>
            </div>
            <div className={`right installation`}>
              <div className="install-guide">
                <p>Prerequisites</p>
                <input
                  type="text"
                  className="form-checkbox-input"
                  id="guide"
                  name="guide"
                  placeholder="EX. What is needed to set up the dev environment. For instance, global dependencies or any other tools."
                  onChange={handleInstallationChange}
                />
              </div>
            </div>
          </div>
          {/*USAGE-SECTION*/}
          <div className="check-group">
            <div className="left">
              <input
                type="checkbox"
                className="form-control"
                id="checked"
                name="checked"
                readOnly
                onChange={handleUseageChange}
                placeholder="EX. Information on how to use my project, including examples."
              />
              <label htmlFor="useage" className="form-label check">
                Useage 📋
              </label>
            </div>
            <div className={`right useage`}>
              <div className="install-guide">
                <p>How to use the project?</p>
                <input
                  type="text"
                  className="form-checkbox-input"
                  id="guide"
                  name="guide"
                  placeholder="EX. Information on how to use my project, including examples."
                  onChange={handleUseageChange}
                />
              </div>
            </div>
          </div>
          {/*FEATURES-SECTION*/}
          <div className="check-group">
            <div className="left">
              <input
                type="checkbox"
                className="form-control"
                id="checked"
                name="checked"
                readOnly
                placeholder="EX. Information on how to use my project, including examples."
                onChange={handleFeatureChange}
              />
              <label htmlFor="feature" className="form-label check">
                Features 🚀
              </label>
            </div>
            <div className={`right feature`}>
              <div className="install-guide">
                <p>Have a look at the features</p>
                <input
                  type="text"
                  className="form-checkbox-input"
                  id="guide"
                  name="guide"
                  placeholder="EX. Description of feature 1,feature 2, and more"
                  onChange={handleFeatureChange}
                />
              </div>
            </div>
          </div>
          {/*TECH-SECTION*/}
          <div className="check-group">
            <div className="left">
              <input
                type="checkbox"
                className="form-control"
                id="checked"
                name="checked"
                readOnly
                onChange={handleTechUsedChange}
                placeholder="EX. Information on how to use my project, including examples."
              />
              <label htmlFor="techUsed" className="form-label check">
                Technologies Used 💻
              </label>
            </div>
            <div className={`right feature`}>
              <div className="install-guide">
                <p>
                  Mention the technologies, languages, frameworks, and libraries
                  used in the project.
                </p>
                <input
                  type="text"
                  className="form-checkbox-input"
                  id="guide"
                  name="guide"
                  placeholder="EX. Technology, Library, Framework"
                  onChange={handleTechUsedChange}
                />
              </div>
            </div>
          </div>
          {/*GETTING STARTED-SECTION*/}
          <div className="check-group">
            <div className="left">
              <input
                type="checkbox"
                className="form-control"
                id="checked"
                name="checked"
                readOnly
                onChange={handleGettingStartedChange}
                placeholder="EX. Information on how to use my project, including examples."
              />
              <label htmlFor="gettingStarted" className="form-label check">
                Getting Started 🎬
              </label>
            </div>
            <div className={`right feature`}>
              <div className="install-guide">
                <p>
                  Detailed instructions on how users can get started with my
                  project, including any configuration or setup required.
                </p>
                <input
                  type="text"
                  className="form-checkbox-input"
                  id="guide"
                  name="guide"
                  placeholder="EX. Creating an Account"
                  onChange={handleGettingStartedChange}
                />
              </div>
            </div>
          </div>
          {/*CONTRIBUTE-SECTION*/}
          <div className="check-group">
            <div className="left">
              <input
                type="checkbox"
                className="form-control"
                id="checked"
                name="checked"
                readOnly
                onChange={handleContributeChange}
                placeholder="EX. Information on how to use my project, including examples."
              />
              <label htmlFor="contribute" className="form-label check">
                Contributing 💡
              </label>
            </div>
            <div className={`right feature`}>
              <div className="install-guide">
                <p>
                  Guidelines on how users or developers can contribute to your
                  project.
                </p>
                <input
                  type="text"
                  className="form-checkbox-input"
                  id="guide"
                  name="guide"
                  placeholder="EX. Creating an Account"
                  onChange={handleContributeChange}
                />
              </div>
            </div>
          </div>
          {/*LICENSE-SECTION*/}
          <div className="check-group">
            <div className="left">
              <input
                type="checkbox"
                className="form-control"
                id="checked"
                name="checked"
                readOnly
                onChange={handleLicenseChange}
                placeholder="EX. Information on how to use my project, including examples."
              />
              <label htmlFor="license" className="form-label check">
                License 📝
              </label>
            </div>
            <div className={`right feature`}>
              <div className="install-guide">
                <p>
                  Information about the license under which your project is
                  released.
                </p>
                <input
                  type="text"
                  className="form-checkbox-input"
                  id="guide"
                  name="guide"
                  placeholder="EX. MIT License, Apache License 2.0, GNU General Public License (GPL), and more."
                  onChange={handleLicenseChange}
                />
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary" onClick={onSubmit}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default UserForm;
