import { LocatorCachingService } from "@kaniamb/tzatziki-core";

import * as BL from "./services";
import * as LoginLocators from "./services/login-service/locators";

class Utility {
  BL: any;

  constructor() {
    this.BL = BL;
  }

  init() {
    LocatorCachingService.getInstance(LoginLocators);
  }
}
const Tzatziki_Bl = new Utility();
export { Tzatziki_Bl };
