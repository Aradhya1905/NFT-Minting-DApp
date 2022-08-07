import React,{useState} from 'react'
import './App.css'
import Main from './components/Main'
import Navbar from './components/Navbar'
import Mint from './components/Mint'


function App() {
	const [wallet, setWallet] = useState("");
    const [contract, setContract] = useState();
	
  return (
    <div className="App">
    <Navbar wallet={wallet} setWallet={setWallet} />
	<Main  wallet={wallet} contract={contract} setWallet={setWallet} setContract={setContract}/>				
    </div>
  )
}

export default App
