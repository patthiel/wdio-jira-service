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

        this.jiraIssue = jiraIssue; // where jiraIssue is a global variable defined by the user in each spec file

        function jiraService(done) {
            if (failures !== 0) {
                return transitionIssue(jiraIssue, this.jiraFailureId, this.jiraFailureMessage, function(){
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
