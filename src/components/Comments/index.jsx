import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import sessionService from '../../services/session.service'
import { CommentSection } from './../../dependencies/React-comments'
import './../../dependencies/React-comments/index.css'
import "./Comments.css"


const Comments = ({data}) => {
  
  const [comment, setComment] = useState(data)
  const [user, setUser] = useState(null)
  
  let navigate = useNavigate();

  useEffect(() => {
    var userId = localStorage.getItem("_id")

    if (!userId){
      navigate("/login");
    }
    
    debugger
    sessionService.getUserData(userId).then(
      response => {
        setUser(response)
      }
    )
  }, [])

  const setearComentarios = (comments) => {
    setComment(comments)
  }

  const signinUrl = "/login"
  const signupUrl = "/registrarse"
   
   let count = 0
   comment.map(i => {count+=1; i.replies && i.replies.map(i=> count+=1)} )

   return <div className="commentSection">
            <div className="header">{count} Comentarios</div>

            <CommentSection currentUser={user && { userId: user.id, avatarUrl: user.avatarUrl, name: user.nombre + " " + user.apellido }} 
                commentsArray={comment} 
                setComment={setearComentarios} 
                signinUrl={signinUrl} 
                signupUrl={signupUrl}
              />
          </div>
 }
 
 export default Comments