import React, { useState } from 'react'
import FirstPage from "./FirstPage";

function AccountPage(props) {

    const [temporarybalance, setTemporarybalance] = useState([]);
    const [balance, setBalance] = useState([]);
    const [depositClick, setDepositClick] = useState("deposit");

    const depositClicked = () => {
        setDepositClick("deposit");
    }

    const withdrawClicked = () => {
        setDepositClick("withdraw");
    }


    const handleChanged = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);
        setTemporarybalance([{...temporarybalance, name: name, balance: Number(value) }]);

        console.log(temporarybalance);
    }

    const submitClicked = () => {

        console.log(props.users);

        let currentUser = props.loggedInUser;
        console.log(currentUser, currentUser.initialamount);
        let newBalance;

        console.log(temporarybalance[0].balance + currentUser.initialamount);

        depositClick === "deposit" 
        ? newBalance = currentUser.initialamount + temporarybalance[0].balance
        : newBalance = currentUser.initialamount - temporarybalance[0].balance;

        props.setLoggedInUser ({
            id: props.loggedInUser.id,
            initialamount: newBalance,
            name: props.loggedInUser.name,
            password:props.loggedInUser.password
        })

        let index = props.users.findIndex( item => item.id === props.loggedInUser.id)

        console.log(index);
        console.log(props.users);

        let userCopy = [...props.users];

        userCopy[index].initialamount = newBalance;
        
        props.setUsers(userCopy);
        console.log(props.users);
    }

    return (
        <div class="depositContainer">
            <div class="depositWithdraw">
                <button name="dbutton" value="dbuttonvalue" onClick={depositClicked} className="btn btn-success">Deposit</button>
                <button name="wbutton" value="wbuttonvalue" onClick={withdrawClicked} className="btn btn-info">Withdraw</button>

                <span
                    className="label other"
                    type="number"
                    name="balance"
                    value="balancevalue"
                >
                    Funds:{props.saving}
                </span>

            </div>

            <h2 className="greeting">Hello {props.accountholderName}! {depositClick === "deposit" ? "How much would you like to DEPOSIT into your account?" :
            "How much would you like to WITHDRAW from your account?"}</h2>

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