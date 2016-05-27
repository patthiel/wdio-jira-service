const jobDataProperties = ['name', 'tags', 'public', 'build', 'd-data']
import { transitionIssue } from './jira.js'; 

class JiraService {

    /**
     * update Jira Ticket
     */
    after (failures) {
        if (failures !== 0) {
            return transitionIssue(this.jiraIssue, this.jiraFailureId, this.jiraFailureMessage);
        } else {
            return transitionIssue(this.jiraIssue, this.jiraSuccessId, this.jiraSuccessMessage);
        }
    }
}

export default JiraService
