import { Request, Response } from 'express';
import * as fs from 'fs';
export class FrameWork {
    constructor() { }

    public async getFramework(req, res) {
        res.json({
            'message': 'getframework'
        })

    }
}