import React from 'react';
import {mount} from 'react-mounter';
import {MainLayout} from './layouts/main_layout';
import {BetaLayout} from './layouts/beta_layout';
import Landing from './components/landing';
import Profile from './components/profile/profile';
import Home from './components/home/home';
import EditProfile from './components/profile/edit_profile';
import NewUser from './components/newuser/new_user';
import LoggingOut from './components/landing/logging_out';


FlowRouter.route('/', {
	action() {
		if(Meteor.userId()){
			window.location.href="/home"
		}else{
		mount (MainLayout, {
			content: (<Landing />)
		})
	}
	}
});

FlowRouter.route('/newuser', {
	action() {	
		mount (MainLayout, {
			content: (<NewUser />)

		})
		
	}
});

FlowRouter.route('/loggingout', {
	action() {	
		mount (MainLayout, {
			content: (<LoggingOut />)

		})
		
	}
});

FlowRouter.route('/home', {
	action() {
		if(Meteor.userId()){
		mount (BetaLayout, {
			content: (<Home />)
		})
		}else{
			window.location.href="/"
		}
		
	}
});

FlowRouter.route('/profile', {
	action() {
		if(Meteor.userId()){
		mount (BetaLayout, {
			content: (<Profile />)

		})
		}else{
			window.location.href="/"
		}
		
	}
});

FlowRouter.route('/profile/edit', {
	action() {
		if(Meteor.userId()){
		mount (BetaLayout, {
			content: (<EditProfile />)

		})
		}else{
			window.location.href="/"
		}
		
	}
});

