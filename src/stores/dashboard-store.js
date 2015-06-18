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
          '/accounts', {
            headers: {
              'accept': 'application/json',
              'x-quoine-device' :'desktop-or-else',
              'x-quoine-user-id' :5219,
              'x-quoine-user-token':'w3cR1WV5GdhiKvG2hC_K'
            }
          }
        ).
        then(
          (response) => response.json()
        )
      ).map(
        (json) => json
      )
  )
  var accounts = Bacon.update(
    Immutable.List(),
    getAccounts, (oldList, newList) => newList
  );
  return {
    currencies: accounts.map((i) => i.fiat_accounts)
  }
}
