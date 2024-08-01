import * as core from '@actions/core';
import { run } from '../src/main'

describe('When running the action', () => {
  const fakeSetOutput = jest.spyOn(core, 'setOutput').mockImplementation();

  it('it should set the release-url output parameter', async () => {
    await run();
    expect(fakeSetOutput).toHaveBeenCalledWith('release-url', expect.anything());
  })
});