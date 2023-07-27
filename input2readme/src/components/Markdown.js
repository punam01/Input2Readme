import React, { useMemo, useState, useEffect } from "react";
import {
  FaArrowLeft,
  FaCopy,
  FaDownload,
  FaEye,
  FaMarkdown,
} from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Alert from "./Alert";
const Markdown = () => {
  const location = useLocation();
  const [markDown, setMarkDown] = useState("");
  const navigate = useNavigate();
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showIns, setShowIns] = useState(true);
  const handleShowAlert = () => {
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
    setShowIns(false);
  };
  const memoizedLocation = useMemo(() => location, [location]);
  const {
    projectName,
    subTitle,
    description,
    installation,
    features,
    techUsed,
    gettingStarted,
    contribute,
    license,
  } = memoizedLocation.state;

  const tableOfContents = `
1. [Description](#description)
2. [Installation](#installation)
3. [Features](#features)
4. [Tech Used](#tech-used)
5. [Getting Started](#getting-started)
6. [Contribute](#contribute)
7. [License](#license)
`;

  const markdownContent = `
# **${projectName}**

> *${subTitle}*

${tableOfContents}

## Description
${description}

## Installation
\`\`\`
${installation.guide}
\`\`\`

## Features
${features.guide}

## Tech Used
${techUsed.guide}

## Getting Started
${gettingStarted.guide}

## Contribute
${contribute.guide}

## License
${license.guide}
`;

useEffect(() => {
    const cleanedText = markdownContent.replace(/^\s+/g, "");
    setMarkDown(cleanedText);
  }, [markdownContent]);

  const handleBackToEdit = () => {
    navigate("/", { state: memoizedLocation.state }); 
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(markDown);
    handleShowAlert();
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([markDown], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "markdown_content.md";
    document.body.appendChild(element);
    element.click();
  };

  const handlePreview = () => {
    setIsPreviewVisible((prevValue) => !prevValue);
  };

  return (
    <>
      <div className="markdown-container">
        {showIns && (
            <Alert message={`
            Instructions:
            1. Click on "Copy to Clipboard📋" button to copy the markdown content.
            2. Click on "Download📥" button to download the markdown file.
            3. Click on "Preview👀" button to see the preview of the markdown content.
            4. Click on "Back to Edit✍️" button to edit the markdown content.
            5. Edit the markdown content in the editor on the left.
            `} onClose={handleCloseAlert} />
          )}
        <div className="options">
          <button className="btn" onClick={handleBackToEdit}>
            <FaArrowLeft className="icon" />
            back to edit
          </button>
          <button className="btn" onClick={handleCopyToClipboard}>
            <FaCopy className="icon" />
            copy to clipboard
          </button>
          {showAlert && (
            <Alert message="Text copied!" onClose={handleCloseAlert} />
          )}
          <button className="btn" onClick={handleDownload}>
            <FaDownload className="icon" />
            download
          </button>
          <button className="btn" onClick={handlePreview}>
            {isPreviewVisible ? (
              <>
                <FaMarkdown className="icon" />
                markdown
              </>
            ) : (
              <>
                <FaEye className="icon" />
                preview
              </>
            )}
          </button>
        </div>
        <div
          className="markdown-view"
          style={{ display: isPreviewVisible ? "none" : "flex" }}
        >
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            value={markDown}
            onChange={(e) => setMarkDown(e.target.value)}
          ></textarea>
        </div>
        <div
          className="markdown-preview"
          style={{ display: isPreviewVisible ? "flex" : "none" }}
        >
          <div className="preview">
            <ReactMarkdown className="content">{markDown}</ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  );
};

export default Markdown;
