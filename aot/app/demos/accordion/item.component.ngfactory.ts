/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from '../../../../app/demos/accordion/item.component';
import * as import2 from '@angular/common';
const styles_ItemComponent:any[] = ['[_nghost-%COMP%]{ display: block; }'];
export const RenderType_ItemComponent:import0.RendererType2 = import0.ɵcrt({
  encapsulation: 0,
  styles: styles_ItemComponent,
  data: {}
}
);
function View_ItemComponent_1(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),6,'div',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n        '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),3,'div',[[
        'class',
        'panel-body'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n            '])),
    import0.ɵncd((null as any),0),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵted((null as any),['\n    ']))
  ]
  ,(null as any),(null as any));
}
export function View_ItemComponent_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵted((null as any),['\n'])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),10,'div',[[
        'class',
        'panel panel-default'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n    '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),4,'div',[[
        'class',
        'panel-heading'
      ]
      ],(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:import1.ItemComponent = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>(co.isActive = !co.isActive)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n        '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'h4',[[
        'class',
        'panel-title'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      '\n            ',
      '\n        '
    ]
    )),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_ItemComponent_1)),
    import0.ɵdid(8192,(null as any),0,import2.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n'])),
    (l()(),import0.ɵted((null as any),['\n']))
  ]
  ,(ck,v) => {
    var co:import1.ItemComponent = v.component;
    const currVal_1:any = co.isActive;
    ck(v,10,0,currVal_1);
  },(ck,v) => {
    var co:import1.ItemComponent = v.component;
    const currVal_0:any = co.title;
    ck(v,6,0,currVal_0);
  });
}
function View_ItemComponent_Host_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'item',([] as any[]),(null as any),(null as any),(null as any),View_ItemComponent_0,RenderType_ItemComponent)),
    import0.ɵdid(155648,(null as any),0,import1.ItemComponent,[
      import0.ElementRef,
      import0.Renderer2,
      import0.NgZone,
      import0.ChangeDetectorRef,
      import0.ApplicationRef
    ]
    ,(null as any),(null as any))
  ]
  ,(ck,v) => {
    ck(v,1,0);
  },(null as any));
}
export const ItemComponentNgFactory:import0.ComponentFactory<import1.ItemComponent> = import0.ɵccf('item',import1.ItemComponent,View_ItemComponent_Host_0,{title: 'title'},{},['*']);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvRXlhbC9EZXNrdG9wL1BlcmZvcm1hbmNlIE9wdGltaXphdGlvbi9uZy1jb3Vyc2UoY2QpL2FwcC9kZW1vcy9hY2NvcmRpb24vaXRlbS5jb21wb25lbnQubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vQzovVXNlcnMvRXlhbC9EZXNrdG9wL1BlcmZvcm1hbmNlIE9wdGltaXphdGlvbi9uZy1jb3Vyc2UoY2QpL2FwcC9kZW1vcy9hY2NvcmRpb24vaXRlbS5jb21wb25lbnQudHMiLCJuZzovLy9DOi9Vc2Vycy9FeWFsL0Rlc2t0b3AvUGVyZm9ybWFuY2UgT3B0aW1pemF0aW9uL25nLWNvdXJzZShjZCkvYXBwL2RlbW9zL2FjY29yZGlvbi9pdGVtLmNvbXBvbmVudC50cy5JdGVtQ29tcG9uZW50Lmh0bWwiLCJuZzovLy9DOi9Vc2Vycy9FeWFsL0Rlc2t0b3AvUGVyZm9ybWFuY2UgT3B0aW1pemF0aW9uL25nLWNvdXJzZShjZCkvYXBwL2RlbW9zL2FjY29yZGlvbi9pdGVtLmNvbXBvbmVudC50cy5JdGVtQ29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiXG48ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiPlxuICAgIDxkaXYgKGNsaWNrKT1cImlzQWN0aXZlID0gIWlzQWN0aXZlXCIgY2xhc3M9XCJwYW5lbC1oZWFkaW5nXCI+XG4gICAgICAgIDxoNCBjbGFzcz1cInBhbmVsLXRpdGxlXCI+XG4gICAgICAgICAgICB7e3RpdGxlfX1cbiAgICAgICAgPC9oND5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2ICpuZ0lmPVwiaXNBY3RpdmVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cbiAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj5cbiIsIjxpdGVtPjwvaXRlbT4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ09JO0lBQXNCO01BQ2xCO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBd0I7Z0JBQ3BCO0lBQXlCO0lBQ3ZCOzs7Ozs7SUFWZDtNQUNBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBaUM7TUFDN0I7UUFBQTtRQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7TUFBQTtNQUFLO1FBQUE7UUFBQTtNQUFBO01BQUw7SUFBQTtJQUEwRDtNQUN0RDtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQXdCO01BQUE7TUFBQTtJQUFBO0lBQUE7SUFFbkI7SUFDSDtJQUNOO2dCQUFBOzs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFJTTtJQUNKOzs7O0lBTEc7SUFBTCxVQUFLLFNBQUw7OztJQUo0QjtJQUFBOzs7OztJQ0hoQztnQkFBQTs7Ozs7O0lBQUE7S0FBQTs7O0lBQUE7OzsifQ==
