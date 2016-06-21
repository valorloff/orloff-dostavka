Package.describe({
  name: "orloff:dostavka",
  summary: "New global dostavka e-commerce",
  version: "0.1.0"
});

Package.onUse(function (api) {
  api.versionsFrom("METEOR@1.3");
  api.use("meteor-base");
  api.use("mongo");
  api.use("ecmascript");
  api.use("es5-shim");
  api.use("blaze-html-templates");
  api.use("session");
  api.use("jquery");
  api.use("tracker");

  // Reaction package dependencies
  api.use("reactioncommerce:core@0.13.0");

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
  api.use("less");
  // Private fixture data
    api.addAssets("private/data/Products.json", "server");
    api.addAssets("private/data/Shops.json", "server");
    api.addAssets("private/data/Tags.json", "server");

  api.addFiles("server/load.js", "server");
  api.addFiles("server/register.js", "server");
  api.addFiles("client/main.less", "client");
  api.addFiles('client/templates/layouts/index.html', "client");
  api.addFiles('client/templates/layouts/index.js', "client");
  api.addFiles("client/styles/variables.less", "client", {isImport: true});
  api.addFiles("client/styles/base.less", "client", {isImport: true});
  api.use("reactioncommerce:core-theme@2.0.0");

  //Templates
  api.addFiles("client/templates/layouts/core.html", "client");
});
