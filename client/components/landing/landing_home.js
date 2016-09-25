import React, {Component} from 'react';

class LandingHome extends Component {
    constructor(props) {
        super(props);
    }

    register(event){
        event.preventDefault();
        var uno = this.refs.email.value.trim();
        var dos = this.refs.password.value.trim();
        var tres = this.refs.password2.value.trim();
        if(uno == "" || dos == ""){
            console.log("enter data");
        }
        else{
            Meteor.call('makeUser', uno, dos, (error, data)=> {
            	if(error){
            		console.log("hi");
            		console.log(error);
            	}
            	else{
            		Meteor.loginWithPassword(uno, dos);
			        this.refs.email.value = "";
			        this.refs.password.value = "";
			        this.refs.password2.value = "";
			        var myVar = setInterval(myTimer2, 100);

					function myTimer2() {
					    window.location.href = '/newuser'
					}
            	}
            })
	        
        }

    } 


    render() {
        return (
        	<div className="container-fluid">
	        	<div className="row">
	        		<div className="col-xs-6">
	        			<div className="lowered">
		        			<form className="col-xs-10 col-xs-offset-1 cardy" onSubmit={this.register.bind(this)}>
		        			<div className="lower"></div>
		        				<h2>Sign Up Here</h2>
							  <div className="form-group">
							    <label htmlFor="exampleInputEmail1">Email address</label>
							    <input type="email" className="form-control cardover" ref="email" id="exampleInputEmail1" placeholder="Email"/>
							  </div>
							  <div className="form-group">
							    <label htmlFor="exampleInputPassword1">Password</label>
							    <input type="password" className="form-control cardover" ref="password" id="exampleInputPassword1" placeholder="Password"/>
							  </div>
							  <div className="form-group">
							    <label htmlFor="exampleInputPassword1">Confirm Password</label>
							    <input type="password" className="form-control cardover" ref="password2" id="exampleInputPassword2" placeholder="Password"/>
							  </div>
							  <button type="submit" className="btn btn-primary cardover">Sign Up</button>
							  <div className="higher"></div>
							</form>
						</div>
	        		</div>
	        		<div className="col-xs-6">
	        			<h1>Make Learning Fun Again</h1>
	        			<img src="http://i.imgur.com/L5t5iuu.png" className="front-img"/>
	        		</div>
	        	</div>
        	</div>
        );
    }
}

export default LandingHome;
