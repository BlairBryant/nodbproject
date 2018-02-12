




import React from 'react'

export default function Post(props) {
    return(
        <div className='post'>
            
            <h2>{props.objectOfPost.post}</h2>

            <input />

            <div>
            <button onClick={() => props.updatePost(props.objectOfPost.id, "placeholder")}>Edit</button>
            <button onClick={() => props.deletePost(props.objectOfPost.id)}>Delete</button>
            </div>
            
        </div>
    )
}