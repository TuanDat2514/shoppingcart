// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  URL:"http://localhost:3000/",
  //Items
  ITEMS:"items/",
  CATEGORY_ITEM:"items?category=",

  //topping
  TOPPING:"topping/",

  //user
  USER:"user/",
  USERLOGIN:"user?",
  USERNAME:"?username=",

  //category
  CATEGORY:"category/",

  //bill
  BILL:"bills/",
  BILL_EMBED_DETAIL:"bills?_embed=detail",

  //detail
  DETAIL:"detail/",
  DETAIL_EXPAND_ITEMS:"detail?_expand=items",

  //history
  HISTORY:"history/",
  HISTORY_USER:"history?userId=",
  HISTORY_ID:"history?id="
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
