(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/material"), require("rxjs/ReplaySubject"), require("@angular/common"), require("@angular/forms"), require("@angular/flex-layout"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/material", "rxjs/ReplaySubject", "@angular/common", "@angular/forms", "@angular/flex-layout"], factory);
	else if(typeof exports === 'object')
		exports["ng-virtual-keyboard"] = factory(require("@angular/core"), require("@angular/material"), require("rxjs/ReplaySubject"), require("@angular/common"), require("@angular/forms"), require("@angular/flex-layout"));
	else
		root["ng-virtual-keyboard"] = factory(root["@angular/core"], root["@angular/material"], root["rxjs/ReplaySubject"], root["@angular/common"], root["@angular/forms"], root["@angular/flex-layout"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_11__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var virtual_keyboard_directive_1 = __webpack_require__(1);
	exports.NgVirtualKeyboardDirective = virtual_keyboard_directive_1.NgVirtualKeyboardDirective;
	var virtual_keyboard_module_1 = __webpack_require__(8);
	exports.NgVirtualKeyboardModule = virtual_keyboard_module_1.NgVirtualKeyboardModule;


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(2);
	var material_1 = __webpack_require__(3);
	var virtual_keyboard_component_1 = __webpack_require__(4);
	var layouts_1 = __webpack_require__(5);
	var NgVirtualKeyboardDirective = (function () {
	    /**
	     * Constructor of the class.
	     *
	     * @param {ElementRef}  element
	     * @param {MdDialog}    dialog
	     */
	    function NgVirtualKeyboardDirective(element, dialog) {
	        this.element = element;
	        this.dialog = dialog;
	    }
	    NgVirtualKeyboardDirective.prototype.onClick = function (event) {
	        var dialogRef;
	        dialogRef = this.dialog.open(virtual_keyboard_component_1.VirtualKeyboardComponent);
	        dialogRef.componentInstance.inputElement = this.element;
	        dialogRef.componentInstance.layout = this.getLayout();
	        dialogRef.componentInstance.placeholder = this.getPlaceHolder();
	    };
	    /**
	     * Getter for used keyboard layout.
	     *
	     * @returns {KeyboardLayout}
	     */
	    NgVirtualKeyboardDirective.prototype.getLayout = function () {
	        var layout;
	        switch (this.layout) {
	            case 'alphaNumeric':
	                layout = layouts_1.alphaNumericKeyboard;
	                break;
	            case 'alphaNumericNordic':
	                layout = layouts_1.alphaNumericNordicKeyboard;
	                break;
	            case 'extended':
	                layout = layouts_1.extendedKeyboard;
	                break;
	            case 'extendedNordic':
	                layout = layouts_1.extendedNordicKeyboard;
	                break;
	            case 'numeric':
	                layout = layouts_1.numericKeyboard;
	                break;
	            case 'phone':
	                layout = layouts_1.phoneKeyboard;
	                break;
	            default:
	                layout = this.layout;
	                break;
	        }
	        return layout;
	    };
	    /**
	     * Getter for used placeholder for virtual keyboard input field.
	     *
	     * @returns {string}
	     */
	    NgVirtualKeyboardDirective.prototype.getPlaceHolder = function () {
	        return this.placeholder ? this.placeholder : this.element.nativeElement.placeholder;
	    };
	    return NgVirtualKeyboardDirective;
	}());
	__decorate([
	    core_1.Input('ng-virtual-keyboard-layout'),
	    __metadata("design:type", Object)
	], NgVirtualKeyboardDirective.prototype, "layout", void 0);
	__decorate([
	    core_1.Input('ng-virtual-keyboard-placeholder'),
	    __metadata("design:type", String)
	], NgVirtualKeyboardDirective.prototype, "placeholder", void 0);
	__decorate([
	    core_1.HostListener('click', ['$event']),
	    __metadata("design:type", Function),
	    __metadata("design:paramtypes", [Event]),
	    __metadata("design:returntype", void 0)
	], NgVirtualKeyboardDirective.prototype, "onClick", null);
	NgVirtualKeyboardDirective = __decorate([
	    core_1.Directive({
	        selector: '[ng-virtual-keyboard]'
	    }),
	    __metadata("design:paramtypes", [core_1.ElementRef,
	        material_1.MdDialog])
	], NgVirtualKeyboardDirective);
	exports.NgVirtualKeyboardDirective = NgVirtualKeyboardDirective;


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(2);
	var material_1 = __webpack_require__(3);
	var layouts_1 = __webpack_require__(5);
	var virtual_keyboard_service_1 = __webpack_require__(6);
	var VirtualKeyboardComponent = VirtualKeyboardComponent_1 = (function () {
	    /**
	     * Constructor of the class.
	     *
	     * @param {MdDialogRef<VirtualKeyboardComponent>} dialogRef
	     * @param {VirtualKeyboardService}                virtualKeyboardService
	     */
	    function VirtualKeyboardComponent(dialogRef, virtualKeyboardService) {
	        this.dialogRef = dialogRef;
	        this.virtualKeyboardService = virtualKeyboardService;
	        this.shift = false;
	    }
	    /**
	     * Helper method to set cursor in input to correct place.
	     *
	     * @param {HTMLInputElement|HTMLTextAreaElement}  input
	     * @param {number}                                start
	     * @param {number}                                end
	     */
	    VirtualKeyboardComponent.setSelectionRange = function (input, start, end) {
	        if (input.setSelectionRange) {
	            input.focus();
	            input.setSelectionRange(start, end);
	        }
	        else if (input.createTextRange) {
	            var range = input.createTextRange();
	            range.collapse(true);
	            range.moveEnd('character', end);
	            range.moveStart('character', start);
	            range.select();
	        }
	    };
	    /**
	     * On init life cycle hook, this will do following:
	     *  1) Set focus to virtual keyboard input field
	     *  2) Subscribe to following
	     *    2.1) Shift key, this is needed in keyboard event dispatches
	     *    2.2) CapsLock key, this will change keyboard layout
	     *    2.3) Caret position in virtual keyboard input
	     *  3) Reset of possible previously tracked caret position
	     */
	    VirtualKeyboardComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        setTimeout(function () {
	            _this.keyboardInput.nativeElement.focus();
	        }, 0);
	        this.virtualKeyboardService.shift$.subscribe(function (shift) {
	            _this.shift = shift;
	        });
	        this.virtualKeyboardService.capsLock$.subscribe(function (capsLock) {
	            _this.layout = layouts_1.keyboardCapsLockLayout(_this.layout, capsLock);
	        });
	        this.virtualKeyboardService.caretPosition$.subscribe(function (caretPosition) {
	            _this.caretPosition = caretPosition;
	            setTimeout(function () {
	                VirtualKeyboardComponent_1.setSelectionRange(_this.keyboardInput.nativeElement, caretPosition, caretPosition);
	            }, 0);
	        });
	        if (this.inputElement.nativeElement.value.length) {
	            this.virtualKeyboardService.setCaretPosition(this.inputElement.nativeElement.value.length);
	        }
	    };
	    /**
	     * On destroy life cycle hook, in this we want to reset virtual keyboard service states on following:
	     *  - Shift
	     *  - CapsLock
	     */
	    VirtualKeyboardComponent.prototype.ngOnDestroy = function () {
	        this.virtualKeyboardService.reset();
	    };
	    VirtualKeyboardComponent.prototype.getMaxLength = function () {
	        return this.inputElement.nativeElement.maxLength > 0 ? this.inputElement.nativeElement.maxLength : '';
	    };
	    /**
	     * Method to close virtual keyboard dialog
	     */
	    VirtualKeyboardComponent.prototype.close = function () {
	        this.dialogRef.close();
	    };
	    /**
	     * Method to update caret position. This is called on click event in virtual keyboard input element.
	     */
	    VirtualKeyboardComponent.prototype.updateCaretPosition = function () {
	        this.virtualKeyboardService.setCaretPosition(this.keyboardInput.nativeElement.selectionStart);
	    };
	    /**
	     * Method to handle actual "key" press from virtual keyboard.
	     *  1) Key is "Special", process special key event
	     *  2) Key is "Normal"
	     *    - Append this key value to input
	     *    - Dispatch DOM events to input element
	     *    - Toggle Shift key if it's pressed
	     *
	     * @param {KeyPressInterface} event
	     */
	    VirtualKeyboardComponent.prototype.keyPress = function (event) {
	        if (event.special) {
	            this.handleSpecialKey(event);
	        }
	        else {
	            this.handleNormalKey(event.keyValue);
	            this.dispatchEvents(event);
	            // Toggle shift if it's activated
	            if (this.shift) {
	                this.virtualKeyboardService.toggleShift();
	            }
	        }
	        var maxLength = this.inputElement.nativeElement.maxLength;
	        var valueLength = this.inputElement.nativeElement.value.length;
	        this.disabled = maxLength > 0 && valueLength >= maxLength;
	    };
	    /**
	     * Method to handle "normal" key press event, this will add specified character to input value.
	     *
	     * @param {string}  keyValue
	     */
	    VirtualKeyboardComponent.prototype.handleNormalKey = function (keyValue) {
	        var value = '';
	        // We have caret position, so attach character to specified position
	        if (!isNaN(this.caretPosition)) {
	            value = [
	                this.inputElement.nativeElement.value.slice(0, this.caretPosition),
	                keyValue,
	                this.inputElement.nativeElement.value.slice(this.caretPosition)
	            ].join('');
	            // Update caret position
	            this.virtualKeyboardService.setCaretPosition(this.caretPosition + 1);
	        }
	        else {
	            value = "" + this.inputElement.nativeElement.value + keyValue;
	        }
	        // And finally set new value to input
	        this.inputElement.nativeElement.value = value;
	    };
	    /**
	     * Method to handle "Special" key press events.
	     *  1) Enter
	     *  2) Escape, close virtual keyboard
	     *  3) Backspace, remove last character from input value
	     *  4) CapsLock, toggle current layout state
	     *  6) Shift, toggle current layout state
	     *  5) SpaceBar
	     */
	    VirtualKeyboardComponent.prototype.handleSpecialKey = function (event) {
	        switch (event.keyValue) {
	            case 'Enter':
	                this.close();
	                break;
	            case 'Escape':
	                this.close();
	                break;
	            case 'Backspace':
	                var currentValue = this.inputElement.nativeElement.value;
	                // We have a caret position, so we need to remove char from that position
	                if (!isNaN(this.caretPosition)) {
	                    // And current position must > 0
	                    if (this.caretPosition > 0) {
	                        var start = currentValue.slice(0, this.caretPosition - 1);
	                        var end = currentValue.slice(this.caretPosition);
	                        this.inputElement.nativeElement.value = "" + start + end;
	                        // Update caret position
	                        this.virtualKeyboardService.setCaretPosition(this.caretPosition - 1);
	                    }
	                }
	                else {
	                    this.inputElement.nativeElement.value = currentValue.substring(0, currentValue.length - 1);
	                }
	                // Set focus to keyboard input
	                this.keyboardInput.nativeElement.focus();
	                break;
	            case 'CapsLock':
	                this.virtualKeyboardService.toggleCapsLock();
	                break;
	            case 'Shift':
	                this.virtualKeyboardService.toggleShift();
	                break;
	            case 'SpaceBar':
	                this.handleNormalKey(' ');
	                break;
	        }
	    };
	    /**
	     * Method to dispatch necessary keyboard events to current input element.
	     *
	     * @see https://w3c.github.io/uievents/tools/key-event-viewer.html
	     *
	     * @param {KeyPressInterface} event
	     */
	    VirtualKeyboardComponent.prototype.dispatchEvents = function (event) {
	        var eventInit = {
	            bubbles: true,
	            cancelable: true,
	            shiftKey: this.shift,
	            key: event.keyValue,
	            code: "Key" + event.keyValue.toUpperCase() + "}",
	            location: 0
	        };
	        // Simulate all needed events on base element
	        this.inputElement.nativeElement.dispatchEvent(new KeyboardEvent('keydown', eventInit));
	        this.inputElement.nativeElement.dispatchEvent(new KeyboardEvent('keypress', eventInit));
	        this.inputElement.nativeElement.dispatchEvent(new Event('input', { bubbles: true }));
	        this.inputElement.nativeElement.dispatchEvent(new KeyboardEvent('keyup', eventInit));
	        // And set focus to input
	        this.keyboardInput.nativeElement.focus();
	    };
	    return VirtualKeyboardComponent;
	}());
	__decorate([
	    core_1.ViewChild('keyboardInput'),
	    __metadata("design:type", core_1.ElementRef)
	], VirtualKeyboardComponent.prototype, "keyboardInput", void 0);
	VirtualKeyboardComponent = VirtualKeyboardComponent_1 = __decorate([
	    core_1.Component({
	        selector: 'virtual-keyboard',
	        template: "\n    <div class=\"container\">\n      <div fxLayout=\"column\">\n        <md-input-container>\n          <button class=\"close\" color=\"primary\" md-mini-fab\n            (click)=\"close()\"\n          >\n            <md-icon>check</md-icon>\n          </button>\n    \n          <input type=\"text\"\n            mdInput\n            #keyboardInput\n            (click)=\"updateCaretPosition()\"\n            [(ngModel)]=\"inputElement.nativeElement.value\" placeholder=\"{{ placeholder }}\"\n            [maxLength]=\"getMaxLength()\"\n          />\n        </md-input-container>\n    \n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\"\n          *ngFor=\"let row of layout; let rowIndex = index\"\n          [attr.data-index]=\"rowIndex\"\n        >\n          <virtual-keyboard-key\n            *ngFor=\"let key of row; let keyIndex = index\"\n            [key]=\"key\"\n            [disabled]=\"disabled\"\n            [attr.data-index]=\"keyIndex\"\n            (keyPress)=\"keyPress($event)\"\n          ></virtual-keyboard-key>\n        </div>\n      </div>\n    </div>\n  ",
	        styles: ["\n    .close {\n      position: relative;\n      float: right;\n      top: -16px;\n      right: 0;\n      margin-bottom: -40px;\n    }\n  \n    .mat-input-container {\n      margin: -16px 0;\n      font-size: 32px;\n    }\n  \n    .mat-input-element:disabled {\n      color: currentColor;\n    }\n\n    :host /deep/ .mat-input-placeholder {\n      top: 10px !important;\n      font-size: 24px !important;\n    }\n  "]
	    }),
	    __metadata("design:paramtypes", [material_1.MdDialogRef,
	        virtual_keyboard_service_1.VirtualKeyboardService])
	], VirtualKeyboardComponent);
	exports.VirtualKeyboardComponent = VirtualKeyboardComponent;
	var VirtualKeyboardComponent_1;


/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.alphaNumericKeyboard = [
	    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'Backspace:2'],
	    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'CapsLock:2'],
	    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'Spacer', 'Shift:2'],
	    ['z', 'x', 'c', 'v', 'b', 'n', 'm', 'Spacer:5'],
	];
	exports.alphaNumericNordicKeyboard = [
	    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'Spacer', 'Backspace:2'],
	    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'å', 'CapsLock:2'],
	    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ö', 'ä', 'Shift:2'],
	    ['z', 'x', 'c', 'v', 'b', 'n', 'm', 'Spacer:6'],
	];
	exports.extendedKeyboard = [
	    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'Backspace:2'],
	    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'CapsLock:2'],
	    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'Spacer', 'Shift:2'],
	    ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '-', '_', '+'],
	    ['Spacer', '@', 'SpaceBar:7', '#', 'Spacer:2'],
	];
	exports.extendedNordicKeyboard = [
	    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', 'Backspace:2'],
	    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'å', 'CapsLock:2'],
	    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ö', 'ä', 'Shift:2'],
	    ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '-', '_', 'Spacer:2'],
	    ['Spacer', '@', 'SpaceBar:7', '#', 'Spacer:3'],
	];
	exports.numericKeyboard = [
	    ['1', '2', '3', 'Backspace:2'],
	    ['4', '5', '6', 'Spacer:2'],
	    ['7', '8', '9', 'Spacer:2'],
	    ['Spacer', '0', 'Spacer:3'],
	];
	exports.phoneKeyboard = [
	    ['1', '2', '3', 'Backspace:2'],
	    ['4', '5', '6', 'Spacer:2'],
	    ['7', '8', '9', 'Spacer:2'],
	    ['-', '0', '+', 'Spacer:2'],
	];
	/**
	 * Function to change specified layout to CapsLock layout.
	 *
	 * @param {KeyboardLayout}  layout
	 * @param {boolean}         caps
	 * @returns {KeyboardLayout}
	 */
	function keyboardCapsLockLayout(layout, caps) {
	    return layout.map(function (row) {
	        return row.map(function (key) {
	            return (key.length === 1) ? (caps ? key.toUpperCase() : key.toLowerCase()) : key;
	        });
	    });
	}
	exports.keyboardCapsLockLayout = keyboardCapsLockLayout;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(2);
	var ReplaySubject_1 = __webpack_require__(7);
	var VirtualKeyboardService = (function () {
	    function VirtualKeyboardService() {
	        this.shift$ = new ReplaySubject_1.ReplaySubject(1);
	        this.capsLock$ = new ReplaySubject_1.ReplaySubject(1);
	        this.caretPosition$ = new ReplaySubject_1.ReplaySubject(1);
	        this.capsLock = false;
	        this.shift = false;
	    }
	    /**
	     * Setter for Shift value, note that this also sets CapsLock value.
	     *
	     * @param {boolean} value
	     */
	    VirtualKeyboardService.prototype.setShift = function (value) {
	        this.shift = value;
	        this.shift$.next(this.shift);
	        this.setCapsLock(this.shift);
	    };
	    /**
	     * Setter for CapsLock value
	     *
	     * @param {boolean} value
	     */
	    VirtualKeyboardService.prototype.setCapsLock = function (value) {
	        this.capsLock = value;
	        this.capsLock$.next(value);
	    };
	    /**
	     * Toggle for Shift, note that this also toggles CapsLock
	     */
	    VirtualKeyboardService.prototype.toggleShift = function () {
	        this.shift = !this.shift;
	        this.shift$.next(this.shift);
	        this.setCapsLock(this.shift);
	    };
	    /**
	     * Toggle for CapsLock
	     */
	    VirtualKeyboardService.prototype.toggleCapsLock = function () {
	        this.capsLock = !this.capsLock;
	        this.capsLock$.next(this.capsLock);
	    };
	    /**
	     * Setter for caret position value.
	     *
	     * @param {number}  position
	     */
	    VirtualKeyboardService.prototype.setCaretPosition = function (position) {
	        this.caretPosition$.next(position);
	    };
	    /**
	     * Method to reset Shift and CapsLock values to default ones.
	     */
	    VirtualKeyboardService.prototype.reset = function () {
	        this.setShift(false);
	    };
	    return VirtualKeyboardService;
	}());
	VirtualKeyboardService = __decorate([
	    core_1.Injectable()
	], VirtualKeyboardService);
	exports.VirtualKeyboardService = VirtualKeyboardService;


