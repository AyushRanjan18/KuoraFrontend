import React,{useState} from 'react';
import './Modal.css';
import axios from 'axios';
const Modal =  ({show, close}) => { 
    const [input,setInput]= useState({ 
        creator_email :"xyz.com",
        title : "",
        tag :"",
        article:"",
        postid:10,
      })
        function onChange(event){
          const {name, value} = event.target;
    
          setInput(prevInput => {
            return {
              ...prevInput,
              [name]:value
            }
          })
         
        }
    
        function handleSubmit(event){
            event.preventDefault();
            console.log(input);
            const newRecord ={
              
              creator_email : input.creator_email,
              title : input.title,
              tag : input.tag,
              article : input.article, 
              postid:input.postid, 
            }
            axios.post('http://localhost:3001/post',newRecord)
            .then(response => {
              var x= response;
              
              console.log(x);
            })
            close();
        }

  return (
       <div className="modal-wrapper"
       style={{
           transform : show ? 'translateY(0vh)' : 'translateY(-100vh)',
           opacity : show ? '1' : '0'
            }}>
            <div className="modal-header">
                <p>Post your Question </p>
                <span onClick={close} className="close-modal-btn">x</span>
            </div>
           
            <div className="modal-content">
                <div className="modal-body">
                    <div className="form-group">
                    <label for="usr">Title <span className="star">*</span></label>
                    <input type="text" className="form-control" id="usr" name="title"
                    onChange={ onChange } value={input.title} required></input>
                    </div>
                    <div className="form-group">
                    <label for="comment">Ask your Question / Post an article <span className="star">*</span></label>
                    <textarea className="form-control" rows="4" id="comment" name="article"
                    onChange={ onChange } value={input.articles} placeholder="Ask your question or post an article i.e, It can contain links." required></textarea>
                    </div> 
                    <div className="form-group">
                    <label>Select Category <span className="star">*</span></label>
                    {/* <div className="form-check">  */}
                    <input className="form-check-input" type="radio" value={input.tag} name="tag" onChange={ onChange } id="flexRadioDefault1" value="COVID-19 related"></input>
                    <label className="form-check-label" for="flexRadioDefault1">
                    Pandemic related
                    </label>
                    <input className="form-check-input" type="radio" value={input.tag} name="tag" onChange={ onChange } value="Admissions" id="flexRadioDefault1"></input>
                    <label className="form-check-label" for="flexRadioDefault1">
                    Admissions
                    </label>
                    <input className="form-check-input" type="radio" name="tag" onChange={ onChange } value={input.tag} id="flexRadioDefault1"></input>
                    <label className="form-check-label" for="flexRadioDefault1">
                    Academics
                    </label>
                    <input className="form-check-input" type="radio" name="tag" onChange={ onChange } value={input.tag} id="flexRadioDefault1"></input>
                    <label className="form-check-label" for="flexRadioDefault1">
                    Library
                    </label>
                    {/* </div> */}
                    <div className="form-check">
                    <input className="form-check-input" type="radio" name="tag" onChange={ onChange } value={input.tag} id="flexRadioDefault1"></input>
                    <label className="form-check-label" for="flexRadioDefault1">
                    Higher Studies
                    </label>
                    <input className="form-check-input" type="radio" name="tag" onChange={ onChange } value={input.tag} id="flexRadioDefault1"></input>
                    <label className="form-check-label" for="flexRadioDefault1">
                    Examinations
                    </label>
                    <input className="form-check-input" type="radio" name="tag" onChange={ onChange } value={input.tag} id="flexRadioDefault1"></input>
                    <label className="form-check-label" for="flexRadioDefault1">
                    Campus
                    </label>
                    <input className="form-check-input" type="radio" name="tag" onChange={ onChange } value={input.tag} id="flexRadioDefault1"></input>
                    <label className="form-check-label" for="flexRadioDefault1">
                    Foreign Student Exchange
                    </label>
                    </div>
                    <div className="form-check">
                    <input className="form-check-input" type="radio" name="tag" onChange={ onChange } value={input.tag} id="flexRadioDefault1"></input>
                    <label className="form-check-label" for="flexRadioDefault1">
                    Placement Cell
                    </label>
                    <input className="form-check-input" type="radio" name="tag" onChange={ onChange } value={input.tag} id="flexRadioDefault1"></input>
                    <label className="form-check-label" for="flexRadioDefault1">
                    Faculty
                    </label>
                    <input className="form-check-input" type="radio" name="tag" onChange={ onChange } value={input.tag} id="flexRadioDefault1"></input>
                    <label className="form-check-label" for="flexRadioDefault1">
                    Hostel
                    </label>
                    <input className="form-check-input" type="radio" name="tag"onChange={ onChange } value={input.tag} id="flexRadioDefault1"></input>
                    <label className="form-check-label" for="flexRadioDefault1">
                    Fees Structure
                    </label>
                    </div>
                    </div>
                    </div>
            <div className="modal-footer">
               <button type="submit" onClick={handleSubmit} className="btn-success">Submit</button>
                <button onClick={close} className="btn-cancel">Close</button>
            </div>
        </div>
        </div>
    )
};
export default Modal;