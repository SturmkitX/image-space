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
}

var btn = document.getElementById("test-jpa");
var lista = document.getElementById("test-list");
var search_field = document.getElementById("test-field");

//console.log(JSON.stringify(lista.childNodes));
//console.log(JSON.stringify(lista.children));
//btn.onclick = function() {
//    sendRest("GET", "/user/t", null, function(req) {
//        alert(req.responseText);
//    });
//};

search_field.oninput = function() {
    if (search_field.value.length < 3) {
        return;
    }

    sendRest("GET", "/user/search/" + search_field.value, null, function(req) {
        var users = JSON.parse(req.responseText);
        lista.innerHTML = "";
        for (var i=0; i < users.length; i++) {
            var li = document.createElement("li");
            li.innerHTML = users[i].name;
            lista.appendChild(li);
        }
    });
}