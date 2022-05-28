function showHeader() {

    var ht = document.createElement('div');
    ht.innerHTML = tempolate;

    document.body.prepend(ht);
}