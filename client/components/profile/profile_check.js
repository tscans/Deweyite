import React, {Component} from 'react';

class ProfileCheck extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        	<div>
        		<div className="checkbox">
				    <label>
				      <input type="checkbox"/> Math
				    </label>
				</div>
				<div className="checkbox">
				    <label>
				      <input type="checkbox"/> Art
				    </label>
				</div>
        		<div className="checkbox">
				    <label>
				      <input type="checkbox"/> Programming
				    </label>
				</div>
				<div className="checkbox">
				    <label>
				      <input type="checkbox"/> Science
				    </label>
				</div>
				<div className="checkbox">
				    <label>
				      <input type="checkbox"/> Language
				    </label>
				</div>
				<div className="checkbox">
				    <label>
				      <input type="checkbox"/> Trades
				    </label>
				</div>
				<div className="checkbox">
				    <label>
				      <input type="checkbox"/> Writing
				    </label>
				</div>
				<div className="checkbox">
				    <label>
				      <input type="checkbox"/> History/Politics
				    </label>
				</div>
				<div className="checkbox">
				    <label>
				      <input type="checkbox"/> Music
				    </label>
				</div>
				<div className="checkbox">
				    <label>
				      <input type="checkbox"/> Physical Activity
				    </label>
				</div>
				<div className="checkbox">
				    <label>
				      <input type="checkbox"/> Fine Arts
				    </label>
				</div>
				<div className="checkbox">
				    <label>
				      <input type="checkbox"/> Professional Development
				    </label>
				</div>
				<div className="checkbox">
				    <label>
				      <input type="checkbox"/> Other
				    </label>
				</div>
        	</div>
        );
    }
}

export default ProfileCheck;
