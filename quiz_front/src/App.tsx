import React from 'react';
import {PageHeader} from "antd";
import {Main} from "./components/Main/Main";

import './App.css'

function App() {
    return (
        <div>
            <PageHeader
                className="App-Header"
                title="Quiz TeamTim"
                subTitle="Here you can find questions for the quiz"
                onBack={() => document.location.href = '/'}
            />
            <div className="Page-Content">
                <Main/>
            </div>
        </div>
    );
}

export default App;
