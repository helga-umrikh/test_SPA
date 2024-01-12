import React from 'react'
import { useParams } from 'react-router-dom'
import PostDetails from '../../components/PostDetails'

const PostPage = () => {
    const { id } = useParams<{ id?: string }>()

    return (
        <div className="container">
            {id && <PostDetails postId={parseInt(id)} />}
        </div>
    )
}

export default PostPage
