import React from 'react'
import styled from 'styled-components';
import { Col, Icon } from 'antd';

const SvgContainer = styled.div`
  width: 100%;
  max-width: 350px;
	height: 100%;
  padding: 1rem;
  margin: 0 auto;
  background: #efefef;
  display: flex;
  align-items: center;
  justify-content: center;
`

const SpinContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 264px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ProductContainer = styled.div`
	height: 100%;
	min-height: 818px;

	@media (max-width: 768px) {
		min-height: 100%;
	}
`

export default () => (
  <React.Fragment>
	<ProductContainer>

    <Col xl={12}>
      <SvgContainer>
        <svg width="300px" viewBox="0 0 2944 2333" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <g id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <path d="M426.705164,754.117817 C437.470809,686.945814 916.00139,653.150046 1862.29691,652.730514 C1901.01952,582.426525 1944.56843,537.257159 1992.94363,517.222416 C1992.94363,517.222416 1992.94363,500.330378 1992.94363,466.546302 C1992.92493,446.268373 2003.17847,436.129409 2023.70426,436.129409 C2044.23005,436.129409 2117.32366,431.932121 2242.98508,423.537545 C2271.23669,424.641233 2285.36249,433.608698 2285.36249,450.43994 C2285.36249,467.271181 2295.66514,467.271181 2316.27043,450.43994 C2370.35114,464.362309 2409.81266,486.623134 2434.655,517.222416 C2471.9185,563.121338 2491.31488,622.439891 2491.31488,675.080195 C2491.31488,710.173732 2505.16944,982.127595 2532.87855,1490.94178 C2539.60824,1552.36483 2532.42492,1601.14456 2511.32858,1637.28099 C2479.68406,1691.48563 2416.03026,1766.82637 2390.58698,1787.68888 C2365.1437,1808.55138 2268.32314,1874.89893 2215.63373,1892.14172 C2162.94432,1909.38451 2054.46489,1896.44891 2023.70426,1877.9785 C1992.94363,1859.5081 1941.53796,1815.06127 1941.53796,1801.37507 C1941.53796,1787.68888 1924.53369,1777.31374 1912.24347,1777.31374 C1899.95325,1777.31374 1639.48054,1787.68888 1615.38414,1787.68888 C1591.28773,1787.68888 568.800315,1777.31374 497.75274,1777.31374 C450.38769,1777.31374 426.705164,1669.77233 426.705164,1454.68951 C413.391883,1070.70964 413.391883,837.185746 426.705164,754.117817 Z" id="Path-2" fill="#D8D8D8"></path>
          </g>
        </svg>
        <Icon type="loading" style={{ fontSize: 24, position: 'absolute' }} spin />
      </SvgContainer>
    </Col>

    <Col xl={12}>
      <SpinContainer>
        <Icon type="loading" style={{ fontSize: 24 }} spin />
      </SpinContainer>
    </Col>

	</ProductContainer>
  </React.Fragment>
)