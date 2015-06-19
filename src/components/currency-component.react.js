var React = require('react');
var mui = require('material-ui');
var Tabs = mui.Tabs;
var Tab = mui.Tab;

var CurrencyComponent = React.createClass({
	render: function(){
		return (
				
				<Tabs style={{position:'relative', marginTop:'10px'}}>
					<Tab label="USD">
							USD
					</Tab>
					<Tab label="JPN">
						JPN
					</Tab>
					<Tab label="VND">
						VND
					</Tab>
				</Tabs>
		)
	}
});

module.exports = CurrencyComponent;