import { PluginBase, Chain } from '@goat-sdk/core';
import { EVMWalletClient } from '@goat-sdk/wallet-evm';

declare class KimPlugin extends PluginBase<EVMWalletClient> {
    constructor();
    supportsChain: (chain: Chain) => boolean;
}
declare const kim: () => KimPlugin;

export { KimPlugin, kim };
