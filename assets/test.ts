import { _decorator, Component, Contact2DType,IPhysics2DContact ,find, Label,Color,Vec3 ,UITransform ,SpriteAtlas, Node, Sprite, Prefab, instantiate, resources, SpriteFrame,EventMouse,KeyCode,Input,input,EventKeyboard, director,physics,PhysicsSystem2D ,BoxCollider2D,BoxCollider,Collider,Collider2D    } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('test')
export class test extends Component {

    @property(Label)
    label: Label = null;

    @property
    text: string = 'hello';

    //预设体
    @property(Prefab)
    Pre:Prefab = null;
    private isWPressed: boolean = false;
    private isSPressed: boolean = false;
    private isAPressed: boolean = false;
    private isDPressed: boolean = false;


    //最开始初始化调用
    onLoad() {
        // this.label.string = this.text;
        console.log("onLoad");
    }



    //多次执行
    protected onEnable(): void {
        console.log("onEnable");
    }
    //第二个初始化调用
    start() {
        console.log("start");
        // //获得子节点
        // /* this.node.children[0];  *///根据坐标来取字节点
        // this.node.getChildByName("Label");//通过子节点名字查找
        // find("Canvas/Label");//通过路径查找
        // //获得父节点
        // this.node.getParent();
        // this.node.setParent(dd);设置一个父节点
        // this.node.removeAllChildren();//删除所有子节点
        // this.node.removeChild(dd);//删除一个子节点
        // this.node.removeFromParent();//从父节点里面移除掉
        
        //访问位置
        // this.node.x = 100;
        // this.node.y = 100;
        // this.node.setPosition(100,100);
        // this.node.setPosition(new Vec3(3,4));

        //旋转
        // this.node.setRotationFromEuler(0,0,90);
        //缩放
        // this.node.setScale(2,2,2);
        //锚点
        // this.node.anchorx = 0.5;
        //修改颜色
        // this.label.color = Color.RED;

        //节点开关
        // this.node.active = false;

        //组件开关
        // this.enabled = false;

        //获取组件
        // this.getComponent(Sprite); //填写类型名字
        // this.getComponentInChildren(Sprite);//找子物体拿到对应类型的组件

        // 实际使用
        // const map = find("Canvas/map");
        //    if (map) {
        //         console.log("找到 ditu 节点:", map);
        //         // 可以对 dituNode 进行操作，比如修改位置、旋转等
        //         //旋转
        //         map.setRotationFromEuler(0,0,360);
        //         //位置
        //         map.setPosition(100,100);
        //         // 缩放
        //         map.setScale(2,2,2);
                
        //         // 锚点
        //         const uiTransform = map.getComponent(UITransform);
        //         uiTransform.anchorX = 0.5;
        //         uiTransform.anchorY = 0.1;



        //     } else {
        //         console.warn("未找到 ditu 节点");
        //     }
        // //修改颜色
        // const labelNode = find("Canvas/map/Label");
        // const label = labelNode.getComponent(Label);
        // label.color = Color.RED;
        // label.string = "你好啊";
        // console.log("Label 颜色已设置为红色");

        // //创建节点
        // let node = new Node("newNode");
        // //添加组件
        // node.addComponent(Sprite);

        // //实例预设体
        // let node = instantiate(this.Pre);
        // // 设置父节点
        // node.setParent(this.node);
        
        //动态加载资源
        // let self = this;
        // resources.load("test/land/spriteFrame", SpriteFrame, (err: Error, sp: SpriteFrame) => {
        //     if (!err) {
        //         // 获取或添加 Sprite 组件
        //         let spriteComponent = self.getComponent(Sprite);
        //         if (!spriteComponent) {
        //             spriteComponent = self.addComponent(Sprite);
        //         }
                
        //         spriteComponent.spriteFrame = sp;
        //     } else {
        //         console.error("加载资源失败:", err);
        //     }
        // });

    // 加载图集
        // resources.load("test/texture", SpriteAtlas, (err: Error, atlas: SpriteAtlas) => {
        //     if (!err) {
        //         // 获取 Sprite 组件
        //         let spriteComponent = self.getComponent(Sprite);
        //         if (!spriteComponent) {
        //             spriteComponent = self.addComponent(Sprite);
        //         }
        //         if (spriteComponent) {
        //             // 获取图集中的特定精灵帧
        //             const spriteFrame = atlas.getSpriteFrame("bg_day");
        //             if (spriteFrame) {
        //                 spriteComponent.spriteFrame = spriteFrame;
        //             } else {
        //                 console.error("未找到指定的精灵帧 bg_day");
        //             }
        //         } else {
        //             console.error("节点没有 Sprite 组件");
        //         }
        //     } else {
        //         console.error("加载图集失败:", err);
        //     }
        // });
            // //加载第二个场景
        // director.loadScene("game2",function(){
        //     //当前已经加载到新的场景里了可以在这里执行逻辑
        // });

        // // 大型游戏加载方法
        // director.preloadScene("game2",function(){
        //     //这个场景加载到内存了，但是还没有用
        //     director.loadScene("game2",function(){
        //         //当前已经加载到新的场景里了可以在这里执行逻辑
        //     });

        // });


        // director.addPersistRootNode(this.node);//添加一个常驻节点
        // director.removePersistRootNode(this.node);//移除一个常驻节点


        //监听鼠标事件
        // MOUSE_DOWN鼠标点击
        // MOUSE_ENTER鼠标进入
        // MOUSE_MOVE鼠标移动
        // MOUSE_LEAVE鼠标离开
        // MOUSE_UP鼠标抬起
        // MOUSE_WHEEL鼠标滚轮
        // this.node.on(Node.EventType.MOUSE_DOWN,function(event){
        //     console.log("鼠标点击了" + event.getLocation());
        //     if (event.getButton() == EventMouse.BUTTON_RIGHT){
        //         console.log("鼠标点击了右键");
        //     }
        // });

        //监听键盘事件
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        input.on(Input.EventType.KEY_UP, this.onKeyUp, this);

        // 触摸事件
        //TOUCH_START开始触发
        //TOUCH_MOVE移动触发
        //TOUCH_END结束触发
        //TOUCH_CANCEL异常事件
        // let self = this;//匿名函数调用需要this指向
        // this.node.on(Node.EventType.TOUCH_START,function(event){
        //     // console.log("触摸事件" + event.getID()); //通过编码可以获取多个触摸点
        //     // self.node.emit("myEvent1");自定义事件调用
        // });

        // 监听自定义事件
        // this.node.on("myEvent1",function(event){ 
        //     console.log("自定义事件1");
        // });

    }

