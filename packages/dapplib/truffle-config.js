require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'inner clog orient spot grief ranch remember solid heavy private orange street'; 
let testAccounts = [
"0x2ec9b9bd96a44aa473e12dac15c0ef1f570812b85d08ae07bfcef172e3a50ead",
"0xfaa0216c0f155c32a6c2d006c05218d8d00d9fc0d7e33570c9d686ba44c9c84b",
"0xe2b3f6c5c45e76b751c7e96d1269aaed448a72489390ce7ec7b74da77967e877",
"0xfc9b9f373de6da342543f820192117e33f4a174816e5f1353074d3dc8fadcaee",
"0x7c9a35c2786d07fd85f5ceb8b6e83e5ebe5ffcfec1da9a552d3d377274441ee8",
"0xa6117e4f4d979e17d5a6d9a8046398454722605a13096725371e29b1b96c45ce",
"0x646c359e44ff98d6b35caec3afc7c155887b2023e7e3e57ff874e54f39ea5bb1",
"0x6dbd1d3ff0645c9b2cfe1889e16c12e74db81e491d612859623a83b66f50a8ac",
"0x5df9c5981854d74d619c1d21faf0034e7eea73f0f633ce805e9db44d9d30c994",
"0x09bd655c1f6825fa2f716e1b33a4fc3a858d5e1695ac882df8d8a57a7216c968"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


