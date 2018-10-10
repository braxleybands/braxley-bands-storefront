import React, { Component } from 'react'
import { Row, Col } from 'antd'
import styled from 'styled-components'
import SocialIcons from '../components/SocialIcons'
import ReactGA from 'react-ga';

const BgContainer = styled.div`
	position: relative;
	display: inline-block;
	padding-top: 2rem;
	width: 100%;
	height: 100%;
	background: linear-gradient(rgba(79, 44, 0, 0.40),rgba(255, 0, 0, 0.40)), url("https://res.cloudinary.com/devhound/image/upload/f_auto,q_auto/v1531366599/palms-bg_jzz6zc.jpg");
	background-position: top;
	background-size: contain;
`

class GalleryPage extends Component {

	componentDidMount() {
		(function () {
			var i, e, d = document, s = "script"; i = d.createElement("script"); i.async = 1;
			i.src = "https://cdn.curator.io/published/58f30bc7-0c56-4454-8b7c-4e66ef2e002e.js";
			e = d.getElementsByTagName(s)[0]; e.parentNode.insertBefore(i, e);
		})();
		ReactGA.initialize('UA-103175100-1');
		ReactGA.pageview(window.location.pathname + window.location.search);
	}

	render() {
		return (
			<BgContainer>
				<div className="hr"></div>
				<div className="header-wrapper">
					<span className="gallery-header-title">SEND&nbsp; &nbsp;US&nbsp; &nbsp;COOL&nbsp; &nbsp;PICS.</span>
				</div>
				<div className="hr"></div>
				<div className="content-wrapper">				
					<Row>
						<Col span={24} style={{textAlign: 'center', padding: '0 20px'}}>
							<h1 className="gallery-cta">Post a picture of your band and tag us for $10 off your next order.</h1>
							<SocialIcons />
							<h1 className="social-handle">@braxleybands</h1>
							<div className="ig-feed">
								<div id="curator-feed"><a href="https://curator.io" class="crt-logo crt-tag">Powered by Curator.io</a></div>
							</div>
						</Col>
					</Row>
				</div>
			</BgContainer>
		)
	}
}

export default GalleryPage