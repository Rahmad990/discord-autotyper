const dc = require('./discord');
const { sig } = require("./utils/sig");

(async () => {
    sig();

    await dc.initialize();
    // here is where you enter your email and password
    await dc.login('rahmadmads73@gmail.com', 'aduhakulupa7')

    await dc.likeChannelProcess('938390755645472808', '938391740132511785', 1) // 1 = 1 minute

    debugger;

})();
