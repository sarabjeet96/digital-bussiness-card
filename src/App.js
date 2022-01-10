import React from 'react';
import Info from './components/Info';
import About from './components/About';
import Interest from './components/Interest';
import Footer from './components/Footer';
import './App.css';

function App(){
    return (
        <main>
            <Info />
            <About />
            <Interest />
            <Footer />
        </main>
    )
}

export default App;