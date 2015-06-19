

var React = require('react/addons');
var dashboardActions = require('./actions/dashboard-actions');
var dashboardStore = require('./stores/dashboard-store')(dashboardActions);
var Dashboard = require('./components/dashboard.react');
require("react-tap-event-plugin")();

var ReactRouter = require('react-router');
var DefaultRoute = ReactRouter.DefaultRoute;
var Link = ReactRouter.Link;
var Route = ReactRouter.Route;
var RouteHandler = ReactRouter.RouteHandler;
var mui = require('material-ui');
var ThemeManager = new mui.Styles.ThemeManager();
var OrdersComponent = require('./components/orders-component.react');
var AppBarComponent = require('./components/appbar-component.react');
var App = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },
  render: function(){
    return (
      <div>
        <AppBarComponent />
        <RouteHandler />
      </div>
    )
  }
})

var SpotComponent = React.createClass({
  render: function(){
    return (
      <div>
        <Dashboard store={dashboardStore} actions={dashboardActions} ctype={'spot'} />
      </div>
    )
  }
});
var MarginComponent = React.createClass({
  render: function(){
    return (
      <div>
        <Dashboard store={dashboardStore} actions={dashboardActions} ctype={'margin'} />
      </div>
    )
  }
});

var routes = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute handler={SpotComponent} />
    <Route name="margin" path="/margin" handler={MarginComponent} />
    <Route name="orders" path="/orders" handler={OrdersComponent} />
  </Route>
);
ReactRouter.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('spotapp'));
});

