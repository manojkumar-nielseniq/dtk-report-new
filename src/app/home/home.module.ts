import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { CardComponentComponent } from "../card-component/card-component.component";
import { HeroSectionComponent } from "../hero-section/hero-section.component";
import { HomeComponent } from "./home.component";

@NgModule({
    declarations: [
        HomeComponent,
        HeroSectionComponent,
        CardComponentComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [
        HomeComponent
    ],
    exports: [
        HomeComponent,
        HeroSectionComponent,
        CardComponentComponent
    ],
})

export class HomeModule {}