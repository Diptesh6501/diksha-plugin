import { Tenant } from '../controllers/tenant';

export class TenantRouter {
    init(app: any, auth?: any) {
        const tenant = new Tenant()
        app.get('/info', (req, res) => { tenant.info(req, res) })

    }
}