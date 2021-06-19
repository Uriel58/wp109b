let circle = document.querySelector('.circle');
let moveBy = 10;
window.addEventListener('load', () => {
    circle.style.position = 'absolute';
    circle.style.left = 0;
    circle.style.top = 0;
});
window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            circle.style.left = parseInt(circle.style.left) - moveBy + 'px';
            break;
        case 'ArrowRight':
            circle.style.left = parseInt(circle.style.left) + moveBy + 'px';
            break;
        case 'ArrowUp':
            circle.style.top = parseInt(circle.style.top) - moveBy + 'px';
            break;
        case 'ArrowDown':
            circle.style.top = parseInt(circle.style.top) + moveBy + 'px';
            break;
    }
});
.circle{
    height: 50px;
    width: 500px;
    border-radius: 20%;
    background-color: rgb(142, 143, 192);
}
<html>
    <head>
        <link href="pageAdvance.css" rel="stylesheet">
        <title>game</title>
    </head>
        <body>
     
            <div class="circle"></div>
            <script src="game.js"></script>
        </body>
    
</html>