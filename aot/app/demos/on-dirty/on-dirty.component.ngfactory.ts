/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../../app/demos/on-dirty/on-dirty.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/linker/element_ref';
import * as import9 from '@angular/core/src/zone/ng_zone';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/component_factory';
var renderType_OnDirtyDemoComponent_Host:import0.RenderComponentType = (null as any);
class _View_OnDirtyDemoComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _OnDirtyDemoComponent_0_4:import3.OnDirtyDemoComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_OnDirtyDemoComponent_Host0,renderType_OnDirtyDemoComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('ng-component',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_OnDirtyDemoComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._OnDirtyDemoComponent_0_4 = new import3.OnDirtyDemoComponent(new import8.ElementRef(this._el_0),this.renderer,this.parentInjector.get(import9.NgZone),compView_0.ref);
    this._appEl_0.initComponent(this._OnDirtyDemoComponent_0_4,([] as any[]),compView_0);
    compView_0.create(this._OnDirtyDemoComponent_0_4,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.OnDirtyDemoComponent) && (0 === requestNodeIndex))) { return this._OnDirtyDemoComponent_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._OnDirtyDemoComponent_0_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._OnDirtyDemoComponent_0_4.ngOnDestroy();
  }
}
function viewFactory_OnDirtyDemoComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_OnDirtyDemoComponent_Host === (null as any))) { (renderType_OnDirtyDemoComponent_Host = viewUtils.createRenderComponentType('',0,import10.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_OnDirtyDemoComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const OnDirtyDemoComponentNgFactory:import11.ComponentFactory<import3.OnDirtyDemoComponent> = new import11.ComponentFactory<import3.OnDirtyDemoComponent>('ng-component',viewFactory_OnDirtyDemoComponent_Host0,import3.OnDirtyDemoComponent);
const styles_OnDirtyDemoComponent:any[] = ['[_nghost-%COMP%]{\n            display: block;           \n            margin: 8px;\n                        \n    }\n    .trg-up[_ngcontent-%COMP%] {\n         width: 0;\n         height: 0;\n         border-left  : 5px solid transparent;\n         border-right : 5px solid transparent;\n         border-bottom: 10px solid green;\n     }\n     .trg-down[_ngcontent-%COMP%] {\n         width: 0;\n         height: 0;\n         border-left  : 5px solid transparent;\n         border-right : 5px solid transparent;\n         border-top: 10px solid red;\n     }'];
var renderType_OnDirtyDemoComponent:import0.RenderComponentType = (null as any);
class _View_OnDirtyDemoComponent0 extends import1.AppView<import3.OnDirtyDemoComponent> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _text_6:any;
  _el_7:any;
  _text_8:any;
  _text_9:any;
  _el_10:any;
  _text_11:any;
  _el_12:any;
  _text_13:any;
  _el_14:any;
  _text_15:any;
  _text_16:any;
  _el_17:any;
  _text_18:any;
  _el_19:any;
  _text_20:any;
  _el_21:any;
  _text_22:any;
  _text_23:any;
  _el_24:any;
  _text_25:any;
  _el_26:any;
  _text_27:any;
  _el_28:any;
  _text_29:any;
  _el_30:any;
  _text_31:any;
  _text_32:any;
  _el_33:any;
  _text_34:any;
  _text_35:any;
  _el_36:any;
  _text_37:any;
  _text_38:any;
  _el_39:any;
  _text_40:any;
  _text_41:any;
  _text_42:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  /*private*/ _expr_9:any;
  /*private*/ _expr_10:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_OnDirtyDemoComponent0,renderType_OnDirtyDemoComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_1 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this._text_2 = this.renderer.createText(this._el_1,'\n  ',(null as any));
    this._text_3 = this.renderer.createText(this._el_1,'\n  ',(null as any));
    this._el_4 = this.renderer.createElement(this._el_1,'p',(null as any));
    this._text_5 = this.renderer.createText(this._el_4,'\n      This demo shows how we can work with an Observable class and its operators to reduce the amount of\n      updates, meaning less expressions to calculate. The component is detached form the component tree and the update happens\n      only when item comes up from the observable.\n  ',(null as any));
    this._text_6 = this.renderer.createText(this._el_1,'\n  ',(null as any));
    this._el_7 = this.renderer.createElement(this._el_1,'h4',(null as any));
    this._text_8 = this.renderer.createText(this._el_7,'Stream I (source) - Update every 10ms.',(null as any));
    this._text_9 = this.renderer.createText(this._el_1,'\n  ',(null as any));
    this._el_10 = this.renderer.createElement(this._el_1,'pre',(null as any));
    this._text_11 = this.renderer.createText(this._el_10,'',(null as any));
    this._el_12 = this.renderer.createElement(this._el_10,'span',(null as any));
    this._text_13 = this.renderer.createText(this._el_1,'\n  \n  ',(null as any));
    this._el_14 = this.renderer.createElement(this._el_1,'h4',(null as any));
    this._text_15 = this.renderer.createText(this._el_14,'Stream II (auditTime) - source.auditTime(500)',(null as any));
    this._text_16 = this.renderer.createText(this._el_1,'\n  ',(null as any));
    this._el_17 = this.renderer.createElement(this._el_1,'pre',(null as any));
    this._text_18 = this.renderer.createText(this._el_17,'',(null as any));
    this._el_19 = this.renderer.createElement(this._el_17,'span',(null as any));
    this._text_20 = this.renderer.createText(this._el_1,'\n  \n  ',(null as any));
    this._el_21 = this.renderer.createElement(this._el_1,'h4',(null as any));
    this._text_22 = this.renderer.createText(this._el_21,'Stream III - auditTime.threshold(15)',(null as any));
    this._text_23 = this.renderer.createText(this._el_1,'\n  ',(null as any));
    this._el_24 = this.renderer.createElement(this._el_1,'pre',(null as any));
    this._text_25 = this.renderer.createText(this._el_24,'',(null as any));
    this._el_26 = this.renderer.createElement(this._el_24,'span',(null as any));
    this._text_27 = this.renderer.createText(this._el_1,'\n  ',(null as any));
    this._el_28 = this.renderer.createElement(this._el_1,'hr',(null as any));
    this._text_29 = this.renderer.createText(this._el_1,'\n  \n  ',(null as any));
    this._el_30 = this.renderer.createElement(this._el_1,'h4',(null as any));
    this._text_31 = this.renderer.createText(this._el_30,'Threshold',(null as any));
    this._text_32 = this.renderer.createText(this._el_1,'\n  ',(null as any));
    this._el_33 = this.renderer.createElement(this._el_1,'pre',(null as any));
    this._text_34 = this.renderer.createText(this._el_33,'',(null as any));
    this._text_35 = this.renderer.createText(this._el_1,'\n  \n  ',(null as any));
    this._el_36 = this.renderer.createElement(this._el_1,'h4',(null as any));
    this._text_37 = this.renderer.createText(this._el_36,'Up & Down triangle',(null as any));
    this._text_38 = this.renderer.createText(this._el_1,'\n  ',(null as any));
    this._el_39 = this.renderer.createElement(this._el_1,'pre',(null as any));
    this._text_40 = this.renderer.createText(this._el_39,'',(null as any));
    this._text_41 = this.renderer.createText(this._el_1,'-\n',(null as any));
    this._text_42 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    this._expr_4 = import7.UNINITIALIZED;
    this._expr_5 = import7.UNINITIALIZED;
    this._expr_6 = import7.UNINITIALIZED;
    this._expr_7 = import7.UNINITIALIZED;
    this._expr_8 = import7.UNINITIALIZED;
    this._expr_9 = import7.UNINITIALIZED;
    this._expr_10 = import7.UNINITIALIZED;
    this.init(([] as any[]),[
      this._text_0,
      this._el_1,
      this._text_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._text_9,
      this._el_10,
      this._text_11,
      this._el_12,
      this._text_13,
      this._el_14,
      this._text_15,
      this._text_16,
      this._el_17,
      this._text_18,
      this._el_19,
      this._text_20,
      this._el_21,
      this._text_22,
      this._text_23,
      this._el_24,
      this._text_25,
      this._el_26,
      this._text_27,
      this._el_28,
      this._text_29,
      this._el_30,
      this._text_31,
      this._text_32,
      this._el_33,
      this._text_34,
      this._text_35,
      this._el_36,
      this._text_37,
      this._text_38,
      this._el_39,
      this._text_40,
      this._text_41,
      this._text_42
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = import4.interpolate(1,'',this.context.val1,' : ');
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setText(this._text_11,currVal_0);
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = this.context.isUp1;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementClass(this._el_12,'trg-up',currVal_1);
      this._expr_1 = currVal_1;
    }
    const currVal_2:boolean = !this.context.isUp1;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementClass(this._el_12,'trg-down',currVal_2);
      this._expr_2 = currVal_2;
    }
    const currVal_3:any = import4.interpolate(1,'',this.context.val2,' : ');
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setText(this._text_18,currVal_3);
      this._expr_3 = currVal_3;
    }
    const currVal_4:any = this.context.isUp2;
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setElementClass(this._el_19,'trg-up',currVal_4);
      this._expr_4 = currVal_4;
    }
    const currVal_5:boolean = !this.context.isUp2;
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setElementClass(this._el_19,'trg-down',currVal_5);
      this._expr_5 = currVal_5;
    }
    const currVal_6:any = import4.interpolate(1,'',this.context.val3,' : ');
    if (import4.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this.renderer.setText(this._text_25,currVal_6);
      this._expr_6 = currVal_6;
    }
    const currVal_7:any = this.context.isUp3;
    if (import4.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this.renderer.setElementClass(this._el_26,'trg-up',currVal_7);
      this._expr_7 = currVal_7;
    }
    const currVal_8:boolean = !this.context.isUp3;
    if (import4.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      this.renderer.setElementClass(this._el_26,'trg-down',currVal_8);
      this._expr_8 = currVal_8;
    }
    const currVal_9:any = import4.interpolate(1,'',this.context.thresholdCode,'');
    if (import4.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      this.renderer.setText(this._text_34,currVal_9);
      this._expr_9 = currVal_9;
    }
    const currVal_10:any = import4.interpolate(1,'',this.context.upDownCode,'');
    if (import4.checkBinding(throwOnChange,this._expr_10,currVal_10)) {
      this.renderer.setText(this._text_40,currVal_10);
      this._expr_10 = currVal_10;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
export function viewFactory_OnDirtyDemoComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.OnDirtyDemoComponent> {
  if ((renderType_OnDirtyDemoComponent === (null as any))) { (renderType_OnDirtyDemoComponent = viewUtils.createRenderComponentType('',0,import10.ViewEncapsulation.Emulated,styles_OnDirtyDemoComponent,{})); }
  return new _View_OnDirtyDemoComponent0(viewUtils,parentInjector,declarationEl);
}