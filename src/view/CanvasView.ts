// Types
import { Brick } from "../sprites/Brick";
import { Ball } from "../sprites/Ball";
import { Paddle } from "../sprites/Paddle";

export class CanvasView {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D | null;
  private scoreDisplay: HTMLObjectElement | null;
  private start: HTMLObjectElement | null;
  private info: HTMLObjectElement | null;

  constructor(canvasName: string) {
    this.canvas = document.querySelector(canvasName) as HTMLCanvasElement;
    this.context = this.canvas.getContext("2d");
    this.scoreDisplay = document.querySelector("#score");
    this.start = document.querySelector("#start");
    this.info = document.querySelector("#info");
  }

  clear(): void {
    this.context?.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  // No entiendo esta función :c
  initStartButton(startFunction: (view: CanvasView) => void): void {
    this.start?.addEventListener("click", () => startFunction(this));
  }

  drawScore(score: number): void {}
}
