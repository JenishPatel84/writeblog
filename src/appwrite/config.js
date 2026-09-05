import conf from "../conf/conf";
import {ID, Client ,Databases, Storage, Query, Permission, Role} from "appwrite";

export class Service{
    client = new Client();

    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectid);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        if (!userId) throw new Error('You must be signed in to create a post.')

        return this.databases.createDocument(conf.appwriteDatabaseid, conf.appwriteCollectionid, slug, {
            title, content, featuredImage, status, userId
        }, [
            Permission.read(Role.any()),
            Permission.update(Role.user(userId)),
            Permission.delete(Role.user(userId)),
        ]);
    }

    async updatePost(slug,{title, content, featuredImage, status, userId}) {
        return this.databases.updateDocument(conf.appwriteDatabaseid, conf.appwriteCollectionid, slug, {
            title, content, featuredImage, status, userId
        });
    }

    async deletePost(slug) {
        await this.databases.deleteDocument(conf.appwriteDatabaseid, conf.appwriteCollectionid, slug);
        return true;
    }

    async getPost(slug) {
        return this.databases.getDocument(conf.appwriteDatabaseid, conf.appwriteCollectionid, slug);
    }

    async getPosts(queries = [Query.equal("status","active")]){
        return this.databases.listDocuments(conf.appwriteDatabaseid, conf.appwriteCollectionid, queries);
    }

    // file upload services

    async uploadFile(file, userId) {
        if (!userId) throw new Error('You must be signed in to upload an image.')

        return this.bucket.createFile(conf.appwriteBucketid, ID.unique(), file, [
            Permission.read(Role.any()),
            Permission.update(Role.user(userId)),
            Permission.delete(Role.user(userId)),
        ]);
    }

    async deleteFile(fileId){
        return this.bucket.deleteFile(conf.appwriteBucketid, fileId);
    }

    getFilePreview(fileId) {
        if (!fileId) return ''
        // Use the file view endpoint because preview transformations are forbidden
        // for this bucket, while public file viewing is allowed.
        const url = new URL(
            `${conf.appwriteUrl}/storage/buckets/${encodeURIComponent(conf.appwriteBucketid)}/files/${encodeURIComponent(fileId)}/view`
        )
        url.searchParams.set('project', conf.appwriteProjectid)
        return url.toString()
    }
}

const service = new Service();
export default service;