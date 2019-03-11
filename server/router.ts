import { Manifest } from '@project-sunbird/ext-framework-server/models/Manifest';
import { frameworkAPI } from '@project-sunbird/ext-framework-server/api';
import { FrameWork } from './controllers/framework';

export class Router {
    init(app: any, manifest: Manifest, auth?: any) {
        const frameWork = new FrameWork()
        const server = frameworkAPI.getPluginInstance(manifest.id);
        app.get('/getFramework', (req, res) => { frameWork.getFramework(req, res) })
    }
}