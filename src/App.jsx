import React, { useEffect } from 'react';

//Icons
import { FaApple } from "react-icons/fa";

//Components

import AllProducts from './components/AllProducts';


const tg = window.Telegram.WebApp;

const App = () => {

    useEffect(() => {
        tg.ready();
    }, [])

    return (
        <div className="App">
            <section className='welcome'>
                <div className="welcome__title">
                    <FaApple size={40}/>
                    Apple Store
                </div>
                <div className="welcome__description">
                    Добро пожаловать в наш магазин техники Apple Store, мы переехали в Telegram Mini Apps, теперь вы можете заказывать вашу любимую продукцию прямо из Telegram.
                </div>
            </section>
            <section className="shop">
                <div className="shop__title">
                    Наши товары:
                </div>
                <div className="shop__description">
                    У нас большое разнообразие товаров, начиная от Airpods и iPhone, заканчивая Macbook.
                </div>
                <div className="shop__products">
                    <AllProducts/>
                </div>
            </section>
        </div>
    )
}

export default App;