let form = document.querySelector('form');
let submit = document.getElementById('submit');
form.onsubmit = () => {
    return false
};
submit.onclick = () => {
    let cookies = document.cookie;
    let tmp = cookies.split(';');
    for (let i = 0; i < tmp.length; i++) {
        let key = tmp[i].split('=');
        document.cookie = key[0] + "=; expires = Thu, 01 Jan 1970 00:00:00 UTC";
    }
    form.onsubmit = () => {
        return 1
    };
}