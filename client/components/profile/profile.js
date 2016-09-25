import React, {Component} from 'react';
import ProfileCheck from './profile_check';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

UserProfile = new Mongo.Collection('userprofile');

export default class Profile extends TrackerReact(Component) {
    constructor(props) {
        super(props);
        this.state = {
			subscription: {
				userprofile: Meteor.subscribe('userprofile')
			}
		}
    }
    
    userpro() {
		return UserProfile.find().fetch();
	}

    render() {
    	var userpro= this.userpro();
    	console.log(userpro[1])
        return (
        	<div>
        		<div className="lowered">
	        		<div className="col-xs-10 col-xs-offset-1 ">
	        			<div className="row">
						  <div className="col-xs-4">
						    <div className="thumbnail cardy">
						      <img src="http://i.imgur.com/L5t5iuu.png"/>
						      <div className="caption">
						        <h3></h3>
						        <p><a href="/profile/edit" className="btn btn-primary cardover" role="button"><span className="glyphicon glyphicon-pencil" aria-hidden="true"></span> Edit Profile</a> </p>
						      </div>
						    </div>
						  </div>
						  <div className="col-xs-8">
						    <div className="panel panel-info cardy bridged">
							  <div className="panel-heading panel-uno">
							    <h3 className="panel-title">Topics</h3>
							  </div>
							  <div className="panel-body">
							    <div className="col-xs-6">
							    	I am good at....
							    	<ProfileCheck />
							    </div>
							    <div className="col-xs-6">
							    	I want to learn....
							    	<ProfileCheck />
							    </div>
							  </div>
							</div>
						  	<div className="panel panel-danger cardy">
							  <div className="panel-heading panel-dos">Zip Code</div>
							  <ul className="list-group">
							    <li className="list-group-item">60655</li>
							  </ul>
							</div>
						  	<div className="panel panel-info cardy bridged">
							  <div className="panel-heading panel-uno">
							    <h3 className="panel-title">Biography</h3>
							  </div>
							  <div className="panel-body">
							    Here is my bio
							  </div>
							</div>

						  	<div className="panel panel-danger cardy">
							  <div className="panel-heading panel-dos">Learning Interests</div>
							  <ul className="list-group">
							    <li className="list-group-item">Learn something</li>
							  </ul>
							</div>

						  <div className="panel panel-info cardy">
							  <div className="panel-heading panel-uno">Teaching Interests</div>
							  <ul className="list-group">
							    <li className="list-group-item">Teach something</li>
							  </ul>
							</div>
							<div className="panel panel-danger cardy">
							  <div className="panel-heading panel-dos">Projects</div>
							  <table className="table">
							    <thead>
							      <tr>
							        <th>Project Name</th>
							        <th>About Project</th>
							      </tr>
							    </thead>
							    <tbody>
							      <tr>
							        <td>Name</td>
							        <td>Project information.....</td>
							      </tr>
							    </tbody>
							  </table>
							</div>
							<div className="panel panel-info cardy">
							  <div className="panel-heading panel-uno">Education</div>
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
							        <td>2015</td>
							        <td>Northern Illinois University</td>
							        <td>Economics</td>
							      </tr>
							    </tbody>
							  </table>
							</div>
							<div className="panel panel-danger cardy">
							  <div className="panel-heading panel-dos">Work and Jobs</div>
							  <table className="table">
							    <thead>
							      <tr>
							        <th>Years</th>
							        <th>Job Title</th>
							        <th>Job Description</th>
							      </tr>
							    </thead>
							    <tbody>
							      <tr>
							        <td>2015-2016</td>
							        <td>Mount Carmel High School Teacher</td>
							        <td>Taught Computer science to gifted and non-gifted youngsters</td>
							      </tr>
							    </tbody>
							  </table>
							</div>
						  </div>
						</div>
	        		</div>
        		</div>
        	</div>
        );
    }
}

