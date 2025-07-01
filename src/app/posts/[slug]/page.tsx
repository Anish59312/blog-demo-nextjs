import { fetchPostsMetaData } from "@/lib/fetchPostsMetaData"
import React from "react"

export default async function Page({ params }: {
    params: Promise<{ slug: string }>
}) {

    const { slug } = await params

    return (<div>
        {slug}
        <br/>
        
    </div>)
}
  
export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
    const posts = fetchPostsMetaData() 

    const res =  posts?.map((post) => ({
        slug: post.slug,
    })) ?? []

    console.log("res", res)

    return res;
}
