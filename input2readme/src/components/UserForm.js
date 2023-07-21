
import Title from "./Title";
import Subtitle from "./Subtitle";
import CheckBox from "./CheckBox";

const UserForm = (props) => {
  const onSubmit = (e) => {};
  return (
    <>
      <form>
        {/*NAME*/}
        <Title />
        {/*SUB TITLE*/}
        <Subtitle
          heading="Sub-Title"
          title="EX. Empower Your Voice, Share Your Stories."
        />
        {/*DESCRIPTION*/}
        <Subtitle
          heading="Description"
          title="EX. A short description of your project."
        />
        {/*TABLE OF CONTENT*/}
        <div className="form-group">
          <label htmlFor="table_of_content " className="form-label">
            Table of Content
          </label>
          {/*INSTALLATION-SECTION*/}
          <CheckBox
            heading="Installation 🔽"
            variable="installation"
            subhead="Prerequisites"
            placeholder="EX. Node.js, npm, MongoDB, etc."
          />
          {/*USAGE-SECTION*/}
          <CheckBox
            heading="Usage 📋"
            variable="usage"
            subhead="How to use the project?"
            placeholder="EX. Information on how to use my project, including examples."
          />
          {/*FEATURES-SECTION*/}
          <CheckBox
            heading="Features 🚀"
            variable="features"
            subhead="Have a look at the features"
            placeholder="EX. Description of feature 1,feature 2, and more"
          />
          {/*TECH-SECTION*/}
          <CheckBox
            heading="Technologies Used 💻"
            variable="techUsed"
            subhead="Mention the technologies, languages, frameworks, and libraries used in the project."
            placeholder="EX. Technology, Library, Framework"
          />
          {/*GETTING STARTED-SECTION*/}
          <CheckBox
            heading="Getting Started 🎬"
            variable="gettingStarted"
            subhead="Detailed instructions on how users can get started with my project, including any configuration or setup required."
            placeholder="EX. Creating an Account"
          />
          {/*CONTRIBUTE-SECTION*/}
          <CheckBox
            heading="Contributing 💡"
            variable="contribute"
            subhead="Guidelines on how users or developers can contribute to your project."
            placeholder="EX. Creating an Account"
          />
          {/*LICENSE-SECTION*/}
          <CheckBox
            heading="License 📝"
            variable="license"
            subhead="Information about the license under which your project is released."
            placeholder="EX. MIT License, Apache License 2.0, GNU General Public License (GPL), and more."
          />
          <button type="submit" className="btn btn-primary" onClick={onSubmit}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default UserForm;
