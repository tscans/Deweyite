import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class EditProfile extends TrackerReact(Component) {
    constructor(props) {
        super(props);
        
    }
    render() {
        return (
        	<div>
        		<div className="lowered">
	        		<div className="col-xs-10 col-xs-offset-1 ">
	        			<div className="row">
						  <div className="col-xs-4">
						    <div className="thumbnail cardy">
						      <img src="http://i.imgur.com/L5t5iuu.png"/>
						      <div className="caption">
						        <h3>Name Here</h3>
						        <p><a href="/profile" className="btn btn-primary cardover" role="button"><span className="glyphicon glyphicon-pencil" aria-hidden="true"></span> Done Editing</a> </p>
						      </div>
						    </div>
						  </div>
						  <div className="col-xs-8">
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

