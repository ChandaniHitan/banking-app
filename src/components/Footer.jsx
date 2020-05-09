import React from 'react'

 function Footer() {

    var today = new Date();
    var date = today.getUTCFullYear() + '-' + (today.getMonth()+1) + "-" + today.getDate();
    return (
        <footer>
            <p> {date} © State bank</p>
        </footer>
    );
}

export default Footer;