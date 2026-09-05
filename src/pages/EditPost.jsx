import {useEffect, useState} from 'react'
import {Container, PostForm} from '../components'
import appwriteService from "../appwrite/config";
import { useNavigate, useParams } from 'react-router-dom';

function EditPost() {
    const [post, setPosts] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug)
                .then((post) => {
                    if (post) setPosts(post)
                    else navigate('/')
                })
                .catch(() => navigate('/'))
        } else {
            navigate('/')
        }
    }, [slug, navigate])

    return post ? (
        <div className="py-10">
            <Container>
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-white">Edit Post</h1>
                    <p className="mt-1 text-sm text-slate-400">Update your article details below</p>
                </div>
                <div className="rounded-2xl border border-green-900/30 bg-[#111111] p-6">
                    <PostForm post={post} />
                </div>
            </Container>
        </div>
    ) : null
}

export default EditPost