/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(2);
	var common_1 = __webpack_require__(9);
	var forms_1 = __webpack_require__(10);
	var material_1 = __webpack_require__(3);
	var flex_layout_1 = __webpack_require__(11);
	var virtual_keyboard_directive_1 = __webpack_require__(1);
	var virtual_keyboard_component_1 = __webpack_require__(4);
	var virtual_keyboard_key_component_1 = __webpack_require__(12);
	var virtual_keyboard_service_1 = __webpack_require__(6);
	var NgVirtualKeyboardModule = (function () {
	    function NgVirtualKeyboardModule() {
	    }
	    return NgVirtualKeyboardModule;
	}());
	NgVirtualKeyboardModule = __decorate([
	    core_1.NgModule({
	        declarations: [
	            virtual_keyboard_directive_1.NgVirtualKeyboardDirective,
	            virtual_keyboard_component_1.VirtualKeyboardComponent,
	            virtual_keyboard_key_component_1.VirtualKeyboardKeyComponent,
	        ],
	        providers: [
	            virtual_keyboard_service_1.VirtualKeyboardService,
	        ],
	        imports: [
	            common_1.CommonModule,
	            forms_1.FormsModule,
	            forms_1.ReactiveFormsModule,
	            flex_layout_1.FlexLayoutModule,
	            material_1.MaterialModule,
	        ],
	        entryComponents: [
	            virtual_keyboard_component_1.VirtualKeyboardComponent,
	        ],
	        exports: [
	            virtual_keyboard_directive_1.NgVirtualKeyboardDirective,
	        ]
	    })
	], NgVirtualKeyboardModule);
	exports.NgVirtualKeyboardModule = NgVirtualKeyboardModule;


