type Token = {
    decimals: number;
    symbol: string;
    name: string;
    chains: Record<number, {
        contractAddress: `0x${string}`;
    }>;
};
type ChainSpecificToken = {
    chainId: number;
    decimals: number;
    symbol: string;
    name: string;
    contractAddress: `0x${string}`;
};
declare const PEPE: Token;
declare const USDC: Token;
declare const MODE: Token;
declare const WETH: Token;
declare function getTokensForNetwork(chainId: number, tokens: Token[]): ChainSpecificToken[];

export { type ChainSpecificToken, MODE, PEPE, type Token, USDC, WETH, getTokensForNetwork };
