import { Manifest } from '@project-sunbird/ext-framework-server/models/Manifest';
import { frameworkAPI } from '@project-sunbird/ext-framework-server/api';
import { FrameWork } from '../controllers/framework';

export class FrameWorkRouter {
    init(app: any, auth?: any) {
        const frameWork = new FrameWork()
        app.get('/read:/framework', (req, res) => { frameWork.read(req, res) })
    }
}