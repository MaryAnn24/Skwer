import React, {useState} from 'react';
import Register from '../Register/Register';
import Restrictions from '../Restrictions/Restrictions';
import BasicInfo from '../BasicInfo/BasicInfo';
import axios from "axios";

function Form () {
    const [page, setPage] = useState(0);

    const [formData, setFormData] = useState({
        companyname: "",
        email: "",
        password: ""
    });
    
    const FormTitles = ["Register Your Company", "Restricted Territories List", "Basic Info"]

    const bodyContent = [<Register formData = {formData} setFormData = {setFormData} />, <Restrictions />, <BasicInfo formData = {formData} setFormData = {setFormData} />];

  return (
    <div className="form">
        <div className="progressbar">
            <div style={{width: 33.33*(page+1)+'%'}}></div>
        </div>
        <div className="form-container">
            <div className="header">
                <h1>{FormTitles[page]}</h1>
            </div>
            <div className="body">
                {bodyContent[page]}
            </div>
            <div className="footer">
                <button
                    disabled = {page === 0}
                    onClick = {() => {
                        setPage((currPage) => currPage - 1 );
                    }}
                    >
                    Prev
                </button>
                <button 
                    onClick = {() => {
                        if (page === FormTitles.length -1) {
                            alert("Form submitted");
                            console.log(formData);

                            const newRegistration = {
                                companyname: formData.companyname,
                                email: formData.email,
                                password: formData.password
                            }

                            axios.post('http://localhost:3001/create', newRegistration)

                        } else {
                            setPage((currPage) => currPage + 1 );
                        }
                        
                        }}
                >
                    {page === FormTitles.length -1 ? "Submit" : "Next"}
                </button>
            </div>
        </div>
    </div>
  );
}

export default Form;