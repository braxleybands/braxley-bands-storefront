import React, { Component } from 'react'

class Messenger extends Component {
	ComponentDidMount() {
		(function (d, s, id) {
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) return;
			js = d.createElement(s); js.id = id;
			js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js#xfbml=1&version=v2.12&autoLogAppEvents=1';
			fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));
	}

	render() {
		return (
			<div className="fb-customerchat"
				attribution="install_email"
				page_id="1667321650226474"
				theme_color="#44bec7">
			</div>
		)
	}
}

export default Messenger