/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(2);
	var VirtualKeyboardKeyComponent = (function () {
	    /**
	     * Constructor of the class.
	     */
	    function VirtualKeyboardKeyComponent() {
	        this.keyPress = new core_1.EventEmitter();
	        this.special = false;
	        this.spacer = false;
	        this.supportedSpecialKeys = [
	            'Enter',
	            'Backspace',
	            'Escape',
	            'CapsLock',
	            'SpaceBar',
	            'Spacer',
	            'Shift',
	        ];
	        this.icons = {
	            Enter: 'keyboard_return',
	            Backspace: 'backspace',
	            Escape: 'close',
	            SpaceBar: 'space_bar',
	            Shift: 'keyboard_capslock'
	        };
	        this.texts = {
	            CapsLock: 'Caps'
	        };
	        this.notDisabled = [
	            'Enter',
	            'Backspace',
	            'Escape',
	        ];
	    }
	    /**
	     * On init life cycle hook, within this we'll initialize following properties:
	     *  - disabled
	     *  - special
	     *  - keyValue
	     *  - flexValue
	     */
	    VirtualKeyboardKeyComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        var multiplier = 1;
	        var fix = 0;
	        if (this.key.length > 1) {
	            this.spacer = /^Spacer(:(\d+))?$/g.test(this.key);
	            this.special = !!this.supportedSpecialKeys.filter(function (specialKey) {
	                var pattern = new RegExp("^(" + specialKey + ")(:([0-9]))?$");
	                return pattern.test(_this.key);
	            }).length;
	            var matches = /^(\w+)(:(\d+))?$/g.exec(this.key);
	            this.keyValue = matches[1];
	            if (matches[3]) {
	                multiplier = parseInt(matches[3], 10);
	                fix = (multiplier - 1) * 4;
	            }
	        }
	        else {
	            this.keyValue = this.key;
	        }
	        if (this.special) {
	            if (this.icons.hasOwnProperty(this.keyValue)) {
	                this.icon = this.icons[this.keyValue];
	            }
	            else {
	                this.text = this.texts[this.keyValue];
	            }
	        }
	        this.flexValue = multiplier * 64 + fix + "px";
	    };
	    /**
	     * Method to check if key is disabled or not.
	     *
	     * @returns {boolean}
	     */
	    VirtualKeyboardKeyComponent.prototype.isDisabled = function () {
	        if (this.spacer) {
	            return true;
	        }
	        else if (this.disabled && this.notDisabled.indexOf(this.keyValue) !== -1) {
	            return false;
	        }
	        else {
	            return this.disabled;
	        }
	    };
	    /**
	     * Method to handle actual "key" press from virtual keyboard.
	     *  1) Key is "Special", process special key event
	     *  2) Key is "Normal", append this key value to input
	     */
	    VirtualKeyboardKeyComponent.prototype.onKeyPress = function () {
	        this.keyPress.emit({ special: this.special, keyValue: this.keyValue, key: this.key });
	    };
	    return VirtualKeyboardKeyComponent;
	}());
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], VirtualKeyboardKeyComponent.prototype, "key", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Boolean)
	], VirtualKeyboardKeyComponent.prototype, "disabled", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", Object)
	], VirtualKeyboardKeyComponent.prototype, "keyPress", void 0);
	VirtualKeyboardKeyComponent = __decorate([
	    core_1.Component({
	        selector: 'virtual-keyboard-key',
	        template: "\n    <button\n      md-raised-button\n      color=\"primary\"\n      fxFlex=\"{{ flexValue }}\"\n      [class.spacer]=\"spacer\"\n      [disabled]=\"isDisabled()\"\n      (click)=\"onKeyPress()\"\n    >\n      <span *ngIf=\"!special\">{{ keyValue }}</span>\n    \n      <span *ngIf=\"special\">\n        <md-icon *ngIf=\"icon\">{{ icon }}</md-icon>\n    \n        {{ text }}\n      </span>\n    </button>\n  ",
	        styles: ["\n    .mat-button,\n    .mat-icon-button,\n    .mat-raised-button {\n      min-width: 64px;\n      min-height: 64px;\n      padding: 0;\n      margin: 2px;\n      font-size: 32px;\n      line-height: 32px;\n    }\n    \n    .mat-button.spacer,\n    .mat-icon-button.spacer,\n    .mat-raised-button.spacer {\n      background-color: transparent;\n    }\n  "]
	    }),
	    __metadata("design:paramtypes", [])
	], VirtualKeyboardKeyComponent);
	exports.VirtualKeyboardKeyComponent = VirtualKeyboardKeyComponent;


/***/ }
/******/ ])
});
;
//# sourceMappingURL=ng-virtual-keyboard.umd.js.map