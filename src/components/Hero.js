import React, { Component } from 'react'
import styled from 'styled-components'
import { Row, Col } from 'antd'

const HContainer = styled.div`
	width: 100%;
	position: relative;
	padding-top: 0rem;
	padding-bottom: 0rem;
	color: #fff;
	background: :fff;
	background-position: center;
	background-size: cover;
`

const HMiddleCol = styled(Col)`
	background: #fff;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	justify-content: center;
	
	img {
		width: 100%;
		height: auto;
	}
`

const HContent = styled.div`
	width: 100%;
	margin: 0 auto;
	max-width: 1400px;
	padding: 0px;
`

const HTitle = styled.h1`
	color: #000;
	text-transform: uppercase;
	font-size: 5rem;
	font-family: 'Lulo Clean One', sans-serif;
	font-weight: 700;
	letter-spacing: 7px;
	padding: 0 20px;
	display: flex;
	flex-direction: column;

	div {
		display: inline-block;
		align-self: center;
		transform: translateX(14px);
	}

	@media (max-width: 768px) {
		font-size: 3rem;
		margin-top: 2rem;
		div {
			transform: translateX(0);
		}
	} 
`

const ImgWrapper = styled.div`
	width: 100%;
	height: 100%;
	background: #fff;
`

const TopHeroRow = styled(Row)`
	text-align: center;
	padding: 20px;

	h1 {
		font-family: 'Lulo Clean One', sans-serif;
		text-transform: uppercase;
		font-size: 7rem;
		letter-spacing: 7px;
	}
`

const BottomHeroTxt = styled.div`
	font-family: 'Monoton';
	font-size: 4rem;
	color: #fff;
	width: 100%;

	@media (max-width: 768px) {
		font-size: 2.3rem;
	}
`

const BottomHeroRow = styled(Row)`
	background: #1b1b1b;
	text-align: center;
	padding: 10px 10px;

	@media (max-width: 768px) {
		background: transparent;

		span {
			background: #1b1b1b;
		}
	}
`

const LogoImg = styled.img`
	max-width: 100%;
	margin: 0 auto;

	@media (min-width: 1000px) {
		max-width: 80%;
		margin: 0 auto;
	}
`

const DesignedP = styled.p`
	color: #ff6969;
	font-size: 2rem;
	font-weight: normal;
	font-family: 'Damion', cursive;
`

class Hero extends Component {
	render () {
		return (
			<React.Fragment>
			<HContainer>
				<HContent>
					<TopHeroRow>
						<LogoImg alt="braxley bands" src="https://res.cloudinary.com/devhound/image/upload/f_auto,q_auto/v1532035620/Braxley_New_Logo_web_niyoyq.png" />
					</TopHeroRow>
					<Row type="flex">
						<Col xs={{ order: 1, span: 12 }} sm={{ order: 2, span: 12 }} md={{ order: 2, span: 12 }} lg={{ order: 1, span: 8 }}>
							<ImgWrapper>						
								<img alt="Girl wearing a braxley bands" style={{ objectFit: 'cover', margin: '0 auto' }} src="https://res.cloudinary.com/devhound/image/upload/c_scale,f_auto,q_auto,w_467/v1532553288/Grace2_jkxqm6.jpg" />
							</ImgWrapper>
						</Col>
						<HMiddleCol xs={{ order: 3, span: 24 }} sm={{ order: 1, span: 24 }} md={{ order: 1, span: 24 }} lg={{ order: 2, span: 8 }}>
							<HTitle>
								<div>Better</div>
								<div>Apple</div>
								<div>Watch</div>
								<div>Bands</div>
							</HTitle>
							<DesignedP>- Designed in Austin, Texas -</DesignedP>
						</HMiddleCol>
						<Col xs={{ order: 2, span: 12 }} sm={{ order: 3, span: 12 }} md={{ order: 3, span: 12 }} lg={{ order: 3, span: 8 }}>
							<ImgWrapper>
								<img alt="Guy wearing a braxley band" style={{objectFit: 'cover', margin: '0 auto'}} src="https://res.cloudinary.com/devhound/image/upload/c_fill,f_auto,h_406,q_auto,w_467/v1532553288/corey7_dakcow.jpg" />
							</ImgWrapper>
						</Col>
					</Row>
				</HContent>
			</HContainer>
			<BottomHeroRow>
					<BottomHeroTxt><span>&nbsp;&nbsp;&nbsp;Elastic&nbsp; &nbsp; - &nbsp; &nbsp;</span><span>&nbsp;Machine &nbsp; &nbsp; Washable &nbsp; &nbsp; - &nbsp; &nbsp;</span><span>&nbsp; &nbsp; &nbsp;Seriously&nbsp; &nbsp;Comfortable &nbsp; &nbsp; &nbsp;</span></BottomHeroTxt>
			</BottomHeroRow>
			</React.Fragment>
		)
	}
}

export default Hero
