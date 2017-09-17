import {AppComponent} from "./app.component";
import {Module} from "./annotations";
import {AppService} from "./app.service";

@Module({
    name: "myApp",
    components: [
        AppComponent,
    ],
    services: [
        AppService,
    ],
})
export class AppModule {
}
