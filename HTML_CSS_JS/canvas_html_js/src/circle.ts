export class Circle {

    private xCoord: number;
    private yCoord: number;
    private radius: number;
    private color: string;
    private dx: number;
    private dy: number;
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;

    constructor(x: number, y: number, r: number, color: string, dx: number, dy: number, canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        this.xCoord = x;
        this.yCoord = y;
        this.radius = r;
        this.color = color;
        this.dx = dx;
        this.dy = dy;
        this.canvas = canvas;
        this.context = ctx;
    }

    public clearCanvas(): void {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }

    public drawCircle(): void {
        this.context.beginPath();
        this.context.fillStyle = this.color;
        this.context.arc(this.xCoord, this.yCoord, this.radius, 0, 2 * Math.PI);
        this.context.fill();
        this.context.closePath();
    }

    update(): void {
        if (this.xCoord + this.radius > this.canvas.width || this.xCoord - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.yCoord + this.radius > this.canvas.height || this.yCoord - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.xCoord += this.dx;
        this.yCoord += this.dy;
    }

}