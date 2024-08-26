import React, { useEffect } from 'react';

const tg = window.Telegram.WebApp;

const App = () => {

    useEffect(() => {
        tg.ready();
    }, [])

    const onClose = () => {
        tg.close();
    }

    return (
        <>
            work

            <button onClick={onClose}>Закрыть приложение</button>
        </>
    )
}

export default App;