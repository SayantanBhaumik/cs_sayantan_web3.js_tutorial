//npm install web3
//npm install ethereumjs-tx
//node console

var Web3 = require ('web3');
var web3 = new Web3('HTTP://127.0.0.1:7545');

const account1 = '0x61304DD5E779C14B227165f9Eab8f0788773dA3a' ;
const account2= '0x316bE2FE4F42DaD61f189759380A8f17fC3897a8 ';

web3.eth.getBalance(account1,(err,result1)=>{console.log(result1);});

//txn
web3.eth.sendTransaction({ from : address1 , to: address2 , value: web3.utils.toWei('1','ether')});

//check balance
web3.eth.getBalance(account1,(err,result1)=>{console.log(result1);});
web3.eth.getBalance(account2,(err,result1)=>{console.log(result2);});
