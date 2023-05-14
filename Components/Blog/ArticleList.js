import React from 'react'
import BlogCard from './BlogCard';

const ArticleList = ({articles}) => {
  return (
    <div className='grid w-11/12 m-auto lg:grid-cols-2 grid-gap gap-16 mt-16'>
        {articles.map((article, idx) => {
                return (
                    <div key={article.id} className='border rounded p-4'>
                            <BlogCard article={article} />
                    </div>
                );
            })}
    </div>
  )
}

export default ArticleList