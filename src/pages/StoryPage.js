import React, { Component } from 'react'
import styled from 'styled-components'
import ReactGA from 'react-ga';

const BgContainer = styled.div`
	position: relative;
	display: inline-block;
	width: 100%;
	height: 100%;
	background: linear-gradient(rgba(255, 255, 255, 0.2),rgba(255, 255, 255, 0.2)), url("https://res.cloudinary.com/devhound/image/upload/f_auto,q_auto/v1531366601/palms-bg-2_wxh3fa.jpg");
	background-position: center;
	background-size: cover;

	p {
		font-size: 16px;
		font-weight: 600;
		padding: 0 15px;
	}
`

const Title = styled.h1`
	letter-spacing: 1px;
	font-size: 3rem;
	margin-top: 4rem;
	text-transform: uppercase;
	text-align: center;
	font-weight: 700;
	font-family: 'Lulo Clean One', sans-serif;
`

const StoryDescTitle = styled.h1`
	letter-spacing: 1px;
	font-size: 3rem;
	text-transform: uppercase;
	font-weight: 700;
	font-family: 'Lulo Clean One', sans-serif;
	color: #fff;
	padding: 20px;
`

class StoryPage extends Component {

	componentDidMount() {
		ReactGA.initialize('UA-103175100-1');
		ReactGA.pageview(window.location.pathname + window.location.search);
	}

	render() {
		return (
			<BgContainer>
				<div className="content-wrapper story-page">
					<Title>The perfect apple watch band</Title>
					<div className="story-p-wrapper">
						<p>We designed Braxley Bands with three things in mind: comfort, quality, and style. In addition to being flexible, the bands are also machine washable and moisture wicking. Braxley Bands are tremendously versatile. They can meet the rigorous training requirements of top athletes and outdoor adventurers while still looking good with any outfit, in any environment.</p>
					</div>
				</div>
				<div className="story-dark-content">
				<div className="dark-content-wrapper">
					<StoryDescTitle>What started off as a school project...</StoryDescTitle>
					<p>Has grown into a student-run thriving business becauses of people like you. Thank you!</p>
					<p>These are more than just watch bands. They are the perfect combination of style and functionality. Sport your band at the gym or rock it on a night out and always remember to live with originality. The American Dream is alive.</p>
					<p>Enjoy your band(s)!</p>
					<p>Braxton Manley / Grant Andrews</p>
					<p>@braxtonmanley @grantandrews</p>
					<img alt="Braxley bands owners" src="https://res.cloudinary.com/devhound/image/upload/f_auto,q_auto/v1531366872/owners_vjxwkw.jpg" />
				</div>
				</div>
			</BgContainer>
		)
	}
}

export default StoryPage