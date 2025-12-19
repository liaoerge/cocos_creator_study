import { _decorator, Component, Node, sys } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('datatest')
export class datatest extends Component {
    start() {
        //键值方式
        //存储数据
        // sys.localStorage.setItem("name", "蝙蝠侠");
        //获取数据
        let name = sys.localStorage.getItem("name");
        console.log("name:",name)
        //移除数据
        sys.localStorage.removeItem("name");

        //清除数据
        sys.localStorage.clear();

    }

    update(deltaTime: number) {
        
    }
}


