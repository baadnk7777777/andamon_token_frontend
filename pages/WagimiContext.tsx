import { WagmiConfig, createClient, configureChains, mainnet, goerli } from 'wagmi'

import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'

import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { Profile } from './profile'

import { infuraProvider } from 'wagmi/providers/infura'
import { FC } from 'react'

// Configure chains & providers with the Alchemy provider.
// Two popular providers are Alchemy (alchemy.com) and Infura (infura.io)
const { chains, provider, webSocketProvider } = configureChains(
 [goerli],
 [infuraProvider({ apiKey: '1ec2d600dc084fd1b0a3df8ef13e61f1' }), publicProvider()],
)

// Set up client
const client = createClient({
 autoConnect: true,
 connectors: [
 new MetaMaskConnector({ chains }),
 ],
 provider,
 webSocketProvider,
});

interface WagmiContextProps {
    children: React.ReactNode;
}

export const WagmiContext: FC<WagmiContextProps> = ({ children }) => {
    return (
        <WagmiConfig client={client}>
            {children}
        </WagmiConfig>
    )
};