import React, {useState} from 'react'
import FirstPage from "./FirstPage";

function AccountPage(props) {

    const [temporarybalance, setTemporarybalance] = useState([]);
    const [balance, setBalance] = useState([]);
    const [depositClick, setDepositClick] = useState(true);

    const depositClicked = () => {
        setDepositClick(true);
    }

    const withdrawClicked = () => {
        //setDepositClick(false);
        console.log("Withdraw was clicked")
    }
    

    const handleChanged=(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);
        setTemporarybalance ({[name]:value});
        
        console.log(temporarybalance);
    }

    const submitClicked=(e)=>{
        setBalance([
            ...balance, {amount: Number(temporarybalance.depositamount)}
        ])
        console.log(balance);
    }

    return (
        <div class="depositContainer">
         <div class= "depositWithdraw">
            <button name= "dbutton" value="dbuttonvalue" onClick={depositClicked} className="btn btn-success">Deposit</button>
            <button name= "wbutton" value= "wbuttonvalue" onClick={withdrawClicked} className="btn btn-info">Withdraw</button>
            
            <span 
            className="label other"
             type="number" 
             name="balance"
             value="balancevalue"
             >
             Funds:{props.saving}
             </span>
             
          </div>   

            <h2 className="greeting">Hello {props.accountholderName}! How much would you like to deposit into your account?</h2>

           <div className="depositField"> 
            <input
            className="amount"
            name="depositamount"
            value={temporarybalance.value}
            type="number" 
            Placeholder="Amount"
            onChange={handleChanged}>
             </input>
            
            <button 
            className="btn btn-success"
            name="submitbutton"
            value="submitvalue"
            type="submit"
            onClick={submitClicked}>submit</button>
            </div>
        </div>
    )
}

export default AccountPage;