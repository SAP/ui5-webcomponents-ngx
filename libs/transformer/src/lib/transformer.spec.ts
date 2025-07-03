import { transformer } from './transformer';
import { TransformerConfig } from './types/transformer-config';
import { GeneratedFile } from './generated-file';

// Mock GeneratedFile subclass for tests
class MockGeneratedFile extends GeneratedFile<string> {
  getCode(): string {
    return 'mock code';
  }
  relativePathFrom = (requester: any): string => {
    return 'mock/path';
  }
}

describe('transformer function', () => {
  let mockGatherer: jest.Mock<Promise<string[]>>;
  let mockTransformerFn: jest.Mock<Promise<GeneratedFile[]>>;
  let mockPersist: jest.Mock<Promise<void>>;
  let mockConfig: TransformerConfig<string>;

  beforeEach(() => {
    // Create mocks
    mockGatherer = jest.fn().mockResolvedValue(['item1', 'item2']);
    mockTransformerFn = jest.fn().mockResolvedValue([new MockGeneratedFile()]);
    mockPersist = jest.fn().mockResolvedValue(undefined);

    // Set up the mock TransformerConfig
    mockConfig = {
      gatherer: mockGatherer,
      transformers: [mockTransformerFn],
      persist: mockPersist,
    };
  });

  it('should correctly gather items, apply transformations, and persist the result', async () => {
    await transformer(mockConfig);

    // Ensure gatherer was called
    expect(mockGatherer).toHaveBeenCalled();

    // Ensure transformer was called with gathered items and initial empty array
    expect(mockTransformerFn).toHaveBeenCalledWith(['item1', 'item2'], expect.any(Array));

    // Ensure persist was called with the transformed files
    expect(mockPersist).toHaveBeenCalledWith(expect.any(Array));

    // Verify persist got called with the correct GeneratedFile types
    expect(mockPersist).toHaveBeenCalledWith(expect.arrayContaining([expect.any(MockGeneratedFile)]));
  });

  it('should correctly handle multiple transformers', async () => {
    // Add a second transformer mock
    const secondTransformerFn = jest.fn().mockResolvedValue([new MockGeneratedFile()]);
    mockConfig.transformers.push(secondTransformerFn);

    await transformer(mockConfig);

    // Ensure both transformers were called
    expect(mockTransformerFn).toHaveBeenCalledTimes(1);
    expect(secondTransformerFn).toHaveBeenCalledTimes(1);

    // Ensure persist was still correctly called
    expect(mockPersist).toHaveBeenCalledWith(expect.arrayContaining([expect.any(MockGeneratedFile)]));
  });

  // Additional tests can be added to verify failure modes, promises, etc.
});