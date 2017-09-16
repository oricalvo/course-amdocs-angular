class ContactIndexComponent {
    static $inject = ["appService"];
    onRefresh: ()=>void;

    constructor(private appService: AppService) {
    }

    refresh() {
        this.onRefresh();
    }

    get contacts() {
        return this.appService.contacts;
    }
}

appModule.component("appContactIndex", {
    controller: ContactIndexComponent,
    template: `<div>
        <app-new-contact></app-new-contact>
    
        <ul>
            <li ng-repeat="contact in $ctrl.contacts">
                <span>{{contact.name}}</span>
            </li>
        </ul>
        <button ng-click="$ctrl.refresh()">Refresh</button>
    </div>`,
    bindings: {
        "onRefresh": "&",
    }
});
