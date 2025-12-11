import { _decorator, BoxCollider2D, Collider2D, Component, Contact2DType, director, ERaycast2DType, Node, PhysicsSystem2D, v2, v3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('shexian')
export class shexian extends Component {

    dir = v2(0,1);

    start() {

        const bbody = this.getComponent(BoxCollider2D);
        bbody.enabled = true;
        bbody.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);

    }

    onLoad(){
        // 启用物理系统（如果尚未启用）
        if (!PhysicsSystem2D.instance.enable) {
            PhysicsSystem2D.instance.enable = true;
        }
    }

    update(deltaTime: number) {

        this.node.x += this.dir.x * 100 *deltaTime;
        this.node.y += this.dir.y * 100 *deltaTime;
        

        

        // 打出一条射线
        const res = PhysicsSystem2D.instance.raycast(this.node.worldPosition, v3(this.node.x, this.node.y + this.dir.y * 500), ERaycast2DType.Closest);
        console.log("res.length",res.length)
        if (res.length > 0){
            this.dir.y *= -1;
        }
        




        }

        onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D) {

            console.log('碰撞开始！',selfCollider.tag);//selfCollider.tag获取的是碰撞标签
            // if(selfCollider.tag == 2){
            //     this.node.destroy();
            // }
            
            
        }
    
        onEndContact(selfCollider: Collider2D, otherCollider: Collider2D) {
            console.log('碰撞结束！');
        }
        
}


