class Enemy {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
    }
    draw() {
        let img = document.getElementById('enemy');
        this.ctx.drawImage(img, this.x, this.y, this.width, this.height);
    }


}