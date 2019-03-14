import { FormRouter } from './routes/form.router';
import { OrgSearch } from './controllers/orgSearch';
import { FrameWorkRouter } from './routes/framework.router';
import { Manifest } from '@project-sunbird/ext-framework-server/models/Manifest';
import { frameworkAPI } from '@project-sunbird/ext-framework-server/api';
import { ChannelRouter } from './routes/channel.router';
import { PageAssembleRouter } from './routes/pageAssemble.router';
import { TenantRouter } from './routes/tenantInfo.router';

export class Router {
    init(app: any, manifest: Manifest, auth?: any) {
        const server = frameworkAPI.getPluginInstance(manifest.id);
        app.use('/api/framework/v1' , FrameWorkRouter);
        app.use('api/org/v1' , OrgSearch);
        app.use('api/data/v1/form' , FormRouter);
        app.use('api/channel/v1' , ChannelRouter);
        app.use('api/data/v1/page' , PageAssembleRouter);
        app.use('v1/tenant' , TenantRouter)
    }
}