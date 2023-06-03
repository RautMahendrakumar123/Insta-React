import React from 'react'
import { useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './form.css';

export default function Form() {
    const[file,setFile]=useState('')
    const[author,setAuthor]=useState('')
    const[location,setLocation]=useState('')
    const[description,setDescription]=useState('')

    const navigate = useNavigate()

    const imageupload = e =>{
        setFile(e.target.files[0])
    }

    

    async function whensubmitted(e){
        e.preventDefault()
        
        const formData=new FormData();
        formData.append("location", location);
        formData.append("name", author);
        formData.append("description", description);
        formData.append("PostImage", file);
       
      
         fetch(`${process.env.REACT_APP_BASE_URL}/upload`,{
          method:'POST',
          headers:{ },
          body: formData,
        }) 

        .then((response) => response.json())
        .then((data) => console.log(data))
        .then(alert("Post created successfully"))
        setAuthor('');
        setDescription('');
        setFile('');
        setLocation('');
        navigate("/post")

    }
  return (
    <div className='formtag'>
        <form onSubmit={whensubmitted} encType='multipart/form-data'>

            <input id='fileupload' type="file" placeholder="No file Chosen" name="PostImage" required onChange={imageupload}/>

            <div className='div'>
            <input className='author' type="text" placeholder="Author" required value={author} onChange={(e) => setAuthor(e.target.value)}/>
        
            <input className='location' type="text" placeholder="Location" required value={location} onChange={(e) => setLocation(e.target.value)}/>
            </div>

            <input className='description' type="text" placeholder="Description" required value={description} onChange={(e) => setDescription(e.target.value)}/>
        
            <button id="bttn" type="submit">Post</button>
        </form>
    </div>
  )
}



////////////////////////////


// import React from 'react'
// import { useState } from 'react'
// // import Header from './Header'
// import { useNavigate } from 'react-router-dom'

// export default function Post() {

//     const navigate = useNavigate()

//     const [formData, setFormData] = useState({
//         PostImage: "",
//         author: "",
//         location: "",
//         description: ""
//     })

   
//     async function handleSubmit(e) {
//         e.preventDefault()
 
//         fetch('http://localhost:8080/upload',{
//             method:'POST',
//             headers:{ },
//             body: formData,
//           }) 
//           .then((response) => response.json())
//           .then((data) => console.log(data))
//           .then(navigate('/post'))
//     }

//     return <div>
//         <section>
//             {/* <Header/> */}
//         </section>
//         <section className='form-section'>
//             <form onSubmit={handleSubmit}>
//                 <input 
//                 className='input-block'
//                 type={'file'} 
//                 name='PostImage'
               
//                 onChange={e => setFormData(data => ({ ...formData, postImage : e.target.files[0] }))} 
//                 value={formData.PostImage}
//             />
//                 <input
//                     className='input-inline'
//                     type='text'
//                     placeholder='author'
//                     onChange={e => setFormData(data => ({ ...formData, author: e.target.value }))} 
//                     value={formData.author}
//                 />
//                 <input
//                     className='input-inline'
//                     type='text'
//                     placeholder='location'
//                     onChange={e => setFormData(data => ({ ...formData, location: e.target.value }))}  
//                     value={formData.location}
//                 />
//                 <input
//                     className='input-block'
//                     type='text'
//                     placeholder='description' 
//                     onChange={e => setFormData(data => ({ ...formData, description: e.target.value }))} 
//                     value={formData.description}
//                 />
//                 <button className='btn' type='submit'>Post</button>
//             </form>
//         </section>
//     </div>
// }