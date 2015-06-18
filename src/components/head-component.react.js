
var React = require('react');
var mui = require('material-ui');
var Tabs = mui.Tabs;
var Tab = mui.Tab;
var {Colors, Spacing, Typography} = mui.Styles;
var ReactRouter = require('react-router');
var DefaultRoute = ReactRouter.DefaultRoute;
var Link = ReactRouter.Link;

var HeadComponent = React.createClass({
  getStyles: function() {
    return {
      headline: {
        fontSize: '24px',
        lineHeight: '32px',
        paddingTop: '16px',
        marginBottom: '12px',
        letterSpacing: '0',
        fontWeight: Typography.fontWeightNormal,
        color: Typography.textDarkBlack
      }
    }
  },
  render: function(){
    return (
        <div>
            <Link to="app">Spot</Link>
            <Link to="margin">Margin</Link>
        </div>
    )
  },
});

module.exports = HeadComponent;
