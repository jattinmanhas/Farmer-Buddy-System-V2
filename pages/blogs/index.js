import Blog from '@/Components/Blog/Blog'
import Navbar from '@/Components/Navbar/Navbar'
import { fetchArticles, fetchCategories } from '@/api'
import React from 'react'
import Tabs from '@/Components/Blog/tabs'
import ArticleList from '@/Components/Blog/ArticleList'
import * as qs from 'qs'
import { useRouter } from 'next/router';
import Footer from '@/Components/Homepage/Footer/Footer'


const Blogs = ({categories, articles}) => {
  console.log(articles.data);
  return (
    <div>
      <Navbar/>
      <Tabs key={categories.id} categories={categories} />
      <ArticleList articles={articles.data} />
      <Footer />
    </div>
  )
}

export default Blogs

export const getServerSideProps = async() => {
  const options = {
    populate: "*",
    sort: "id:desc",
  }

  const queryString = qs.stringify(options);
  console.log(queryString)

  const categories = await fetchCategories();
  const articles = await fetchArticles(queryString);

  return {
    props: {
      categories,
      articles
    }
  }
}