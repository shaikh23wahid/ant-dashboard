## Digital banking introduction

## Basic Environment

NodeJS === `v12.18.0`

## Quick Setup

```bash
// checkout and only execute once
$ cd ant-dashboard
$ npm install

```

## Development
### Start node server API(login API)
// open comand promp/terminal and run below command:
node server.js
// you should get output as "API is running on http://localhost:8080/login"

#### Run Webapck for ES6 and React

```bash
// webpack
$ npm start
```

#### Login details
User Id : admin
Password: password

## Testing

```bash
$ npm run test
$ npm run test -- --coverage --u
```
## Path to check code coverage is /coverage/lcov-report/index.html

## GIT Commit Format

```bash
// for Jira
$ git commit -m "issue {JIRA_ID} MR {MR_ID} Created readme.md file"

```

## Folders & Modules

#### Folders

| Name                          | Intention                                        |
| ------------------------------| ------------------------------------------------ |
| ANT_DASHBOARD/src             | React Code                                       |
| ANT_DASHBOARD/public/assets   | user profile/avatars                             |
| ANT_DASHBOARD\src\data        | DB.JSON to load data                             |
| ANT_DASHBOARD\__test__        | jest unit test code                              |
| ANT_DASHBOARD\coverage\lcov-report/index.html|code coverage in %                 |

