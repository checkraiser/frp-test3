var React = require('react');
var mui = require('material-ui');
var Tabs = mui.Tabs;
var Tab = mui.Tab;
var {Colors, Spacing, Typography} = mui.Styles;
var ReactRouter = require('react-router');
var DefaultRoute = ReactRouter.DefaultRoute;
var Link = ReactRouter.Link;
var ToolbarGroup = mui.ToolbarGroup;
var FlatButton = mui.FlatButton;
var HeadComponent = React.createClass({
  render: function(){
    return (
      <ToolbarGroup key={1} float="left">
        <div style={{paddingTop: '5%', backgroundColor:"#00bcd4 none repeat scroll 0 0"}}>
          <Link style={{textDecoration: 'none', color:Typography.textFullWhite}} to="app">
            <FlatButton style={{backgroundColor:"#00bcd4 none repeat scroll 0 0", color:Typography.textFullWhite}}>Spot
            </FlatButton>
          </Link>
          <Link style={{textDecoration: 'none', color:Typography.textFullWhite}} to="margin">
            <FlatButton style={{backgroundColor:"#00bcd4 none repeat scroll 0 0", color:Typography.textFullWhite}}>Margin
            </FlatButton>
          </Link>
          <Link style={{textDecoration: 'none'}} to="orders">
            <FlatButton style={{backgroundColor:"#00bcd4 none repeat scroll 0 0", color:Typography.textFullWhite}}>Orders
            </FlatButton>
          </Link>
        </div>
      </ToolbarGroup>
    )
  },
});

module.exports = HeadComponent;
