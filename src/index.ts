import { LocatorCachingService } from "@kaniamb/tzatziki-core";

import * as BL from "./services";
import * as LoginLocators from "./services/login-service/locators";
import * as LogoutLocators from "./services/logout-service/locators";

class Utility {
  BL: any;

  constructor() {
    this.BL = BL;
  }

  init() {
    LocatorCachingService.getInstance().computeAndAppendCachedLocators({
      ...LoginLocators,
      ...LogoutLocators,
    });
  }
}
const Tzatziki_Bl = new Utility();
export { Tzatziki_Bl };
