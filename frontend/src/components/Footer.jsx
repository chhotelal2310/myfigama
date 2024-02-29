import React, { useState } from 'react';
import '../styles/footer.css';
import { AiOutlineYoutube } from 'react-icons/ai';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';
import { FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/subscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      console.log(response);

      if (response.ok) {
         alert("Subscription successfully")
        console.log('Subscribed successfully');
        setEmail('')
      } else {
       alert("subscription falied || already exists")
        console.error('Subscription failed');
        
      }
    } catch (error) {
      // Handle fetch error
      console.error('Error:', error);
    }
  };

  return (
    <>
      <footer className='footer text-gray-200'>
        <div className='part1'>
          <div className='column'>
            <span className='sp'>
              <span style={{ fontSize: '32px', fontWeight: '600' }}>XYZ</span>{' '}
              <span style={{ fontSize: '32px', fontWeight: '50' }}>INDUSTRIES </span>
            </span>
            <p style={{ color: 'gray' }}>
              Where real estate dreams meet seamless transactions, transforming aspirations into achievements.
            </p>
            <button
              style={{
                height: '50px',
                width: '150px',
                borderRadius: '10px',
                fontSize: '20px',
                color: 'white',
                backgroundColor: '#071a45',
                border: '1px solid white',
              }}
            >
              EXPLORE
            </button>
          </div>

          <div className='column'>
            <span className='sp'>Quick Links</span>
            <ul>
              <li>About Us</li>
              <li>Blog</li>
              <li>Testimonials</li>
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
              <li>Site Map</li>
            </ul>
          </div>

          <div className='column'>
            <span className='sp'>Customer Support</span>
            <ul>
              <li>Feedback</li>
              <li>Report a Problem</li>
              <li>Request a Call Back</li>
            </ul>
          </div>

          <div className='column'>
            <span className='sp'>Subscribe Us</span>
            <p style={{ color: 'gray' }}>Subscribe to our weekly newsletter</p>
            <form onSubmit={handleSubmit}>
              <input
                type='email'
                placeholder='Email id'
                style={{ padding: '10px', borderRadius: '10px', width: '200px', marginRight: '10px' }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <button
                type='submit'
                style={{
                  padding: '10px',
                  width: '220px',
                  marginTop: '10px',
                  color: 'white',
                  backgroundColor: '#3a7dff',
                  borderStyle: 'none',
                  borderRadius: '10px',
                }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div class='vertical-line'></div>
        <div className='part2'>
          <ul class='social-icons'>
            <li>
              <AiOutlineYoutube />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaFacebookF />
            </li>
          </ul>

          <div className='policy'>
            <ul>
              <li>
                Term | Privacy <span style={{ marginLeft: '30px' }}>@2024 XYZ</span>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
