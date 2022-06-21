# Bulk GeoIP Decoding

A small helper node app that helps geocoding locally a list of IP addresses.

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

# Bulk geocode to CSV
npm start --silent -- input.txt > output.csv
# Bulk geocode to JSON
npm start --silent -- input.txt --json > output.csv
```
