import { Routes, Route } from 'react-router-dom';

import MainLayout from './layouts/Main';

import HomePage from './pages/Home';

function AppRouter() {
    return (
        <Routes>
            <Route element={ <MainLayout /> }>
                <Route path="/" element={
                    <HomePage page="all" />
                } />
                <Route path="/completed" element={
                    <HomePage page="completed" />
                } />
                <Route path="/incompleted" element={
                    <HomePage page="incompleted" />
                } />
                <Route path="/important" element={
                    <HomePage page="important" />
                } />
            </Route>
        </Routes>
    );
}

export default AppRouter;