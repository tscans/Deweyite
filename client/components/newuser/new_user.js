import React, {Component} from 'react';
import NewUserNavbar from '../navfoot/new_user_nav';
import ProfileCheck from '../profile/profile_check';

class NewUser extends Component {
    constructor(props) {
        super(props);
    }

    updateUserProfile(event){
    	event.preventDefault();
		var zipcode = this.refs.zipcode.value.trim();
		var bio = this.refs.bio.value.trim();
		var learning = this.refs.learning.value.trim();
		var teaching = this.refs.teaching.value.trim();
		var projname = this.refs.projname.value.trim();
		var aboutproj = this.refs.aboutproj.value.trim();
		var gradyear = this.refs.gradyear.value.trim();
		var collegename = this.refs.collegename.value.trim();
		var collegemajor = this.refs.collegemajor.value.trim();
		var workyears = this.refs.workyears.value.trim();
		var workname = this.refs.workname.value.trim();
		var workdescription = this.refs.workdescription.value.trim();
		var fullname = this.refs.fullname.value.trim();
		var propic = this.refs.propic.value.trim();

		Meteor.call('updateUserProfile', zipcode, bio, learning, teaching, projname, aboutproj, gradyear,
			collegename, collegemajor, workyears, workname, workdescription, fullname, propic, (error, data) => {
			if(error){
				console.log("there was an error");
				console.log(error.error);
				console.log(error);
			}else{
				window.location.href="/home";

			}

		});

    }
    gog(){
    	Meteor.call('runlog');
    }

    render() {
    	this.gog();
        return (
        	<div>
        		<NewUserNavbar />
        		<div className="lowered highered">
	        		<div className="col-xs-10 col-xs-offset-1">	
	        			<h1>We need a few things from you first</h1>
	        			<div className="col-xs-8 col-xs-offset-2">
	        				<form onSubmit={this.updateUserProfile.bind(this)}>
	        				  <div className="form-group">
							    <label>Full Name</label>
							    <input type="text" className="form-control cardover" ref="fullname" placeholder="Full Name"/>
							  </div>
							  <div className="form-group">
							    <label>Profile Picture</label>
							    <input type="text" className="form-control cardover" ref="propic" placeholder="Insert a picture link"/>
							  </div>
							  <div className="form-group">
							    <label>Zip Code</label>
							    <input type="number" className="form-control cardover" ref="zipcode" placeholder="Zip Code"/>
							  </div>
							  <div className="form-group">
							    <div className="col-xs-6">
							    <label>I am good at...</label>
							    	<ProfileCheck />
							    </div>
							    <div className="col-xs-6">
							    <label>I want to learn...</label>
							    	<ProfileCheck />
							    </div>
							  </div>
							  <div className="form-group">
							    <label>Biography</label>
							    <textarea className="form-control cardover" rows="3" ref="bio" placeholder="Bio"></textarea>
							  </div>
							  <div className="form-group">
							    <label>Learning Interests</label>
							    <input type="text" className="form-control cardover" ref="learning" placeholder="Specific learning topics"/>
							  </div>
							  <div className="form-group">
							    <label>Teaching Interests</label>
							    <input type="text" className="form-control cardover" ref="teaching" placeholder="Specific teaching topics"/>
							  </div>
							  <div className="form-group">
							    <label>Projects</label>
							    <table className="table">
								    <thead>
								      <tr>
								        <th>Project Name</th>
								        <th>About Project</th>
								      </tr>
								    </thead>
								    <tbody>
								      <tr>
								        <td><input type="text" className="form-control cardover" ref="projname" placeholder="Project Name"/></td>
								        <td><input type="text" className="form-control cardover" ref="aboutproj" placeholder="About the Project"/></td>
								      </tr>
								    </tbody>
								</table>
							  </div>
							  <div className="form-group">
							    <label>Education</label>
							    <table className="table">
								    <thead>
								      <tr>
								        <th>Graduating Year</th>
								        <th>College</th>
								        <th>Major</th>
								      </tr>
								    </thead>
								    <tbody>
								      <tr>
								        <td><input type="text" className="form-control cardover" ref="gradyear" placeholder="20XX-20XX"/></td>
								        <td><input type="text" className="form-control cardover" ref="collegename" placeholder="University Name"/></td>
								        <td><input type="text" className="form-control cardover" ref="collegemajor" placeholder="College Major"/></td>
								      </tr>
								    </tbody>
								</table>
							  </div>
							  <div className="form-group">
							    <label>Workplace</label>
							    <table className="table">
								    <thead>
								      <tr>
								        <th>Years</th>
								        <th>Job Title</th>
								        <th>Description</th>
								      </tr>
								    </thead>
								    <tbody>
								      <tr>
								        <td><input type="text" className="form-control cardover" ref="workyears" placeholder="20XX-20XX"/></td>
								        <td><input type="text" className="form-control cardover" ref="workname" placeholder="Title"/></td>
								        <td><input type="text" className="form-control cardover" ref="workdescription" placeholder="What did you do?"/></td>
								      </tr>
								    </tbody>
								</table>
							  </div>
							  <button type="submit" className="btn btn-primary cardover">Submit</button>
							</form>
							<div className="highered"></div>
	        			</div>
	        		</div>
        		</div>
        	</div>
        );
    }
}

export default NewUser;
