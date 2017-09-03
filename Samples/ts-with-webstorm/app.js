var Contact = /** @class */ (function () {
    function Contact() {
        this.id = 10;
    }
    Contact.prototype.dump = function () {
        console.log(this.id);
    };
    return Contact;
}());
var x = new Contact();
x.dump();
//# sourceMappingURL=app.js.map