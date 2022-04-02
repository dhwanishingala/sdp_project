import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import './Signup.css';

function Signup() {

    const navigate = useNavigate();
    const [user, setUser] = useState({
        name:" ",email: " ",uname: " ",password:" ",phone:" "
    })


    let name,value;
    const handleInputs = (e) =>{
        console.log(e);
        name = e.target.name;
        value = e.target.value;
        setUser({...user, [name]:value});
    }

    const PostData = async(e) =>{
        //e.preventDefault();
        const { name, email, uname, password, phone } = user;

        const res = await fetch('/register', {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body:JSON.stringify({
                name: name,
                email: email,
                uname: uname,
                password: password, 
                phone: phone
            })
        });

        const data = await res.json();
        console.log(data);
        if(res.status === 400 || !data){
            window.alert("Invalid Registration");
            console.log("Invalid Registration");
        }
        else{
            window.alert("Valid Registration");
            console.log("Valid Registration");

            //History.push(/login);
            navigate('/login');
        }
    }

  return (
    <>
    {/* <div class="container text-center my-4">
        <h3><u class="fs-1">Sign UP Details</u></h3>
    </div> */}

    <section class="background_img">
    <div class="container">
    <div class="container text-center paddingtitle mb-3">
        <h2><u class="fs-l text-dark">Sign UP Details</u></h2>
    </div>
    <div className="row">
        <div className="col-md-6 offset-md-3">
        <div class="container">
            <form method='POST'>
            <div class="form-floating mb-3 my-4">
            <input type="text" class="form-control" name="name" id="floatingNameInput"
                value={user.name}
                onChange={handleInputs}
                placeholder="Full Name"/>
                <label for="floatingInput">Full Name</label>
            </div>
            <div class="form-floating mb-3">
                <input type="email" class="form-control" name="email" id="floatingEmailInput"
                value={user.email}
                onChange={handleInputs}
                placeholder="name@example.com"/>
                <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" name="uname" id="floatingUserNameInput" 
                value={user.uname}
                onChange={handleInputs}
                placeholder="User Name"/>
                <label for="floatingInput">User Name</label>
            </div>
            <div class="form-floating mb-3">
                <input type="password" class="form-control" name='password' id="floatingPassword" 
                value={user.password}
                onChange={handleInputs}
                placeholder="Password"/>
                <label for="floatingPassword">Password</label>
            </div>
            <div class="form-floating mb-3">
                <input type="password" class="form-control" name='cpassword' id="floatingConfirmPassword" placeholder="Confirm Password"/>
                <label for="floatingPassword">Confirm Password</label>
            </div>
            <div class="form-floating mb-3">
                <input type="numeric" class="form-control" name='phone' id="floatingInput" 
                value={user.phone}
                onChange={handleInputs}
                placeholder="Phone Number"/>
                <label for="floatingInput">Phone Number</label>
            </div>
            <div className="container text-center">
                <input class="btn btn-success text-black my-4 btn-lg" type="submit" value="Submit"
                onClick={PostData}
                ></input>
            </div>
            </form>   
        </div>
        </div>
    </div>
    </div>
    </section>
    </>
  )
}

export default Signup
