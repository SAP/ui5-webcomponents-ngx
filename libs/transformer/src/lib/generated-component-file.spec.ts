import { GeneratedComponentFile } from './generated-component-file';
import { ComponentData } from './types/component-data';
import { ParsedPath, parse } from 'path';
import { dependencyRelativePath } from './dependency-relative-path';

// Mock dependencies and helpers
jest.mock('./dependency-relative-path', () => ({
  dependencyRelativePath: jest.fn((from: ParsedPath, to: ParsedPath) => `./mock/relative/path/from/${from.dir}/to/${to.dir}`),
}));

// Define a testable subclass within the test file
class TestableGeneratedComponentFile extends GeneratedComponentFile<string, {option1: string}> {
  constructor(
    componentData: ComponentData,
    componentFileCreator: (componentData: ComponentData) => GeneratedComponentFile<string, { option1: string }>,
    options: { option1: string }
  ) {
    super(componentData, componentFileCreator, options);
    this._path = componentData.path;
    this._parsedPath = parse(this._path);
  }

  getCode(): string {
    return 'mock code';
  }

  public getOptions(): { option1: string } {
    return this.options;
  }
}

describe('GeneratedComponentFile', () => {
  let componentData: ComponentData;
  let mockFile: TestableGeneratedComponentFile;

  beforeEach(() => {
    componentData = {
      description: 'A mock component',
      baseName: 'mockComponent',
      dependencies: [],
      selector: 'app-mock',
      implements: [],
      path: '/components/mockComponent.ts',
      inputs: [],
      outputs: [],
      slots: [],
      methods: [],
      imports: [],
      formData: [],
    };

    const componentFileCreator = (data: ComponentData) => new TestableGeneratedComponentFile(data, componentFileCreator, { option1: 'test' });

    mockFile = new TestableGeneratedComponentFile(componentData, componentFileCreator, { option1: 'test' });

    // Confirming parsedPath is correctly initialized
  });

  it('should initialize with correct component data', () => {
    expect(mockFile.componentData).toBe(componentData);
    expect(mockFile.dependencies.size).toBe(0);
    expect(mockFile.dependents.size).toBe(0);
    expect(mockFile.getOptions()).toEqual({ option1: 'test' });
  });

  it('should calculate relative path correctly', () => {
    const requesterPath: ParsedPath = { dir: '/src/requester', base: '', ext: '', name: '', root: '' };
    // Ensure that parsedPath is part of calculation
    const relativePath = mockFile.relativePathFrom(requesterPath);
    expect(dependencyRelativePath).toHaveBeenCalledWith(requesterPath, mockFile.parsedPath);  // Utilize initialized parsed path
    expect(relativePath).toBe(`./mock/relative/path/from/${requesterPath.dir}/to/${mockFile.parsedPath.dir}`);
  });

  it('should create dependencies correctly', () => {
    const newDependency: ComponentData = { 
        ...componentData, 
        path: '/components/newDependency.ts',
        dependencies: []
    };
    
    const componentFileCreator = (data: ComponentData) => new TestableGeneratedComponentFile(data, componentFileCreator, { option1: 'test' });

    const parentFile = new TestableGeneratedComponentFile(
        { ...componentData, dependencies: [newDependency] },
        componentFileCreator,
        { option1: 'test' }
    );

    expect(parentFile.dependencies.size).toBe(1);
    expect([...parentFile.dependencies][0].componentData).toEqual(newDependency);
    expect([...parentFile.dependencies][0].dependents.has(parentFile)).toBe(true);
  });
});
