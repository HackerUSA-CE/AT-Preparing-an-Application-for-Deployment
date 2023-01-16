import { useState, useEffect, useContext } from 'react'
import { useHistory } from "react-router";
import { CurrentUser } from './contexts/CurrentUser';

function Navigation() {

    const history = useHistory()

    const { currentUser } = useContext(CurrentUser)

    let loginActions = (
        <>
            <li style={{ float: 'right' }}>
                <a href="#" onClick={() => history.push("/sign-up")}>
                    Sign Up
                </a>
            </li>
            <li style={{ float: 'right' }}>
                <a href="#" onClick={() => history.push("/login")}>
                    Login
                </a>
            </li>
        </>
    )

    async function handleLogout(e) {
        e.preventDefault()
        localStorage.removeItem('token')
        history.push('/places')
        window.location.reload()
    }

    if (currentUser) {
        loginActions = (
            <>
                <li style={{ float: 'right' }}>
                    <a href="#" onClick={handleLogout}>
                        log-out
                    </a>
                </li>
                <li style={{ float: 'right' }}>
                    Logged in as {currentUser.firstName} {currentUser.lastName}
                </li>
            </>
        )
    }


    return (
        <nav>
            <ul>
                <li>
                    <a href="#" onClick={() => history.push("/")}>
                        Home
                    </a>
                </li>
                <li>
                    <a href="#" onClick={() => history.push("/places")}>
                        Places
                    </a>
                </li>
                <li>
                    <a href="#" onClick={() => history.push("/places/new")}>
                        Add Place
                    </a>
                </li>
                {loginActions}
                {/* <li>
                    <a href="#" onClick={handleLogout}>
                        Log-out
                    </a>
                </li> */}
            </ul>
        </nav>
    )
}

export default Navigation;