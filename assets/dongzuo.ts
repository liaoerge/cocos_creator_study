import { _decorator, Color, Component, Node, Sprite, tween, UIOpacity, v3, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('dongzuo')
export class dongzuo extends Component {
    private moveTween: any = null;
    start() {
// 使用 moveTo - 移动到绝对位置
    // tween(this.node)
    //     .to(5, { position: new Vec3(200, 200) })//2 秒,移动到200,200坐标
    //     .start();


    // // 或者使用 by 方法实现相对移动 (moveBy)
    // tween(this.node)
    //     .by(2, { position: new Vec3(100, 100, 0) }) // 相当于 moveBy
    //     .start();

    // 2秒旋转到100度
    // tween(this.node)
    //     .by(2, { eulerAngles: new Vec3(0, 0, 100 )}) 
    //     .start();
    

    // // 缩放
    // tween(this.node)
    //     .by(2, { scale: new Vec3(1.5,1.5,0 )}) 
    //     .start();




    //跳跃
    // tween(this.node)
    //     .by(0.5, { position: v3(100, 100, 0) }, { easing: 'quadOut' })
    //     .by(0.5, { position: v3(100, -100, 0) }, { easing: 'quadIn' })
    //     .start();


    // // 闪烁
    // const uiOpacity = this.node.getComponent(UIOpacity);
    // if (!uiOpacity) {
    //     this.node.addComponent(UIOpacity);
    // }
    // tween(this.node.getComponent(UIOpacity))
    //     .to(0.5, { opacity: 0 })      // 半透明
    //     .to(0.5, { opacity: 255 })    // 不透明
    //     .union()                      // 组合动作
    //     .repeatForever()              // 无限重复
    //     .start();

    //淡出
    // const uiOpacity = this.node.getComponent(UIOpacity);
    // if (!uiOpacity) {
    //     this.node.addComponent(UIOpacity);
    // }
    // tween(this.node.getComponent(UIOpacity))
    //     .to(2, { opacity: 0 })  // 2秒内透明度降为0（完全透明）
    //     .start();
    
    //淡入
    // const uiOpacity = this.node.getComponent(UIOpacity) || this.node.addComponent(UIOpacity);
    // uiOpacity.opacity = 0; // 初始状态设为完全透明

    // tween(uiOpacity)
    //     .to(2, { opacity: 255 })  // 2秒内从透明变为不透明
    //     .start();


    //渐变
    const sprite = this.node.getComponent(Sprite);
    if (sprite) {
        tween(sprite)
            .to(1, { color: Color.RED })      // 1秒内变成红色
            .to(1, { color: Color.BLUE })     // 再1秒内变成蓝色
            .to(1, { color: Color.GREEN })    // 再1秒内变成绿色
            .to(1, { color: Color.WHITE })    // 最后变回白色
            .union()
            .repeatForever()
            .start();
    }
















    }












    // 方法1: 停止特定的 tween 实例
        stopMove() {
        if (this.moveTween) {
            this.moveTween.stop();
        }
    }


    update(deltaTime: number) {
        
    }
}


