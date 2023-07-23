
import Title from "./Title";
import Subtitle from "./Subtitle";
import CheckBox from "./CheckBox";
import { useState } from "react";

const UserForm = () => {
  const [checked, setChecked] = useState (false);
  
  const handleCheck = (e) => {
        setChecked(!checked);
    }

  const onSubmit = (e) => {
    e.preventDefault();
    const form = document.querySelector("form");
    const formData = new FormData(form);
    const data = {};
    for (let [key, value] of formData.entries()) {
      data[key] = value;
    }
    console.log(data);
  };
  const handleAdd = (e) => {
        e.preventDefault();
        const rightElement = document.querySelector(`.right ${e.target.name}`);
        const installGuide = document.createElement('div');
        installGuide.classList.add('install-guide');
        const input=document.createElement('input');
        input.type='text';
        input.className='form-checkbox-input';
        input.id='guide';
        input.name='guide';
        input.style.display='flex';
        installGuide.appendChild(input);
        rightElement.appendChild(installGuide);
        const removeBtn=document.createElement('button');
        removeBtn.className='removebtn';
        removeBtn.innerHTML='❌';
        removeBtn.classList.add('removebtn');
        installGuide.appendChild(removeBtn);
        removeBtn.addEventListener('click',()=>{
            installGuide.remove();
        })
      }
  return (
    <>
      <form>
        <Title />
        <Subtitle
          heading="Sub-Title"
          title="EX. Empower Your Voice, Share Your Stories."
        />
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
          <div className="check-group">
            <div className="left">
              <input type="checkbox" className="form-control" id="installation" name="installation" readOnly onChange={handleCheck}  />
              <label htmlFor="installation" className="form-label check">Installation</label>
            </div>
            <div className={`right installation`}>
              <div className="install-guide">
                <p>Prerequisites</p>
                <input type="text" className="form-checkbox-input" id="prerequisites" name="prerequisites" placeholder="EX. What is needed to set up the dev environment. For instance, global dependencies or any other tools." />
              </div>
            </div>          
          </div>
          {/*USAGE-SECTION*/}
          <div className="check-group">
            <div className="left">
              <input type="checkbox" className="form-control" id="useage" name="useage" readOnly onChange={handleCheck} placeholder="EX. Information on how to use my project, including examples." />
              <label htmlFor="useage" className="form-label check">Useage 📋</label>
            </div>
            <div className={`right useage`}>
              <div className="install-guide">
                <p>How to use the project?</p>
                <input type="text" className="form-checkbox-input" id="guide" name="guide" placeholder="EX. Information on how to use my project, including examples." />
              </div>
            </div>       
          </div>
          {/*FEATURES-SECTION*/}
          <div className="check-group">
            <div className="left">
              <input type="checkbox" className="form-control" id="feature" name="feature" readOnly onChange={handleCheck} placeholder="EX. Information on how to use my project, including examples." />
              <label htmlFor="feature" className="form-label check">Features 🚀</label>
            </div>
            <div className={`right feature`}>
              <div className="install-guide">
                <p>Have a look at the features</p>
                <input type="text" className="form-checkbox-input" id="guide" name="guide" placeholder="EX. Description of feature 1,feature 2, and more" />
              </div>
            </div>       
          </div>
          {/*TECH-SECTION*/}
          <div className="check-group">
            <div className="left">
              <input type="checkbox" className="form-control" id="techUsed" name="techUsed" readOnly onChange={handleCheck} placeholder="EX. Information on how to use my project, including examples." />
              <label htmlFor="techUsed" className="form-label check">Technologies Used 💻</label>
            </div>
            <div className={`right feature`}>
              <div className="install-guide">
                <p>Mention the technologies, languages, frameworks, and libraries used in the project.</p>
                <input type="text" className="form-checkbox-input" id="guide" name="guide" placeholder="EX. Technology, Library, Framework" />
              </div>
            </div>       
          </div>
          {/*GETTING STARTED-SECTION*/}
          <div className="check-group">
            <div className="left">
              <input type="checkbox" className="form-control" id="gettingSgettingStartedtarted" name="" readOnly onChange={handleCheck} placeholder="EX. Information on how to use my project, including examples." />
              <label htmlFor="gettingStarted" className="form-label check">Getting Started 🎬</label>
            </div>
            <div className={`right feature`}>
              <div className="install-guide">
                <p>Detailed instructions on how users can get started with my project, including any configuration or setup required.</p>
                <input type="text" className="form-checkbox-input" id="guide" name="guide" placeholder="EX. Creating an Account" />
              </div>
            </div>       
          </div>
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
