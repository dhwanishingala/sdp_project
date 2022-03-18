import React from 'react'
import './Login.css';
function Login() {
  return (
    <>
    {/* <div class="container text-center my-4">
        <h3><u class="fs-1">Sign UP Details</u></h3>
    </div> */}
    <section>
    <div class="container border border-5 rounded-3">
    <div class="container text-center paddingtitle mb-3">
        <h3><u class="fs-1">Login Details</u></h3>
    </div>
    <form action='' method="Post">
            <div className="row">
        <div className="col-md-6 offset-md-3">
        <div class="container">
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingUserNameInput" placeholder="User Name"/>
                <label for="floatingInput">User Name</label>
            </div>
            <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingEmailInput" placeholder="name@example.com"/>
                <label for="floatingInput">Email address</label>
            </div>
           
            <div class="form-floating mb-3">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Password</label>
            </div>
            <form action='/home'>
            <div className="container text-center my-4">
                <input class="btn btn-success text-black" type="submit" value="Submit"></input>
            </div>
            </form>
            
        </div>
        </div>
    </div>
    </form>
    </div>
    </section>
    </>
  )
}

export default Login