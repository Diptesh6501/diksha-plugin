import {Form} from '../controllers/form'

export class FormRouter {
    init(app: any, auth?: any) {
        const form = new Form()
        app.get('/read', (req, res) => { form.read(req, res) })

    }
}