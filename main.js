// var h = document.createElement('h1')
// var myValue = document.createTextNode('hello world')
// h.appendChild(myValue)
// document.querySelector('h1').appendChild(h)

var ul = document.getElementById('list');
var li;

var addButton = document.getElementById('add');
addButton.addEventListener('click', addItem);

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click', removeItem)



function addItem(){
    var input = document.getElementById('input') ;
    var myValue = input.value;
    var textnode = document.createTextNode(myValue);
    
    if ( myValue === '' ) {
        return false;
        // var empty = document.createElement('p');
        // empty.setAttribute.innerHTML('hello')
        // input.appendChild(empty)
    } else {
        //item no
        
        //create li
        li = document.createElement('li');
        //creat checkbox

        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id', 'check');

        // create label
        var label = document.createElement('label');
        label.setAttribute('for', 'item')

        // add these onto page
        ul.appendChild(label)
        li.appendChild(checkbox)
        label.appendChild(textnode)
        li.appendChild(label)
        ul.insertBefore(li, ul.childNodes[0])

      
        setTimeout(() => {
            li.className = "visual"
        }, 2);

        input.value =""
    }
    
}

function removeItem(){
    li = ul.children;
    for (let index = 0; index < li.length; index++) {
        while ( li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index])            
        }
        
    }
}