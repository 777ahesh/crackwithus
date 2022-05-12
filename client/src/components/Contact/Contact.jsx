import React from 'react'
import "./contact.css"
const Contact = () => {
  return (
    <>
        <section className="contactus" id="contactus">
    <div className="container headings text-center">
        <h1 className="text-center font -weight-bold"> Contact Us</h1>
        <p className="text-capitalized pt-1"> We're Here To Help And Answer Any Question You Might Have  </p>
    </div>

    <div className="container">
        <div className="row">
            <div className="col-lg-8 col-md-8 col-10 offset-lg-2 offset-md-2 offset-1">
                <form action="/contact"method="POST">
                   
                    <div className="form-group"> 
                      <input type="name" name="fullname" className="form-control" placeholder="Enter Name" id="email" required autocomplete="off"/>
                    </div>
                  
                    <div className="form-group">
                        <input type="email"name="email" className="form-control" placeholder="Enter Email" id="email" required autocomplete="off"/>
                      </div>

                      <div className="form-group">
                        <input type="mobile" name="phone" className="form-control" placeholder="Enter Mobile Number" id="email" required autocomplete="off"/>
                      </div> 
                      
                      <div className="form-group">
                      <textarea type="text" name="textarea" className="form-control" placeholder="Enter Your Message" id="email" required autocomplete="off"/>
                      </div>

                      <div  className="d-flex justify-content-center form-button1">
                        <button type="submit" className="btn btn-primary" required >Submit</button>
                      </div>

                </form>
            </div>
        </div>
    </div>
</section>
    </>
  )
}

export default Contact