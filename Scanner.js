var keys = ' ';
document.onkeydown = function (evt) {
    keys += evt.key;
    document.getElementById("myText").innerText = keys;
};
