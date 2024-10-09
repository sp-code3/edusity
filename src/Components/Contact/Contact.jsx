import React from 'react'
import './Contact.css'
import message_icon from '../../assets/message.png'
import mail_icon from '../../assets/mail.png'
import phone_icon from '../../assets/tel.png'
import location_icon from '../../assets/location.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "48866a27-0536-4c5f-97e0-9531062450f3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={message_icon} alt="" /></h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type 
                specimen book.</p>
                <ul>
                    <li><img src={mail_icon} alt="" />Conatct@gmail.com</li>
                    <li><img src={phone_icon} alt="" />+91 7092381153</li>
                    <li><img src={location_icon} alt="" />77 madras ave, Cambridge<br/>
                    MA 02134, United States</li>
                </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label htmlFor="">Your Name</label>
                <input type="text" name="name" placeholder='Enter your name' id="" required/>
                <label htmlFor="">Phone Number</label>
                <input type="tel" name="phone" placeholder='Enter your number' id="" required/>
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                <button type="submit" className="btn dark-btn">Submit now</button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact