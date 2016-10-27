/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../../app/demos/board/counter2.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/linker/element_ref';
import * as import9 from '@angular/core/src/zone/ng_zone';
import * as import10 from '@angular/core/src/application_ref';
import * as import11 from '@angular/core/src/metadata/view';
import * as import12 from '@angular/core/src/linker/component_factory';
var renderType_Counter2Component_Host:import0.RenderComponentType = (null as any);
class _View_Counter2Component_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _Counter2Component_0_4:import3.Counter2Component;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_Counter2Component_Host0,renderType_Counter2Component_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('counter2',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_Counter2Component0(this.viewUtils,this.injector(0),this._appEl_0);
    this._Counter2Component_0_4 = new import3.Counter2Component(new import8.ElementRef(this._el_0),this.renderer,this.parentInjector.get(import9.NgZone),compView_0.ref,this.parentInjector.get(import10.ApplicationRef));
    this._appEl_0.initComponent(this._Counter2Component_0_4,([] as any[]),compView_0);
    compView_0.create(this._Counter2Component_0_4,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.Counter2Component) && (0 === requestNodeIndex))) { return this._Counter2Component_0_4; }
    return notFoundResult;
  }
}
function viewFactory_Counter2Component_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_Counter2Component_Host === (null as any))) { (renderType_Counter2Component_Host = viewUtils.createRenderComponentType('',0,import11.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_Counter2Component_Host0(viewUtils,parentInjector,declarationEl);
}
export const Counter2ComponentNgFactory:import12.ComponentFactory<import3.Counter2Component> = new import12.ComponentFactory<import3.Counter2Component>('counter2',viewFactory_Counter2Component_Host0,import3.Counter2Component);
const styles_Counter2Component:any[] = ['[_nghost-%COMP%]{\n                display: block;\n                width: 50px; height: 50px;\n                border: 1px dotted black;\n                text-align: center;\n                vertical-align: middle;\n                margin: 8px;\n                            \n        }'];
var renderType_Counter2Component:import0.RenderComponentType = (null as any);
class _View_Counter2Component0 extends import1.AppView<import3.Counter2Component> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _text_3:any;
  /*private*/ _expr_0:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_Counter2Component0,renderType_Counter2Component,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_1 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this._text_2 = this.renderer.createText(this._el_1,'',(null as any));
    this._text_3 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this.init(([] as any[]),[
      this._text_0,
      this._el_1,
      this._text_2,
      this._text_3
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = import4.interpolate(1,'',this.context.value,'');
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setText(this._text_2,currVal_0);
      this._expr_0 = currVal_0;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
export function viewFactory_Counter2Component0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.Counter2Component> {
  if ((renderType_Counter2Component === (null as any))) { (renderType_Counter2Component = viewUtils.createRenderComponentType('',0,import11.ViewEncapsulation.Emulated,styles_Counter2Component,{})); }
  return new _View_Counter2Component0(viewUtils,parentInjector,declarationEl);
}