import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const UserForm = () => {
  const [projectName, setProjectName] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [description, setDescription] = useState("");
  const location = useLocation();
  // eslint-disable-next-line
  const [emoji, setEmoji] = useState({
    installation: "📥",
    usage: "📖",
    features: "🎨",
    techUsed: "👩‍💻",
    gettingStarted: "🚀",
    contribute: "🤝",
    license: "📝",
  });

  const [checkboxData, setCheckboxData] = useState({
    installation: {
      checked: false,
      guide: "",
    },
    usage: {
      checked: false,
      guide: "",
    },
    features: {
      checked: false,
      guide: "",
    },
    techUsed: {
      checked: false,
      guide: "",
    },
    gettingStarted: {
      checked: false,
      guide: "",
    },
    contribute: {
      checked: false,
      guide: "",
    },
    license: {
      checked: false,
      guide: "",
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "title") {
      setProjectName(value);
    } else if (name === "subtitle") {
      setSubTitle(value);
    } else if (name === "description") {
      setDescription(value);
    }
  };

  // Handle checkbox checked status change
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setCheckboxData((prevData) => ({
      ...prevData,
      [name]: {
        ...prevData[name],
        checked: checked,
      },
    }));
  };

  // Handle guide input field changes
  const handleGuideChange = (e, key) => {
    const { value } = e.target;
    setCheckboxData((prevData) => ({
      ...prevData,
      [key]: {
        ...prevData[key],
        guide: value,
      },
    }));
  };

  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      projectName,
      subTitle,
      description,
      ...checkboxData,
    };
    console.log(data);
    //Passing data to markdown.js
    navigate("/markdown", { state: data });
  };

  const [initialDataLoaded, setInitialDataLoaded] = useState(false);

  useEffect(() => {
    // Check if location state has data and if the initial data is not loaded
    if (location.state && !initialDataLoaded) {
      const {
        projectName,
        subTitle,
        description,
        installation,
        usage,
        features,
        techUsed,
        gettingStarted,
        contribute,
        license,
      } = location.state;

      // Set the input fields based on the data from location state
      setProjectName(projectName);
      setSubTitle(subTitle);
      setDescription(description);

      setCheckboxData({
        installation: {
          checked: installation.checked,
          guide: installation.guide,
        },
        usage: {
          checked: usage.checked,
          guide: usage.guide,
        },
        features: {
          checked: features.checked,
          guide: features.guide,
        },
        techUsed: {
          checked: techUsed.checked,
          guide: techUsed.guide,
        },
        gettingStarted: {
          checked: gettingStarted.checked,
          guide: gettingStarted.guide,
        },
        contribute: {
          checked: contribute.checked,
          guide: contribute.guide,
        },
        license: {
          checked: license.checked,
          guide: license.guide,
        },
      });

      // Set the initialDataLoaded to true to prevent re-setting the data
      setInitialDataLoaded(true);
    }
  }, [location.state, initialDataLoaded]);

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="title" className="form-label">
            Project name
          </label>
          <div className="form-input-group">
            <input
              type="text"
              className="form-text-input"
              id="dtitle"
              name="dtitle"
              defaultValue="Welcome to 🙋"
              readOnly
            />
            <input
              type="text"
              className="form-text-input"
              id="title"
              name="title"
              defaultValue={projectName}
              placeholder="Eg. Awesome Blogging Platform"
              onChange={handleInputChange}
              required
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
              name="subtitle"
              defaultValue={subTitle}
              placeholder="Eg. Empower Your Voice, Share Your Stories."
              onChange={handleInputChange}
              required
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
              id="description"
              name="description"
              defaultValue={description}
              placeholder="Eg. A short description of your project."
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        {Object.keys(checkboxData).map((key) => (
          <div className="form-group" key={key}>
            <label htmlFor={key} className="form-label">
              {key.charAt(0).toUpperCase() + key.slice(1) + emoji[key]}
            </label>
            <div className="check-group">
              <div className="left">
                <input
                  type="checkbox"
                  className="form-control"
                  id={key}
                  name={key}
                  readOnly
                  checked={checkboxData[key].checked}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor={key} className="form-label check">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </label>
              </div>
              <div className={`right ${key}`}>
                <div className="install-guide">
                  <p>{key.charAt(0).toUpperCase() + key.slice(1)} Guide</p>
                  <input
                    type="text"
                    className="form-checkbox-input"
                    id={`${key}-guide`} // Update the id to include key
                    name={`${key}-guide`} // Update the name to include key
                    placeholder={`Eg. Information about ${key}`}
                    onChange={(e) => handleGuideChange(e, key)} // Pass the key to the handler
                    value={checkboxData[key].guide}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
        <button type="submit" className="btn btn-primary">
          Generate README
        </button>
      </form>
    </>
  );
};

export default UserForm;
