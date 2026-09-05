import {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        appwriteService.getPosts([])
            .then((posts) => setPosts(posts?.documents || []))
            .catch(() => setPosts([]))
    }, [])

    return (
        <div className="w-full py-10">
            <Container>
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-white">All Posts</h1>
                    <p className="mt-1 text-sm text-slate-400">Browse every article on the blog</p>
                </div>
                {posts.length > 0 ? (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {posts.map((post) => (
                            <PostCard key={post.$id} {...post} />
                        ))}
                    </div>
                ) : (
                    <div className="flex min-h-[40vh] items-center justify-center">
                        <p className="text-slate-400">No posts available yet.</p>
                    </div>
                )}
            </Container>
        </div>
    )
}

export default AllPosts
