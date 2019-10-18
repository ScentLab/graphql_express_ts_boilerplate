import "reflect-metadata";
import path from "path";
require('dotenv').config({path: path.join(__dirname, `../config/${process.env.NODE_ENV}.env`)});
import {createConnection} from "typeorm";
import { ApolloServer, gql } from 'apollo-server-express';
import express from 'express'
import connectionOptions from "../config/ormConfig"
import { typeDefs } from './graphql/typedefs';
import { resolvers } from './graphql/resolvers';

createConnection(connectionOptions).then(async connection => {
    const app = express();
    const server = new ApolloServer({
        typeDefs: gql`${typeDefs}`,
        resolvers
    });

    server.applyMiddleware({app});

    app.listen({port: 4000}, () => {
        console.log("server ready at 4000 port")
    })
    
}).catch(error => console.log(error));
