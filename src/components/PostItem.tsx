import React, { FC } from 'react'
import { IPost } from '../models/IPost'
import './PostItem.scss'

interface PostItemProps {
    post: IPost
}

const PostItem: FC<PostItemProps> = ({ post }) => {
    return (
        <div className="post">
            <div className='post__info'>
                <div className="post__id">{post.id}</div>
                <h3 className="post__title">{post.title}</h3>
            </div>
            <button className="button">Подробнее</button>
        </div>
    )
}

export default PostItem
