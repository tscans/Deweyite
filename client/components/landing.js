import React, {Component} from 'react';
import LandingNavbar from './navfoot/land_nav';
import LandingHome from './landing/landing_home';

class Landing extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
        	<div>
        		<LandingNavbar />
        		<LandingHome />
        	</div>
        );	
    }
}

export default Landing;
