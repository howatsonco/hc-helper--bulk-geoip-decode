# Bulk GeoIP Geocoding

A small helper node app that helps geocoding a list of IP addresses. All geocoding happens on the local machine for performance.

This is utilising the Geolite2 DB via the [node-geoip](https://github.com/geoip-lite/node-geoip) library. Follow the instructions in that repo to update the database.

## Usage:

First time cloning and installing the dependencies
```
git clone https://github.com/howatsonco/hc-helper--bulk-geoip-decode.git
npm i
```

Prepare the list of IP addresses in a text file. For example, create a file named `input.txt` with
```
8.8.8.8
1.1.1.1
```

### To bulk geocode to CSV
```bash
npm start --silent -- input.txt > output.csv
```
Example CSV output:
```csv
"ip","range","country","region","eu","timezone","city","ll","metro","area"
"8.8.8.8","134742016,134774783","US","","0","America/Chicago","","37.751,-97.822","0","1000"
"1.1.1.1","16843008,16843263","AU","","0","Australia/Sydney","","-33.494,143.2104","0","1000"
```
### To bulk geocode to JSON
```bash
npm start --silent -- input.txt --json > output.csv
```
Example JSON output:
```json
[{"ip":"8.8.8.8","range":[134742016,134774783],"country":"US","region":"","eu":"0","timezone":"America/Chicago","city":"","ll":[37.751,-97.822],"metro":0,"area":1000},{"ip":"1.1.1.1","range":[16843008,16843263],"country":"AU","region":"","eu":"0","timezone":"Australia/Sydney","city":"","ll":[-33.494,143.2104],"metro":0,"area":1000}]
```
