import React, { FC } from 'react'
import { IPost } from '../models/IPost'
import './PostItem.scss'
import Button from './Button'

interface PostItemProps {
    post: IPost
}

const PostItem: FC<PostItemProps> = ({ post }) => {
    return (
        <div className="post">
            <div className="post__info">
                <div className="post__id">{post.id}</div>
                <h3 className="post__title">{post.title}</h3>
                <p className="post__body">
                    {post.body.length > 20
                        ? post.body.substring(0, 50) + '...'
                        : post.body}
                </p>
            </div>
            <Button id={post.id} />
        </div>
    )
}

export default PostItem
