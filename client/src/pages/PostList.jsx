import React, { useEffect, useState } from 'react';
import api from '../api/api';
import { Link } from 'react-router-dom';

export default function PostList(){
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPosts = async ()=>{
    try{
      const res = await api.get('/posts');
      setPosts(res.data.data || []);
    }catch(err){
      setError(err.message || 'Error');
    }finally{
      setLoading(false);
    }
  };

  useEffect(()=>{ fetchPosts(); }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h3>Posts</h3>
      {posts.length===0 && <p>No posts yet.</p>}
      <ul>
        {posts.map(p=> (
          <li key={p._id} style={{ marginBottom:12 }}>
            <Link to={`/posts/${p._id}`}><strong>{p.title}</strong></Link>
            <div style={{ fontSize:12 }}>{p.excerpt || (p.content && p.content.substring(0,120))}</div>
            <div style={{ marginTop:6 }}>
              <Link to={`/edit/${p._id}`}>Edit</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
