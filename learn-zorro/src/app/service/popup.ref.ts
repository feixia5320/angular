import { ComponentRef, InjectionToken, ReflectiveInjector, ComponentFactory } from '@angular/core';
import { Subject, Observable } from 'rxjs';
// 用于注入自定义数据到创建的组件中
export const YUP_DATA = new InjectionToken<any>('YUPPopupData');

export class YupRef<T> {
    // 弹窗关闭的订阅
    private afterClose$: Subject<any>;
    // 弹窗引用变量
    private dialogRef: ComponentRef<T>;
    constructor(
        private factory: ComponentFactory<T>,
        private config: any // 传入的自定义数据
    ) {
        this.afterClose$ = new Subject<any>();
        this.dialogRef = this.factory.create(
            ReflectiveInjector.resolveAndCreate([
                {provide: YUP_DATA, useValue: config}, // 注入自定义数据
                {provide: YupRef, useValue: this} // 注入自身，这样就可以在创建的组件里控制组件的关闭等
            ])
        );
    }
    // 提供给外界的对窗口关闭的订阅
    public afterClose(): Observable<any> {
        return this.afterClose$.asObservable();
    }
    // 关闭方法，将销毁组件
    public close(data?: any) {
        this.afterClose$.next(data);
        this.afterClose$.complete();
        this.dialogRef.destroy();
    }
    // 提供给弹窗服务以帮助添加到DOM中
    public componentRef() {
        return this.dialogRef;
    }
}
// 参考自Material2 用于作为传入组件的类型
export interface ComponentType<T> {
    new (...args: any[]): T;
}