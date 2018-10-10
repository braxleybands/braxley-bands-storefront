import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
  <div className='ng-footer-container'>
		<div className='ng-subscribe-container'>
			<div className='ng-subscribe-text'>
				get exclusive deals<br />+<br />find out when new bands drop.
				</div>


			<form name="subscribe" className="ng-subscribe-form" action="https://braxleybands.us18.list-manage.com/subscribe/post?u=a1be8e0f04949f3b607635a15&amp;id=50b49a467e" target="_blank" method="post" >
				<input className='ng-email-input' type="email" name="EMAIL" placeholder="name@email.com" required/>
				<input className='ng-text-input' type="text" name="FNAME" placeholder="First Name" required/>
				<input className='ng-text-input' type="text" name="LNAME" placeholder="Last Name" required/>
				<div style={{ position: "absolute", left: "-5000px" }}><input type="hidden" name="form-name" tabIndex="-1" value="subscribe" /></div>
				<button type="submit" className="ng-email-submit" title="Subscribe">
					<span>Subscribe</span>
				</button>
			</form>


			
		</div>
    <div className='ng-footer-top-container'>
      <div className='ng-footer-top-line'>
      </div>
      <div className='ng-footer-top-logo'>
        <img alt="logo of facebook" src="https://res.cloudinary.com/devhound/image/upload/f_auto,q_auto/v1531366718/braxley_logo_gtxiy6.png" />
      </div>
      <div className='ng-footer-top-line'>
      </div>
    </div>
    <div className='ng-footer-middle'>
      <div className='ng-footer-links'>
        <Link to="/">Shop</Link><br />
        <Link to="/gallery">Gallery</Link><br />
        <Link to="/our-story">Our story</Link>
      </div>
      <div className='ng-footer-social-media'>
				<a href="https://www.facebook.com/braxleybands/" className="ng-social-link facebook-icon" >
          <img alt="logo of facebook" src="https://res.cloudinary.com/devhound/image/upload/v1531367351/facebook-logo-button_st9pnb.png" />
        </a>
				<a href="https://www.instagram.com/braxleybands/?hl=en" className="ng-social-link instagram-icon" >
					<img alt="logo of instagram" src="https://res.cloudinary.com/devhound/image/upload/q_auto/v1531511372/ig-logo_xfn8dt.png" />
        </a>
        <div className='ng-social-line-container'>
          <div className='ng-social-line'>
          </div>
        </div>
      </div>
      <div className='ng-footer-links'>
        <Link to="/contact-us">Contact Us</Link><br />
        <Link to="/support">Customer Support</Link><br />
        <Link to="/privacy-policy">Privacy Policy</Link>
      </div>
		</div>
        <div className='ng-copyright'>
          <Link to="/privacy-policy">Privacy Policy</Link>&nbsp;&nbsp; |&nbsp;&nbsp; © 2018 Braxley LLC<br /><span style={{opacity: .5}}>
					Code by <a href="https://nextgencode.io">NextGen Code Company</a>
					</span>
        </div>
      </div>
)