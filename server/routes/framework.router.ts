import { FrameWork } from '../controllers/framework';

export class FrameWorkRouter {
    init(app: any, auth?: any) {
        const frameWork = new FrameWork()
        app.get('/read/:framework', (req, res) => { frameWork.read(req, res) })
    }
}