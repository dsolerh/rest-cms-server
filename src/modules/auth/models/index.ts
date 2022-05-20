import { Pin } from "./pin.model";
import { Role } from "./role.model";
import { User } from "./user.model";

User.belongsTo(Role);
User.belongsTo(User, { as: "Creator" });
Role.hasMany(User);
Role.belongsTo(User, { as: "Creator" });

export { Role, User, Pin };
