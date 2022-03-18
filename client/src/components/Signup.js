import React from 'react'
import './Signup.css';

function Signup() {
  return (
    <>
    {/* <div class="container text-center my-4">
        <h3><u class="fs-1">Sign UP Details</u></h3>
    </div> */}
    <section class="background_img">
    <div class="container">
    <div class="container text-center paddingtitle mb-3">
        <h3><u class="fs-1 text-light">Sign UP Details</u></h3>
    </div>
    <div className="row">
        <div className="col-md-6 offset-md-3">
        <div class="container">
            <div class="form-floating mb-3 my-4">
                <input type="text" class="form-control" id="floatingNameInput" placeholder="Full Name"/>
                <label for="floatingInput">Full Name</label>
            </div>
            <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingEmailInput" placeholder="name@example.com"/>
                <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingUserNameInput" placeholder="User Name"/>
                <label for="floatingInput">User Name</label>
            </div>
            <div class="form-floating mb-3">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Password</label>
            </div>
            <div class="form-floating mb-3">
                <input type="password" class="form-control" id="floatingConfirmPassword" placeholder="Confirm Password"/>
                <label for="floatingPassword">Confirm Password</label>
            </div>
            <div class="form-floating mb-3">
                <input type="numeric" class="form-control" id="floatingInput" placeholder="Phone Number"/>
                <label for="floatingInput">Phone Number</label>
            </div>
            <div className="container text-center my-4">
                <input class="btn btn-success text-black my-4 btn-lg" type="submit" value="Submit"></input>
            </div>
            
        </div>
        </div>
    </div>
    </div>
    </section>
    </>
  )
}

export default Signup
