import { _decorator, Component, Graphics, UITransform } from 'cc';
const { ccclass, property, executeInEditMode } = _decorator;

@ccclass('circle')
@executeInEditMode(true)
export class circle extends Component {
    start() {
        const g = this.getComponent(Graphics);
        const t = this.getComponent(UITransform)
        g.circle(this.node.position.x, this.node.position.y, t.width)
        g.fill();
    }

    update(deltaTime: number) {

    }
}


