document.getElementById("paragraph").textContent = "hellos, world";
var element = document.createElement('p');
element.textContent = "hello, little one";
document.body.appendChild(element);//used in addind a newly created element to the DOM
console.log(document.body);
var canvas = document.createElement('canvas');//creating a canvas
canvas.width = 500;//defining isolation: 
canvas.height = 250;
var ctx = canvas.getContext('2d');
ctx.font = '50px Cursie';
ctx.fillText("hello my little one", 50, 50);
document.body.appendChild(canvas);
//create an svg element container with defined dimensions
var svg = document.getElementNS('http://www.w3.org/2000/svg', 'svg');
svg.width = 500;
svg.height = 50;
//build text element
var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
text.setAttribute('x', '0');
text.setAttribute('y','50');
text.style.fontfamily = 'Times New Roman';
text.style.fontsize = '50';
text.textContent = 'hey old one';
svg.appendChild(text);
document.body.appendChild(svg);