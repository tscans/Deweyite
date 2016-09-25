import React, {Component} from 'react';

class NewUserNavbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<div className="nav-dist">
	        	<div className="navbar-fixed-top stayput">
	        		<nav className="navbar navbar-default cardy">
					  <div className="container-fluid">
					    <div className="navbar-header">
					      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
					        <span className="sr-only">Toggle navigation</span>
					      </button>
					      <a className="navbar-brand" href="#"><span className="glyphicon glyphicon-cog" aria-hidden="true"></span> Deweyite</a>
					    </div>
					    <ul className="nav navbar-nav navbar-right">
					    	<li>
					    		<a href="/home">FAQ</a>
					    	</li>
					    </ul>
					  </div>
					</nav>
	        	</div>
        	</div>
        );
    }
}

export default NewUserNavbar;
