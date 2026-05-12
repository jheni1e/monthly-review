import { type Express } from 'express';
import express from 'express';

export default function (app: Express) {
    app
        .use(express.json())
}