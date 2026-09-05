import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Protected from './components/authLayout.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import AllPosts from './pages/AllPosts.jsx'
import AddPost from './pages/AddPost.jsx'
import EditPost from './pages/EditPost.jsx'
import Post from './pages/Post.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Protected authentication={false}><Login /></Protected>} />
            <Route path="signup" element={<Protected authentication={false}><Signup /></Protected>} />
            <Route path="all-posts" element={<Protected><AllPosts /></Protected>} />
            <Route path="add-post" element={<Protected><AddPost /></Protected>} />
            <Route path="edit-post/:slug" element={<Protected><EditPost /></Protected>} />
            <Route path="post/:slug" element={<Post />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
