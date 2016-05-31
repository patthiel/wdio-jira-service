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
    }

    /**
     * update Jira Ticket
     */

    after (failures) {

        this.jiraIssue = global.jiraIssue;

        var self = this;

        var boundTransition = transitionIssue.bind(null, self.jiraUser, self.jiraPassword, self.jiraHost, self.jiraIssue);

        function updateTicket(done) {
            if (self.failures !== 0) {
                boundTransition(self.jiraFailureId, self.jiraFailureMessage, done)
            } else {
                boundTransition(self.jiraSuccessId, self.jiraSuccessMessage, done)
            }
        }
        updateTicket(x => console.log('Run'));
    }
}

export default JiraService
