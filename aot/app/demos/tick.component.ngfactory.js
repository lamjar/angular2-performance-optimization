/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var import1 = require('@angular/core/src/linker/view');
var import2 = require('@angular/core/src/linker/element');
var import3 = require('../../../app/demos/tick.component');
var import4 = require('@angular/core/src/linker/view_utils');
var import6 = require('@angular/core/src/linker/view_type');
var import7 = require('@angular/core/src/change_detection/change_detection');
var import8 = require('@angular/core/src/linker/element_ref');
var import9 = require('@angular/core/src/zone/ng_zone');
var import10 = require('@angular/core/src/metadata/view');
var import11 = require('@angular/core/src/linker/component_factory');
var import12 = require('@angular/core/src/linker/query_list');
var renderType_TickComponent_Host = null;
var _View_TickComponent_Host0 = (function (_super) {
    __extends(_View_TickComponent_Host0, _super);
    function _View_TickComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_TickComponent_Host0, renderType_TickComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_TickComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('tick', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_TickComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._TickComponent_0_4 = new import3.TickComponent(new import8.ElementRef(this._el_0), this.renderer, this.parentInjector.get(import9.NgZone), compView_0.ref);
        this._appEl_0.initComponent(this._TickComponent_0_4, [], compView_0);
        compView_0.create(this._TickComponent_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_TickComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.TickComponent) && (0 === requestNodeIndex))) {
            return this._TickComponent_0_4;
        }
        return notFoundResult;
    };
    _View_TickComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._TickComponent_0_4.ngOnInit();
        }
        if (!throwOnChange) {
            this._TickComponent_0_4.ngDoCheck();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_TickComponent_Host0;
}(import1.AppView));
function viewFactory_TickComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_TickComponent_Host === null)) {
        (renderType_TickComponent_Host = viewUtils.createRenderComponentType('', 0, import10.ViewEncapsulation.None, [], {}));
    }
    return new _View_TickComponent_Host0(viewUtils, parentInjector, declarationEl);
}
exports.TickComponentNgFactory = new import11.ComponentFactory('tick', viewFactory_TickComponent_Host0, import3.TickComponent);
var styles_TickComponent = ['.box[_ngcontent-%COMP%]{ \n            width : 10px;\n            height: 12px;\n            border: 1px solid black;\n            margin-right: 3px;\n        }\n        [_nghost-%COMP%]{\n            display: block;\n            position: absolute;\n            top: 8px;\n            right: 8px;\n            line-height:0px;\n        }\n        .notDisplay[_ngcontent-%COMP%]{\n            border: 1px solid black;    \n        }'];
var renderType_TickComponent = null;
var _View_TickComponent0 = (function (_super) {
    __extends(_View_TickComponent0, _super);
    function _View_TickComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_TickComponent0, renderType_TickComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_TickComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._viewQuery_box_0 = new import12.QueryList();
        this._text_0 = this.renderer.createText(parentRenderNode, '\n   ', null);
        this._el_1 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_1, 'style', ' margin: auto;');
        this._text_2 = this.renderer.createText(this._el_1, '\n        ', null);
        this._el_3 = this.renderer.createElement(this._el_1, 'button', null);
        this.renderer.setElementAttribute(this._el_3, 'class', 'box');
        this._text_4 = this.renderer.createText(this._el_1, '\n        ', null);
        this._el_5 = this.renderer.createElement(this._el_1, 'span', null);
        this._text_6 = this.renderer.createText(this._el_5, '', null);
        this._text_7 = this.renderer.createText(this._el_1, '\n   ', null);
        this._text_8 = this.renderer.createText(parentRenderNode, '\n', null);
        var disposable_0 = this.renderer.listen(this._el_3, 'click', this.eventHandler(this._handle_click_3_0.bind(this)));
        this._expr_1 = import7.UNINITIALIZED;
        this._viewQuery_box_0.reset([new import8.ElementRef(this._el_3)]);
        this.context.boxElemRef = this._viewQuery_box_0.first;
        this.init([], [
            this._text_0,
            this._el_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7,
            this._text_8
        ], [disposable_0], []);
        return null;
    };
    _View_TickComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_1 = import4.interpolate(1, 'ticks: ', this.context.oldValue, ' / s');
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setText(this._text_6, currVal_1);
            this._expr_1 = currVal_1;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_TickComponent0.prototype._handle_click_3_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.setBorder() !== false);
        return (true && pd_0);
    };
    return _View_TickComponent0;
}(import1.AppView));
function viewFactory_TickComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_TickComponent === null)) {
        (renderType_TickComponent = viewUtils.createRenderComponentType('', 0, import10.ViewEncapsulation.Emulated, styles_TickComponent, {}));
    }
    return new _View_TickComponent0(viewUtils, parentInjector, declarationEl);
}
exports.viewFactory_TickComponent0 = viewFactory_TickComponent0;
//# sourceMappingURL=tick.component.ngfactory.js.map