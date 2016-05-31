export function transitionIssue(user, password, jiraHost, key, transitionId, commentBody, callback) {

    if (!user || !password || !jiraHost || !transitionId ) {
        console.log('Missing required field!');
        return;
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
        hostname: jiraHost,
        port: 443,
        path: '/rest/api/2/issue/' + key + '/transitions',
        method: "POST",
        headers: {
            'Authorization': 'Basic ' + new Buffer(user + ':' + password).toString('base64'),
            "Content-Type": "application/json",
        },
        agent: false
    };

    var req = new https.request(options, function(res) {

    });

    req.end(body, callback);
}
