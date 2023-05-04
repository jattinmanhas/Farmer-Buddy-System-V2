import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BlogCardWithImage = ({article}) => {
  return (
    <div className="bg-gradient-to-r from-violet-500 to-violet-900 rounded-md flex items-center  p-6">
    <Link href="#">
        <span className="text-3xl w-2/3 text-white font-bold after:content-[''] after:bg-primary after:block after:w-16 after:h-1 after:rounded-md after:mt-2 cursor-pointer">
            {article.attributes.Title}
        </span>
    
    <Image src="/vercel.svg" width={140} height={140} />
    </Link>
</div>
  )
}

export default BlogCardWithImage