Package.describe({
  name: "orloff:dostavka",
  summary: "New global dostavka e-commerce",
  version: "0.1.0"
});

Package.onUse(function (api) {
  api.versionsFrom("METEOR@1.3");
  Npm.depends({
    "jquery.payment": "1.2.4",
    "autosize": "3.0.15",
    "jquery-tags-input": "1.3.5",
    "accounting": "0.4.1",
    "money": "0.2.0",
    "draggabilly": "1.2.0",
    "imagesloaded": "4.1.0",
    "jquery": "2.2.3",
    "jquery-ui": "1.10.5"
  });
// core Meteor dependencies
  api.use("meteor-base");
  api.use("mongo");
  api.use("ecmascript");
  api.use("es5-shim");
  api.use("blaze-html-templates");
  api.use("session");
  api.use("jquery");
  api.use("tracker");

  // meteor add-on packages
  api.use("underscore");
  api.use("logging");
  api.use("reload");
  api.use("random");
  api.use("ejson");
  api.use("check");
  api.use("http");
  api.use("reactive-var");
  api.use("reactive-dict");

  // Reaction package dependencies
  api.use("reactioncommerce:core@0.13.0");
  // theme dependencies
  api.use("less");
  api.use("reactioncommerce:core-theme@2.0.0");
  // Server files
    api.addFiles("server/register.js", "server");
    api.addFiles("server/load.js", "server");
  // Private fixture data
    api.addAssets("private/data/Products.json", "server");
    api.addAssets("private/data/Shops.json", "server");
    api.addAssets("private/data/Tags.json", "server");

  api.addFiles("client/styles/variables.less", "client", {isImport: true});
  api.addFiles("client/styles/base.less", "client", {isImport: true});
  api.addFiles("client/main.less", "client");

  //Templates
  api.addFiles("client/templates/layouts/core.html", "client");
  api.addFiles('client/templates/layouts/index.html', "client");
  api.addFiles('client/templates/layouts/index.js', "client");
  api.addFiles("client/templates/cart/checkout/payment/simplePayment.html","client");
  api.addFiles("client/templates/cart/checkout/payment/submitOrder.js","client");
});
