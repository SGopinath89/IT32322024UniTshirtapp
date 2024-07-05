import { useEffect } from 'react';
import './SignUp.css';

import '../../index.css';

export default function SignUp({ setShowNav }) {
    useEffect(() => {
        setShowNav(false);
    }, [setShowNav]);

    return (
        <>
            <div className="login-div">
                <div className='card login-card'>
                    <h2>Sign Up</h2>
                    <form className="login-form">
                        <label className="email">First Name</label><label className="lname">Last Name</label>
                        <input type="text" placeholder='First Name' width="30%" className="FnameInput"/><br></br>

                        <label className="email">University</label>
                        <select name="uni" id="uni">
                            <option value="UOV">UOV</option>
                            <option value="UOP">UOP</option>
                            <option value="UOC">UOC</option>
                        </select>

                        <br></br><br></br><br></br><br></br>
                        <label className="email">Index Number</label>
                        <input type="text" placeholder='Type your Index Number' className="form-control"/>


                        <label className="email">Email</label>
                        <input type="email" placeholder='Type your Email' className="form-control"/>

                        <label className="email">Password</label>
                        <input type="password"  placeholder='Type your Password' className="form-control"/>
                        
                        <center>
                            <div>

                                <button className='btnmargin'>Sign Up</button>
        
                            </div>
                            <div>
                                <p className='textmargin'>Already have an Account? <a href="./signup">Log In</a></p>
                                
                            </div>
                        </center>
                    </form>
                </div>
            </div>
        </>
    );
}
