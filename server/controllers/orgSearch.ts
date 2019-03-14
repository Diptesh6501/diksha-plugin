import { setResponse } from './../utils/response';
import * as fs from 'fs';
import { ErrResponseMsg } from '../utils/constant';
import * as path from 'path';
export class OrgSearch {
    public sendResponse;
    public errMsg
    constructor() {
        this.sendResponse = setResponse
        this.errMsg = ErrResponseMsg

    }

    public async search(req, res) {
        let filePath = path.join(__dirname, '../data', 'orgSearch', 'org.search.json');
        try {
            fs.stat(filePath, (err, stat) => {
                if (err) {
                    const response = this.sendResponse.errorResponse('api.framework.read', this.errMsg.ERR_404, err);
                    res.json({
                        data: response
                    })
                }
                var readStream = fs.createReadStream(filePath);
                readStream.on('open', () => {
                    const response = this.sendResponse.successResponse('api.framework.read', readStream, this.errMsg.SUCCESS_200);
                    readStream.pipe(response);
                });
                readStream.on('error', (err) => {
                    const response = this.sendResponse.errorResponse('api.framework.read', this.errMsg.ERR_404, this.errMsg.ERRMSG_404);
                    res.end(response);
                });
            })

        } catch {
            const response = this.sendResponse.errorResponse('api.framework.read', this.errMsg.ERR_500, this.errMsg.ERRMSG_500);
            res.json({
                data: response
            })
        }
    }
}

