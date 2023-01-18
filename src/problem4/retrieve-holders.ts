import { ethers } from "ethers";

// If you don't specify a //url//, Ethers connects to the default 
// (i.e. ``http:/\/localhost:8545``)
const provider = new ethers.providers.JsonRpcProvider("https://bsc-dataseed1.binance.org/");

// The provider also allows signing transactions to
// send ether and pay to change state within the blockchain.
// For this, we need the account signer...
const signer = provider.getSigner()

const f = async () => {
    // Look up the current block number
    await provider.getBlockNumber()
    // 16417991

    // Get the balance of an account (by address or ENS name, if supported by network)
    // var balance = await provider.getBalance("ethers.eth")
    var balance1 = await provider.getBalance("0xb5d4f343412dc8efb6ff599d790074d0f1e8d430")
    var balance2 = await provider.getBalance("0x0020c5222a24e4a96b720c06b803fb8d34adc0af")
    var balance3 = await provider.getBalance("0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392")
    // { BigNumber: "182334002436162568" }
    // Often you need to format the output to something more user-friendly,
    // such as in ether (instead of wei)
    // ethers.utils.formatEther(balance)
    // '0.182334002436162568'

    console.log("0xb5d4f343412dc8efb6ff599d790074d0f1e8d430", ethers.utils.formatEther(balance1))
    console.log("0x0020c5222a24e4a96b720c06b803fb8d34adc0af", ethers.utils.formatEther(balance2))
    console.log("0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392", ethers.utils.formatEther(balance3))
}

f()
