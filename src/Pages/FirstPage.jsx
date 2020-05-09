import React, { useState } from 'react'
import Input from "../components/Input";
import Info from "../components/Info";
import Register from "../components/Register";
import AccountPage from "./AccountPage";


function FirstPage(props) {
    const [temporaryuser, setTemporaryUser] = useState([]);

    const [users, setUsers] = useState([]);

    const [activePage,setActivePage] = useState("Login")

    const [temporaryLogin, setTemporaryLogin] = useState([]);

    const [loggedIn, setLoggedIn] = useState(false);

    const [loggedInUser, setLoggedInUser] = useState();
 
    const nameChanged = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setTemporaryUser({ ...temporaryuser, [name]: value});
        // console.log(temporaryuser);
        // console.log(name, value);
    }

    const handleChanged = (e) => {
        setActivePage(e.target.value)
        console.log(e.target.value);
    }

    const backtohome = (e) => {
        setActivePage("Login")
    }

    const onRegistration = (e) =>{
        setUsers([
           ...users, {name: temporaryuser.username, password: temporaryuser.password, initialamount: Number(temporaryuser.cname), id:create_id()}
        ])

        console.log(users);
    }

    const create_id = () => {
        let id;
        do {
          id = Math.floor(Math.random() * 10000);
        } while (users.find((user) => user.id === id));
        return id;
      };

      const loginInputHandler= (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setTemporaryLogin({ ...temporaryLogin, [name]: value});
        console.log(temporaryLogin);
        console.log(name, value);
    }

    const loginClicked =(e) => {
        console.log(temporaryLogin);
        const user = users.filter(a => 
            a.id === Number(temporaryLogin.username) && a.password === temporaryLogin.password)
            user.length === 1 ? setLoggedIn(true) : console.log("User not found");
    setLoggedInUser({id: user[0].id, 
        name:user[0].name, 
        password: user[0].password, 
        initialamount:user[0].initialamount})

            console.log(user[0].id, user);
            console.log(loggedInUser);
    }



    return (
        <div>
          {!loggedIn == true ?(
            <div className="flex-container">
                <div>
                    <Info info={activePage==="Login"? "Information about creating an account" :"Information about registration"}/>
                </div>
                <div>
                   { activePage==="Login" ?
                   <Input
                   title="Authentication"
                        name="username"
                        utype="text"
                        value={temporaryuser.value}
                        userplaceholder="Username"
                        onChange={loginInputHandler}
                        
                        pname="password"
                        pvalue={temporaryuser.pvalue}
                        ptype="password"
                        passplaceholder="Password"

                        
                        btype="submit"
                        rButtonname="registerbutton"
                        rvalue="register"
                        bluebclass="btn btn-info"
                        onRClick={handleChanged}

                        lButtonname="loginbutton"
                        lvalue="loginvalue"
                        greenbclass="btn btn-success"
                        onLClick={loginClicked}
                    /> :
                   
                   <Register
                   title="Register"
                        name="username"
                        value={temporaryuser.value}
                        utype="text"
                        onChange={nameChanged}
                        nameplaceholder="Full Name!" 
                        
                        pname="password"
                        pvalue={temporaryuser.pvalue}
                        ptype="password"
                        passplaceholder="Password"

                        cname="cname"
                        cvalue={temporaryuser.cvalue}
                        ctype="number"
                        depositplaceholder="Initial Cash deposit"
                        
                        btype="submit"
                        sbuttonname="save"
                        svalue="savevalue"
                        greenbclass="btn btn-success"
                        onSClick={onRegistration}

                        bButtonname="back"
                        bvalue="backvalue"
                        redbclass="btn btn-danger"
                        onBClick={backtohome}
                        />
                        }
                        
                </div>
            </div>
          ) : (
            <AccountPage 

                accountholderName={loggedInUser.name}
                saving={loggedInUser.initialamount}
        
            />
          )}
        </div>
    )
}
export default FirstPage;