var React = require('react');
var _ = require('lodash');
var Immutable = require('immutable');
var mui = require('material-ui');
var AppBar = mui.AppBar;
var ThemeManager = new mui.Styles.ThemeManager();
var HeadComponent = require('./head-component.react');


var LeftComponent = require('./left-component.react');

var Dashboard = React.createClass({
  getInitialState: function(){
    return {
      currencies: [], loaded: false
    }
  },
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
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
      var currencies = this.state.currencies.map((c) => <li key={c.id}>{c.currency}</li>);
      return <div>


        <AppBar title='' iconClassNameRight="muidocs-icon-navigation-expand-more" onLeftIconButtonTouchTap={this._onToggleLeftNav} style={{position: 'fixed', left: '0px', right: '0px', top: '0px'}}>
          <HeadComponent />
        </AppBar>
        <LeftComponent  ref="leftNav" />

        </div>
      } else {
        return <div>


          <AppBar title='' iconClassNameRight="muidocs-icon-navigation-expand-more"/>
          <LeftComponent ref="leftNav" />
        </div>
      }

  },
  _onToggleLeftNav: function(){
    this.refs.leftNav.toggle();
  }
});

module.exports = Dashboard;
