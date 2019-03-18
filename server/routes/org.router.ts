import { OrgSearch } from '../controllers/orgSearch';

export class OrgRouter {
    init(app: any) {
        const orgSearch = new OrgSearch()
        app.get('/search', (req, res) => { orgSearch.search(req, res) })
    }
}