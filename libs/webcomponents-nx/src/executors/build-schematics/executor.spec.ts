import { BuildSchematicsExecutorSchema } from './schema';
import executor from './executor';

const options: BuildSchematicsExecutorSchema = {};

describe('BuildSchematics Executor', () => {
  it('can run', async () => {
    const output = await executor(options);
    expect(output.success).toBe(true);
  });
});