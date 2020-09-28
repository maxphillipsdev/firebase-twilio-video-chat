const functions = require('firebase-functions');


exports.getToken = functions.https.onRequest((req, res) => {

    if (req.method !== "POST") {
        return res.status(503);
    }

    const username = req.body.username;
    const roomName = req.body.room;

    const AccessToken = require('twilio').jwt.AccessToken;
    const VideoGrant = AccessToken.VideoGrant;

    // Used when generating any kind of tokens
    const twilioAccountSid = functions.config().twilio.account_sid;
    const twilioApiKey = functions.config().twilio.api_key_sid;
    const twilioApiSecret = functions.config().twilio.api_key_secret;

    // Create Video Grant
    const videoGrant = new VideoGrant({
        room: roomName,
    });


    // Create an access token which we will sign and return to the client,
    // containing the grant we just created
    const token = new AccessToken(
        twilioAccountSid,
        twilioApiKey,
        twilioApiSecret,
        {identity: username}
    );
    token.addGrant(videoGrant);

    res.send({token: token.toJwt()});
});
