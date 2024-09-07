import React, { useEffect } from 'react';

//Icons
import { FaApple } from "react-icons/fa";

const tg = window.Telegram.WebApp;

const App = () => {

    useEffect(() => {
        tg.ready();
    }, [])

    return (
        <div className="App">
            <section className='shop'>
                <div className="shop__title">
                    <FaApple size={40}/>
                    Apple Store
                </div>
            </section>
        </div>
    )
}

export default App;