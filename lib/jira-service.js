import { transitionIssue } from './jira.js'; 

class JiraService {

    onPrepare (config) {
        this.jiraUser = config.jiraUser;
        this.jiraPassword = config.jiraPassword;
        this.jiraHost = config.jiraHost;
        this.jiraFailureId = config.jiraFailureId;
        this.jiraFailureMessage = config.jiraFailureMessage;
        this.jiraSuccessId = config.jiraSuccessId;
        this.jiraSuccessMessage = config.jiraSuccessMessage;
        this.jiraIssue = global.jiraIssue;
    }

    /**
     * update Jira Ticket
     */

    after (failures) {

        console.log(this);

        var boundTransition = transitionIssue.bind(null, this.jiraUser, this.jiraPassword, this.jiraHost, this.jiraIssue);

            if (failures !== 0) {
                boundTransition(this.jiraFailureId, this.jiraFailureMessage)
            } else {
                boundTransition(this.jiraSuccessId, this.jiraSuccessMessage)
            }
    }
}

export default JiraService
