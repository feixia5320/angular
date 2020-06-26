import {
  Injectable,
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  EmbeddedViewRef
} from "@angular/core";
import { YupRef, ComponentType } from "./popup.ref";
import { PopComponent } from '../component/modal/pop/pop.component';

@Injectable()
export class PopService {
  // private loadRef: YupRef<LoadComponent>;
  constructor(
    private appRef: ApplicationRef,
    private compFactRes: ComponentFactoryResolver
  ) {}
  // 创建一个组件，组件通过泛型传入以做到通用
  public open<T>(component: ComponentType<T>, config: any) {
    // 创建组件工厂
    const factory = this.compFactRes.resolveComponentFactory(component);
    // 创建一个新的弹窗引用
    const dialogRef = new YupRef(factory, config);
    // 将创建好的组件引用(由弹窗引用创建并返回)append到body标签下
    window.document.body.appendChild(
      this.getComponentRootNode(dialogRef.componentRef())
    );
    // 加入angular脏检查
    this.appRef.attachView(dialogRef.componentRef().hostView);
    // 将创建的弹窗引用返回给外界
    return dialogRef;
  }
  public dialog(config) {
    return this.open(PopComponent, config);
  }
  // 参考自Material2，将ComponentRef类型的组件引用转换为DOM节点
  private getComponentRootNode(componentRef: ComponentRef<any>): HTMLElement {
    return (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
  }
}
