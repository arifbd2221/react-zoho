import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

    const [email, setEmail] = useState('')
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [phone, setPhone] = useState('')

    const [data, setData] = useState(null);
  
    const handleEmailChange = event => {
        setEmail(event.target.value)
    };
    const handlePhoneChange = event => {
        setPhone(event.target.value)
    };
    const handleFnameChange = event => {
        setFname(event.target.value)
    };
    const handleLnameChange = event => {
        setLname(event.target.value)
    };

    const handleSubmit = event => {
        // event.preventDefault();
        console.log(email,fname,lname,phone);

        const formData = { First_Name: fname, Last_Name: lname, Email: email, Phone: phone };

        axios.post(`http://127.0.0.1:5000/add`, formData);

    };

    useEffect(() => {

        console.log("Making Request");
        axios.get(`http://127.0.0.1:5000/users`)
            .then(res => {
                const data = res.data;
                setData(data.data);
            })
    }, []);


  return (
      <React.Fragment>
          <div class="container register-form">
          <form onSubmit={handleSubmit}>
              <div class="note">
                  <p>Register User To Zoho Portal</p>
              </div>

              <div class="form-content">
                  <div class="row">
                      <div class="col-md-6">
                          <div class="form-group">
                              <input type="text" class="form-control" placeholder="First Name *" onChange={handleFnameChange} value={fname}/>
                          </div>
                          <div class="form-group">
                              <input type="text" class="form-control" placeholder="Last Name *" onChange={handleLnameChange} value={lname}/>
                          </div>
                      </div>
                      <div class="col-md-6">
                          <div class="form-group">
                              <input type="email" class="form-control" placeholder="Email *" onChange={handleEmailChange} value={email}/>
                          </div>
                          <div class="form-group">
                              <input type="phone" class="form-control" placeholder="Phone *" onChange={handlePhoneChange} value={phone}/>
                          </div>
                      </div>
                  </div>
                  <button type="submit" class="btnSubmit">Submit</button>
              </div>
              </form>
      </div>

        <div>
            <table className="mid">
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>

                {
                    data?.map((user, index) => (
                        <tr>
                            <td>{user.First_Name}</td>
                            <td>{user.Last_Name}</td>
                            <td>{user.Email}</td>
                            <td>{user.Phone}</td>
                        </tr>
                    ))
                }

                </table>
        </div>
        </React.Fragment>
  );
}

export default App;
