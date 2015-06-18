## Installation

`webpack --watch`


currency_pair_code: "BTCUSD"
leverage_level: 1
nonce: 1434448050089
order_type: "market"
price: 0
product_code: "CASH"
quantity: 0.11
settings: null
side: "buy"




currency_pair_code: "BTCUSD"
leverage_level: 1
nonce: 1434449854914
order_type: "market_with_range"
price: 0.2
product_code: "CASH"
quantity: 0.1
settings: null
side: "sell"

GET /accounts

{fiat_accounts: [
{balance: 591.61988
bank: {name: "OCBC Bank", branch: "503, North Branch", acc_type: "", acc_name: "QUOINE PTE LTD ",…}
currency: "USD"
currency_symbol: "$"
free_balance: 569.36428
highest_offer_interest_rate: "0.00020"
id: 5121
lowest_offer_interest_rate: "0.00005"
pusher_channel: "user_5219_account_usd"
send_to_btc_address: null}
]}

POST /orders
payload: {currency_pair_code: "BTCUSD"
leverage_level: 1
nonce: 1434449722568
order_type: "limit"
price: 0.1
product_code: "CASH"
quantity: 0.01
settings: null
side: "sell"}

response: {created_at: "2015-06-16T10:35:01+00:00"
currency_pair_code: "BTCUSD"
filled_quantity: 0
id: "57822"
notes: null
order_type: "market"
price: 224.72
product_code: "CASH"
quantity: 0.01
side: "sell"
status: "live"
success: true}
