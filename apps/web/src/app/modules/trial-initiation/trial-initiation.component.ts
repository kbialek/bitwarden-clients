import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { first } from "rxjs";

import { PlanType } from "@bitwarden/common/enums/planType";
import { ProductType } from "@bitwarden/common/enums/productType";

@Component({
  selector: "app-trial",
  templateUrl: "trial-initiation.component.html",
})
export class TrialInitiationComponent implements OnInit {
  email = "";
  org = "teams";
  plan: PlanType;
  product: ProductType;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.pipe(first()).subscribe((qParams) => {
      if (qParams.email != null && qParams.email.indexOf("@") > -1) {
        this.email = qParams.email;
      }
      if (qParams.org) {
        this.org = qParams.org;
      }

      if (qParams.org === "families") {
        this.plan = PlanType.FamiliesAnnually;
        this.product = ProductType.Families;
      } else if (qParams.org === "teams") {
        this.plan = PlanType.TeamsAnnually;
        this.product = ProductType.Teams;
      } else if (qParams.org === "enterprise") {
        this.plan = PlanType.EnterpriseAnnually;
        this.product = ProductType.Enterprise;
      }
    });
  }
}
