import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import {Navigate} from 'react-router-dom'
import 'react-quill/dist/quill.snow.css';
const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image'],
      ['clean'],
    ],
  };
const CreatePost = () => {
    const [title,setTitle] = useState('');
  const [summary,setSummary] = useState('');
  const [content,setContent] = useState('');
  const [files, setFiles] = useState('');
  const [redirect, setRedirect] = useState(false);
    async function createNewPost(ev){
    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    data.set('file', files[0]);
    ev.preventDefault();
    console.log(files)
    const response = await fetch('https://backkend-jyal.onrender.com/post', {
      method: 'POST',
      body: data,
      credentials:'include',
    });
    if (response.ok) {
        setRedirect(true);
      }
  }
  if (redirect) {
    return <Navigate to={'/'} />
  }
  return (
    <form onSubmit={createNewPost}>
      <input type="title" placeholder={'title'} value={title}
             onChange={ev => setTitle(ev.target.value)} />
      <input type="summary" placeholder={'summary'} value={summary}
             onChange={ev => setSummary(ev.target.value)} />
      <input type="file" onChange={ev=>setFiles(ev.target.files)}/>
      <ReactQuill value={content} 
             onChange={newValue => setContent(newValue)}  modules={modules}/>
      <button style={{marginTop:'5px'}}>Create post</button>
    </form>
  )
}

export default CreatePost
