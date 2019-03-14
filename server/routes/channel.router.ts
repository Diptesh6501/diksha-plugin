import { Channel } from '../controllers/channel'

export class ChannelRouter {
    init(app: any, auth?: any) {
        const channel = new Channel()
        app.get('/read', (req, res) => { channel.read(req, res) })

    }
}