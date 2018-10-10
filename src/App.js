import React, { Component } from 'react';
import Products from './components/Products';
import Cart from './components/Cart';
import GalleryPage from './pages/GalleryPage'
import StoryPage from './pages/StoryPage'
import SupportPage from './pages/SupportPage'
import ContactPage from './pages/ContactPage'
import ProductPage from './components/ProductPage'
import Messenger from './components/Messenger'
import PrivacyPage from './pages/PrivacyPolicy'
import Hero from './components/Hero'
import { BrowserRouter, Route } from 'react-router-dom'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Header from './components/Header'
import { Helmet } from "react-helmet";
import ReactGA from 'react-ga';


export default class extends Component {

  constructor() {
    super();

    this.state = {
      isCartOpen: false,
      checkout: { lineItems: [] },
      products: [],
      shop: {},
			cartCount: 0,
			loading: false
    };

    this.handleCartClose = this.handleCartClose.bind(this);
    this.addVariantToCart = this.addVariantToCart.bind(this);
    this.updateQuantityInCart = this.updateQuantityInCart.bind(this);
    this.removeLineItemInCart = this.removeLineItemInCart.bind(this);
	}
	
	componentDidMount() {
		ReactGA.initialize('UA-103175100-1');
		ReactGA.pageview(window.location.pathname + window.location.search);
	}

  componentWillMount() {
    this.props.client.checkout.create().then((res) => {
        this.setState({
        checkout: res,
      });
    });

		// this.props.client.product.fetchAll(50).then((res) => {
    //   this.setState({
    //     products: res,
		// 	});
		// });

    this.props.client.shop.fetchInfo().then((res) => {
      this.setState({
        shop: res,
			});
		});
		
		this.props.client.collection.fetchAllWithProducts({productsFirst: 50}).then((collections) => {
			console.log(collections);
			console.log(collections[0].products);

			this.setState({
				products: collections[0].products
			})

		});
  }
 
  addVariantToCart(variantId, quantity) {
    this.setState({
			isCartOpen: true,
			loading: true
    })

    const lineItemsToAdd = [{ variantId, quantity: parseInt(quantity, 10) }]
    const checkoutId = this.state.checkout.id

    return this.props.client.checkout.addLineItems(checkoutId, lineItemsToAdd).then(res => {
      this.setState({
				checkout: res,
				loading: false
      });
    });
  }

  updateQuantityInCart(lineItemId, quantity) {
    const checkoutId = this.state.checkout.id
		const lineItemsToUpdate = [{ id: lineItemId, quantity: parseInt(quantity, 10) }]
		
		this.setState({
			loading: true
		})

    return this.props.client.checkout.updateLineItems(checkoutId, lineItemsToUpdate).then(res => {
      this.setState({
				checkout: res,
				loading: false
      });
    });
  }

  removeLineItemInCart(lineItemId) {
		const checkoutId = this.state.checkout.id

		this.setState({
			loading: true
		})

    return this.props.client.checkout.removeLineItems(checkoutId, [lineItemId]).then(res => {
      this.setState({
				checkout: res,
				loading: false
      });
    });
  }

  handleCartClose() {
    this.setState({
      isCartOpen: false,
    });
  }

  CartStatus = () => {
    if (this.state.checkout.lineItems.length === 0) {
      this.setState({
        cartCount: 0
      })
    }
    else {
      this.setState({
        cartEmpty: false
      })
      return false
    }
  }


