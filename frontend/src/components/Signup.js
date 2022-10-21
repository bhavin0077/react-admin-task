import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'


const Signup = () => {
    const [credentials, setCredentials] = useState({name:"" ,email: "", password: "", cpassword:""}) 
    let history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault(); //prevents refreshing the page
        const {name, email, password} = credentials
        const response = await fetch("http://localhost:5000/api/auth/createUser", {
           
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email , password})
        });
        const json = await response.json()
        // console.log(json);
       
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken); 
            // history.push("/")    uncomment this for notes

            history.push("/login"); 
            alert("your account has been created")
       
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }


    return (
        <>
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3 mt-5">
                <h3>Signup </h3>
                <label htmlFor="name" className="form-label">Name</label>
                    <input style={{width:"50%"}} type="text" className="form-control" id="name" name="name" onChange={onChange} minLength={5} aria-describedby="emailHelp" />

                    <label htmlFor="email" className="form-label">Email address</label>
                    <input style={{width:"50%"}} type="email" className="form-control" id="email" name="email" onChange={onChange} aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input style={{width:"50%"}} type="password" className="form-control"  name="password" onChange={onChange} id="password" minLength= {5} required />
                </div>

                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input style={{width:"50%"}} type="password" className="form-control"  name="cpassword" onChange={onChange} id="password" minLength= {5} required />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        </>
    )
}

export default Signup