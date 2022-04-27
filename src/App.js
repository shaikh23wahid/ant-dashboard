import 'ant-design-pro/dist/ant-design-pro.css';
import { Layout } from "antd";
import "antd/dist/antd.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import PageTopHeader from './components/PageTopHeader/PageTopHeader';
import Report from './components/Report/Report';
import SiderComponent from './components/SiderComponent/SiderComponent';
import './styles.css';
const { Header } = Layout;

export default function App() {
    return (
        <div className="App">
            <Layout style={{
                minHeight: '100vh',
            }}>
                <Router>
                    <SiderComponent />
                    <Layout style={{ backgroundColor: "lightblue" }}>
                        <Header style={{ backgroundColor: "whie", maxHeight: '40px' }}>
                            <PageTopHeader />
                        </Header>
                        <Routes>
                            <Route exact path='/' element={<Report />} />
                            <Route exact path='/login' element={<Login />} />
                            <Route path='/dashboard' element={<Dashboard />} />
                        </Routes>
                    </Layout>
                </Router>
            </Layout>
        </div>
    );
}
