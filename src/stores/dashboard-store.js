var Bacon = require('baconjs');
var es6 = require('es6-promise');
var fetch = require('isomorphic-fetch');
var Immutable = require('immutable');
var _ = require('lodash');

es6.polyfill();

module.exports = function(actions){
  var getAccounts = actions.getAccounts.flatMap(
    () =>
      Bacon.fromPromise(
        fetch(
          '/accounts'
        ).
        then(
          (response) => response.json()
        )
      ).map(
        (json) => json
      )
  );
  var currencies = Bacon.update(
    Immutable.List(),
    getAccounts, (oldList, newList) =>  newList.fiat_accounts
  );
  return {
    currencies: currencies
  }
}
