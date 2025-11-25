import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import api from '../api/api';

export default function PostView(){
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(()=>{
    const load = async ()=>{
      try{
        const res = await api.get(`/posts/${id}`);
        setPost(res.data.data);
      }catch(err){
        console.error(err);
      }finally{
        setLoading(false);
      }
    };
    load();
  }, [id]);

  const handleDelete = async ()=>{
    if (!confirm('Delete this post?')) return;
    try{
      await api.delete(`/posts/${id}`);
      navigate('/');
    }catch(err){ alert('Failed to delete'); }
  };

  if (loading) return <p>Loading...</p>;
  if (!post) return <p>Post not found</p>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p><em>Category: {post.category ? post.category.name : '—'}</em></p>
      <div style={{ marginTop:8 }}>
        <Link to={`/edit/${post._id}`}>Edit</Link> | <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}
