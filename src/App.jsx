import React, { useEffect } from 'react';

//Icons
import { FaApple } from "react-icons/fa";

const tg = window.Telegram.WebApp;

const App = () => {

    useEffect(() => {
        tg.ready();
    }, [])

    return (
        <>
            <FaApple /><h1>AppleStoreTelegram</h1>
        </>
    )
}

export default App;