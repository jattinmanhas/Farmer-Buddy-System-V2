import React from 'react'
import Navbar from '@/Components/Navbar/Navbar'
import Tabs from '@/Components/Blog/tabs'
import { fetchArticles, fetchCategories } from '@/api'
import * as qs from 'qs'
import { useRouter } from 'next/router'
import ArticleList from '@/Components/Blog/ArticleList'
import Pagination from '@/Components/Blog/Pagination'

const category = ({categories,articles}) => {
    const {asPath} = useRouter()
    const categorySlug = asPath;

  return <>
    <Navbar/>
    <Tabs categories={categories}/>
    <ArticleList articles={articles.data}/>
    <Pagination page = {articles.meta.pagination.page} pageCount={articles.meta.pagination.pageCount} redirectUrl={`${categorySlug}`} />
  </>
}

export const getServerSideProps = async({query}) =>{
  const options = {
    populate: "*",
    sort: "id:desc",
    filters: {
        category: {
            slug: query.category,
        },
    },
    pagination: {
      page: query.page ? +query.page : 1,
      pageSize: 6,
  },
};

const queryString  = qs.stringify(options);
  const categories = await fetchCategories();
  const articles = await fetchArticles(queryString);

  return{
    props: {
      categories,
      articles
    }
  }
}

export default category