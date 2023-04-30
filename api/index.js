import axios from 'axios';

export const fetchCategories = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/categories`, {
        headers: {
          Authorization: `Bearer ${process.env.ADMIN_KEY}`,
        },
      });
      const data = res.data;
      return data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  
export const fetchArticles = async (queryString) => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/articles?${queryString}`, {
        headers: {
          Authorization: `Bearer ${process.env.ADMIN_KEY}`,
        },
      });
      const data = res.data;
      return data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  export const formatDate = (dateString) => {
    const date = new Date(dateString).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    return date;
};
  