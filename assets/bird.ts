import { _decorator, BoxCollider2D, Collider2D, Component, Contact2DType, ICollisionEvent, Node, RigidBody, RigidBody2D, Vec2, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('bird')
export class bird extends Component {
    start() {
        // 获取刚体
        let rbody = this.getComponent(RigidBody2D)
        console.log("================",rbody)
        // 力，会累加
        // rbody.applyLinearImpulseToCenter(new Vec2(5, 0),true)

        //速度
        rbody.linearVelocity = new Vec2(5,0);


        const bbody = this.getComponent(BoxCollider2D);
        bbody.enabled = true;
        bbody.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
    }

    update(deltaTime: number) {

    }



     onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: any) {
        console.log('碰撞开始！', selfCollider.tag);
        const worldManifold = contact.getWorldManifold();
        console.log("碰撞法线:", worldManifold.normal.x, worldManifold.normal.y);
        console.log("碰撞点:", worldManifold.points[0]);



       
    }


}


