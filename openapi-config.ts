import type { ConfigFile } from '@rtk-query/codegen-openapi'

const config: ConfigFile = {
  schemaFile: 'https://app.swaggerhub.com/apis/TERKENCI/simple-bank/1.0.0#/',
  apiFile: './src/store/emptyApi.ts',
  apiImport: 'emptySplitApi',
  outputFile: './src/store/simpleBankApi.ts',
  exportName: 'simpleBankApi',
  hooks: true,
}

export default config