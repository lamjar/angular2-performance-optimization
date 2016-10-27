/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../../app/demos/counter/counter.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/linker/element_ref';
import * as import9 from '@angular/core/src/zone/ng_zone';
import * as import10 from '@angular/core/src/application_ref';
import * as import11 from '@angular/core/src/metadata/view';
import * as import12 from '@angular/core/src/linker/component_factory';
var renderType_CounterComponent_Host:import0.RenderComponentType = (null as any);
class _View_CounterComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _CounterComponent_0_4:import3.CounterComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_CounterComponent_Host0,renderType_CounterComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('counter',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_CounterComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._CounterComponent_0_4 = new import3.CounterComponent(new import8.ElementRef(this._el_0),this.renderer,this.parentInjector.get(import9.NgZone),compView_0.ref,this.parentInjector.get(import10.ApplicationRef));
    this._appEl_0.initComponent(this._CounterComponent_0_4,([] as any[]),compView_0);
    compView_0.create(this._CounterComponent_0_4,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.CounterComponent) && (0 === requestNodeIndex))) { return this._CounterComponent_0_4; }
    return notFoundResult;
  }
  destroyInternal():void {
    this._CounterComponent_0_4.ngOnDestroy();
  }
}
function viewFactory_CounterComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_CounterComponent_Host === (null as any))) { (renderType_CounterComponent_Host = viewUtils.createRenderComponentType('',0,import11.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_CounterComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const CounterComponentNgFactory:import12.ComponentFactory<import3.CounterComponent> = new import12.ComponentFactory<import3.CounterComponent>('counter',viewFactory_CounterComponent_Host0,import3.CounterComponent);
const styles_CounterComponent:any[] = ['[_nghost-%COMP%]{\n            display: block;\n            width: 50px; height: 50px;\n            border: 1px dotted black;\n            text-align: center;\n            vertical-align: middle;\n            margin: 8px;\n                        \n    }'];
var renderType_CounterComponent:import0.RenderComponentType = (null as any);
class _View_CounterComponent0 extends import1.AppView<import3.CounterComponent> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _text_3:any;
  /*private*/ _expr_1:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_CounterComponent0,renderType_CounterComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_1 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this._text_2 = this.renderer.createText(this._el_1,'',(null as any));
    this._text_3 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_1,'click',this.eventHandler(this._handle_click_1_0.bind(this)));
    this._expr_1 = import7.UNINITIALIZED;
    this.init(([] as any[]),[
      this._text_0,
      this._el_1,
      this._text_2,
      this._text_3
    ]
    ,[disposable_0],([] as any[]));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_1:any = import4.interpolate(1,'',this.context.value,'');
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setText(this._text_2,currVal_1);
      this._expr_1 = currVal_1;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_click_1_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.onClick()) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_CounterComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.CounterComponent> {
  if ((renderType_CounterComponent === (null as any))) { (renderType_CounterComponent = viewUtils.createRenderComponentType('',0,import11.ViewEncapsulation.Emulated,styles_CounterComponent,{})); }
  return new _View_CounterComponent0(viewUtils,parentInjector,declarationEl);
}