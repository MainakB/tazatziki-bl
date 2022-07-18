import { Types } from "@kaniamb/tzatziki-core";

export const logout_PO: Types.ILocatorMetadataObject = {
  userlogout: {
    poParentObject: "logout_PO",
    description: "user id",
    locator: [
      {
        locatorType: Types.LocatorTypes.ID,
        locatorValue: "replaceText",
      },
    ],
  },
  passwordlogout: {
    poParentObject: "logout_PO",
    description: "password",
    locator: [{ locatorType: Types.LocatorTypes.ID, locatorValue: "password" }],
  },
};
