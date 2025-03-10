import CustomField from "./platform-field";

export default {
  register(app) {
    app.addFields({ type: "custom", Component: CustomField });
  },
  bootstrap(app) {},
};
