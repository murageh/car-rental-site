import React from 'react';
import Image from "next/image";

import honda from '../../../assets/images/backgrounds/honda.png';
import mercedes from '../../../assets/images/backgrounds/mercedes.png';
import rollsRoyce from '../../../assets/images/backgrounds/rolls-royce.png';
import Link from "next/link";

const BlogSection = () => {
    return (
        <section className="py-12 bg-darkWhite">
            <div className="wrapper flex flex-col justify-center items-center">
                <div className="w-full p-y-4 flex flex-col items-center my-6">
                    <h2 className="my-4 mx-auto text-5xl font-bold w-6/12 text-center capitalize balance">
                        Read our stories
                    </h2>
                </div>

                <BlogsList/>
            </div>
        </section>
    );
};

interface BlogTileProps {
    blog: {
        imageUrl: string,
        title: string,
        tags: string[],
        excerpt: string,
        date: string,
        blogUrl: string,
    }
}

const BlogsList = () => {
    const getBlogs = () => {
        const blogs: BlogTileProps['blog'][] = [];
        const images = [honda.src, mercedes.src, rollsRoyce.src];

        for (let i = 0; i < 6; i++) {
            blogs.push(
                {
                    imageUrl: images[i % 3],
                    title: 'Blog title',
                    tags: ['tag1', 'tag2', 'tag3'],
                    excerpt: 'Would you like to learn about the newest technology in cars? Read this article to learn more about it.',
                    date: '2021-10-10',
                    blogUrl: '#',
                },
            );
        }

        return blogs;
    }

    const blogs = getBlogs();

    return (
        <div className={'w-full flex flex-col justify-evenly'}>
            <div className="w-full flex flex-col md:flex-row md: flex-wrap justify-evenly">
                {
                    blogs.map(blog => (
                        <BlogTile blog={blog} key={blog.blogUrl}/>
                    ))
                }
            </div>

            <div className="w-full flex justify-center items-center">
                <Link href={'#'} className={'text-lg font-bold bg-blueBlack text-white rounded py-2 px-4 shadow my-4'}>View all stories &rarr;</Link>
            </div>
        </div>
    );
}

const BlogTile = ({blog}: BlogTileProps) => {
    return (
        <div className="w-full p-4 md:w-4/12 lg:w-4/12">
            <div className="bg-white rounded-xl shadow-xl w-full flex flex-col px-8 py-10 gap-y-2">
                <div className={'relative h-48 w-full bg-darkWhite p-4'}>
                    <Image src={blog.imageUrl} alt={blog.title} height={200} width={300}
                           className={'rounded-xl h-full w-full object-cover'}/>
                    <div className={'absolute bottom-2 left-2 bg-black bg-opacity-80 rounded-xl p-2'}>
                        <span className={'text-white text-xs'}>{blog.date}</span>
                    </div>
                </div>
                <div className={'flex flex-col gap-y-2'}>
                    <h3 className={'text-2xl font-bold'}>{blog.title}</h3>
                    <div className={'flex flex-wrap gap-x-2 gap-y-1'}>
                        {
                            blog.tags.map(tag => (
                                <span className={'text-sm font-normal bg-secondary text-white py-2 px-4 rounded'}
                                      key={tag}>{tag}</span>
                            ))
                        }
                    </div>
                    <p className={'text-base text-gray-500'}>{blog.excerpt}</p>
                    <Link href={blog.blogUrl} className={'text-lg font-bold text-blueBlack'}>Read more &rarr;</Link>
                </div>
            </div>
        </div>
    );
}

export default BlogSection;