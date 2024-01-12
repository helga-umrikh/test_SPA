import React, { useState, useEffect } from 'react'
import { postAPI } from '../services/PostService'
import PostItem from './PostItem'

const PostContainer = () => {
    const [currentPostStart, setCurrentPostStart] = useState(0)
    const [isMyFetching, setIsFetchingDown] = useState(false)
    const [isMyFetchingUp, setIsMyFetchingUp] = useState(false)
    const {
        data: posts,
        error,
        isLoading,
    } = postAPI.useFetchAllPostsQuery({
        limit: 10,
        start: currentPostStart
    })

    const scrollHandler = (e: any): void => {
        if (e.target.documentElement.scrollTop < 50) {
            setIsMyFetchingUp(true)
        }
        if (
            e.target.documentElement.scrollHeight -
                e.target.documentElement.scrollTop -
                window.innerHeight <
            50
        ) {
            setIsFetchingDown(true)
            window.scrollTo(
                0,
                e.target.documentElement.scrollHeight +
                    e.target.documentElement.scrollTop
            )
        }
    }

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return () => {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [])

    useEffect(() => {
        if (isMyFetching) {
            setCurrentPostStart((prev) => {
                return prev < 93 ? prev + 1 : prev
            })
            setIsFetchingDown(false)
        }
    }, [isMyFetching])

    useEffect(() => {
        if (isMyFetchingUp) {
            setCurrentPostStart((prev) => {
                return prev > 0 ? prev - 1 : prev
            })
            setIsMyFetchingUp(false)
        }
    }, [isMyFetchingUp])

    return (
        <div className="post__list">
            {isLoading && <h1 className="loading">Posts are loading...</h1>}
            {error && <h1 className="error">Error</h1>}
            {posts &&
                posts.map((post) => <PostItem key={post.id} post={post} />)}
        </div>
    )
}

export default PostContainer
export {}
