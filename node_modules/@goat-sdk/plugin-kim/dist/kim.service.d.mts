import { EVMWalletClient } from '@goat-sdk/wallet-evm';
import { GetSwapRouterAddressParams, ExactInputSingleParams, ExactOutputSingleParams, ExactInputParams, ExactOutputParams, MintParams, IncreaseLiquidityParams, DecreaseLiquidityParams, CollectParams, BurnParams } from './parameters.mjs';
import '@goat-sdk/core';
import 'zod';

declare class KimService {
    getSwapRouterAddress(parameters: GetSwapRouterAddressParams): Promise<string>;
    swapExactInputSingleHop(walletClient: EVMWalletClient, parameters: ExactInputSingleParams): Promise<string>;
    swapExactOutputSingleHop(walletClient: EVMWalletClient, parameters: ExactOutputSingleParams): Promise<string>;
    swapExactInputMultiHop(walletClient: EVMWalletClient, parameters: ExactInputParams): Promise<string>;
    swapExactOutputMultiHop(walletClient: EVMWalletClient, parameters: ExactOutputParams): Promise<string>;
    mintPosition(walletClient: EVMWalletClient, parameters: MintParams): Promise<string>;
    increaseLiquidity(walletClient: EVMWalletClient, parameters: IncreaseLiquidityParams): Promise<string>;
    decreaseLiquidity(walletClient: EVMWalletClient, parameters: DecreaseLiquidityParams): Promise<string>;
    collect(walletClient: EVMWalletClient, parameters: CollectParams): Promise<string>;
    burn(walletClient: EVMWalletClient, parameters: BurnParams): Promise<string>;
}

export { KimService };
