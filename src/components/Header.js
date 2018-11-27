import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import classNames from 'classnames'
import posed from 'react-pose'
import { tween } from "popmotion";
import CartIcon from './CartIcon';


const NavContainer = styled.section`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
	margin: 0 auto;
	box-shadow: 0 4px 8px -6px rgba(0,0,0,0.1);
  text-align: center;
`

const ShippingContainer = styled.section`
	position: relative;
	display: block;
	width: 100%;
	background-size: auto;
	background-repeat: repeat;
	background-position: center center;
	background-image: linear-gradient(rgba(207, 207, 207, .7), rgba(207, 207, 207, .7)), url(https://res.cloudinary.com/devhound/image/upload/v1531429599/bbands-shipping-bg_nnprke.png);
	padding: 10px 0px;
	height: 100%;
	margin: 0 auto;
	text-align: center;

	h1 {
		text-transform: uppercase;
		font-family: 'Lulo Clean One', sans-serif;
		font-weight: 700;
		font-size: 2.25rem;
		letter-spacing: 1px;
		margin: 0;
		display: inline-block;
		width: 100%;
		max-width: 700px;
		position: relative;
		color: #fff;
	}

	@media (min-width: 769px) {

		h1 {
			transform: translateY(3px);
			-webkit-transform: translateY(3px);
		}

		h1:after {
			position: absolute;
			content: '';
			left: -15px;
			height: 6px;
			width: 1px;
			transform-origin: right;
			-webkit-transform-origin: right;
			transform: scaleX(150) translateZ(0);
			-webkit-transform: scaleX(150) translateZ(0);
			top: calc(50% - 5px);
			overflow: hidden;
			background: #fff;

		}

		h1:before {
			position: absolute;
			content: '';
			right: -15px;
			height: 6px;
			width: 1px;
			overflow: hidden;
			transform-origin: left;
			-webkit-transform-origin: left;
			transform: scaleX(150);
			-webkit-transform: scaleX(150);
			top: calc(50% - 5px);
			background: #fff;
		}
	}


	@media (max-width: 700px) {
		h1 {
			font-size: 1.25rem;
		}
	}
`

const MobileTopBar = posed.div({
  open: {
    x: '0%',
    transition: tween
  },
  closed: {
    x: '-100%',
    transition: tween
  },
})

const NavItem = posed.li({
  open: { opacity: 1 },
  closed: { opacity: 1 }
})

const NavMobile = ({ isOpen, navItems, onClick }) => (
  <MobileTopBar id="nav-mobile" pose={isOpen ? 'open' : 'closed'}>
    <div className="wrapper">
      <div className="container container-linkPr">
        <ul>
          {navItems.map(({ url, name }) => (
            <NavItem key={name}>
							<NavLink exact strict activeClassName="active-nav" onClick={onClick} to={url}>{name}</NavLink>
            </NavItem>
          ))}
        </ul>
      </div>
    </div>
  </MobileTopBar>
)

const navLinks = [
  { url: '/', name: 'Shop' },
	{ url: '/gallery/', name: 'Gallery' },
	{ url: '/our-story', name: 'Our Story'},
  { url: '/contact-us/', name: 'Contact us' },
  { url: '/support/', name: 'Support' },
  // { url: '/blog/', name: 'Blog' },
];

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpenMobile: false,
      navX: false
    }
  }

  render() {

    const navButtonStyles = classNames({
      menu: true,
      back: !this.state.navX,
      active: this.state.navX
    })

    const handleMobileNav = () => {
      this.setState(prevState => ({
        isOpenMobile: !prevState.isOpenMobile,
        navX: !prevState.navX
      }))
		}
		
		const handleNavClick = () => {
			this.setState(prevState => ({
				isOpenMobile: !prevState.isOpenMobile,
				navX: !prevState.navX
			}))
		}

    return (
			<React.Fragment>

      <NavContainer>
      <div className='ng-nav-bar'>
        {/* <div className='ng-shipping-pop-up'>
          Free Shipping on any 2+ Bands
		    </div> */}

				<div className='ng-brand-img'>
					<img alt="braxley bands logo" src="https://res.cloudinary.com/devhound/image/upload/f_auto,q_auto/v1531366718/braxley_logo_gtxiy6.png" />
				</div>

        <NavLink exact strict to='/' activeClassName="active-nav" >
          Shop
		    </NavLink>
        <div className='ng-nav-bar-link-line'></div>
        <NavLink to='/gallery' activeClassName="active-nav">
          Gallery
		    </NavLink>
        <div className='ng-nav-bar-link-line'></div>
        <NavLink to='/our-story' activeClassName="active-nav">
          Our story
		    </NavLink>
        <div className='ng-nav-bar-link-line'></div>
        <NavLink to='/contact-us' activeClassName="active-nav">
          contact us
		    </NavLink>
        <div className='ng-nav-bar-link-line'></div>
        <NavLink to='/support' activeClassName="active-nav">
          support
		    </NavLink>
				{/* <div className='ng-nav-bar-link-line'></div> */}
        {/* <NavLink to='/blog' activeClassName="active-nav">
          blog
		    </NavLink> */}

        <div className='ng-nav-bar-link-line'></div>

				<div className="mobile-menu-items">
					<div className="App__view-cart-wrapper cart">
						<button className="App__view-cart" onClick={this.props.cartOnClick}>
							<CartIcon cartEmpty={this.props.cartEmpty} />
						</button>
					</div>

					<div className={navButtonStyles} onClick={handleMobileNav}>
						<span className="bar"></span>
						<span className="bar"></span>
					</div>
				</div>
			</div>
      <NavMobile isOpen={this.state.isOpenMobile} navItems={navLinks} onClick={handleNavClick}/>

      {this.props.showHeader ? null : null}
      </NavContainer>

			<ShippingContainer>
				<h1>FREE SHIPPING ON ANY 2+ BANDS</h1>
			</ShippingContainer>

			</React.Fragment>
    )
  }
}

export default Header
