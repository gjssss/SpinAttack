import { _decorator, Component, Node, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Sword')
export class Sword extends Component {

    public speed = 3 // 3s/r
    public direction = true // true 顺时针

    start() {

    }

    update(deltaTime: number) {
        this.rotate(deltaTime)
    }

    rotate(deltaTime: number) {
        if (this.direction) {
            this.node.angle += deltaTime * 360 / this.speed
        } else {
            this.node.angle -= deltaTime * 360 / this.speed
        }
    }
}


