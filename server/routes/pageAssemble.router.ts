import { Assemble } from '../controllers/pageAssemble'

export class PageAssembleRouter {
    init(app: any, auth?: any) {
        const assemble = new Assemble()
        app.post('/assemble', (req, res) => { assemble.pageAssemble(req, res) })

    }
}