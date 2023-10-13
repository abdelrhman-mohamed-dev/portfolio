import { type SchemaTypeDefinition } from "sanity";
import skill from "./schemas/Skill";
import work from "./schemas/work";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [skill, work],
};
