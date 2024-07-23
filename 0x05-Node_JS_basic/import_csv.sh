#!/bin/bash

# Download the CSV file
wget "https://docs.google.com/spreadsheets/d/1W_1arHH-9FFWN1fGUqLyZuIMui1WcbUYRHBPTCgYhDE/export?format=csv" -O database.csv

# Import the CSV data into SQLite
sqlite3 database.db <<EOF
CREATE TABLE IF NOT EXISTS users (
    firstname TEXT,
    lastname TEXT,
    age INTEGER,
    field TEXT
);
.mode csv
.import database.csv users
.quit
EOF

echo "Data imported successfully!"
