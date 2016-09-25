import React, {Component} from 'react';

class LandingNavbar extends Component {
    constructor(props) {
        super(props);
    }


    login(event){
        event.preventDefault();
        var uno2 = this.refs.emailin.value.trim();
        var dos2 = this.refs.passwordin.value.trim();
        Meteor.loginWithPassword(uno2, dos2, function(error){
        	if(error){
        		console.log(error)
        	}
        	else{
        		window.location.href = "/home"
        	}
        });

          
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
					    <form className="navbar-form navbar-left" role="search" onSubmit={this.login.bind(this)}>
					        <div className="form-group inputnav">
					          <input type="email" className="form-control" ref="emailin" placeholder="Email"/>
					        </div>
					        <div className="form-group inputnav">
					          <input type="password" className="form-control" ref="passwordin" placeholder="Password"/>
					        </div>
					        <button type="submit" className="btn btn-primary">Sign In</button>
					    </form>
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

export default LandingNavbar;
