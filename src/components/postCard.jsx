import appWriteService from '../appwrite/config'
import { Link } from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
  return (
    <Link to={`/post/${$id}`} className="block h-full">
        <div className="group flex h-full flex-col rounded-xl border border-green-900/30 bg-[#111111] overflow-hidden shadow-md transition duration-300 hover:-translate-y-1 hover:border-green-500/50 hover:shadow-green-500/10 hover:shadow-xl">
            <div className="w-full overflow-hidden">
                <img
                    src={appWriteService.getFilePreview(featuredImage)}
                    alt={title}
                    className="aspect-video w-full object-cover transition duration-300 group-hover:scale-105"
                />
            </div>
            <div className="flex flex-1 flex-col p-4">
                <h2 className="text-base font-bold text-white group-hover:text-green-400 transition duration-200 line-clamp-2">
                    {title}
                </h2>
                <span className="mt-3 text-xs font-semibold text-green-500 uppercase tracking-wider">
                    Read more →
                </span>
            </div>
        </div>
    </Link>
  )
}

export default PostCard;
