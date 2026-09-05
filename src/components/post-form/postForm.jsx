import { useCallback, useEffect, useState } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { Button, Input, Select, RTE } from '../index'
import appwriteService from '../../appwrite/config'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function PostForm({post}) {
    const {register, handleSubmit, setValue, control, getValues, formState: {errors}} = useForm({
        defaultValues: {
            title: post?.title || '',
            slug: post?.slug || '',
            content: post?.content || '',
            status: post?.status || 'active',
        }
    });

    const navigate = useNavigate()
    const user = useSelector(state => state.auth.userData)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitError, setSubmitError] = useState('')
    const title = useWatch({ control, name: 'title' })

    const submit = async (data) => {
        setSubmitError('')
        setIsSubmitting(true)
        try {
            const image = data.image?.[0]
            const uploadedFile = image ? await appwriteService.uploadFile(image, user?.$id) : null
            const featuredImage = uploadedFile?.$id || post?.featuredImage
            const payload = { ...data, featuredImage, userId: user?.$id }
            delete payload.image

            const dbPost = post
                ? await appwriteService.updatePost(post.$id, payload)
                : await appwriteService.createPost(payload)

            if (uploadedFile && post?.featuredImage) {
                await appwriteService.deleteFile(post.featuredImage)
            }
            navigate(`/post/${dbPost.$id}`)
        } catch (error) {
            const message = error.message || ''
            setSubmitError(
                message.includes('No permissions provided')
                    ? 'Appwrite permissions are blocking this action. Set Create to Users for both your Storage bucket and Database collection in the Appwrite Console.'
                    : message || 'Unable to save this post. Check your Appwrite permissions.'
            )
        } finally {
            setIsSubmitting(false)
        }
    }

    const slugTransform = useCallback((value) => {
        if(value && typeof value === 'string') {
            return value.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
        }
        return ''
    },[])

    useEffect(() => {
        setValue('slug', slugTransform(title), { shouldValidate: true })
    }, [setValue, slugTransform, title])

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap gap-y-6" noValidate>
            {/* Left column – content */}
            <div className="w-full lg:w-2/3 lg:pr-4 space-y-4">
                <div>
                    <Input
                        label="Title:"
                        placeholder="Post title"
                        {...register("title", { required: true })}
                    />
                    {errors.title && <p className="mt-1 text-sm text-red-400">A title is required.</p>}
                </div>
                <div>
                    <Input
                        label="Slug:"
                        placeholder="post-slug"
                        {...register("slug", { required: true })}
                        onInput={(e) => {
                            setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                        }}
                    />
                    {errors.slug && <p className="mt-1 text-sm text-red-400">A slug is required.</p>}
                </div>
                <RTE label="Content:" name="content" control={control} defaultValue={getValues("content")} />
            </div>

            {/* Right column – meta */}
            <div className="w-full lg:w-1/3 lg:pl-4 space-y-4">
                <div>
                    <Input
                        label="Featured Image:"
                        type="file"
                        accept="image/png, image/jpg, image/jpeg, image/gif"
                        {...register("image", { required: !post })}
                    />
                    {errors.image && <p className="mt-1 text-sm text-red-400">Please choose a featured image.</p>}
                </div>
                {post && (
                    <div className="w-full overflow-hidden rounded-lg border border-green-900/30">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="aspect-video w-full object-cover"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status:"
                    {...register("status", { required: true })}
                />
                {errors.status && <p className="mt-1 text-sm text-red-400">Choose a post status.</p>}
                {submitError && (
                    <p className="rounded-lg border border-red-800/50 bg-red-900/20 p-3 text-sm text-red-400">
                        {submitError}
                    </p>
                )}
                <Button
                    type="submit"
                    disabled={isSubmitting}
                    bgcolor={post ? "bg-green-600" : "bg-green-500"}
                    className="w-full"
                >
                    {isSubmitting ? "Saving…" : post ? "Update Post" : "Publish Post"}
                </Button>
            </div>
        </form>
    )
}

export default PostForm
