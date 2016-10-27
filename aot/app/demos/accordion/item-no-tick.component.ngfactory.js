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
var import3 = require('../../../../app/demos/accordion/item-no-tick.component');
var import4 = require('@angular/core/src/linker/view_utils');
var import6 = require('@angular/core/src/linker/view_type');
var import7 = require('@angular/core/src/change_detection/change_detection');
var import8 = require('@angular/core/src/linker/element_ref');
var import9 = require('@angular/core/src/zone/ng_zone');
var import10 = require('@angular/core/src/application_ref');
var import11 = require('@angular/core/src/metadata/view');
var import12 = require('@angular/core/src/linker/component_factory');
var import13 = require('@angular/core/src/linker/query_list');
var import14 = require('@angular/common/src/directives/ng_if');
var import15 = require('@angular/core/src/linker/template_ref');
var renderType_Item2Component_Host = null;
var _View_Item2Component_Host0 = (function (_super) {
    __extends(_View_Item2Component_Host0, _super);
    function _View_Item2Component_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_Item2Component_Host0, renderType_Item2Component_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_Item2Component_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('item2', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_Item2Component0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Item2Component_0_4 = new import3.Item2Component(new import8.ElementRef(this._el_0), this.renderer, this.parentInjector.get(import9.NgZone), compView_0.ref, this.parentInjector.get(import10.ApplicationRef));
        this._appEl_0.initComponent(this._Item2Component_0_4, [], compView_0);
        compView_0.create(this._Item2Component_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_Item2Component_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.Item2Component) && (0 === requestNodeIndex))) {
            return this._Item2Component_0_4;
        }
        return notFoundResult;
    };
    _View_Item2Component_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Item2Component_0_4.ngAfterViewInit();
            }
        }
    };
    _View_Item2Component_Host0.prototype.destroyInternal = function () {
        this._Item2Component_0_4.ngOnDestroy();
    };
    return _View_Item2Component_Host0;
}(import1.AppView));
function viewFactory_Item2Component_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Item2Component_Host === null)) {
        (renderType_Item2Component_Host = viewUtils.createRenderComponentType('', 0, import11.ViewEncapsulation.None, [], {}));
    }
    return new _View_Item2Component_Host0(viewUtils, parentInjector, declarationEl);
}
exports.Item2ComponentNgFactory = new import12.ComponentFactory('item2', viewFactory_Item2Component_Host0, import3.Item2Component);
var styles_Item2Component = ['[_nghost-%COMP%]{ display: block; }'];
var renderType_Item2Component = null;
var _View_Item2Component0 = (function (_super) {
    __extends(_View_Item2Component0, _super);
    function _View_Item2Component0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_Item2Component0, renderType_Item2Component, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_Item2Component0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._viewQuery_head_0 = new import13.QueryList();
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
        this._TemplateRef_9_5 = new import15.TemplateRef_(this._appEl_9, viewFactory_Item2Component1);
        this._NgIf_9_6 = new import14.NgIf(this._appEl_9.vcRef, this._TemplateRef_9_5);
        this._text_10 = this.renderer.createText(this._el_1, '\n', null);
        this._text_11 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._viewQuery_head_0.reset([new import8.ElementRef(this._el_3)]);
        this.context.head = this._viewQuery_head_0.first;
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
        ], [], []);
        return null;
    };
    _View_Item2Component0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import15.TemplateRef) && (9 === requestNodeIndex))) {
            return this._TemplateRef_9_5;
        }
        if (((token === import14.NgIf) && (9 === requestNodeIndex))) {
            return this._NgIf_9_6;
        }
        return notFoundResult;
    };
    _View_Item2Component0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_1 = this.context.isActive;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this._NgIf_9_6.ngIf = currVal_1;
            this._expr_1 = currVal_1;
        }
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_0 = import4.interpolate(1, '\n            ', this.context.title, '\n        ');
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setText(this._text_6, currVal_0);
            this._expr_0 = currVal_0;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_Item2Component0;
}(import1.AppView));
function viewFactory_Item2Component0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Item2Component === null)) {
        (renderType_Item2Component = viewUtils.createRenderComponentType('', 1, import11.ViewEncapsulation.Emulated, styles_Item2Component, {}));
    }
    return new _View_Item2Component0(viewUtils, parentInjector, declarationEl);
}
exports.viewFactory_Item2Component0 = viewFactory_Item2Component0;
var _View_Item2Component1 = (function (_super) {
    __extends(_View_Item2Component1, _super);
    function _View_Item2Component1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_Item2Component1, renderType_Item2Component, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_Item2Component1.prototype.createInternal = function (rootSelector) {
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
    return _View_Item2Component1;
}(import1.AppView));
function viewFactory_Item2Component1(viewUtils, parentInjector, declarationEl) {
    return new _View_Item2Component1(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=item-no-tick.component.ngfactory.js.map