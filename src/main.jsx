import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from '../routes/Layout.jsx';
import DetailView from '../routes/DetailView.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index={true} path="/" element={<App />} />
          {/**??? */}
          <Route index={false} path="/exhibitionDetails/:id" element={<DetailView />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
