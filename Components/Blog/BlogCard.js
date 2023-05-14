import React from "react";
import Link from "next/link";
import { formatDate } from "@/api";

const BlogCard = ({ article }) => {
  console.log(article);
  return (
    <div>
      <Link href={`/article/${article.attributes.Slug}`}>
        <img
          className="w-full h-64 mb-3"
          src={`http://localhost:1337${article.attributes.Image.data.attributes.url}`}
          alt={article.attributes.Title}
        />
        <h1 className="text-xl font-bold hover:decoration-2 hover:underline hover:cursor-pointer hover:decoration-primary">
          {article.attributes.Title}
        </h1>

        <div className="flex items-center my-4">
          <span className="text-sm font-bold">
            {article.attributes.author.data.attributes.username} on &nbsp;
            <span className="text-gray-400">
              {formatDate(article.attributes.createdAt)}
            </span>
          </span>
        </div>
        <div className="text-gray-500">
          {article.attributes.Body.slice(0, 250)}{" "}
          {article.attributes.Body.length > 250 ? "..." : ""}
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
