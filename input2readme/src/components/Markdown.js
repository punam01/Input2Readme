import React from 'react'; 
import { FaArrowLeft, FaCopy, FaDownload,FaEye} from 'react-icons/fa';
const Markdown = (props) => {
    return (
        <>
        <div className="markdown-container">
            <div className="options">
                <button className="btn"><FaArrowLeft className='icon-noanim'/>back to edit</button>
                <button className="btn"><FaCopy className='icon-noanim'/>copy to clipboard</button>
                <button className="btn"><FaDownload className='icon-noanim'/>download</button>
                <button className="btn"><FaEye className='icon-noanim'/>preview</button>
            </div>
            <div className="markdown-view">
                
            </div>
            <div className="markdown-preview">

            </div>
        </div>
        </>
)};

export default Markdown;