    private onBeginContact(contact: IPhysics2DContact, self: Collider2D, other: Collider2D): void {
        console.log("碰撞开始！对象:", other.node?.name);
    }


    onKeyDown(event: EventKeyboard) {
    switch(event.keyCode) {
        case KeyCode.KEY_A:
            console.log('A键被按下');
            this.isAPressed = true;
            break;
        case KeyCode.KEY_W:
            console.log('W键被按下');
            this.isWPressed = true;
            break;
        case KeyCode.KEY_S:
            console.log('S键被按下');
            this.isSPressed = true;
            break;
        case KeyCode.KEY_D:
            console.log('D键被按下');
            this.isDPressed = true;
            break;
        case KeyCode.SPACE:
            console.log('空格键被按下');
            break;
    }
}

    onKeyUp(event: EventKeyboard) {
        console.log("onKeyUp===============================================");
        switch (event.keyCode) {
            case KeyCode.KEY_A:
                this.isAPressed = false; // 松开时重置
            break;
            case KeyCode.KEY_W:
                this.isWPressed = false; // 松开时重置
            break;
            case KeyCode.KEY_S:
                this.isSPressed = false; // 松开时重置
            break;
            case KeyCode.KEY_D:
                this.isDPressed = false; // 松开时重置
            break;
        }
    }

    //每帧调用 
    update(deltaTime: number) {
        // console.log("update================================================");
        const bird0_0 = find("Canvas/bg_day/bird0_0");
        if (!bird0_0) return;
        const currentPos = bird0_0.getPosition();
        let newX = currentPos.x;
        let newY = currentPos.y;
        const speed = 5;

        if (this.isAPressed) {
            newX -= speed; // 向左
        }
        if (this.isDPressed) {
            newX += speed; // 向右
        }
        if (this.isWPressed) {
            newY += speed; // 向上
        }
        if (this.isSPressed) {
            newY -= speed; // 向下
        }
        bird0_0.setPosition(newX, newY);
    }
    
    lateUpdate(){
        // console.log("lateUpdate");
    }

    onDisable(){
        console.log("onDisable");
    }

    test(){
        console.log("test1111111111111");
    }

    //销毁时调用
    protected onDestroy(): void {
        console.log("onDestroy");
    }


}






