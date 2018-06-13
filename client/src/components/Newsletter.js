import React from 'react';

const Newsletter = () => {
  return(
    <div className="section newsletter-container">
      <h2>Newsletter Sign-Up</h2>
      <div className="inputAndButton">
        <input type="text" placeholder="your@email.com"/>
        <button>Submit</button>
      </div>
    </div>
  )
}

export default Newsletter;
