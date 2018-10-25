import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { PlanListComponent } from "./component/plan-list/plan-list.component";
import { PlanDetailsComponent } from "./component/plan-details/plan-details.component";

const paths: Routes = [
  { path: "", component: PlanListComponent },
  { path: "details/:id", component: PlanDetailsComponent }
];

@NgModule({
  declarations: [AppComponent, PlanListComponent, PlanDetailsComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(paths)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
