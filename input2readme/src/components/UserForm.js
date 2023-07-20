import React from 'react'

const UserForm = (props) => {
    return (
        <>
        <form>
            <div className="form-group">
                <label htmlFor="title " className="form-label">Title</label>
                <div className="form-input-group">
                    <input type="text" className="form-control" id="title " name="title " value="Hi 👋, I'm " onChange={props.handleChange}/>
                    <input type="text" className="form-control" id="title " name="title " value="" onChange={props.handleChange} placeholder='name'/>
                </div>                
            </div>
            <div className="form-group">
                <label htmlFor="subtitle " className="form-label">Sub-Title</label>
                <div className="form-input-group">
                    <input type="text" className="form-control" id="subtitle " name="subtitle " value="" onChange={props.handleChange}/>
                </div>                
            </div>
            <div className="form-group">
                <label htmlFor="work" className="form-label">Work</label>
                <div className="form-input-group">
                    <input type="text" className="form-control" id="work" name="work" value="🔭 I’m currently working on" onChange={props.handleChange} readOnly/>
                    <input type="text" className="form-control" id="work" name="work" value="" onChange={props.handleChange} placeholder='project name'/>
                    <input type="text" className="form-control" id="work" name="work" value="" onChange={props.handleChange} placeholder='project link'/>
                </div>             
                <div className="form-input-group">
                    <input type="text" className="form-control" id="collaborate" name="collaborate" value="👯 I’m looking to collaborate on" onChange={props.handleChange} readOnly/>
                    <input type="text" className="form-control" id="collaborate" name="collaborate" value="" onChange={props.handleChange} placeholder='project name'/>
                    <input type="text" className="form-control" id="collaborate" name="collaborate" value="" onChange={props.handleChange} placeholder='project link'/>
                </div>  
                <div className="form-input-group">
                    <input type="text" className="form-control" id="help" name="help" value="🤝 I’m looking for help with" onChange={props.handleChange} readOnly/>
                    <input type="text" className="form-control" id="help" name="help" value="" onChange={props.handleChange} placeholder='project name'/>
                    <input type="text" className="form-control" id="help" name="help" value="" onChange={props.handleChange} placeholder='project link'/>
                </div>  
                <div className="form-input-group">
                    <input type="text" className="form-control" id="learning" name="learning" value="🌱 I’m currently learning" onChange={props.handleChange} readOnly/>
                    <input type="text" className="form-control" id="learning" name="learning" value="" onChange={props.handleChange} placeholder='Framework, courses etc'/>
                </div>  
                <div className="form-input-group">
                    <input type="text" className="form-control" id="reachme" name="reachme" value="📫 How to reach me" onChange={props.handleChange} readOnly/>
                    <input type="text" className="form-control" id="reachme" name="reachme" value="" onChange={props.handleChange} placeholder='example@gmail.com'/>
                </div>     
                <div className="form-input-group">
                    <input type="text" className="form-control" id="project" name="project" value="👨‍💻 All of my projects are available at" onChange={props.handleChange} readOnly/>
                    <input type="text" className="form-control" id="project" name="project" value="" onChange={props.handleChange} placeholder='portfolio link'/>
                </div> 
                <div className="form-input-group">
                    <input type="text" className="form-control" id="article" name="article" value="📝 I regularly write articles on" onChange={props.handleChange} readOnly/>
                    <input type="text" className="form-control" id="article" name="article" value="" onChange={props.handleChange} placeholder='blog link'/>
                </div> 
                <div className="form-input-group">
                    <input type="text" className="form-control" id="experience" name="experience" value="📄 Know about my experiences" onChange={props.handleChange} readOnly/>
                    <input type="text" className="form-control" id="experience" name="experience" value="" onChange={props.handleChange} placeholder='resume link'/>
                </div> 
            </div>
            <div className="form-group">
                <label htmlFor="skills" className="form-label">Skills</label>
                <div className="form-input-group">
                    <section className='skills-section'>
                        <div className='skill-section'>
                            <label htmlFor="programming" className="form-sub-label">Programming Language</label>
                            <div className='check-outer'>
                                <div className='checkbox-inner'>
                                    <input type="checkbox" className="form-control" id="programming" name="programming" value="C" onChange={props.handleChange}/>
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="C"/>
                                </div>
                                <div className='checkbox-inner'>
                                    <input type="checkbox" className="form-control" id="programming" name="programming" value="C++" onChange={props.handleChange}/>
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" alt="C++"/>
                                </div>                              
                                <div className='checkbox-inner'>
                                    <input type="checkbox" className="form-control" id="programming" name="programming" value="C#" onChange={props.handleChange}/>
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" alt="C#"/>
                                </div>
                                <div className='checkbox-inner'>
                                    <input type="checkbox" className="form-control" id="programming" name="programming" value="Go" onChange={props.handleChange}/>
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg" alt="Go"/>
                                </div> 
                                <div className='checkbox-inner'>
                                    <input type="checkbox" className="form-control" id="programming" name="programming" value="Java" onChange={props.handleChange}/>
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="Java"/>
                                </div>
                                <div className='checkbox-inner'>
                                    <input type="checkbox" className="form-control" id="programming" name="programming" value="Javascript" onChange={props.handleChange}/>
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="Javascript"/>
                                </div> 
                                <div className='checkbox-inner'>
                                    <input type="checkbox" className="form-control" id="programming" name="programming" value="C" onChange={props.handleChange}/>
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="C"/>
                                </div>
                                <div className='checkbox-inner'>
                                    <input type="checkbox" className="form-control" id="programming" name="programming" value="C" onChange={props.handleChange}/>
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="C"/>
                                </div> 
                            </div>
                        </div>   
                        <div className='skill-section'>
                            <label htmlFor="programming" className="form-sub-label">Programming Language</label>
                            <div className='check-outer'>
                                <div className='checkbox-inner'>
                                    <input type="checkbox" className="form-control" id="programming" name="programming" value="C" onChange={props.handleChange}/>
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="C"/>
                                </div>
                                <div className='checkbox-inner'>
                                    <input type="checkbox" className="form-control" id="programming" name="programming" value="C++" onChange={props.handleChange}/>
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" alt="C++"/>
                                </div>                              
                                <div className='checkbox-inner'>
                                    <input type="checkbox" className="form-control" id="programming" name="programming" value="C#" onChange={props.handleChange}/>
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" alt="C#"/>
                                </div>
                                <div className='checkbox-inner'>
                                    <input type="checkbox" className="form-control" id="programming" name="programming" value="Go" onChange={props.handleChange}/>
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg" alt="Go"/>
                                </div> 
                                <div className='checkbox-inner'>
                                    <input type="checkbox" className="form-control" id="programming" name="programming" value="Java" onChange={props.handleChange}/>
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="Java"/>
                                </div>
                                <div className='checkbox-inner'>
                                    <input type="checkbox" className="form-control" id="programming" name="programming" value="Javascript" onChange={props.handleChange}/>
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="Javascript"/>
                                </div> 
                                <div className='checkbox-inner'>
                                    <input type="checkbox" className="form-control" id="programming" name="programming" value="C" onChange={props.handleChange}/>
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="C"/>
                                </div>
                                <div className='checkbox-inner'>
                                    <input type="checkbox" className="form-control" id="programming" name="programming" value="C" onChange={props.handleChange}/>
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="C"/>
                                </div> 
                            </div>
                        </div>
                    </section>
                    
                    
                </div>                
            </div>
        </form>
        </>
    );
}

export default UserForm;