
//Listen for messages
chrome.runtime.onMessage.addListener((msg, sender, response) => {
    if (msg.name === 'fetchWords') {

        const apiKey = 'ameintpt6fql5e8w98pr4wg71aha263w78oh28jaffbu14tze';
        const dateStr = new Date().toISOString().slice(0, 10); //2020-01-01
        const apiCall = 'https://api.wordnik.com/v4/words.json/wordOfTheDay?date=' + dateStr + '&api_key=' + apiKey;
        //we call API...
        //wait for response...
        fetch(apiCall).then(r => r.text()).then(result => {
            //send the response
            response(result)
        })
    }
    //keep the message channel open (indicate you wish to send a response asynchronously)
    return true;
});