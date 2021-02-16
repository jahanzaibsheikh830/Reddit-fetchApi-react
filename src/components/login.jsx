import React from "react";
import './../App.css'

function Login() {
    return (
        <div>
            <div className="form-data">
                <h2 style={{textAlign: "center", marginBottom: "10px"}}>Login</h2>
                <form action="">
                    <input type="text" placeholder="Enter email" required/><br/>
                    <input type="text" placeholder="Enter password" required/><br/>
                    <button>Login</button>
                </form>
            </div>
        </div>
    )
}
export default Login;