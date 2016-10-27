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
var import3 = require('../../../../app/demos/accordion/item.component');
var import4 = require('@angular/core/src/linker/view_utils');
var import6 = require('@angular/core/src/linker/view_type');
var import7 = require('@angular/core/src/change_detection/change_detection');
var import8 = require('@angular/core/src/linker/element_ref');
var import9 = require('@angular/core/src/zone/ng_zone');
var import10 = require('@angular/core/src/application_ref');
var import11 = require('@angular/core/src/metadata/view');
var import12 = require('@angular/core/src/linker/component_factory');
var import13 = require('@angular/common/src/directives/ng_if');
var import14 = require('@angular/core/src/linker/template_ref');
var renderType_ItemComponent_Host = null;
var _View_ItemComponent_Host0 = (function (_super) {
    __extends(_View_ItemComponent_Host0, _super);
    function _View_ItemComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ItemComponent_Host0, renderType_ItemComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ItemComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('item', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_ItemComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._ItemComponent_0_4 = new import3.ItemComponent(new import8.ElementRef(this._el_0), this.renderer, this.parentInjector.get(import9.NgZone), compView_0.ref, this.parentInjector.get(import10.ApplicationRef));
        this._appEl_0.initComponent(this._ItemComponent_0_4, [], compView_0);
        compView_0.create(this._ItemComponent_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_ItemComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.ItemComponent) && (0 === requestNodeIndex))) {
            return this._ItemComponent_0_4;
        }
        return notFoundResult;
    };
    return _View_ItemComponent_Host0;
}(import1.AppView));
function viewFactory_ItemComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ItemComponent_Host === null)) {
        (renderType_ItemComponent_Host = viewUtils.createRenderComponentType('', 0, import11.ViewEncapsulation.None, [], {}));
    }
    return new _View_ItemComponent_Host0(viewUtils, parentInjector, declarationEl);
}
exports.ItemComponentNgFactory = new import12.ComponentFactory('item', viewFactory_ItemComponent_Host0, import3.ItemComponent);
var styles_ItemComponent = ['[_nghost-%COMP%]{ display: block; }'];
var renderType_ItemComponent = null;
var _View_ItemComponent0 = (function (_super) {
    __extends(_View_ItemComponent0, _super);
    function _View_ItemComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ItemComponent0, renderType_ItemComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ItemComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_1 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_1, 'class', 'panel panel-default');
        this._text_2 = this.renderer.createText(this._el_1, '\n    ', null);
        this._el_3 = this.renderer.createElement(this._el_1, 'div', null);
        this.renderer.setElementAttribute(this._el_3, 'class', 'panel-heading');
        this._text_4 = this.renderer.createText(this._el_3, '\n        ', null);
        this._el_5 = this.renderer.createElement(this._el_3, 'h4', null);
        this.renderer.setElementAttribute(this._el_5, 'class', 'panel-title');
        this._text_6 = this.renderer.createText(this._el_5, '', null);
        this._text_7 = this.renderer.createText(this._el_3, '\n    ', null);
        this._text_8 = this.renderer.createText(this._el_1, '\n    ', null);
        this._anchor_9 = this.renderer.createTemplateAnchor(this._el_1, null);
        this._appEl_9 = new import2.AppElement(9, 1, this, this._anchor_9);
        this._TemplateRef_9_5 = new import14.TemplateRef_(this._appEl_9, viewFactory_ItemComponent1);
        this._NgIf_9_6 = new import13.NgIf(this._appEl_9.vcRef, this._TemplateRef_9_5);
        this._text_10 = this.renderer.createText(this._el_1, '\n', null);
        this._text_11 = this.renderer.createText(parentRenderNode, '\n', null);
        var disposable_0 = this.renderer.listen(this._el_3, 'click', this.eventHandler(this._handle_click_3_0.bind(this)));
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this.init([], [
            this._text_0,
            this._el_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7,
            this._text_8,
            this._anchor_9,
            this._text_10,
            this._text_11
        ], [disposable_0], []);
        return null;
    };
    _View_ItemComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import14.TemplateRef) && (9 === requestNodeIndex))) {
            return this._TemplateRef_9_5;
        }
        if (((token === import13.NgIf) && (9 === requestNodeIndex))) {
            return this._NgIf_9_6;
        }
        return notFoundResult;
    };
    _View_ItemComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2 = this.context.isActive;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this._NgIf_9_6.ngIf = currVal_2;
            this._expr_2 = currVal_2;
        }
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_1 = import4.interpolate(1, '\n            ', this.context.title, '\n        ');
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setText(this._text_6, currVal_1);
            this._expr_1 = currVal_1;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_ItemComponent0.prototype._handle_click_3_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = ((this.context.isActive = !this.context.isActive) !== false);
        return (true && pd_0);
    };
    return _View_ItemComponent0;
}(import1.AppView));
function viewFactory_ItemComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ItemComponent === null)) {
        (renderType_ItemComponent = viewUtils.createRenderComponentType('', 1, import11.ViewEncapsulation.Emulated, styles_ItemComponent, {}));
    }
    return new _View_ItemComponent0(viewUtils, parentInjector, declarationEl);
}
exports.viewFactory_ItemComponent0 = viewFactory_ItemComponent0;
var _View_ItemComponent1 = (function (_super) {
    __extends(_View_ItemComponent1, _super);
    function _View_ItemComponent1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ItemComponent1, renderType_ItemComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ItemComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'div', null);
        this._text_1 = this.renderer.createText(this._el_0, '\n        ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'div', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'panel-body');
        this._text_3 = this.renderer.createText(this._el_2, '\n            ', null);
        this.renderer.projectNodes(this._el_2, import4.flattenNestedViewRenderNodes(this.projectableNodes[0]));
        this._text_4 = this.renderer.createText(this._el_2, '\n        ', null);
        this._text_5 = this.renderer.createText(this._el_0, '\n    ', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._text_5
        ], [], []);
        return null;
    };
    return _View_ItemComponent1;
}(import1.AppView));
function viewFactory_ItemComponent1(viewUtils, parentInjector, declarationEl) {
    return new _View_ItemComponent1(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=item.component.ngfactory.js.map