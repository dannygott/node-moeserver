var server=require('node-http-server');
var ws = require("nodejs-websocket");
var v4l2camera = require("v4l2camera");
var response
var cam = new v4l2camera.Camera("/dev/video0");

// camera memes


    if (cam.configGet().formatName !== "MJPG") {
      console.log("NOTICE: MJPG camera required");
      process.exit(1);
    }
    cam.start();

    // end camera memes


    server.deploy(
        {
            port:80,
            root:'~/imports'
        }
    );


    var server = ws.createServer(function (conn) {
    	console.log("New connection")
    	conn.on("text", function (str) {
    		console.log("Received "+str)
        response = JSON.parse(str)
// gonna replace this with a switch but im lazy

        if (response.gripcam == true) {
          // settings values for grip mode
          cam.controlSet(id, value)
          cam.controlSet(id, value)
          cam.controlSet(id, value)
          cam.controlSet(id, value)
          cam.controlSet(id, value)
          cam.controlSet(id, value)

        }else if(response.gripcam == false){
          // settings for not
          cam.controlSet(id, value)
          cam.controlSet(id, value)
          cam.controlSet(id, value)
          cam.controlSet(id, value)
          cam.controlSet(id, value)
          cam.controlSet(id, value)
        }else {
          console.log("idk wut u say");
        }

    	})
    	conn.on("close", function (code, reason) {
    		console.log("Connection closed")
    	})
    }).listen(8001)
