
var Hapi = require('hapi');
var Immutable = require('immutable');
var uuid = require('uuid');
var server = new Hapi.Server();

server.connection({port: 3000});

var todos = Immutable.Map({fiat_accounts:[
			{id: 1, currency: 'USD'},
			{id: 2, currency: 'JPN'}
		]});

server.route({
	path: '/accounts',
	method: 'GET',
	handler: function(request, reply){
		reply(todos.toJS());
	}
});
server.route({
	path: '/',
	method: 'GET',
	handler: {
		file: 'index.html'
	}
});

server.route({
	path: '/public/{path*}',
	method: 'GET',
	handler: {
		directory: {
			path: './public',
			listing: false
		}
	}

});

server.route({
	path: '/accounts/{id}',
	method: 'DELETE',
	handler: function(req, rep){
		todos = todos.delete(
			todos.findIndex(
				function(item) {return item.id === req.params.id}
			)
		)
		rep(todos)
	}
})

server.route({
	path: '/todos',
	method: 'POST',
	handler: function(request, reply){
		var todo = {
			id: uuid.v1(),
			text: request.payload.text
		}
		todos = todos.push(todo);
		reply(todos);
	}
})

server.start(function(){
	console.log('running 1');
})
