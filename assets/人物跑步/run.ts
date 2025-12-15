import { _decorator, Component, Node,Animation } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('run')
export class run extends Component {
    start() {
        //得到动画组件
        let ani = this.getComponent(Animation);
        ani.play("run");
        // ani.pause(); //暂停
        // ani.resume();
        // ani.stop();//停止
    }

    update(deltaTime: number) {
        
    }

    run(){

    }
}


