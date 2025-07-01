import { fetchPostsMetaData } from "@/lib/fetchPostsMetaData"
import React from "react"


export default async function Page() {

    const posts = fetchPostsMetaData()

    return (
        <div className="m-12">
            <ul>
                {posts?.map((value) => (
                    <li key={value.slug}> <a href={`/posts/${value.slug}`}>
                        <div className="flex justify-between w-full">
                            <div>{value.title}</div>
                            <div>{value.date}</div>
                        </div>
                    </a></li>
                ))}
            </ul>
        </div>
    );
}

