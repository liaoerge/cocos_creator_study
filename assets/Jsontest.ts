import { _decorator, Component, Node, sys } from 'cc';
const { ccclass, property } = _decorator;


class Person{
    id:number;
    name:string;
    wugong:string[];
}


@ccclass('Jsontest')
export class Jsontest extends Component {
    start() {
        /*
        json:
        数据格式：json xml csv 写文本
        
        */
       let person: Person = new Person();
       person.id = 10;
       person.name = '李晓燕';
        person.wugong = ["降龙十八掌","独孤九剑"];
       /*
        
        json {}对象，[]数组
        {"id":10,"name":"李逍遥","wugong":["降龙十八掌","独孤九剑"]}
        */

        // 对象 转成json序列化
        let json = JSON.stringify(person)
        console.log("===============1111",json)
        sys.localStorage.setItem("save2",json)

        // json转对象
        let person2: Person = Object.assign(new Person(),JSON.parse(json));
        console.log(person2.name)
    }

    update(deltaTime: number) {
        
    }
}


