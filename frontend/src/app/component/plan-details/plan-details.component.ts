import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { PlanService } from "../../service/plan.service";

@Component({
  selector: "app-plan-details",
  templateUrl: "./plan-details.component.html",
  styleUrls: ["./plan-details.component.css"]
})
export class PlanDetailsComponent implements OnInit {
  plan: Object;
  constructor(private planService: PlanService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => (this.plan = params.id));
  }

  ngOnInit() {
    this.planService.getPlan(this.plan).subscribe(data => (this.plan = data));
  }
}
