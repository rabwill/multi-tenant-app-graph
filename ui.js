async function displayUI() {    
    await signIn();
    // Display info from org
    const orgObj = await getOrg();
    const org=orgObj.value[0];
    var orgName = document.getElementById('displayName');
    orgName.innerText = org.displayName;  

    // Hide login button and initial UI
    var signInButton = document.getElementById('signin');
    signInButton.style = "display: none";
    var content = document.getElementById('content');
    content.style = "display: block";
}
