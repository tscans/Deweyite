UserProfile = new Mongo.Collection('userprofile');

Meteor.publish('userprofile', ()=>{
	return UserProfile.find();
});

/*Meteor.publish('userNotes', function(){
	return Scans.find({user: this.userId});
});*/