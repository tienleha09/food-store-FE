import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { PaginationComponent } from "./components/pagination/pagination.component";
import { SearchComponent } from "./components/search/search.component";
import { ValidationHelper } from "./pipe/validation-helper.pipe";


@NgModule({
    declarations:[SearchComponent, ValidationHelper, PaginationComponent],
    imports:[CommonModule, FormsModule],
    exports:[SearchComponent, ValidationHelper, PaginationComponent]
})
export class SharedModule{

}