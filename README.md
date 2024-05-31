After you run 'NPM install', take the 'dimple.latest file you see here in the main directory and drop it into the 'node_modules/dimple/dist' directory.
The dimple library is old, has not been updated in years, and not npm compatible. We need to manually drop the actual 'dimple' script that we want to use for our project into the 'placeholder' directory that was created for us via npm install and the package.json file.

# <a href="https://karpatic.github.io/DLLR-Dashboard-Refractored/">DLLR-Dashboard-Refractored</a>
Description of project

## Basic Information

- 'docs' folder contains final code for website.
- 'src' folder contains the code used in development prior to final-optimizations.
- 'src/data' folder really only uses the CountyData.csv, MarylandData.csv, wda/ & emp18/ folder. (Old dats is stored here too)

- Also MAY need to run this prior to npm start command
- set NODE_OPTIONS=--openssl-legacy-provider

Regex for TBDs

WDAs
\bTurnover\b.*?\b2023Q1\b.*?\,0
\bChange\b.*?\b2023Q1\b.*?\,0
\bMonthly\b.*?\b2023Q1\b.*?\,0


Marylands
\b2023Q2\b.*\bTurnover\b.*\b,0
\b2023Q2\b.*\bJob Net Change\b.*\b,0
\b2023Q2\b.*\bMaryland Average Monthly Earnings\b.*\b,0


