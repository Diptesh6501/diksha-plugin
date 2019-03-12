import { Request, Response } from 'express';
import * as fs from 'fs';
export class FrameWork {
    constructor() { }

    public async getFramework(req, res) {
        const framework = req.params;
        if (framework) {
            try {
                const data = fs.readFileSync(__dirname + `./data/framework/framework.${framework}.json`);
                res.json({
                    'status': 200,
                    'data': data
                })
            }
            catch {
                 res.json({
                     'status': 404,
                     'data': 'file not found'
                 })
            }
        }
    }
}
