var React = require('react');
var mui = require('material-ui');
var AppBar = mui.AppBar;
var HeadComponent = require('./head-component.react');
var LeftComponent = require('./left-component.react');
var LineSeparator = require('./line-separator.react');
var AppBarComponent = React.createClass({
	render: function(){
		return (
			<div>
		        <AppBar title='' iconClassNameRight="muidocs-icon-navigation-expand-more" onLeftIconButtonTouchTap={this._onToggleLeftNav} style={{width: '120%', marginLeft: '-8px', marginTop: '-8px', top: '0px', marginBottom: '10px'}}>
		          <HeadComponent />
		        </AppBar>
		        <LineSeparator />
		        <LeftComponent  ref="leftNav" />
	        </div>
	     )
	},
	_onToggleLeftNav: function(){
	    this.refs.leftNav.toggle();
	  }
});

module.exports = AppBarComponent;