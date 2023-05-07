import Blog from "@/Components/Blog/Blog";
import Navbar from "@/Components/Navbar/Navbar";
import { fetchArticles, fetchCategories, debounce } from "@/api";
import React from "react";
import Tabs from "@/Components/Blog/tabs";
import ArticleList from "@/Components/Blog/ArticleList";
import * as qs from "qs";
import { useRouter } from "next/router";
import Footer from "@/Components/Homepage/Footer/Footer";
import Pagination from "@/Components/Blog/Pagination";

const Blogs = ({ categories, articles }) => {
  // console.log(articles.data);
  const router = useRouter();
  const { asPath } = useRouter();
  const categorySlug = asPath;

  const handleSearch = (query) =>{
    router.push(`/blogs/?search=${query}`);
}
  return (
    <div>
      <Navbar />
      <Tabs
        key={categories.id}
        categories={categories}
        handleOnSearch={debounce(handleSearch, 500)}
      />
      <ArticleList articles={articles.data} />
      <Pagination
        page={articles.meta.pagination.page}
        pageCount={articles.meta.pagination.pageCount}
        redirectUrl={`${categorySlug}`}
      />
      <Footer />
    </div>
  );
};

export default Blogs;

export const getServerSideProps = async ({ query }) => {
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

  if (query.search) {
    options.filters = {
      Title: {
        $containsi: query.search,
      },
    };
  }

  const queryString = qs.stringify(options);

  console.log(queryString);
  const categories = await fetchCategories();
  const articles = await fetchArticles(queryString);

  return {
    props: {
      categories,
      articles,
    },
  };
};
