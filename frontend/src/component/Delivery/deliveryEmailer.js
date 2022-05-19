import React from 'react';
import emailjs from 'emailjs-com';

const deliveryEmailer = () => {
    function sendEmail(e){
      e.preventDefault();
      
      emailjs.sendForm('service_ahg0a4i','template_7tnwsfz',e.target,'wpE7lfDx7fRQ3Legd')
      .then(res=>{
        console.log(res);
    }).catch(err=>console.log(err));
    
    }
  return(
    <div className="container boarder"
    style={{marginTop:"50px",
    width:"50%",
    backgroundImage:`url('https://static.vecteezy.com/system/resources/previews/000/425/737/non_2x/delivery-man-with-box-postman-design-isolated-on-white-background-courier-in-hat-and-uniform-with-package-vector.jpg'-moz-initial)`,
    backgroundPosition:'center',
    backgroundSize:"cover",

    
    }}>
        <h1 style={{marginTop:"25px"}} className="text-center">Contact Form- Delivery management</h1>
        <form className="row" 
        style={{margin:"25px 85px 75px 100px"}}
        onSubmit={sendEmail}>
            <label>Name of the Customer</label>
            <input type="text" name="name" className="form-control"/>

            <label>Email</label>
            <input type="email" name="client_email" className="form-control"></input>

            <label>Message</label>
            <textarea name="message" rows="4" className="form-control"/>
            <input type="submit"
             value="Send" 
             className="form-control btn btn-primary"
             style={{marginTop:"30px"}}/>
        </form>
    </div>
   )

 }
 export default deliveryEmailer