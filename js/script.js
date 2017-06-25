$( document ).ready(function() {

    var scope = new Webscope($(".scope")[0], -1, 1, 100); //html5 canvas, miny, minx, maxbuf

    //set data & draw
    scope.buf = [1, 0.2, 0.5, 0.3, 0, 1, 0.8, 0.5, -0.3, 0];
    scope.draw();

    //pushing data afterwards..
    setTimeout(function(){
	//
	setInterval(function(){
	    scope.push(Math.random()-0.5);
	    scope.draw();
	}, 50);
    }, 1000);

});
