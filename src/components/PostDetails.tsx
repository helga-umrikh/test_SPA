import React from 'react'
import { postAPI } from '../services/PostService'
import './PostDetails.scss'
import postIcon from '../assets/nfc_9795587.svg'
import ToHomeButton from './ToHomeButton'

interface PostDetailsProps {
    postId: number
}

const PostDetails = ({ postId }: PostDetailsProps) => {
    const { data, isLoading, error } = postAPI.useFetchPostByIdQuery(postId)

    return (
        <div>
            {isLoading && <h1 className='loading'>Loading...</h1>}
            {error && <h1 className='error'>Error</h1>}
            <div className="post__details">
                <div className="post__photo">
                    <img
                        src={postIcon}
                        className="post__icon"
                        alt="post default icon"
                    />
                </div>

                <div className="post__description">
                    <p>{data && data.title}</p>
                    <p>{data && data.body}</p>
                </div>
            </div>
            <div className="post__back-button">
                <ToHomeButton />
            </div>
        </div>
    )
}

export default PostDetails
