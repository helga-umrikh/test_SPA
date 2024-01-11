import React, { useState } from 'react'
import { postAPI } from '../services/PostService'
import PostItem from './PostItem'

const PostContainer = () => {
    const [limit, setLimit] = useState(10)
    const {
        data: posts,
        error,
        isLoading,
    } = postAPI.useFetchAllPostsQuery(limit)

    return (
        <div className="post__list">
            {isLoading && <h1>Posts are loading...</h1>}
            {error && <h1>Error</h1>}
            {posts &&
                posts.map((post) => <PostItem key={post.id} post={post} />)}
        </div>
    )
}

export default PostContainer
export {}
