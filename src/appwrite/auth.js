import conf from "../conf/conf";
import {Account, ID, Client } from "appwrite";

// const client = new Client()
// .setEndpoint('')
// .setProject('')

// const account = new Account(client);

// const user = await account.create(
//     ID.unique(),
//     'email',
//     'pass'
// )

export class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectid);
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}) {
        const userAccount = await this.account.create(ID.unique(), email, password ,name);
        if(userAccount) {
            return this.login({email, password})
        }
        return userAccount;
    }

    async login({email, password}) {
        return this.account.createEmailPasswordSession(email, password);
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch {
            return null;
        }
    }

    async logout() {
        return this.account.deleteSessions();
    }
}
const authService = new AuthService();
export default authService;