  render() {
    return (
			<React.Fragment>

			<Helmet>
				<meta name="image" content="https://res.cloudinary.com/devhound/image/upload/v1531340531/braxley-bands-meta-img_naoupm.png" />

				<meta itemprop="name" content="Elastic Apple Watch Bands | Made in the USA" />
				<meta itemprop="description" content="Elastic Apple Watch Bands designed with three things in mind: comfort, quality, and style. Designed and manufactured by students in Texas." />
				<meta itemprop="image" content="https://res.cloudinary.com/devhound/image/upload/v1531340531/braxley-bands-meta-img_naoupm.png" />

				<meta name="twitter:card" content="summary" />
				<meta name="twitter:title" content="Elastic Apple Watch Bands | Made in the USA" />
				<meta name="twitter:description" content="Elastic Apple Watch Bands designed with three things in mind: comfort, quality, and style. Designed and manufactured by students in Texas." />
				<meta name="twitter:image:src" content="https://res.cloudinary.com/devhound/image/upload/v1531340531/braxley-bands-meta-img_naoupm.png" />

				<meta name="og:title" content="Elastic Apple Watch Bands | Made in the USA" />
				<meta name="og:description" content="Elastic Apple Watch Bands designed with three things in mind: comfort, quality, and style. Designed and manufactured by students in Texas." />
				<meta name="og:image" content="https://res.cloudinary.com/devhound/image/upload/v1531340531/braxley-bands-meta-img_naoupm.png" />
				<meta name="og:url" content="https://braxleybands.com" />
				<meta name="og:site_name" content="Braxley Bands" />
				<meta name="og:type" content="website" />
			</Helmet>

      <BrowserRouter>

      <ScrollToTop>
      
      <div className="App">
				<Header cartEmpty={this.state.checkout.lineItems.length > 0} cartOnClick={() => this.setState(prevState => ({ isCartOpen: !prevState.isCartOpen }))} />

        <Route exact path="/" render={() => 
          <React.Fragment>
						<Helmet>
							<title>Elastic Apple Watch Bands - Comfort Stretch | Braxley Bands</title>
							<meta name="description" content="Elastic Apple watch bands that are machine washable and seriously comfortable! We offer over 25 designs and colors to choose from including pink, red, gold, denim, stripes and more. Get yours now!" />
						</Helmet>
						<Hero />
            <Products
              products={this.state.products}
              client={this.props.client}
              addVariantToCart={this.addVariantToCart}
							/> 
          </React.Fragment>}
        />

        <Route exact path="/products/:id" render={({ match, location }) =>
          <ProductPage match={match} location={location} client={this.props.client} addVariantToCart={this.addVariantToCart} />
				} 
        />

        <Route exact path="/gallery" render={() => (
					<React.Fragment>
						<Helmet>
							<title>Gallery - See Elastic Apple Watch Bands in Action</title>
							<meta name="description" content="See who else is wearing elastic apple watch bands across social media! Our customers range from students to executives, but they all love the combination of style and comfort they get from our apple watch bands." />
						</Helmet>

						<GalleryPage />
					</React.Fragment>
        )} />

        <Route exact path="/our-story" render={() => (
					<React.Fragment>
					<Helmet>
						<title>The Story of the Elastic Apple Watch Band - Braxley Bands</title>
						<meta name="description" content="Learn how a simple piece of elastic was transformed into the most comfortable apple watch band on the market. Meet the two students behind the project and engage with them here!" />
					</Helmet>
					<StoryPage />
					</React.Fragment>
        )} />

        <Route exact path="/contact-us" render={() => (
					<ContactPage />
        )} />

        <Route exact path="/support" render={() => (
					<React.Fragment>
					<Helmet>
						<title>Customer Support - Braxley Bands</title>
						<meta name="description" content="Braxley Bands is committed to exceptional customer support and service. Contact us for questions, concerns or return information. We'll make sure you are satisfied with your apple watch band!" />
					</Helmet>
          <SupportPage />
					</React.Fragment>
        )} />

				<Route exact path="/privacy-policy" render={() => (
					<PrivacyPage />
        )} />

				{/* <Route path='/blog' component={() => window.location = 'http://blog.braxleybands.com'} /> */}


        <Cart
          checkout={this.state.checkout}
          isCartOpen={this.state.isCartOpen}
          handleCartClose={this.handleCartClose}
          updateQuantityInCart={this.updateQuantityInCart}
					removeLineItemInCart={this.removeLineItemInCart}
					loading={this.state.loading}
					/>

				<Messenger />

        <Footer />
      </div>
      
      </ScrollToTop>
      </BrowserRouter>
			</React.Fragment>
    );
  }
}

