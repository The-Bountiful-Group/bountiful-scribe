import app from '../../src/app';

describe('\'scribe\' service', () => {
  it('registered the service', () => {
    const service = app.service('scribe');
    expect(service).toBeTruthy();
  });
});
