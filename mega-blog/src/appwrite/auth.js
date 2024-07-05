import conf from "../conf/conf.js";
import {Client ,Account, ID} from "appwrite";

export class AuthService{

    client =new Client();
    account;

    constructor(){
        this.client.setEndpoint(conf.appwriteurl).setProject(conf.appwriteproject);
        this.account=new Account(this.client);
    }

    async createaccount({email,password,name}){
        try {
            const useraccount = await this.account.create(ID.unique(),email,password,name);
            if(useraccount){
                //call another method
            }
            else{
                return useraccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email,password}){
        try {
            return await this.account.createEmailPasswordSession(email,password)
        } catch (error) {
            throw error
        }
    }

    async getcurrentuser(){
        try {
            return await this.account.get();
        } catch (error) {
            throw error;
        }
        return null;
    }
    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }
}

const authservice =new AuthService();

export default authservice