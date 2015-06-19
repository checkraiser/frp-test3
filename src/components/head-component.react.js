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
  getStyles: function(){
    return {
      ul: {
        listStyleType: 'none',
        margin: '0',
        padding: '20px'  
      },
      li: {
        display: 'inline'
      }
      
    }
  },
  render: function(){
    return (
      <ul style={this.getStyles().ul}>
        <li style={this.getStyles().li}>
          <Link activeStyle={{textDecoration:'none', color:Typography.textFullWhite}} to="app">
            Spot
          </Link>
        </li>
        <li style={this.getStyles().li}>
          <Link activeStyle={{textDecoration:'none', color:Typography.textFullWhite}} to="margin">
            Margin
          </Link>
        </li>
        <li style={this.getStyles().li}>
          <Link activeStyle={{textDecoration:'none', color:Typography.textFullWhite}} to="orders">
            Orders
          </Link>
        </li>

      </ul>
    )
  },
});

module.exports = HeadComponent;
