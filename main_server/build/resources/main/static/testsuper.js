function sendRest(method, path, data, readyFunction) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
             readyFunction(this);
         }
    };
    xhttp.open(method, path, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(data);

    return xhttp;
}

var btn = document.getElementById("test-jpa");
var lista = document.getElementById("test-list");
//alert(lista.childNodes.length);
//alert(lista.children.length);
console.log(JSON.stringify(lista.childNodes));
console.log(JSON.stringify(lista.children));
btn.onclick = function() {
    sendRest("GET", "/user/t", null, function(req) {
        alert(req.responseText);
    });
};