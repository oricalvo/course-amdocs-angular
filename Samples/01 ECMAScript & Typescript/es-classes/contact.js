"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Entity = (function () {
    function Entity() {
    }
    return Entity;
}());
var Contact = (function (_super) {
    __extends(Contact, _super);
    function Contact(name) {
        var _this = _super.call(this) || this;
        if (typeof name == "string") {
            _this.name = name;
        }
        else {
            _this.name = name.toString();
        }
        return _this;
    }
    Contact.prototype.www = function () {
        console.log(this.name);
    };
    return Contact;
}(Entity));
var email;
console.log(email);
// new Contact("Ori");
// new Contact(123);
var Rectangle = (function () {
    function Rectangle() {
    }
    Rectangle.prototype.zzz = function () {
        console.log("Rect");
    };
    return Rectangle;
}());
//# sourceMappingURL=contact.js.map