import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);
    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug)
                .then((post) => {
                    if (post) setPost(post);
                    else navigate("/");
                })
                .catch(() => navigate("/"));
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="py-10">
            <Container>
                {/* Hero image */}
                <div className="relative mb-6 overflow-hidden rounded-2xl border border-green-900/30">
                    <img
                        src={appwriteService.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="aspect-video w-full object-cover"
                    />
                    {isAuthor && (
                        <div className="absolute right-4 top-4 flex gap-2">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500" className="shadow-lg">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-600" textColor="text-white" onClick={deletePost} className="shadow-lg">
                                Delete
                            </Button>
                        </div>
                    )}
                </div>

                {/* Title */}
                <div className="mb-6 border-b border-green-900/30 pb-6">
                    <h1 className="text-3xl font-bold text-white">{post.title}</h1>
                </div>

                {/* Content */}
                <div className="blog-content">
                    {parse(post.content)}
                </div>
            </Container>
        </div>
    ) : null;
}
