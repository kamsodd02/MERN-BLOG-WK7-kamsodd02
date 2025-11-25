import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../api/api';

export default function PostForm(){
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    const loadCats = async ()=>{
      try{ const res = await api.get('/categories'); setCategories(res.data.data || []); }catch(e){}
    };
    loadCats();
    if (id){
      api.get(`/posts/${id}`).then(r=>{
        const p = r.data.data;
        setTitle(p.title); setContent(p.content); setCategory(p.category?._id || '');
      }).catch(()=>{});
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const payload = { title, content, category };
      if (id) {
        await api.put(`/posts/${id}`, payload);
      } else {
        await api.post('/posts', payload);
      }
      navigate('/');
    }catch(err){
      alert('Failed: ' + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div>
      <h3>{id ? 'Edit' : 'Create'} Post</h3>
      <form onSubmit={handleSubmit}>
        <div><label>Title</label><br/>
          <input value={title} onChange={e=>setTitle(e.target.value)} required style={{width:'100%'}} />
        </div>
        <div><label>Content</label><br/>
          <textarea value={content} onChange={e=>setContent(e.target.value)} required rows={8} style={{width:'100%'}} />
        </div>
        <div>
          <label>Category</label><br/>
          <select value={category} onChange={e=>setCategory(e.target.value)}>
            <option value=''>— None —</option>
            {categories.map(c=> <option key={c._id} value={c._id}>{c.name}</option>)}
          </select>
        </div>
        <div style={{ marginTop:10 }}>
          <button type='submit'>{id ? 'Update' : 'Create'}</button>
        </div>
      </form>
    </div>
  );
}
