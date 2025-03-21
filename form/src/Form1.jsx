import { useState } from "react";

function Form1(){
    const headingStyle = {
        textAlign: "center", // Centers the text
        color: "blue",       // Optional: Change text color
        fontSize: "2rem",    // Optional: Adjust font size
        margin: "20px 0"     // Optional: Add spacing
      };
      const handleSub=(e)=>{
        e.preventDefault()
        alert("form submitted")
      }

      const[name,setName]=useState("");
      const enterName =(e)=>{
        setName(e.target.value)
      }

      
      
      const[lastname,setlastName]=useState("");
      const enterlastName =(e)=>{
        setlastName(e.target.value)
      }

      const[gender,setgender]=useState("");
      const selectgender =(e)=>{
        setgender(e.target.value)
      }

      const[subject,setSub]= useState('')
      const selectSub= (e)=>{
        setSub(e.target.value)
        
      }



    return(
        <>
        <div
         className="div">
            <h1 style={headingStyle}>Form In React</h1>
            <form onSubmit={handleSub} >
                <label htmlFor="firstname" >First Name*</label>
              
                <input onChange={enterName} type="text" placeholder="Enter First Name"/>
                
                <label htmlFor="lasttname">Last Name*</label>
               
                <input onChange={enterlastName} type="text" placeholder="Enter Last Name"/>
                
                <label htmlFor="email">Email*</label>
               
                <input type="text" placeholder="Enter Your Email"/>
               
                <label htmlFor="">Enter Your Contact*</label>
                
                <input type="text" placeholder="Enter Your Contact"/>

              
                <label htmlFor="gender" >Gender*</label>
                
                <input onChange={selectgender}  type="radio" name="gender" value={"Male"} id="female"/>Male
                <input onChange={selectgender}  type="radio" name="gender" value={'female'}/>Female
                

                <label htmlFor="subject">Subject</label>
                <select onChange={selectSub} name="subject" id="subject">
                    <option value=""> Select subject</option>
                    <option value="math">Math</option>
                    <option  value="math">Physics</option>
                    <option  value="chemistry">Chemistry</option>
                </select>
                

                <label htmlFor="resume">Resume</label>
              
                <input type="file" placeholder="Upload Resume" name="resume" />
                
                <label htmlFor="textarea">About</label>
               
                <textarea name="textarea" id="textarea" cols={30} rows={10} placeholder="Tell about Yourself">
                    
                </textarea>
                <button type="Submit"> Submit</button>
                <button type="button">Reset</button>
                <h3>My name is : {name}
                    <br />
                    My lastname is: {lastname}
                    <br />
                    my gender is : {gender}
                    <br />
                    Subject: {subject}
                </h3>

                
            </form>

        </div>
        
        </>
       
    )
}

export default Form1;