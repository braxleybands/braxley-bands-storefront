import React, { Component } from 'react'
import { Row, Col } from 'antd'
import styled from 'styled-components'
import SocialIcons from '../components/SocialIcons'
import ReactGA from 'react-ga';

const ContactCol = styled(Col)`
	background: linear-gradient(rgba(0, 0, 0, 0.30),rgba(0, 0, 0, 0.30)), url("https://res.cloudinary.com/devhound/image/upload/f_auto,q_auto/v1531366601/palms-bg-2_wxh3fa.jpg");
	background-position: center;
	text-align: center;
	padding: 50px 20px 50px;
	min-height: 400px;
	height: 100%;
	max-height: 400px;
	border-bottom: 10px solid #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	overflow: visible;
`

const Ctitle = styled.h1`
	color: #fff;
	font-size: 4rem;
	font-weight: 700;
	text-transform: uppercase;
	letter-spacing: 5px;
`

const Chr = styled.div`
	width: 50px
	height: 8px;
	margin: 0 auto 1.5rem;
	background: #fff;
`

const CLink = styled.a`
	color: #fff;
	font-size: 2rem;
`

const CText = styled.p`
	color: #fff;
	font-size: 2rem;
	margin: 0;
`

const CInput = styled.input`
	margin: .5rem auto;
	width: 100%;
	max-width: 200px;
`

const CTextArea = styled.textarea`
	margin: .5rem auto;
	width: 100%;
	max-width: 200px;
`

const CButton = styled.button`
	border: 0;
	color: #fff;
	cursor: pointer;
	background-color: rgba(0,0,0, .65);
	padding: 5px;
`

 const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }


class ContactPage extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			name: "", 
			email: "", 
			message: "",
			success: false 
		};
	}

	componentDidMount() {
		ReactGA.initialize('UA-103175100-1');
		ReactGA.pageview(window.location.pathname + window.location.search);
	}

	handleSubmit = e => {
		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode({ "form-name": "contact", ...this.state })
		})

			.then(() => {
				this.setState({
					name: "",
					email: "",
					success: true
				})
			})

			.catch(error => {
				alert(error)
			});

		e.preventDefault();
	};

	handleChange = (e) => {
		this.setState({ 
			[e.target.name]: e.target.value 
		})
		console.log(e.target.name)
	}

	
	render() {
		const { name, email, message } = this.state;
		return (
			<Row>
				<ContactCol xs={24} md={8}>
					<Ctitle>Contact us</Ctitle>
					<Chr />
					<CLink href="mailto:info@braxleybands.com">
						<p style={{fontFamily: 'Raleway'}}>info@braxleybands.com</p>
					</CLink>
				</ContactCol>

				<ContactCol xs={24} md={8}>
					<Ctitle>Find us</Ctitle>
					<Chr />
					<CText>@braxleybands</CText>
					<CText>@braxtonmanley</CText>
					<CText>@grantandrews</CText>
					<SocialIcons />
				</ContactCol>

				<ContactCol xs={24} md={8}>
					<Ctitle>Tell us</Ctitle>
					<Chr />
					{this.state.success ? <p style={{color: '#fff', fontWeight: 'bold'}}>Your form has been submitted</p> : <p></p>}
					<form netlify="true" onSubmit={this.handleSubmit} className="CForm">
							<CInput value={name} onChange={this.handleChange} type="text" placeholder="Name *" name="name" required/>
							
							<CInput value={email} onChange={this.handleChange} type="email" placeholder="Email *" name="email"  required/>
							
							<CTextArea value={message} onChange={this.handleChange} placeholder="Message *" name="message" required/>
							
						<CButton type="submit" className="submit-button">Send</CButton>
					</form>
				</ContactCol>
			</Row>
		)
	}
}

export default ContactPage