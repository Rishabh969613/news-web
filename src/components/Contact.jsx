import React from 'react'

const Contact = () => {
    return (
    <>
            <div className="contact-container">
                <h2>Contact Us</h2>
                <form>
                    <label for="name">Your Name</label>
                    <input type="text" id="name" placeholder="Enter your name" required />

                        <label for="email">Email Address</label>
                        <input type="email" id="email" placeholder="Enter your email" required />

                            <label for="message">Message</label>
                            <textarea id="message" rows="5" placeholder="Write your message here..." required></textarea>

                            <button type="submit">Send Message</button>
                        </form>

                        <div className="contact-info">
                            <p>Email: support@example.com</p>
                            <p>Phone: +91 12345 67890</p>
                            <p>Address: 123, Main Street, New Delhi, India</p>
                        </div>
                    </div>
                </>
                )
}

export default Contact