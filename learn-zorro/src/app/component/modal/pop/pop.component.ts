import {
  Component,
  OnInit,
  Output,
  Injector,
  ElementRef,
  ViewChild,
  AfterViewInit,
  Renderer2,
  EventEmitter,
  HostListener
} from "@angular/core";
import { YupRef, YUP_DATA } from "../../../service/popup.ref";

@Component({
  selector: "app-pop",
  templateUrl: "./pop.component.html",
  styleUrls: ["./pop.component.css"]
})
export class PopComponent implements OnInit, AfterViewInit {
  @ViewChild("pop", { static: false })
  popElement: ElementRef;
  config: any; //请求时的参数
  dialogRef; //: YupRef<PopComponent>;

  value: string;
  
  constructor(
    private injector: Injector,
    protected _renderer: Renderer2,
    protected _elementRef: ElementRef
  ) {
    // 接受请求弹框的参数
    this.config = this.injector.get(YUP_DATA);
    this.dialogRef = this.injector.get(YupRef);
  }

  ngOnInit() {
    window.event["clientX"];
  }
  ngAfterViewInit() {
    this._renderer.setStyle(
      this.popElement.nativeElement,
      "top",
      window.event["clientY"] + 20 + "px"
    );
    this._renderer.setStyle(
      this.popElement.nativeElement,
      "left",
      window.event["clientX"] - 20 + "px"
    );
  }

  @Output()
  public clickOutside = new EventEmitter();

  @HostListener("click", ["$event"])
  onClick(e: MouseEvent): void {
    this.close();
  }

  stopClick(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  public close(comfirm?: boolean) {
    console.log("config", this.config);
    this.dialogRef.close(comfirm && this.value);
  }
}
