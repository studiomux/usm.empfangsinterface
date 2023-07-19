// Draw Canvas

// Set canvas
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

resizeWindow();

// Default position
var DefaultPos = { x: 0, y: 0 };

window.addEventListener("resize", resizeWindow);

// document.addEventListener("mousemove", draw);
// document.addEventListener("mousedown", setPosition);
// document.addEventListener("mouseenter", setPosition);


document.addEventListener("touchmove", draw);
document.addEventListener("touchstart", setPosition);
document.addEventListener("touchenter", setPosition);


function setCanvasBG() {
    ctx.beginPath();
    ctx.rect(0, 0, c.width, c.height);
    ctx.fillStyle = "#1abc9c";
    ctx.fill();
}

// Initialize canvas items
setCanvasBG(); // Background color

// Window resize
function resizeWindow() {
    c.width = window.innerWidth;
    c.height = window.innerHeight;
    setCanvasBG();
    document.querySelectorAll("p").forEach(function (p) {
        p.style.display = "block";
    });
}

// New mouse event position
function setPosition(e) {
    DefaultPos.x = e.clientX;
    DefaultPos.y = e.clientY;
}

// Drawing canvas object
function draw(e) {
    // Left click define
    if (e.buttons !== 1) return;

    ctx.beginPath(); // Path begin
    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.strokeStyle = "white";

    ctx.moveTo(DefaultPos.x, DefaultPos.y);
    setPosition(e);
    ctx.lineTo(DefaultPos.x, DefaultPos.y);

    ctx.stroke();
}

// Save canvas
document.getElementById("save").addEventListener("click", function () {
    var html = " ";
    html += "<img src='" + c.toDataURL() + "' alt='from canvas'/>";
    var pageStyle = "<style>body{margin:0; padding: 0;}</style>";
    var tab = window.open();
    tab.document.write(html + pageStyle);
});

document.querySelectorAll("canvas, p").forEach(function (element) {
    element.addEventListener("mousedown", function () {
        document.querySelectorAll("p").forEach(function (p) {
            p.style.display = "none";
        });
    });
});

// Clear canvas
document.getElementById("clear").addEventListener("click", function () {
    ctx.clearRect(0, 0, c.width, c.height);
    setCanvasBG();
    document.querySelectorAll("p").forEach(function (p) {
        p.style.display = "block";
    });
});