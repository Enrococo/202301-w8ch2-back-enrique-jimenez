import bunyan, { LogLevel } from 'bunyan';
import log from './logger';

describe('Given a log function', () => {
  test('When the log is defined, then it should be an instance of bunyan', async () => {
    const log = (await import('./logger')).default;
    expect(log).toBeInstanceOf(bunyan);
  });

  test('should set the log level to the value specified in the environment variable', () => {
    process.env.BUNYAN_LEVEL = 'debug';
    log.level((process.env.BUNYAN_LEVEL as LogLevel) ?? 'info');
    expect(log.level()).toEqual(20);
  });
  test('should set the log level to the value specified in the environment variable', () => {
    delete process.env.BUNYAN_LEVEL;
    log.level(process.env.BUNYAN_LEVEL ?? 'info');
    expect(log.level()).toEqual(30);
  });
});
