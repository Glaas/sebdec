const headerTemplate = document.querySelector('headerTemplate');
const node = document.importNode(headerTemplate.content, true)
document.body.appendChild(node);

function showHeader(){
    const headerTemplate = document.querySelector('headerTemplate');
    var temp = document.getElementById("headertemp");
    var clon = temp.content.cloneNode(true);
    document.body.appendChild(temp);
    document.body.appendChild(clon);   
     document.body.appendChild(tempcontent);



}

