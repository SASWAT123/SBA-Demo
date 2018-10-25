import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class PlanService {
  constructor(private http: HttpClient) {}

  getPlans() {
    return this.http.get("http://localhost:9696/plans");
  }

  getPlan(planId) {
    return this.http.get(
      "http://localhost:9696/plans/" + planId
    );
}
