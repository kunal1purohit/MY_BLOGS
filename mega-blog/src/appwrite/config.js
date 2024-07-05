import conf from "../conf/conf.js";
import {Client, ID, Databases, Storage, Query} from "appwrite";
export class Service{

    client =new Client();
    databases;
    bucket;

    constructor(){
        this.client.setEndpoint(conf.appwriteurl).setProject(conf.appwriteproject);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);

    }

    async createPost({title,slug,content,image,status,userid}){
        try {
            return await this.databases.createDocument(
                conf.appwritedatabase,
                conf.appwritecollection,
                slug,
                {
                    title,
                    content,
                    image,
                    status,
                    userid
                }
            )
        } catch (error) {
            console.log("create post :: ",error);
        }
    }

    async updatePost(slug,{title,content,image,status}){
        try {
            return await this.databases.updateDocument(
                conf.appwritedatabase,
                conf.appwritecollection,
                slug,
                {
                    title,
                    content,
                    image,
                    status
                }
            )
        } catch (error) {
            console.log("update post :: ",error);
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwritedatabase,
                conf.appwritecollection,
                slug
            )
            return true;
        } catch (error) {
            console.log("delete post :: ",error);
            return false
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwritedatabase,
                conf.appwritecollection,
                slug
            )
            
        } catch (error) {
            console.log("get post :: ",error);
            return false
        }
    }

    async getposts(queries=[Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwritedatabase,
                conf.appwritecollection,
                queries
            )
        } catch (error) {
            console.log("get post all :: ",error);
            return false
        }
    }

    //file upload service

    async uploadfile(file){
        try {
            return await this.bucket.createFile(
                conf.appwritebucket,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("upload file :: ",error);
            return false}
    }

    async deletefile(fileid){
        try {
            await this.bucket.deleteFile(
                conf.appwritebucket,
                fileid
            )
            return true
        } catch (error) {
            console.log("delete file :: ",error);
            return false}
    }

    previewfile(fileid){
        return this.bucket.getFilePreview(
            conf.appwritebucket,
            fileid
        )
    }
}

const service = new Service();
export default service