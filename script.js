
//Send Message to Background
chrome.runtime.sendMessage({name: "fetchWords"}, (response) => {
    //Wait for response

    // console.log("response", response);
    // console.log("response json", JSON.parse(response));

    //Parse the response
    resJson = JSON.parse(response);

    //Show it on the page
    document.querySelector('h1').innerHTML = resJson.word;
    document.querySelector('p').innerHTML = resJson.definitions[0].text;

});