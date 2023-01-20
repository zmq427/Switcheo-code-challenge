const ConvertLib = artifacts.require("ConvertLib");
const MetaCoin = artifacts.require("MetaCoin");
const Solution = artifacts.require("Solution");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.deploy(Solution);
};
