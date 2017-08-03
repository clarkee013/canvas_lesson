window.addEventListener('load', function(){
    var canvas = document.getElementById("main-canvas");
    // console.log("canvas:", canvas);

    var context = canvas.getContext("2d");
    console.log(context);

    // // squares or rectangles
    // context.fillStyle = 'blue';
    // context.fillRect(10, 10, 50, 50);

    // // lines with thickness and colours
    // context.beginPath();
    // context.moveTo(100, 100);
    // context.lineTo(100, 200);
    // context.strokeStyle = "rebeccapurple";
    // context.lineWidth = 8;
    // context.stroke();

    // // trianlges
    // context.beginPath();
    // context.moveTo(200, 200);
    // context.lineTo(200, 300);
    // context.lineTo(100, 300);
    // context.lineTo(200, 200);
    // context.closePath();
    // // .fill takes the fill style from above
    // context.fill();
    // context.stroke();

    // //circles - have to draw 2 arcs and join them together
    // context.beginPath();
    // // 5 arguments required for arc: context.arc(x, y, radius, startAngle, endAngle, (anticlockwise) ---- the angles are in radians not degrees, so PIE TT is involved here.)
    // context.arc(400, 100, 50, 0, 3 * Math.PI / 2, true);
    // context.strokeStyle = "black";
    // context.lineWidth = 1;
    // context.stroke();

    // //context.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise);
    // context.beginPath();
    // context.ellipse(400, 300, 50, 30, 0, 0, Math.PI * 2);
    // context.stroke();

    canvas.addEventListener('click', function(event){
        console.log(event.layerX, event.layerY);
        drawCircle(event.layerX, event.layerY, context);
        //instead of event.x and event.y use layer as this means whereever the canvas is moved to itll still be 0,0 coords at the top left.
        // drawImage(event.layerX, event.layerY, context);
    })

        var changecolour = function() {
        console.log(this.value);
        context.fillStyle = this.value;
    }

    var colourPicker = document.getElementById("input-colour");
    colourPicker.addEventListener('change', changecolour);

})

var drawImage = function(x, y, context){
    var img = document.createElement("img");
    img.src = "http://emojis.slackmojis.com/emojis/images/1457563042/312/doge.png";
    
    context.drawImage(img, x, y, 90, 90);
}

var drawCircle = function(x, y, context){
    context.beginPath();
    context.arc(x, y, 10, 0, 2 * Math.PI);
    context.fill();
}



