import { _decorator, Component, Prefab, Node, instantiate, UITransform } from 'cc';
const { ccclass, property, executeInEditMode } = _decorator;
@ccclass('Person')
export class Person extends Component {

    @property
    private swordCount = 0

    @property({
        type: Prefab
    })
    private swordPrefab = null

    @property
    public swordSpeed = 3 // 3s/r

    @property
    public direction = true // true 顺时针

    private swords: Node[] = []

    private Transform: UITransform

    start() {
        this.Transform = this.getComponent(UITransform)

        for (let i = 0; i < this.swordCount; i++) {
            const node = instantiate<Node>(this.swordPrefab)

            const deg = Math.PI * 2 * i / this.swordCount
            const x = Math.sin(deg) * this.Transform.width / 2
            const y = Math.cos(deg) * this.Transform.width / 2
            node.setPosition(x, y, 0)
            node.angle = -360 * i / this.swordCount
            this.swords.push(node)
            this.node.addChild(node)
        }
    }

    update(deltaTime: number) {
        this.rotate(deltaTime)
    }
    rotate(deltaTime: number) {
        if (this.direction) {
            this.node.angle += deltaTime * 360 / this.swordSpeed
        } else {
            this.node.angle -= deltaTime * 360 / this.swordSpeed
        }
    }
}


