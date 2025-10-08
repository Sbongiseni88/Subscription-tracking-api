import { config } from "dotenv";

config({path: `.env.${process.env.NODE_ENV || 'development'}.local`} );
// Load environment variables from .env file based on the current NODE_ENV
// For example, if NODE_ENV=development, it will load from .env.development.local
// If NODE_ENV is not set, it defaults to 'development'
// This allows for different configurations in development, testing, and production environments
// Make sure to install dotenv package: npm install dotenv

export const{PORT,NODE_ENV,DB_URL}= process.env;