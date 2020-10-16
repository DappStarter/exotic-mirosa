require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace sell tackle spot crazy repeat place evil inflict another army gift'; 
let testAccounts = [
"0x1ff9ab47d4a560c8fedf68fe0f69acb9e66a7e79497e7fba92b15217d91ca6eb",
"0x9f3481c66ce840a41495309842dc4b2bfa2416baca13ab8cbb0d68976461666a",
"0xbe1c52298cd0701cec0956ef842216bbd0163f8baee1b26370aea6742d7fb8e1",
"0x14042d147db1b9b60c567ceb2ddad3df10f6c2b14fa136d4df8d862d5130482d",
"0xadaa913837c318e7a3846ae156a0463d63de5886f09ffc11dd01e858a031a469",
"0xacc7ffbf1fcba81bd771ed7fd208483a2a4d7e460c9fdc4587f2387e1f76b63a",
"0xec11c4ed34f102e031d722a3c978bebc97d365829be74cd1ff4c02eda90a24d5",
"0x3f8924ae0474d1fc425c832b620206fbd77a55896167463e5a16047e04173aac",
"0xb18be8a41a2ce4b7dd6553120e4ff93a846a77a32234b40886256255a5520cfd",
"0x65c3d1eab259ac3b100b68f312702787767d193854ad70f48e0a9dc415fe7f7b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
