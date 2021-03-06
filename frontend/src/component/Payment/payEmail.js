import React, { Component } from 'react';
import emailjs from 'emailjs-com'

const payEmail = () => {



    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(
            "service_yqmzwdu",
            "template_kyjtn22",
            e.target,
            "user_IszLcJw7eieYNoRBcusnB"
        ).then(res => {
            console.log(res);
        }).catch(err => console.log(err));
    }

    {
        return (

            <div className="container border"

                style={{

                    marginTop: "50px",
                    width: '50%',
                    backgroundImage: `url('https://image.freepik.com/free-photo/hand-painted-watercolor-background-with-sky-clouds-shape_24972-1095.jpg')`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}>
                <br></br>
                <h1 style={{ marginTop: "20px", fontSize: "50px" }}>Contact Form</h1>
                <form className="row" style={{ margin: "25px 85px 75px 100px" }}
                    onSubmit={sendEmail}>
                    <lable>name</lable>
                    <input type="text" name="name" className="form-control"></input>

                    <lable>email</lable>
                    <input type="email" name="user_email" className="form-control" />

                    <lable>Message</lable>
                    <textarea type="message" name="emailms" rows="4" className="form-control" />
                    <input type="submit" value="Send" className="form-control btn btn-primary" style={{ marginTop: "30px" }} />
                </form>
            </div>
        );
    }
}

export default payEmail;