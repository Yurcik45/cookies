const allCookies = document.cookie;

//console.log("getCookie(cookieName)")
//console.log("checkCookie(cookieName)")
//console.log("setCookie(cookieName,  value, expirationDays)")
//console.log("deleteCookie(cookieName)")

function getCookie(cookieName) {
    const name = cookieName + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    console.log("document.cookie", document.cookie)
    console.log("decodedCookie", decodedCookie)
    console.log("document.cookie === decodedCookie", document.cookie === decodedCookie)
    const cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return "";
}

function checkCookie(cookieName) {
    const value = getCookie(cookieName);
    return value !== ""
}

function setCookie(name, value, expirationDays) {
    const date = new Date();
    date.setTime(date.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + "; " + expires + "; path=/";
}

function deleteCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
