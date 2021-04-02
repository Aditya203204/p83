canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("3d");
color="red";
widthofline=2;
var last_position_of_x,last_position_of_y;
var width=screen.width;
new_width=screen.width-70;
new_height=screen.height-300;
if (width<992) {
    document.getElementById("mycanvas").width=new_width;
    document.getElementById("mycanvas").height=new_height;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e)
{
    color = document.getElementById("color").value;
    widthofline=document.getElementById("widthofline").value;
    last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
    last_position_of_y=e.touches[0].clientY-canvas.offsetTop;
   
}

canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e)
{
    currentpositionoftouchx=e.clientX-canvas.offsetLeft;
    currentpositionoftouchy=e.clientY-canvas.offsetTop;
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=widthofline;
        ctx.moveTo(last_position_of_x,last_position_of_y);
        ctx.lineTo(currentpositionoftouchx,currentpositionoftouchy);
        ctx.stroke();
        last_position_of_x=currentpositionoftouchx;
        last_position_of_y=currentpositionoftouchy;
}
function clearArea()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
