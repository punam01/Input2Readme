import React from 'react'
import axios from "axios";
import { AiOutlineStar,AiOutlineFork,AiOutlineRead } from 'react-icons/ai';
const Navbar = () => {
    const accessToken = "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";
    const owner = "punam01"; // Replace with the repository owner's username
    const repo = "Input2Readme"; // Replace with the repository name
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
            console.log("Repository forked successfully!");
            // Perform any additional actions or show a success message if needed.
        } else {
            console.error("Unable to fork the repository.");
            // Handle the error appropriately.
        }
        } catch (error) {
        console.error("Error while forking the repository:", error);
        // Handle the error appropriately.
        }
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
            console.log("Repository starred successfully!");
            // Perform any additional actions or show a success message if needed.
        } else {
            console.error("Unable to star the repository.");
            // Handle the error appropriately.
        }
        } catch (error) {
        console.error("Error while starring the repository:", error);
        // Handle the error appropriately.
        }
    };
    const handleBlogClick = () => {
        window.location.href = "https://medium.com/@punamkumavat01";
    }
    return (    
        <>
        <nav>
            <p className="logo">
                Input2Readme
            </p>
            <ul className="nav-links">
                <li onClick={handleBlogClick}>
                    <AiOutlineRead className="icon"/>
                    <p>Read Blog</p>
                </li>
                <li onClick={handleStarClick}>
                    <AiOutlineStar className="icon"/>
                    <p>Star this repository</p>
                </li>
                <li onClick={handleForkClick}>
                    <AiOutlineFork className="icon"/>
                    <p>Fork this repository</p>
                </li>
            </ul>
        </nav>
        </>
    );
}
export default Navbar;