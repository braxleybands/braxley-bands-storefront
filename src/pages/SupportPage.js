import React, { Component } from 'react'
import styled from 'styled-components'
import ReactGA from 'react-ga';

const BgContainer = styled.div`
	position: relative;
	display: inline-block;
	width: 100%;
	height: 100%;
	padding: 20px;
	background: linear-gradient(rgba(255, 255, 255, 0.2),rgba(255, 255, 255, 0.2)), url("https://res.cloudinary.com/devhound/image/upload/f_auto,q_auto/v1531366599/palms-bg_jzz6zc.jpg");
	background-position: center;
	background-size: cover;
	text-align: center;
`

const Title = styled.h1`
	text-align: center;
	font-family: 'Lulo Clean One', sans-serif;
	font-weight: 700;
	font-size: 2.25rem;
	letter-spacing: 5px;
`

class SupportPage extends Component {

	componentDidMount() {
		ReactGA.initialize('UA-103175100-1');
		ReactGA.pageview(window.location.pathname + window.location.search);
	}

	render() {
		return (
			<BgContainer>
				<div className="content-wrapper support-page">
					<Title>Returns + Exchanges + FAQ's</Title>
					<p>Braxley is committed to exceptional customer support and service. Because after all, we want you to love your Braxley Band so much you'll completely forget about your old bands. Please do not hesitate to reach out to us at info@braxleybands.com if you have any additional questions that are not addressed below.</p>
					<p><b>How long will it take my order to get to me?</b></p>
					<p>All orders within the US are currently shipped using USPS First Class Mail. USPS takes about 1-5 full business days from the time it leaves the Braxley Headquarters. Once you receive your initial shipping confirmation email, our next step is to print and package your merchandise. At this time your package is only being prepared for shipment. Please allow 1-5 business days to receive a shipping confirmation.</p> 
					<p>Braxley is not responsible for stolen/lost packages, packages sent to the wrong address, or refunding/replacing packages in these cases. The customer is responsible for filing all claims.</p>
					<p><b>Returns</b></p>
				
						<p>- Our policy lasts 14 days. If 14 days have gone by from the day your package was delivered, unfortunately, we can't offer you a refund/exchange. </p>
						<p>- Please return the item in the condition it was packaged and sent.</p>
						<p>- Bands must be unworn and unwashed.</p>
						<p>- It may take up to 7 business days for returns to be processed.</p>
					
					<p>If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment.</p>

					<p>Please send all returns/ exchanges, with the order number included, to:</p>
				
						<p>9203 Turner Ave, Lubbock TX 79424</p>
					
					<p><b>Exchanges</b></p>
					<p>Packages will be processed on a first come basis. Please allow up to 7 business days for our return department to process your exchange. Please return your item per our return policy above and include exchange instructions/order number with the return.</p>
				
						<p>- We do not cover shipping costs for returns/exchanges at this time.</p>
						<p>- If you return an item, shipping cost is not refunded.</p>
						<p>- We do not accept returns or exchanges after 14 days</p>
					
					<p><b>Incorrect Item Received</b></p>
					<p>If we made a mistake with your order, then please email us at info@braxleybands.com. We will provide a prepaid return label if an exchange needs to be made because of an error on our end. </p>
				</div>
			</BgContainer>
		)
	}
}

export default SupportPage