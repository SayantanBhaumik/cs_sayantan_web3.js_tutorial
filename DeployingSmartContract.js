const Tx = require ('ethereumjs-tx');
const Web3 = require ('web3');

const web3 = new Web3('https://ropsten.infura.io/YOUR_INFURA_API_KEY');

const smartcontractAddress = '0x316bE2FE4F42DaD61f189759380A8f17fC3897a8';

const smartcontractPrivatekey = Buffer.from ('81865892badbf835b31e4adc3a8ebe91031710d5405427269bb4b13a74dbea32');

web3.eth.getTransactionCount(smartcontractAddress,(err,txnCount)=>
   {
    const data = 'bytecode_of_your_smart_contract_aftercompiling';
    const txnObject= {
      nonce: web3.utils.toHex(txnCount),
      gasLimit:web3.utils.toHex(2100000),
      gasPrice:web3.utils.toHex(web3.utils.toWei('10','gwei'),
      data:data
                               }
    
   const txn = new Tx(txnObject);
   txn.sign(smartcontractPrivatekey);
  
  const serializedtxn = txn.serialize();
  const raw = '0x' + serializedtxn.toString('hex');
  
  webe.eth.sendSignedTransaction(raw,(err,txHash)=>
                                 { console.log(txHash);}
                                 }
                                );
  
