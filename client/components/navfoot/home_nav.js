import React, {Component} from 'react';

class HomeNavbar extends Component {
    constructor(props) {
        super(props);
    }


    logout(event){
        event.preventDefault();
        Meteor.logout();
        window.location.href = "/loggingout"
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
					      <a className="navbar-brand" href="/home"><span className="glyphicon glyphicon-cog" aria-hidden="true"></span> Deweyite</a>
					    </div>
					    <form className="navbar-form navbar-left">
					        <button className="btn btn-primary"><span className="glyphicon glyphicon-plus" aria-hidden="true"></span> Find New Teachers</button>
					    </form>
					    <ul className="nav navbar-nav navbar-right">
					    	<li className="dropdown">
					          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span> Bulletin <span className="caret"></span></a>
					          <ul className="dropdown-menu">
					            <li role="separator" className="divider"></li>
					            <li><a href="#">No new notifications</a></li>
					          </ul>
					        </li>
					    	<li>
					    		<a href="/" onClick={this.logout.bind(this)}><span className="glyphicon glyphicon-off" aria-hidden="true"></span> Logout</a>
					    	</li>
					    </ul>
					    <form className="navbar-form navbar-right">
					        <a href="/profile"><button className="btn btn-primary"><span className="glyphicon glyphicon-user" aria-hidden="true"></span> My Profile</button></a>
					    </form>
					  </div>
					</nav>
	        	</div>
        	</div>
        );
    }
}

export default HomeNavbar;
