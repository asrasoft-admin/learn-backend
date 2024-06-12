import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { connectedToDatabase } from "./db/index.js";

dotenv.config();
const app = express();

connectedToDatabase();
