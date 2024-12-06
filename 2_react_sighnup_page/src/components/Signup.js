import React from 'react'

const Signup = () => {
  return (
   <>
   <h1>Create Google Form</h1>
      <form action="" className="fm">
        <fieldset className="fill">
          <legend>Registration Form</legend>
          <div className="from">
            <label htmlFor="name">Full Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="Enter your full name" 
              required 
            />
          </div>
          <div className="from">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="Enter your email" 
              required 
            />
          </div>
          <div className="from">
            <label htmlFor="phone">Phone Number</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              placeholder="Enter your phone number" 
              required 
            />
          </div>
          <div className="from">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              placeholder="Enter your password" 
              required 
            />
          </div>
          <div className="from">
            <label htmlFor="role">Role</label>
            <select id="role" name="role" required>
              <option value="" disabled>
                Select your role
              </option>
              <option value="Job Seeker">Job Seeker</option>
              <option value="Recruiter">Recruiter</option>
            </select>
          </div>
          <div className="from">
            <button type="submit">Register</button>
          </div>
        </fieldset>
      </form>
   </>
  )
}

export default Signup;
