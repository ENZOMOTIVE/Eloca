declare const POOL_ABI: readonly [{
    readonly inputs: readonly [];
    readonly name: "alreadyInitialized";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "arithmeticError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "bottomTickLowerThanMIN";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "dynamicFeeActive";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "dynamicFeeDisabled";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "flashInsufficientPaid0";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "flashInsufficientPaid1";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "insufficientInputAmount";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "invalidAmountRequired";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes4";
        readonly name: "expectedSelector";
        readonly type: "bytes4";
    }];
    readonly name: "invalidHookResponse";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "invalidLimitSqrtPrice";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "invalidNewCommunityFee";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "invalidNewTickSpacing";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "liquidityAdd";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "liquidityOverflow";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "liquiditySub";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "locked";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "notAllowed";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "notInitialized";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "pluginIsNotConnected";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "priceOutOfRange";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "tickInvalidLinks";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "tickIsNotInitialized";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "tickIsNotSpaced";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "tickOutOfRange";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "topTickAboveMAX";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "topTickLowerOrEqBottomTick";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "transferFailed";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "zeroAmountRequired";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "zeroLiquidityActual";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "zeroLiquidityDesired";
    readonly type: "error";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "int24";
        readonly name: "bottomTick";
        readonly type: "int24";
    }, {
        readonly indexed: true;
        readonly internalType: "int24";
        readonly name: "topTick";
        readonly type: "int24";
    }, {
        readonly indexed: false;
        readonly internalType: "uint128";
        readonly name: "liquidityAmount";
        readonly type: "uint128";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "amount0";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "amount1";
        readonly type: "uint256";
    }];
    readonly name: "Burn";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "int24";
        readonly name: "bottomTick";
        readonly type: "int24";
    }, {
        readonly indexed: true;
        readonly internalType: "int24";
        readonly name: "topTick";
        readonly type: "int24";
    }, {
        readonly indexed: false;
        readonly internalType: "uint128";
        readonly name: "amount0";
        readonly type: "uint128";
    }, {
        readonly indexed: false;
        readonly internalType: "uint128";
        readonly name: "amount1";
        readonly type: "uint128";
    }];
    readonly name: "Collect";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "uint16";
        readonly name: "communityFeeNew";
        readonly type: "uint16";
    }];
    readonly name: "CommunityFee";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "newCommunityVault";
        readonly type: "address";
    }];
    readonly name: "CommunityVault";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "uint16";
        readonly name: "fee";
        readonly type: "uint16";
    }];
    readonly name: "Fee";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "amount0";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "amount1";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "paid0";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "paid1";
        readonly type: "uint256";
    }];
    readonly name: "Flash";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "uint160";
        readonly name: "price";
        readonly type: "uint160";
    }, {
        readonly indexed: false;
        readonly internalType: "int24";
        readonly name: "tick";
        readonly type: "int24";
    }];
    readonly name: "Initialize";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "int24";
        readonly name: "bottomTick";
        readonly type: "int24";
    }, {
        readonly indexed: true;
        readonly internalType: "int24";
        readonly name: "topTick";
        readonly type: "int24";
    }, {
        readonly indexed: false;
        readonly internalType: "uint128";
        readonly name: "liquidityAmount";
        readonly type: "uint128";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "amount0";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "amount1";
        readonly type: "uint256";
    }];
    readonly name: "Mint";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "newPluginAddress";
        readonly type: "address";
    }];
    readonly name: "Plugin";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "uint8";
        readonly name: "newPluginConfig";
        readonly type: "uint8";
    }];
    readonly name: "PluginConfig";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "int256";
        readonly name: "amount0";
        readonly type: "int256";
    }, {
        readonly indexed: false;
        readonly internalType: "int256";
        readonly name: "amount1";
        readonly type: "int256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint160";
        readonly name: "price";
        readonly type: "uint160";
    }, {
        readonly indexed: false;
        readonly internalType: "uint128";
        readonly name: "liquidity";
        readonly type: "uint128";
    }, {
        readonly indexed: false;
        readonly internalType: "int24";
        readonly name: "tick";
        readonly type: "int24";
    }];
    readonly name: "Swap";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "int24";
        readonly name: "newTickSpacing";
        readonly type: "int24";
    }];
    readonly name: "TickSpacing";
    readonly type: "event";
}, {
    readonly inputs: readonly [{
        readonly internalType: "int24";
        readonly name: "bottomTick";
        readonly type: "int24";
    }, {
        readonly internalType: "int24";
        readonly name: "topTick";
        readonly type: "int24";
    }, {
        readonly internalType: "uint128";
        readonly name: "amount";
        readonly type: "uint128";
    }, {
        readonly internalType: "bytes";
        readonly name: "data";
        readonly type: "bytes";
    }];
    readonly name: "burn";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amount0";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount1";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly internalType: "int24";
        readonly name: "bottomTick";
        readonly type: "int24";
    }, {
        readonly internalType: "int24";
        readonly name: "topTick";
        readonly type: "int24";
    }, {
        readonly internalType: "uint128";
        readonly name: "amount0Requested";
        readonly type: "uint128";
    }, {
        readonly internalType: "uint128";
        readonly name: "amount1Requested";
        readonly type: "uint128";
    }];
    readonly name: "collect";
    readonly outputs: readonly [{
        readonly internalType: "uint128";
        readonly name: "amount0";
        readonly type: "uint128";
    }, {
        readonly internalType: "uint128";
        readonly name: "amount1";
        readonly type: "uint128";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "communityFeeLastTimestamp";
    readonly outputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "";
        readonly type: "uint32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "communityVault";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "factory";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "fee";
    readonly outputs: readonly [{
        readonly internalType: "uint16";
        readonly name: "currentFee";
        readonly type: "uint16";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount0";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount1";
        readonly type: "uint256";
    }, {
        readonly internalType: "bytes";
        readonly name: "data";
        readonly type: "bytes";
    }];
    readonly name: "flash";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getCommunityFeePending";
    readonly outputs: readonly [{
        readonly internalType: "uint128";
        readonly name: "";
        readonly type: "uint128";
    }, {
        readonly internalType: "uint128";
        readonly name: "";
        readonly type: "uint128";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getReserves";
    readonly outputs: readonly [{
        readonly internalType: "uint128";
        readonly name: "";
        readonly type: "uint128";
    }, {
        readonly internalType: "uint128";
        readonly name: "";
        readonly type: "uint128";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "globalState";
    readonly outputs: readonly [{
        readonly internalType: "uint160";
        readonly name: "price";
        readonly type: "uint160";
    }, {
        readonly internalType: "int24";
        readonly name: "tick";
        readonly type: "int24";
    }, {
        readonly internalType: "uint16";
        readonly name: "lastFee";
        readonly type: "uint16";
    }, {
        readonly internalType: "uint8";
        readonly name: "pluginConfig";
        readonly type: "uint8";
    }, {
        readonly internalType: "uint16";
        readonly name: "communityFee";
        readonly type: "uint16";
    }, {
        readonly internalType: "bool";
        readonly name: "unlocked";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint160";
        readonly name: "initialPrice";
        readonly type: "uint160";
    }];
    readonly name: "initialize";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "isUnlocked";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "unlocked";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "liquidity";
    readonly outputs: readonly [{
        readonly internalType: "uint128";
        readonly name: "";
        readonly type: "uint128";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "maxLiquidityPerTick";
    readonly outputs: readonly [{
        readonly internalType: "uint128";
        readonly name: "";
        readonly type: "uint128";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "leftoversRecipient";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly internalType: "int24";
        readonly name: "bottomTick";
        readonly type: "int24";
    }, {
        readonly internalType: "int24";
        readonly name: "topTick";
        readonly type: "int24";
    }, {
        readonly internalType: "uint128";
        readonly name: "liquidityDesired";
        readonly type: "uint128";
    }, {
        readonly internalType: "bytes";
        readonly name: "data";
        readonly type: "bytes";
    }];
    readonly name: "mint";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amount0";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount1";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint128";
        readonly name: "liquidityActual";
        readonly type: "uint128";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "nextTickGlobal";
    readonly outputs: readonly [{
        readonly internalType: "int24";
        readonly name: "";
        readonly type: "int24";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "plugin";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly name: "positions";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "liquidity";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "innerFeeGrowth0Token";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "innerFeeGrowth1Token";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint128";
        readonly name: "fees0";
        readonly type: "uint128";
    }, {
        readonly internalType: "uint128";
        readonly name: "fees1";
        readonly type: "uint128";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "prevTickGlobal";
    readonly outputs: readonly [{
        readonly internalType: "int24";
        readonly name: "";
        readonly type: "int24";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "safelyGetStateOfAMM";
    readonly outputs: readonly [{
        readonly internalType: "uint160";
        readonly name: "sqrtPrice";
        readonly type: "uint160";
    }, {
        readonly internalType: "int24";
        readonly name: "tick";
        readonly type: "int24";
    }, {
        readonly internalType: "uint16";
        readonly name: "lastFee";
        readonly type: "uint16";
    }, {
        readonly internalType: "uint8";
        readonly name: "pluginConfig";
        readonly type: "uint8";
    }, {
        readonly internalType: "uint128";
        readonly name: "activeLiquidity";
        readonly type: "uint128";
    }, {
        readonly internalType: "int24";
        readonly name: "nextTick";
        readonly type: "int24";
    }, {
        readonly internalType: "int24";
        readonly name: "previousTick";
        readonly type: "int24";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint16";
        readonly name: "newCommunityFee";
        readonly type: "uint16";
    }];
    readonly name: "setCommunityFee";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "newCommunityVault";
        readonly type: "address";
    }];
    readonly name: "setCommunityVault";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint16";
        readonly name: "newFee";
        readonly type: "uint16";
    }];
    readonly name: "setFee";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "newPluginAddress";
        readonly type: "address";
    }];
    readonly name: "setPlugin";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint8";
        readonly name: "newConfig";
        readonly type: "uint8";
    }];
    readonly name: "setPluginConfig";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "int24";
        readonly name: "newTickSpacing";
        readonly type: "int24";
    }];
    readonly name: "setTickSpacing";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly internalType: "bool";
        readonly name: "zeroToOne";
        readonly type: "bool";
    }, {
        readonly internalType: "int256";
        readonly name: "amountRequired";
        readonly type: "int256";
    }, {
        readonly internalType: "uint160";
        readonly name: "limitSqrtPrice";
        readonly type: "uint160";
    }, {
        readonly internalType: "bytes";
        readonly name: "data";
        readonly type: "bytes";
    }];
    readonly name: "swap";
    readonly outputs: readonly [{
        readonly internalType: "int256";
        readonly name: "amount0";
        readonly type: "int256";
    }, {
        readonly internalType: "int256";
        readonly name: "amount1";
        readonly type: "int256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "leftoversRecipient";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly internalType: "bool";
        readonly name: "zeroToOne";
        readonly type: "bool";
    }, {
        readonly internalType: "int256";
        readonly name: "amountToSell";
        readonly type: "int256";
    }, {
        readonly internalType: "uint160";
        readonly name: "limitSqrtPrice";
        readonly type: "uint160";
    }, {
        readonly internalType: "bytes";
        readonly name: "data";
        readonly type: "bytes";
    }];
    readonly name: "swapWithPaymentInAdvance";
    readonly outputs: readonly [{
        readonly internalType: "int256";
        readonly name: "amount0";
        readonly type: "int256";
    }, {
        readonly internalType: "int256";
        readonly name: "amount1";
        readonly type: "int256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "tickSpacing";
    readonly outputs: readonly [{
        readonly internalType: "int24";
        readonly name: "";
        readonly type: "int24";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "int16";
        readonly name: "";
        readonly type: "int16";
    }];
    readonly name: "tickTable";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "tickTreeRoot";
    readonly outputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "";
        readonly type: "uint32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "int16";
        readonly name: "";
        readonly type: "int16";
    }];
    readonly name: "tickTreeSecondLayer";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "int24";
        readonly name: "";
        readonly type: "int24";
    }];
    readonly name: "ticks";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "liquidityTotal";
        readonly type: "uint256";
    }, {
        readonly internalType: "int128";
        readonly name: "liquidityDelta";
        readonly type: "int128";
    }, {
        readonly internalType: "int24";
        readonly name: "prevTick";
        readonly type: "int24";
    }, {
        readonly internalType: "int24";
        readonly name: "nextTick";
        readonly type: "int24";
    }, {
        readonly internalType: "uint256";
        readonly name: "outerFeeGrowth0Token";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "outerFeeGrowth1Token";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "token0";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "token1";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "totalFeeGrowth0Token";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "totalFeeGrowth1Token";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}];

export { POOL_ABI };
