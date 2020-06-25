import {
  Component,
  OnInit,
  Output,
  Injectable,
  Injector,
  ElementRef,
  ViewChild,
  AfterViewInit,
  Renderer2,
  EventEmitter,
  HostListener
} from "@angular/core";
import { YupRef, YUP_DATA } from "../service/popup.ref";
import { FormGroup, FormBuilder } from "@angular/forms";
@Component({
  selector: "app-pop",
  templateUrl: "./pop.component.html",
  styleUrls: ["./pop.component.css"]
})
export class PopComponent implements OnInit, AfterViewInit {
  formGroup: FormGroup;
  @ViewChild("pop", { static: false })
  popElement: ElementRef;
  config: any;
  dialogRef: YupRef<PopComponent>;
  disp: string;
  constructor(
    private injector: Injector,
    protected _renderer: Renderer2,
    protected _elementRef: ElementRef
  ) {
    this.config = this.injector.get(YUP_DATA);
    this.dialogRef = this.injector.get(YupRef);
  }

  get getKey() {
    return Object.keys(this.formGroup.controls);
  }
  ngOnInit() {
    this.formGroup = new FormBuilder().group(this.config);
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
    // this.showFlag=false;
    this.dialogRef.close(comfirm && this.formGroup.value);
  }
}
