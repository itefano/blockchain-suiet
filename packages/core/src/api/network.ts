export type Network = {
  id: string;
  name: string;
  queryRpcUrl: string;
  txRpcUrl: string;
  versionCacheTimoutInSeconds: number;
  moveCallGasBudget?: number;
  stakeGasBudget?: number;
  enableMintExampleNFT?: boolean;
  enableStaking?: boolean;
  enableBuyCrypto?: boolean;
};

export interface INetworkApi {
  getNetworks: (enabledOnly: boolean) => Promise<Network[]>;
  getNetwork: (networkId: string) => Promise<Network | undefined>;
  // addCustomNetwork: (network: Network) => Promise<void>;
}

const DEFAULT_NETWORKS = new Map([
  [
    'devnet',
    {
      id: 'devnet',
      name: 'devnet',
      queryRpcUrl: 'https://fullnode.devnet.sui.io',
      txRpcUrl: 'https://fullnode.devnet.sui.io',
      versionCacheTimoutInSeconds: 0,
    },
  ],
  [
    'testnet',
    {
      id: 'testnet',
      name: 'testnet',
      queryRpcUrl: 'https://fullnode.testnet.sui.io',
      txRpcUrl: 'https://fullnode.testnet.sui.io',
      versionCacheTimoutInSeconds: 0,
    },
  ],
  [
    'mainnet',
    {
      id: 'mainnet',
      name: 'mainnet',
      queryRpcUrl: 'https://rpc.mainnet.sui.io',
      txRpcUrl: 'https://rpc.mainnet.sui.io',
      versionCacheTimoutInSeconds: 0,
    },
  ],
  [
    'local',
    {
      id: 'local',
      name: 'local',
      queryRpcUrl: 'http://localhost:5001',
      txRpcUrl: 'http://localhost:5001',
      versionCacheTimoutInSeconds: 0,
    },
  ],
]);

export class NetworkApi implements INetworkApi {
  async getNetworks(enabledOnly: boolean): Promise<Network[]> {
    return Array.from(DEFAULT_NETWORKS.values());
  }

  async getNetwork(networkId: string): Promise<Network | undefined> {
    return DEFAULT_NETWORKS.get(networkId);
  }
}
