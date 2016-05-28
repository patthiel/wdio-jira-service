export function transitionIssue(key, transitionId, commentBody, callback) {

    if (!this.jiraUser || !this.jiraPassword || !this.jiraHost || !this.jiraFailureId || !this.jiraSuccessId ) {
        return
    }

    var https = require('https');

    var body = JSON.stringify({
        "update": {
            "comment": [{
                "add": {
                    "body": commentBody
                }
            }]
        },
        "transition": {
            "id": transitionId
        }
    });

    var options = {
        hostname: this.jiraHost,
        port: 443,
        path: '/rest/api/2/issue/' + key + '/transitions',
        method: "POST",
        headers: {
            'Authorization': 'Basic ' + new Buffer(this.jiraUser + ':' + this.jiraPassword).toString('base64'),
            "Content-Type": "application/json",
        },
        agent: false
    };

    var req = new https.request(options, function(res) {

    });

    req.end(body, callback);
}
