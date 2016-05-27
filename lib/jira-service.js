import { transitionIssue } from './jira.js'; 

class JiraService {

    onPrepare (config) {
        this.jiraUser = config.jiraUser;
        this.jiraPassword = config.jiraPassword;
        this.jiraHost = config.jiraHost;
        this.jiraFailureId = config.jiraFailureId;
        this.jiraFailureMessage = config.jiraFailureMessage;
        this.jiraSuccessId = config.jiraSuccessId;
        this.jiraFailureMessage = config.jiraSuccessMessage;
    }

    /**
     * update Jira Ticket
     */

    after (failures) {

        this.jiraIssue = jiraIssue || undefined;

        function jiraService(done) {
            if (failures !== 0) {
                return transitionIssue(this.jiraIssue, this.jiraFailureId, this.jiraFailureMessage, function(){
                    done();
                });
            } else {
                return transitionIssue(jiraIssue, this.jiraSuccessId, this.jiraSuccessMessage, function(){
                    done();
                });
            }
        }
    }
}

export default JiraService
