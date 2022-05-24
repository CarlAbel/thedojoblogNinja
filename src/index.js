import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Create from './components/Home/Create';
import BlogDetails from './components/BlogDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route path="/home" element={<Home />} />
					<Route path="/create" element={<Create />} />
					<Route path="/blogs/:id" element={<BlogDetails />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
