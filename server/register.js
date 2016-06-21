ReactionCore.registerPackage({
  label: "Dostavkanetua",
  name: "dst",
  icon: "fa fa-vine",
  autoEnable: true,
  layout: [
  {
      layout: "dstCoreLayout",
      workflow: "coreWorkflow",
      collection: "Products",
      theme: "default",
      enabled: true,
      structure: {
        template: "products",
        layoutHeader: "layoutHeader",
        layoutFooter: "layoutFooter",
        notFound: "productNotFound",
        dashboardHeader: "",
        dashboardControls: "dashboardControls",
        dashboardHeaderControls: "",
        adminControlsFooter: "adminControlsFooter"
      }
    }]
});
