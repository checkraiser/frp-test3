var React = require('react');
var mui = require('material-ui');
var LeftNav = mui.LeftNav;
var ThemeManager = new mui.Styles.ThemeManager();
var MenuItem = mui.MenuItem;
var {Colors, Spacing, Typography} = mui.Styles;
var LeftComponent = React.createClass({
  getStyles: function() {
    return {
      cursor: 'pointer',
      //.mui-font-style-headline
      fontSize: '24px',
      color: Typography.textFullWhite,
      lineHeight: Spacing.desktopKeylineIncrement + 'px',
      fontWeight: Typography.fontWeightLight,
      backgroundColor: Colors.cyan500,
      paddingLeft: Spacing.desktopGutter,
      paddingTop: '0px',
      marginBottom: '8px',
    };
  },
  render: function(){
    var menuItems = [
      { route: 'get-started', text: 'Get Started' },
      { route: 'customization', text: 'Customization' },
      { route: 'components', text: 'Components' },
      { type: MenuItem.Types.SUBHEADER, text: 'Resources' },
      {
         type: MenuItem.Types.LINK,
         payload: 'https://github.com/callemall/material-ui',
         text: 'GitHub'
      },
      {
         text: 'Disabled',
         disabled: true
      },
      {
         type: MenuItem.Types.LINK,
         payload: 'https://www.google.com',
         text: 'Disabled Link',
         disabled: true
      },
    ];
    var header = (
      <div style={this.getStyles()} onTouchTap={this._onHeaderClick}>
        material ui
      </div>
    );
    return (
      <LeftNav menuItems={menuItems} ref="leftNav2" docked={false} header={header} />
    )
  },
  close: function(){
    this.refs.leftNav2.close();
  },
  toggle: function(){
    this.refs.leftNav2.toggle();
  },
  _onHeaderClick: function(){
    this.refs.leftNav2.toggle();
  }
});

module.exports = LeftComponent;
