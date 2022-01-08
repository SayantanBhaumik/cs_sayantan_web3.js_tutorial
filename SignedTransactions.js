// we need

const Web3 = require ('web3');
const Tx= require ('ethereumjs-tx');
const web3 = new Web3 ('https://ropsten.infura.io/YOUR_INFURA_API_KEY');

const account1 = '0x61304DD5E779C14B227165f9Eab8f0788773dA3a' ;
const account2= '0x316bE2FE4F42DaD61f189759380A8f17fC3897a8 ';

//Buffer module coverts private key to binary data
const privatekey1=Buffer.from('11e382ba4d8bd3182b5e7b1fa88e73026c5245275668ac74a9dca279b8ec38da');
const privatekey2= Buffer.from('81865892badbf835b31e4adc3a8ebe91031710d5405427269bb4b13a74dbea32');

//async function
web3.eth.getTransactionCount(account1,(err,txnCount)=>{
  
//building txn object
const txnObject = {
  
  //nonce is the previous transaction count for the given account , gets rid of double spending
  nonce:web3.utils.toHex(txnCount) ,
  to: account2 ,
  value: web3.utils.toHex(web3.utils.toWei('1','ether')),
  
  //maximum amount of gas consumed 
  gasLimit:web3.utils.toHex(21000),
  
  //amount we want to pay for each unit of gas
  gasPrice:web3.utils.toHex(web3.utils.toWei('10','gwei'))
}

//signing the txn
const txn = new Tx(txnObject);
  txn.sign(privatekey1);

//transactions are broadcast between peers in a serialized byte format, called raw format
//converted into a "hexadecimal-string" representation (a process called serialization)
  
 const serializedtxn = txn.serialize();
 const raw = '0x' + serializedtxn.toString('hex');
  
//broadcasting the contract to the network
  web3.eth.sendSignedTransaction(raw,(err,txHash)=>{
    console.log('txHash':txHash);}

});
