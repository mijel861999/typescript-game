import { Vector } from '../types'


export class Ball {
public image: HTMLImageElement;
    public pos: object;
    public width: number
    public height: number

    constructor(image: HTMLImageElement, pos: object, width: number, height: number) {
        this.image = image
        this.pos = pos
        this.width = width;
        this.height = height
    }
}