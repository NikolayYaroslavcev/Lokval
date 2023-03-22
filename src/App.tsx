import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import {Layout} from './components/layout/Home';
import {Home} from './components/pages/home/Home';
import {About} from './components/pages/about/About';
import {Catalog} from './components/pages/catalog/Catalog';
import {Type} from './components/pages/types/Type';
import {StoneProduct} from './components/pages/stone/StoneProduct';
import {Fireplace} from './components/pages/fireplace/Fireplace';


function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="catalog" element={<Catalog/>}/>
                <Route path="type" element={<Type/>}/>
                <Route path="stone" element={<StoneProduct/>}/>
                <Route path="fireplace" element={<Fireplace/>}/>
            </Route>
        </Routes>
)
    ;
}

export default App;
