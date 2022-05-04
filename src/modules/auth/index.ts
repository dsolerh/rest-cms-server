import routes from "./routes";

import { asociate as userAsociate } from "./models/user.model";
import { asociate as roleAsociate } from "./models/role.model";
import { asociate as pinAsociate } from "./models/pin.model";

userAsociate();
roleAsociate();
pinAsociate();

export default {
  routes: routes,
};
