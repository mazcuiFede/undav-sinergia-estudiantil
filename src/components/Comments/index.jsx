import React, { PureComponent, useState } from 'react'
import data from "./data.json"
import { CommentSection } from './../../dependencies/React-comments'
import './../../dependencies/React-comments/index.css'
import "./Comments.css"


 const Comments = () => {
   const [comment, setComment] = useState(data)
   const userId = "01a"
   const avatarUrl = "https://ui-avatars.com/api/name=Riya&background=random"
   const name = "xyz"
   const signinUrl = "/login"
   const signupUrl = "/registrarse"
   let count = 0
debugger
   comment.map(i => {count+=1; i.replies && i.replies.map(i=> count+=1)} )

   return <div className="commentSection">
            <div className="header">{count} Comments</div>

            <CommentSection currentUser={userId && { userId: userId, avatarUrl: avatarUrl, name: name }} commentsArray={comment}
            setComment={setComment} signinUrl={signinUrl} signupUrl={signupUrl}/>
          </div>
 }
 
 export default Comments