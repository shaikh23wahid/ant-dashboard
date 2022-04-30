import { Layout } from "antd";
import "antd/dist/antd.css";
import React, { Suspense, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles.css';
const Dashboard = React.lazy(() => import('./components/Dashboard/Dashboard'));
const Login = React.lazy(() => import('./components/Login/Login'));
const PageTopHeader = React.lazy(() => import('./components/PageTopHeader/PageTopHeader'));
const Report = React.lazy(() => import('./components/Report/Report'));
const SiderComponent = React.lazy(() => import('./components/SiderComponent/SiderComponent'));
const NotFound = React.lazy(() => import('./components/NotFound/NotFound'));

export default function App() {
    const [token, setToken] = useState();

    if (!token) {
        return <Login setToken={setToken} />
    }

    return (
        <div className="App">
            <Layout style={{
                minHeight: '100vh',
            }}>
                <Router>
                    <Suspense fallback={<span>Loading...</span>}>
                        <SiderComponent />
                        <Layout style={{ backgroundColor: "lightblue" }}>
                            <PageTopHeader />
                            <Routes>
                                <Route exact path='/' element={<Dashboard />} />
                                <Route path='/dashboard' element={<Dashboard />} />
                                <Route path='/report' element={<Report />} />
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                        </Layout>
                    </Suspense>
                </Router>
            </Layout>
        </div>
    );
}
