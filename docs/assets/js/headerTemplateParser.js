const tempolate = `
<header id="header">
<a class="logo" href="index.html">Home</a>
<a class="logo" href="wip.html">Portfolio</a>
<a class="logo" href="https://glaas.itch.io">Games</a>
<a class="logo" href="https://www.artstation.com/glaas">Art</a>
<a class="logo" href="neatstuff.html">Neat stuff I made</a>
<a class="logo" href="aboutme.html">About me / Contact</a>


</header>
`

function showHeader() {

    var ht = document.createElement('div');
    ht.innerHTML = tempolate;

    document.body.prepend(ht);






}

