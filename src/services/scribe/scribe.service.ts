// Initializes the `scribe` service on path `/scribe`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Scribe } from './scribe.class';
import hooks from './scribe.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'scribe': Scribe & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/scribe', new Scribe(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('scribe');

  service.hooks(hooks);
}
