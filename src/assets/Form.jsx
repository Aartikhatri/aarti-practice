import { useState, useEffect } from 'react';

const Form = () => {
    const [name, setName] = useState("");
    const [pwd, setPWd] = useState("");
   const [posts, setPosts] = useState([]);

   useEffect(() => {
      fetch(`https://thingsally.com/api/usermanager/loginuser`, {
        method: "POST",
        body: JSON.stringify({
            name , pwd
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8 "
        }

      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            setPosts(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);

   return (
      <>
         <div className="add-post-container">

         <form onSubmit={(e) => handleSubmit(e)} >
        <input type="text" placeholder='name' onChange={(e) => setName(e.target.value)} /> <br />
        <input type="text" placeholder='password' onChange={(e) => setPWd(e.target.value)} /> <br />
        <button>submit</button>
      </form>

            {/* <form>
               <input type="text" className="form-control" />
               <textarea className="form-control" cols="10" rows="8"></textarea>
               <button type="submit">Add Post</button>
            </form> */}
         </div>
         {/* <div className="posts-container">
            {posts.map((post) => {
               return (
                  <div className="post-card" key={post.id}>
                     <h2 className="post-title">{post.title}</h2>
                     <p className="post-body">{post.body}</p>
                     <div className="button">
                        <div className="delete-btn">Delete</div>
                     </div>
                  </div>
               );
            })}
         </div> */}
      </>
   );
};

export default Form
