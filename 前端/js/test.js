function abcd() {
    document.getElementById('test1').value = "222";
}

for (i = 0; i < 10; i++) {
    (function(i) {
        setTimeout(function() {
            console.log(i);
        })
    })(i);

}