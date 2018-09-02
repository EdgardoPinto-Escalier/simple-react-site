import React from 'react';
import './Contact.css';

const Contact = () => {

    return (
      <form>
          <legend>CONTACT FORM</legend>
          <div className="inputField">
              <label>NAME: </label>
              <input type="text" placeholder="Your Name" />
          </div>
          <div className="inputField">
              <label>EMAIL: </label>
              <input type="email" placeholder="Your Email" />
          </div>
          <div className="inputField">
              <label>MESSAGE: </label>
              <textarea></textarea>
          </div>
          <div className="inputField send">
              <input type="submit" value="SEND" />
          </div>
      </form>
    );
}

export default Contact;