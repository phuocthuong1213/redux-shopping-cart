import React, { Component } from 'react';
import Header from './components/Header';
import ProductContainer from './containers/ProductContainer';
import Footer from './components/Footer';
import CartContainer from './containers/CartContainer';
import MessageContainer from './containers/MessageContainer';

class App extends Component {

    render() {
        return (
            <div>
                {/* Header  */}
                <Header />
                <main id="mainContainer">
                    <div className="container">
                        {/* Products  */}
                        <ProductContainer />
                        {/* Message  */}
                        <MessageContainer />
                        {/* Cart  */}
                        <CartContainer />
                    </div>
                </main>
                {/* Footer */}
                <Footer />
            </div>
        )
    }
};


export default App;