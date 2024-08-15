import { useState } from 'react'
import './App.css'
import {Routes, Route} from "react-router-dom";
import Navigation from './layout/Navigation';
import { HomePage, SearchPage, DogsPage, AddDog, UpdateDog, DeleteDog } from './pages';
import { DogProvider } from './contexts';

function App() {


  return (
    <>
      <DogProvider>
          <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<HomePage />} /> 
                <Route path="/search" element={<SearchPage />} />
                <Route path="/dogs">
                    <Route index element={<DogsPage />} />
                    <Route path=":id" element={<h1>Dog Individual Page</h1>} />
                </Route>
                <Route path="newdog" element={<AddDog />} />
                <Route path="updatedog" element={<UpdateDog />} />
                <Route path="deletedog" element={<DeleteDog />} />
                <Route path="*" element={<h1> Page Not Found </h1>} />
            </Route>
          </Routes>
      </DogProvider>
    </>
  )
}

export default App
