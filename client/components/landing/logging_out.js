import React, {Component} from 'react';
import LandingNavbar from '../navfoot/land_nav';

class LoggingOut extends Component {
    constructor(props) {
        super(props);
    }

    timer(){
    	var myVar = setInterval(myTimer, 1000);

		function myTimer() {
		    window.location.href = '/'
		}
    }

    render() {
        return (
        	<div>
        		<LandingNavbar />
	        	<div className="lowered">
	        		<h1>You are Logged out...</h1>
	        	</div>
	        	{this.timer()}
        	</div>
        );
    }
}

export default LoggingOut;
