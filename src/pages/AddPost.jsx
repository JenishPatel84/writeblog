import { Container, PostForm } from '../components'

function AddPost() {
  return (
    <div className="py-10">
        <Container>
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-white">Create New Post</h1>
                <p className="mt-1 text-sm text-slate-400">Fill in the details below to publish a new article</p>
            </div>
            <div className="rounded-2xl border border-green-900/30 bg-[#111111] p-6">
                <PostForm />
            </div>
        </Container>
    </div>
  )
}

export default AddPost
