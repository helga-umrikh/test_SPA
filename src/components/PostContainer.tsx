import React from 'react';
import { postAPI } from '../services/PostService';
import PostItem from './PostItem';

const PostContainer = () => {
  const {data: posts} = postAPI.useFetchAllPostsQuery(5)
  return (
      <div className='post__list'>
        {posts && posts.map(post => 
            <PostItem post={post}/>
          )}
      </div>
  )
}

export default PostContainer;
export {}