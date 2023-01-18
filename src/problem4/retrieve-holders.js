"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var ethers_1 = require("ethers");
// If you don't specify a //url//, Ethers connects to the default 
// (i.e. ``http:/\/localhost:8545``)
var provider = new ethers_1.ethers.providers.JsonRpcProvider("https://bsc-dataseed1.binance.org/");
// The provider also allows signing transactions to
// send ether and pay to change state within the blockchain.
// For this, we need the account signer...
var signer = provider.getSigner();
var f = function () { return __awaiter(void 0, void 0, void 0, function () {
    var balance1, balance2, balance3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: 
            // Look up the current block number
            return [4 /*yield*/, provider.getBlockNumber()
                // 16417991
                // Get the balance of an account (by address or ENS name, if supported by network)
                // var balance = await provider.getBalance("ethers.eth")
            ];
            case 1:
                // Look up the current block number
                _a.sent();
                return [4 /*yield*/, provider.getBalance("0xb5d4f343412dc8efb6ff599d790074d0f1e8d430")];
            case 2:
                balance1 = _a.sent();
                return [4 /*yield*/, provider.getBalance("0x0020c5222a24e4a96b720c06b803fb8d34adc0af")];
            case 3:
                balance2 = _a.sent();
                return [4 /*yield*/, provider.getBalance("0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392")
                    // { BigNumber: "182334002436162568" }
                    // Often you need to format the output to something more user-friendly,
                    // such as in ether (instead of wei)
                    // ethers.utils.formatEther(balance)
                    // '0.182334002436162568'
                ];
            case 4:
                balance3 = _a.sent();
                // { BigNumber: "182334002436162568" }
                // Often you need to format the output to something more user-friendly,
                // such as in ether (instead of wei)
                // ethers.utils.formatEther(balance)
                // '0.182334002436162568'
                console.log("0xb5d4f343412dc8efb6ff599d790074d0f1e8d430", ethers_1.ethers.utils.formatEther(balance1));
                console.log("0x0020c5222a24e4a96b720c06b803fb8d34adc0af", ethers_1.ethers.utils.formatEther(balance2));
                console.log("0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392", ethers_1.ethers.utils.formatEther(balance3));
                return [2 /*return*/];
        }
    });
}); };
f();
