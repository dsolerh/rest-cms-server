import { Model } from "sequelize";

export function getLang(model: any, field: string) {
  return () => {
    try {
      return JSON.parse(model.getDataValue(field));
    } catch (error) {
      return model.getDataValue(field);
    }
  };
}

export function setLang(model: any, field: string) {
  return (val: any) => model.setDataValue(field, JSON.stringify(val));
}
