import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import connectDB from "./db";
import User from "../model/user.model";
import brcypt from "bcrypt"
import Google from "next-auth/providers/google";

const AuthOptions:NextAuthOptions={
    providers:[
     //how we login
     Credentials({
        name: "credentials",
        credentials: {
            email: {label:"Email", type:"email"},
            password: {label:"Password", type: "password"}
        },
       async authorize(credentials, req){
        const email = credentials?.email
        const password = credentials?.password
        if(!email || !password){
            throw new Error("email or password is not found")
        }
        await connectDB()
        const user = await User.findOne({email})
        if(!user){
            throw new Error("user not found")
        }
        const isMatch = await brcypt.compare(password, user.password)
        if(!isMatch){
            throw new Error("incorrect password")
        }

        return {
            id: user._id,
            name: user.name,
            email: user.email
        }
        }
     }),

     Google({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!
     })
    ],
    callbacks: {
     async signIn({account, user}){
        if(account?.provider=="google"){
        await connectDB()
        let existUser = await User.findOne({email:user?.email})
        if(!existUser){
           existUser = await User.create({
                name:user.name,
                email: user?.email
            })
        }
        user.id = existUser._id as string
        }
        return true
     },

     async jwt({token, user}){
        if(user){
            token.id = user.id
            token.name = user.name
            token.email = user.email
        }
        return token
     },
     session({session, token}){
        if(session.user){
            session.user.id = token.id as string
            session.user.name = token.name
            session.user.email = token.email
        }
        return session
    },
   
    }, 
    session:{
        strategy:"jwt",
        maxAge: 30*24*60*60*1000
    },
    pages: {
     signIn: "/login",
     error: "/login"
    },
    secret: process.env.NEXT_AUTH_SECRET
}

export default AuthOptions