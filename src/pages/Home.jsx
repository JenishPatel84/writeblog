import {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../components'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Home() {
    const [posts, setPosts] = useState([])
    const authStatus = useSelector((state) => state.auth.status)

    useEffect(() => {
        appwriteService.getPosts()
            .then((posts) => setPosts(posts?.documents || []))
            .catch(() => setPosts([]))
    }, [])

    if (posts.length === 0) {
        return (
            <div className="flex min-h-[60vh] items-center justify-center">
                <Container>
                    <div className="text-center">
                        <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full border border-green-900/40 bg-[#111111] text-4xl">
                            ✍️
                        </div>
                        <h1 className="text-3xl font-bold text-white">
                            {authStatus ? 'No published posts yet' : 'Welcome to the blog'}
                        </h1>
                        <p className="mt-3 text-slate-400">
                            {authStatus
                                ? 'Be the first — create a new post.'
                                : 'Sign in to read and write posts.'}
                        </p>
                        {!authStatus && (
                            <div className="mt-6 flex justify-center gap-3">
                                <Link to="/login" className="inline-flex items-center rounded-lg bg-green-500 px-5 py-2.5 text-sm font-bold text-black transition hover:bg-green-400">
                                    Sign In
                                </Link>
                                <Link to="/signup" className="inline-flex items-center rounded-lg border border-green-500/40 px-5 py-2.5 text-sm font-semibold text-green-400 transition hover:bg-green-500/10">
                                    Create Account
                                </Link>
                            </div>
                        )}
                        {authStatus && (
                            <Link to="/add-post" className="mt-6 inline-flex items-center rounded-lg bg-green-500 px-5 py-2.5 text-sm font-bold text-black transition hover:bg-green-400">
                                + New Post
                            </Link>
                        )}
                    </div>
                </Container>
            </div>
        )
    }

    return (
        <div className="w-full py-10">
            <Container>
                <div className="mb-8 flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-white">Latest Posts</h1>
                    {authStatus && (
                        <Link to="/add-post" className="inline-flex items-center rounded-lg bg-green-500 px-4 py-2 text-sm font-bold text-black transition hover:bg-green-400">
                            + New Post
                        </Link>
                    )}
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {posts.map((post) => (
                        <PostCard key={post.$id} {...post} />
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home
