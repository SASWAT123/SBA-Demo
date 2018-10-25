import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { PlanService } from "src/app/service/plan.service";
import { Plan } from "src/app/model/plan";

@Component({
  selector: "app-plan-list",
  templateUrl: "./plan-list.component.html",
  styleUrls: ["./plan-list.component.css"]
})
export class PlanListComponent implements OnInit {
  plans: Object;
  constructor(private planService: PlanService) {}

  ngOnInit() {
    this.planService.getPlans().subscribe(data => (this.plans = data));
  }
}
