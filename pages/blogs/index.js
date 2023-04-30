import Blog from '@/Components/Blog/Blog'
import Navbar from '@/Components/Navbar/Navbar'
import { fetchArticles, fetchCategories } from '@/api'
import React from 'react'
import Tabs from '@/Components/Blog/tabs'
import ArticleList from '@/Components/Blog/ArticleList'
import * as qs from 'qs'

const Blogs = ({categories, articles}) => {

  return (
    <div>
      <Navbar/>
      <Tabs key={categories.id} categories={categories} />
      <ArticleList articles={articles.data} />
      {/* <Blog /> */}
    </div>
  )
}

export default Blogs

export const getServerSideProps = async() => {
  const options = {
    populate: ['author.avatar'],
    sort: ['id:asc'],

  }

  const queryString = qs.stringify(options);

  const categories = await fetchCategories();
  const articles = await fetchArticles(queryString);

  return {
    props: {
      categories,
      articles
    }
  }
}