Meteor.methods({
	updateUserProfile(zipcode, bio, learning, teaching, projname, aboutproj, gradyear,
			collegename, collegemajor, workyears, workname, workdescription, fullname, propic){
		UserProfile.update({realid: Meteor.user()._id}, {$set: {
			realid: Meteor.user()._id,
			zipcode: zipcode,
			bio: bio,
			learning: learning,
			teaching: teaching,
			projname: projname,
			aboutproj: aboutproj,
			gradyear: gradyear,
			collegename: collegename,
			collegemajor: collegemajor,
			workyears: workyears,
			workname: workname,
			workdescription: workdescription,
			fullname: fullname,
			propic: propic

		}}, {upsert: true}

		)
	},
	makeUser(uno, dos){
		Accounts.createUser({
			email: uno,
			password: dos
		})
	},
	runlog(){
		console.log(Meteor.user()._id)
	}
})

