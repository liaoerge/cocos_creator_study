import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('request')
export class request extends Component {
    start() {

        let url  = "https://api.douban.com/v2/movie/top250?/start=25&count=25";
        //请求
        let request = new XMLHttpRequest();
        request.open("GET",url,true)//异步 true 同步 false
        request.onreadystatechange = ()=>{
            //请求状态改变
            //请求结束后，获取信息
            if(request.readyState == 4 && request.status == 200){
                console.log("请求完成");
                console.log(request.responseText);
            } 
    }
    request.send();
}

    update(deltaTime: number) {
        
    }
}


