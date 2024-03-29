import React, { useState } from 'react';
function RegistrationFrom(props) {

    const [state , setState] = useState({
        email : "",
        password : "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        const {id , value} = e.target
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    };

    const handleSubmitClick = (e) => {
        e.preventDefault();
        if(state.password === state.confirmPassword){
            sendDetailsToServer();
        }
        else {
            console.log("Password Does not match");
        }
    }

    const sendDetailsToServer = () => {
        console.log(state);
    }

    return (
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" value={state.email} onChange={handleChange}/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password" value={state.password} onChange={handleChange}/>
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword2">Confirm Password</label>
                    <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm Password" value={state.confirmPassword} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmitClick}> Register </button>
            </form>
        </div>
    );
}

export default RegistrationFrom;