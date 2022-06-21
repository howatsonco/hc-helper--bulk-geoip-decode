import fs from 'fs'
import { parse, unparse } from 'papaparse'
import geoip from 'geoip-lite'
import process from 'process'

console.clear()
const run = async () => {
  const myArgs = process.argv.slice(2);

  const isJson = myArgs.includes('--json')

  const inputFilename = myArgs[0]
  if (!inputFilename || !fs.existsSync(inputFilename)) {
    throw new Error(`No input file specified or file ${inputFilename} not found`)
  }

  const inputFile = fs.readFileSync(inputFilename, 'utf8')
  const results = await parse<string[]>(inputFile, {header: false})
  const output = results.data.map(d => d[0] ? {ip: d[0], ...geoip.lookup(d[0] + '')} : null)

  if (isJson) {
    console.log(JSON.stringify(output))
    return
  }

  const outputCsv = unparse(output, {quotes: true})
  console.log(outputCsv)
  return
}

run()
