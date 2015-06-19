var React = require('react');

var LineSeparator = React.createClass({
	getStyles: function(){
		return {
			position: 'relative',
			height:'1px',
			background:'#717171',
			borderBottom:'1px solid #313030',
			width: '122%',
		}
	},
	render: function(){
		return (
			<div style={this.getStyles()}></div>
		)
	}
});

module.exports = LineSeparator;