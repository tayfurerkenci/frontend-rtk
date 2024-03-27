import type { ConfigFile } from '@rtk-query/codegen-openapi'

const config: ConfigFile = {
  schemaFile: './oas/index.yaml',
  apiFile: './src/store/emptyApi.ts',
  apiImport: 'emptySplitApi',
  outputFile: './src/store/simpleBankApi.ts',
  exportName: 'simpleBankApi',
  hooks: true,
}

export default config