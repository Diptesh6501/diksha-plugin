import { Request, Response } from 'express';
import { uuidv1 } from 'uuid/v1';
export class setResponse {

    constructor() { }
    res: Response;
    responseObject = {
        "id": '',
        "ver": "1.0",
        "ts": this.IsoDateFormat(),
        "params": {
            "resmsgid": uuidv1(),
            "msgid": uuidv1(),
            "status": "successful",
            "err": null,
            "errmsg": null
        },
        "responseCode": '',

    }

    async successResponse(id, data , status) {
        this.responseObject.id = id;
        this.responseObject['result'] = data;
        this.responseObject.params['status'] = status;
        return this.responseObject;
    }

    async errorResponse(id, err, errmsg) {
        this.responseObject.id = id;
        this.responseObject.params.err = err;
        this.responseObject.params.errmsg = errmsg;
        return this.responseObject;
    }

    IsoDateFormat() {
        var date = new Date();
        return date.toISOString();
    }
}