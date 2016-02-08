FlowRouter.route('/', {
	name: 'home',
	action: function(){
		console.log('hello');
		BlazeLayout.render('HomeLayout');
		console.log('blah')
	}
});

FlowRouter.route('/test', {
	name: 'test',
	action: function() {
		BlazeLayout.render('MainLayout', {main: 'Test'});
	}
});