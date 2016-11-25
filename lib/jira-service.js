import { transitionIssue } from './jira.js'

class JiraService {
    /**
     * update Jira Ticket
     */
    after (failures) {
        var boundTransition = transitionIssue.bind(
            null, browser.options.jiraConfig.username,
            browser.options.jiraConfig.password, browser.options.jiraConfig.host, global.jiraIssue)

        if (failures !== 0) {
            return boundTransition(browser.options.jiraConfig.failureId, browser.options.jiraConfig.failureMessage)
        } else {
            return boundTransition(browser.options.jiraConfig.successId, browser.options.jiraConfig.successMessage)
        }
    }
}

export default JiraService

