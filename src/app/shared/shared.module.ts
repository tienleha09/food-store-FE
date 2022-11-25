import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SearchComponent } from "./components/search/search.component";
import { ValidationHelper } from "./pipe/validation-helper.pipe";


@NgModule({
    declarations:[SearchComponent, ValidationHelper],
    imports:[CommonModule, FormsModule],
    exports:[SearchComponent, ValidationHelper]
})
export class SharedModule{

}