import React from 'react';


function Header() {
    return (
        <header className="header">
            <form>
                <input type="text" className="input" placeholder="Enter your login"/>
                <input type="pasword" className="input" placeholder="Enter your password"/>
                <button>Submit</button>
            </form>
        </header>
    )
}

export default Header