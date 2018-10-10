import React, { Component } from 'react'
import styled from 'styled-components'
import ReactGA from 'react-ga';

const BgContainer = styled.div`
	position: relative;
	display: inline-block;
	width: 100%;
	height: 100%;
	background: #fff;
	color: #000;
	background-position: center;
	background-size: cover;
`

class PrivacyPage extends Component {
	componentDidMount() {
		ReactGA.initialize('UA-103175100-1');
		ReactGA.pageview(window.location.pathname + window.location.search);
	}
	render() {
		return (
			<BgContainer>
				<div className="content-wrapper privacy-page">
					<h1>Privacy Policy</h1>
					<p>Protecting your private information is our priority. This Statement of Privacy applies to www.braxleybands.com and Braxley LLC and governs data collection and usage. For the purposes of this Privacy Policy, unless otherwise noted, all references to Braxley LLC include www.braxleybands.com and Braxley Bands. The Braxley Bands website is a Ecommerce site. By using the Braxley Bands website, you consent to the data practices described in this statement.</p>
					<p><b>Collection of your Personal Information</b></p>
					<p>In order to better provide you with products and services offered on our Site, Braxley Bands may collect personally identifiable information, such as your:</p>
					<ul>
						<li>First and Last Name</li>
						<li>Mailing Address</li>
						<li>E-mail Address</li>
						<li>Phone Number</li>
					</ul>
					<p>We do not collect any personal information about you unless you voluntarily provide it to us. However, you may be required to provide certain personal information to us when you elect to use certain products or services available on the Site. These may include: (a) registering for an account on our Site; (b) entering a sweepstakes or contest sponsored by us or one of our partners; (c) signing up for special offers from selected third parties; (d) sending us an email message; (e) submitting your credit card or other payment information when ordering and purchasing products and services on our Site. To wit, we will use your information for, but not limited to, communicating with you in relation to services and/or products you have requested from us. We also may gather additional personal or non-personal information in the future.</p>
					<p><b>Use of your Personal Information</b></p>
					<p>Braxley Bands collects and uses your personal information to operate its website(s) and deliver the services you have requested.</p>
					<p>Braxley Bands may also use your personally identifiable information to inform you of other products or services available from Braxley Bands and its affiliates.</p>
					<p><b>Sharing Information with Third Parties</b></p>
					<p>Braxley Bands does not sell, rent or lease its customer lists to third parties.</p>
					<p>Braxley Bands may share data with trusted partners to help perform statistical analysis, send you email or postal mail, provide customer support, or arrange for deliveries. All such third parties are prohibited from using your personal information except to provide these services to Braxley Bands, and they are required to maintain the confidentiality of your information.</p>
					<p>Braxley Bands may disclose your personal information, without notice, if required to do so by law or in the good faith belief that such action is necessary to: (a) conform to the edicts of the law or comply with legal process served on Braxley Bands or the site; (b) protect and defend the rights or property of Braxley Bands; and/or (c) act under exigent circumstances to protect the personal safety of users of Braxley Bands, or the public.</p>
					<p><b>Tracking User Behavior</b></p>
					<p>Braxley Bands may keep track of the websites and pages our users visit within Braxley Bands, in order to determine what Braxley Bands services are the most popular. This data is used to deliver customized content and advertising within Braxley Bands to customers whose behavior indicates that they are interested in a particular subject area.</p>
					<p><b>Automatically Collected Information</b></p>
					<p>Information about your computer hardware and software may be automatically collected by Braxley Bands. This information can include: your IP address, browser type, domain names, access times and referring website addresses. This information is used for the operation of the service, to maintain quality of the service, and to provide general statistics regarding use of the Braxley Bands website.</p>
					<p><b>Children Under Thirteen</b></p>
					<p>Braxley Bands does not knowingly collect personally identifiable information from children under the age of thirteen. If you are under the age of thirteen, you must ask your parent or guardian for permission to use this website.</p>
					<p><b>E-mail Communications</b></p>
					<p>From time to time, Braxley Bands may contact you via email for the purpose of providing announcements, promotional offers, alerts, confirmations, surveys, and/or other general communication. In order to improve our Services, we may receive a notification when you open an email from Braxley Bands or click on a link therein.</p>
					<p>If you would like to stop receiving marketing or promotional communications via email from Braxley Bands, you may opt out of such communications by clicking on the UNSUBSCRIBE button..</p>
					<p><b>External Data Storage Sites</b></p>
					<p>We may store your data on servers provided by third party hosting vendors with whom we have contracted.</p>
					<p><b>Changes to this Statement</b></p>
					<p>Braxley Bands reserves the right to change this Privacy Policy from time to time. We will notify you about significant changes in the way we treat personal information by sending a notice to the primary email address specified in your account, by placing a prominent notice on our site, and/or by updating any privacy information on this page. Your continued use of the Site and/or Services available through this Site after such modifications will constitute your: (a) acknowledgment of the modified Privacy Policy; and (b) agreement to abide and be bound by that Policy.</p>
					<p>Contact Information</p>
					<p>Braxley Bands welcomes your questions or comments regarding this Statement of Privacy. If you believe that Braxley Bands has not adhered to this Statement, please contact Braxley Bands at:</p>
					<p>Braxley LLC<br />
						9203 Turner Ave<br />
						Lubbock, Texas 79410</p>
					<p>Email Address:<br />
						 info@braxleybands.com</p>
					<p>Telephone number:<br />
							5126584282</p>
					<p>Effective as of March 19, 2018</p>
				</div>
			</BgContainer>
		)
	}
}

export default PrivacyPage