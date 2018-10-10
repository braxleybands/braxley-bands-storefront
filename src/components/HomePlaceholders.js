import React, { Component } from 'react'
import { Col, Spin } from 'antd'
import styled from 'styled-components'
import PlaceholderSvg from '../assets/product-placeholder.svg'

const StyledPlaceholder = styled.div`
  width: 100%;
  max-width: 300px;
  padding: 40px 20px;
	margin: 0 auto;
`

const PlaceholderImg = styled.img`
	width: 100%;
	height: 100%;
`

const SpinContainer = styled.div`
width: 100%;
text-align: center;
`

class HomePlaceholders extends Component {
	render() {
		return (
			<React.Fragment>
				<SpinContainer><Spin /></SpinContainer>
				<Col sm={24} md={12} xl={8}>
					<StyledPlaceholder>
						<PlaceholderImg src={PlaceholderSvg} />
					</StyledPlaceholder>
				</Col>
				<Col sm={24} md={12} xl={8}>
					<StyledPlaceholder>
						<PlaceholderImg src={PlaceholderSvg} />
					</StyledPlaceholder>
				</Col>
				<Col sm={24} md={12} xl={8}>
					<StyledPlaceholder>
						<PlaceholderImg src={PlaceholderSvg} />
					</StyledPlaceholder>
				</Col>
				<Col sm={24} md={12} xl={8}>
					<StyledPlaceholder>
						<PlaceholderImg src={PlaceholderSvg} />
					</StyledPlaceholder>
				</Col>
				<Col sm={24} md={12} xl={8}>
					<StyledPlaceholder>
						<PlaceholderImg src={PlaceholderSvg} />
					</StyledPlaceholder>
				</Col>
				<Col sm={24} md={12} xl={8}>
					<StyledPlaceholder>
						<PlaceholderImg src={PlaceholderSvg} />
					</StyledPlaceholder>
				</Col>
			</React.Fragment>
		)
	}
}

export default HomePlaceholders
