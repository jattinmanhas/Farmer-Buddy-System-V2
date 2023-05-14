import axios from "axios";
import { serialize } from 'next-mdx-remote/serialize';
import {remark} from 'remark'
import html from 'remark-html'


export const fetchCategories = async () => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/categories`,
      {
        headers: {
          Authorization: `Bearer ${process.env.ADMIN_KEY}`,
        },
      }
    );
    const data = res.data;
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchArticles = async (queryString) => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/articles?${queryString}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.ADMIN_KEY}`,
        },
      }
    );
    const data = res.data;
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const formatDate = (dateString) => {
  const date = new Date(dateString).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return date;
};

export const debounce = (fn, timeout = 300) => {
  let timer;
  const debounced = (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, timeout);
  };
  return debounced;
};

export const fetchArticleBySlug = async(queryString) =>{
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/articles?${queryString}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.ADMIN_KEY}`,
        },
      }
    );
    const data = res.data;
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export const serializeMarkdown = async (item) => {
  const body = await serialize(item.attributes.body);
  return {
      ...item,
      attributes: {
          ...item.attributes,
          body,
      },
  };
};

export default async function markdownToHtml(markdown) {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}
