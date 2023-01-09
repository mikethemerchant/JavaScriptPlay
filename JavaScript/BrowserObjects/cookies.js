function setCookie(cookieName, cookieValue, expirationDate) {
    const calculatedDate = new Date();
    calculatedDate.setTime(calculatedDate.getTime() + (expirationDate * 24 * 60 * 60 * 1000) );
    let expires = "expires=" + calculatedDate.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

function getCookie(cookieName) {
    let name = cookieName + "=";
    let cookieArray = document.cookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        let c = cookieArray[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if(c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function showCookies() {
    alert(document.cookie);
}

function setNewCookie() {
    document.cookie = "username=Mike";
}

function deleteCookies() {
    removeItem("username","/");
}

function removeItem(sKey, sPath, sDomain) {
    document.cookie = encodeURIComponent(sKey) + 
                  "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + 
                  (sDomain ? "; domain=" + sDomain : "") + 
                  (sPath ? "; path=" + sPath : "");
}

function checkCookie() {
    
    let user = getCookie("username");
    if (user != "") {
        alert("Welcome " + user);
    } else {
        user = prompt("Please enter your name:", "");
        setCookie("username", user, 365);
    }
    
}