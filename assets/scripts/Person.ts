import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Person')
export class Person extends Component {

    @property
    private swordCount = 0

    start() {

    }

    update(deltaTime: number) {
        
    }
}


