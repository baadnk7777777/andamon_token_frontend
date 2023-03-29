import React from 'react'
import Image from 'next/image'
import andamon_logo from '../public/andamonToken-Logo.png'
import meta_mask_logo from '../public/MetaMask.png'
import Link from 'next/link'
import { Connector, useAccount, useBalance, useConnect, useDisconnect } from 'wagmi'
import { useRouter } from 'next/router'


const LoginScreen: React.FC = () => {
  const router = useRouter();
  

  const { connectAsync, connectors } = useConnect();

  const {disconnect} = useDisconnect();

  const {address, isConnected} = useAccount();

  const handleDisconnect = () => {
     disconnect();
  }

  console.log(connectors);

  const handleWalletConnect = async (connector: Connector) =>{
    const {account, chain} = await connectAsync({connector});
    console.log(chain);
  }

  const {data, isError, isLoading} = useBalance();

  // if(address) {
  //   router.push('/');
  // }else {
  //   router.push('/customer_page/Search_page');
  // }

  return (
    <div className=" font-work_sans container px-4 mx-auto h-1/2">
      <div className=" mt-20 py-2 px-4 pb-20 h-full">
        <div className="grid grid-cols-2">
          <div className="mt-auto bg-[#f1e0cd] rounded-full w-fit">
            <Image src={meta_mask_logo} alt='/' className='w-96' />
          </div>
          <div className=" h-full font-bold mt-auto grid content-center">
            <div className="text-center">
              <p className='text-3xl'>WELCOME TO</p>
              <p className='text-5xl mt-2 mb-4'>ANDAMAN TOKEN</p>
              {!isConnected && connectors.map((connector) => {
                const { id, name } = connector;
                return (<button onClick={()=> handleWalletConnect(connector)} className='text-3xl bg-[#FF8000]  px-14 py-2 rounded-2xl text-white hover:bg-[#f8a24b]'>Login with Metamask</button>)
            })}
              
              {isConnected && (
                <div className="">
                  <h3>Wallet Address: {address} </h3>
                  <h5>Your account balance is {data?.formatted} ETH</h5>
                </div>
              )}

              {isConnected && <div className="" onClick={()=> handleDisconnect()}>Disconnect</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginScreen


