import User from "@/models/User";
import NextAuth from "next-auth/next";
import db from "@/utils/db";
import bcryptjs from 'bcryptjs'
import CredentialsProvider from "next-auth/providers/credentials";


export default NextAuth ({
    session: {
        strategy: 'jwt',
    },
    callbacks:{
        async jwt ({token , user}) {
            if (user?._id) token._id =user._id;
            if (user?._isAdmin) token._isAdmin =user.isAdmin;
            return token

        },

        async session({session , token}) {
            if (token?._id) session.user._id =token;
            if (token?._isAdmin) session.user.isAdmin =token.isAdmin;  
            return session; 
        }

    }, 
    
    providers: [
        CredentialsProvider({
            async authorize(credentials ){
                await db.connect();
                const user = await User.findOne({
                    email: credentials.email
                });
                await db.disconnect();
                if (user && bcryptjs.compareSync(credentials.password , user.password)){
                    return{
                        _id: user._id,
                        name: user.name,
                        email: user.email,
                        image: 'f',
                        isAdmin: user.isAdmin,
                    };
                }

                throw new Error ('invalid email or password (translate it )')

            }
        })
    ]
})
