// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Test {

    function test(address targetAddress) public {
        (bool s,) = targetAddress.call(abi.encodeWithSignature("attempt()"));
        require(s);
    }
}