import { NodeFsImplementation } from "@ui5/webcomponents-wrapper-fs-commit";
import { FundamentalStaticDirectiveLibrary } from "./fundamental-directive";
import { FundamentalStaticModule } from "./fundamental-module";
import { FundamentalThemingService } from "./theming/theming-service";

export class FundamentalStylesLibraryGenerator {
  public directives: Record<string, FundamentalStaticDirectiveLibrary>;
  public module: FundamentalStaticModule;
  public theming: FundamentalThemingService;
  constructor(public styles: string[]) {
    this.directives = this.getDirectives();
    this.module = new FundamentalStaticModule(this.directives);
    this.theming = new FundamentalThemingService();
  }

  getDirectives(): Record<string, FundamentalStaticDirectiveLibrary> {
    // Get all fundamental-styles css files and use them to create static directives.

    const nodeFs = new NodeFsImplementation();

    const cssFiles = nodeFs.queryFiles(
      'node_modules/fundamental-styles/dist/*.css',
      []
    );

    const directives: Record<string, FundamentalStaticDirectiveLibrary> = {};

    cssFiles.forEach((file) => {
      const fileName = nodeFs.basename(file, nodeFs.extname(file));
      if (fileName.startsWith('fundamental-styles')) {
        return;
      }
      const directive = new FundamentalStaticDirectiveLibrary(fileName);
      directives[fileName] = directive;
    });

    return directives;
  }
}
