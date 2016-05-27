WDIO JIRA Service
==========

> A WebdriverIO service. It transitions associated JIRA issues to a 'success' or 'failure' status, and optionally adds a comment on update.
## Installation

The simplest installation is to keep `wdio-jira-service` as a devDependency in your `package.json`.

```json
{
  "devDependencies": {
    "wdio-jira-service": "~0.1.0"
  }
}
```

You can do that by executing:

```bash
npm install wdio-jira-service --save-dev
```

Instructions on how to install `WebdriverIO` can be found [here.](http://webdriver.io/guide/getstarted/install.html)

## Configuration

In order to use the service you need to set `jiraHost`, `jiraUser`, `jiraPassword`, `jiraFailureId`, `jiraFailureMessage`, `jiraSuccessId`, `jiraSuccessMessage`  in your `wdio.conf.js` file. You also need to set a value for `key` in each of your spec files. The service passes or fails a specifed JIRA issue based on the the results of running a spec file. A spec file is successful/passed only if there are no test failures encountered. Also of note: currently there can only be a one-to-one spec file -> JIRA issue relationship. 

// wdio.conf.jsy
export.config = {
  // ...
  services: ['jira'],
  jiraHost: 'https://myteam.atlassian.net'
  jiraUser: 'myjirauser',
  jiraPassword: 'mypassword',
  jiraFailureId: 'idNumber'
  jiraFailureMessage: 'Test failed!' // Also a good place to @ a specific user / group on test failures or specify associated build numbers.
  jiraSuccessId: 'idNumber'
  jiraSuccessMessage: 'Test passed!'
  // ...
};
```

## Options

### jiraHost
Your organization's JIRA host. Must be HTTPS.

Type: `String`

### jiraUser
The JIRA account name of the user you are linking to the wdio-jira-service.

Type: `String`

### jiraPassword
The password of the JIRA account you are linking to the wdio-jira-service.

Type: `String`

### jiraFailureId
The JIRA transition ID of your 'failure' status. Responsible for updating the associated JIRA issue in your spec file to a 'failed' status.

Type: `String`

### jiraFailureMessage
A comment the wdio-jira-service will add to your linked JIRA issue when a spec fails.

Type: `String`

### jiraSuccessId
The JIRA transition ID of your 'success' status. Responsible for updating the associated JIRA issue in your spec file to a 'success' status.

Type: `String`

### jiraSuccessMessage
A comment the wdio-jira-service will add to your linked JIRA issue when a spec succeeds.

Type: `String`


### jiraIssue
The JIRA issue key associated with the spec file. Must be set in each spec file. Usually in the format of 'PROJECT-1234'.

Type: `String`


----

For more information on WebdriverIO see the [homepage](http://webdriver.io).
