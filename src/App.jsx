import React, { useEffect } from 'react';

const tg = window.Telegram.WebApp;

const App = () => {

    useEffect(() => {
        tg.ready();
    }, [])

    return (
        <>
            <h1>AppleStoreTelegram</h1>
        </>
    )
}

export default App;