
export default {
  "compilerOptions": {
    "baseUrl": ".",
    "sourceMap": false,
    "declaration": false,
    "moduleResolution": "node",
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "allowSyntheticDefaultImports": true,
    "importHelpers": true,
    "target": "es2020",
    "module": "esnext",
    "lib": [
      "es2017",
      "dom"
    ],
    "skipLibCheck": true,
    "skipDefaultLibCheck": true,
    "noImplicitAny": false,
    "resolveJsonModule": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "declarationMap": false,
    "useDefineForClassFields": false
  },
  "angularCompilerOptions": {
    "compilationMode": "partial"
  },
  "include": [
    "**/*.ts"
  ]
}
