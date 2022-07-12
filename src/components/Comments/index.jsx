import React, { useEffect, useState } from 'react'
import sessionService from '../../services/session.service'
import dudaServices from '../../services/dudas.service'
import { CommentSection } from './../../dependencies/React-comments'
import './../../dependencies/React-comments/index.css'
import "./Comments.css"


const Comments = ({data, idcomentario}) => {
  
  const [comment, setComment] = useState(data)
  const [user, setUser] = useState(null)
  

  useEffect(() => {
    sessionService.getUserData().then(
      response => {
        setUser(response.user)
      }
    )
  }, [])

  const setearComentarios = (comments) => {
    setComment(comments)
    dudaServices.putDudaComment(idcomentario, comments)
    .then(
      response => {
        debugger
      }
    )
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