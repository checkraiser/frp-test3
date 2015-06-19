var React = require('react');
var mui = require('material-ui');
var InvertTabs = mui.InvertTabs;
var Tab = mui.Tab;
var CurrencyComponent = require('./currency-component.react');
var width = window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;

  var height = window.innerHeight
  || document.documentElement.clientHeight
  || document.body.clientHeight;
var CurrenciesTabsComponent = React.createClass({
	
	render: function(){
		return (
			<InvertTabs style={{marginBottom: '1px'}} tabStyle={{height: height * 0.75}}>
				<Tab label="Market" style={{marginBottom: '22%'}}>
					<CurrencyComponent />
				</Tab>
				<Tab label="Limit" style={{marginBottom: '22%'}}>
					<CurrencyComponent />
				</Tab>
				<Tab label="Range" style={{marginBottom: '22%'}}>
					<CurrencyComponent />
				</Tab>
			</InvertTabs>
		)
	}
});

module.exports = CurrenciesTabsComponent;