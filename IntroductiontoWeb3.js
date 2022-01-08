//using macOS terminal
// install node.js
//npm install web3
// open node console in the terminal 
//type node

var Web3 = require ('web3');

//RPC SERVER
var web3 = new Web3('HTTP://127.0.0.1:7545');

//dummy account on Ganache
var address= '0x61304DD5E779C14B227165f9Eab8f0788773dA3a' ;

//getBalance(publickey ,callback);
web3.eth.getBalance(address,(err,bal)=>{balance=bal});

//converting balance
web3.utils.fromWei(balance,'ether');
web3.utils.fromWei(balance,'Gwei');

//creating account on-chain
web3.eth.accounts.create();


