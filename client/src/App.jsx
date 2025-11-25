import React, { Suspense, lazy } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

// Lazy load components for code splitting
const PostList = lazy(() => import('./pages/PostList'));
const PostView = lazy(() => import('./pages/PostView'));
const PostForm = lazy(() => import('./pages/PostForm'));

// Loading component
const LoadingSpinner = () => <div>Loading...</div>;

export default function App(){
  return (
    <div style={{ maxWidth:900, margin:'0 auto', padding:20 }}>
      <header style={{ display:'flex', gap:10, marginBottom:20 }}>
        <h2><Link to="/">MERN Blog</Link></h2>
        <nav style={{ marginLeft:'auto' }}>
          <Link to="/">Posts</Link> {' | '}
          <Link to="/create">Create</Link>
        </nav>
      </header>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path='/' element={<PostList />} />
          <Route path='/posts/:id' element={<PostView />} />
          <Route path='/create' element={<PostForm />} />
          <Route path='/edit/:id' element={<PostForm />} />
        </Routes>
      </Suspense>
    </div>
  );
}
