import { _decorator, Component, BoxCollider2D, Contact2DType, Collider2D, RigidBody2D } from 'cc';

const { ccclass, property } = _decorator;

@ccclass('pengzhuang')
export class pengzhuang extends Component {

    //需要挂在rigidBody2d刚体组件才能碰撞
    //注册事件在onEnable里面注册
    
    onEnable(){
        const collider = this.getComponent(BoxCollider2D);
        console.log('1 - 脚本开始执行');
        
        if (collider) {
            console.log('2 - 找到碰撞组件');
            
            // 确保碰撞组件已启用
            collider.enabled = true;
            
            // 注册碰撞回调
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            collider.on(Contact2DType.PRE_SOLVE, this.onPreSolve, this);
            collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
            
            console.log('3 - 碰撞监听器已注册');
        } else {
            console.log('2 - 未找到碰撞组件');
        }
    }
    start() {

    }

    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D) {
        console.log('碰撞开始！',selfCollider.tag);//selfCollider.tag获取的是碰撞标签
    }

    onEndContact(selfCollider: Collider2D, otherCollider: Collider2D) {
        console.log('碰撞结束！');
    }

    onPreSolve(selfCollider: Collider2D, otherCollider: Collider2D){
        console.log('持续碰撞中...', selfCollider.tag);
    }


}

