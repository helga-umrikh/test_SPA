import React from 'react'
import './App.scss'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import PostPage from './pages/PostPage/PostPage'

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/post/:id' element={<PostPage />} />
            </Routes>
        </div>
    )
}

export default App
