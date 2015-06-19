var React = require('react');
var _ = require('lodash');
var Immutable = require('immutable');
var Loader = require('react-loader');

var CurrenciesTabsComponent = require('./currencies-tabs-component.react');



var Dashboard = React.createClass({
  getInitialState: function(){
    return {
      currencies: [], loaded: false
    }
  },
  componentDidMount: function() {
    this._unsubscribe = this.props.store.currencies.onValue(currencies =>  this.setState({currencies: currencies, loaded: true}));
    this.props.actions.getAccounts.push();
  },
  componentWillUnmount: function() {
    this._unsubscribe();
  },
  render: function(){
    if (this.state.loaded === true && this.state.currencies){
      return <div>
          <CurrenciesTabsComponent/>
        </div>
      } else {
        return <div>
          <Loader />
        </div>
      }
  },
  _onToggleLeftNav: function(){
    this.refs.leftNav.toggle();
  }
});

module.exports = Dashboard;
