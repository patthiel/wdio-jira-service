WDIO JIRA Service
==========

> A WebdriverIO service. It uses the [JIRA REST API](https://docs.atlassian.com/jira/REST/latest/) to transition associated JIRA issues to a `success` or `failure` status, and optionally adds a comment on update.

## Installation

The simplest installation is to keep `wdio-jira-service` as a devDependency in your `package.json`.

```json
{
  "devDependencies": {
    "wdio-jira-service": "^0.1.0"
  }
}
```

You can do that by executing:

```bash
npm install wdio-jira-service --save-dev
```

Instructions on how to install `WebdriverIO` can be found [here.](http://webdriver.io/guide/getstarted/install.html)

## Configuration

In order to use the service you need to add a `jiraConfig` object to your `wdio.conf.js` file.. Add the following keys: `host`, `user`, `password`, `failureId`, `failureMessage`, `successId`, `successMessage`  in your `wdio.conf.js` file. You also need to set a value for `jiraIssue` in each of your spec files. The service passes or fails the specifed JIRA issue based on the the results of running a spec file. A spec file is only successful/passed if it contains no failures. Also of note: currently there can only be a one-to-one spec file -> JIRA issue relationship. 


```js
// wdio.conf.js
export.config = {
  // ...
  services: ['jira'],
  jiraConfig: {
      host: 'myteam.atlassian.net'
      username: 'myjirauser',
      password: 'mypassword',
      failureId: 'idNumber'
      failureMessage: 'Test failed!' // Also a good place to @ a specific user / group on test failures or specify associated build numbers.
      successId: 'idNumber'
      successMessage: 'Test passed!'
  }
  // ...
};
```


## Options

### host
Your organization's JIRA host.

Type: `String`

### username
The JIRA account name of the user you are linking to the wdio-jira-service.

Type: `String`

### password
The password of the JIRA account you are linking to the wdio-jira-service.

Type: `String`

### failureId
The JIRA transition ID of your 'failure' status. Responsible for updating the associated JIRA issue in your spec file to a 'failed' status.

Type: `String`

### failureMessage
A comment the wdio-jira-service will add to your linked JIRA issue when a spec fails.

Type: `String`

### successId
The JIRA transition ID of your 'success' status. Responsible for updating the associated JIRA issue in your spec file to a 'success' status.

Type: `String`

### successMessage
A comment the wdio-jira-service will add to your linked JIRA issue when a spec succeeds.

Type: `String`


### jiraIssue
The JIRA issue key associated with the spec file. Must be set in each spec file. Usually in the format of 'PROJECT-1234'.

Type: `String`


----

For more information on WebdriverIO see the [homepage](http://webdriver.io).
