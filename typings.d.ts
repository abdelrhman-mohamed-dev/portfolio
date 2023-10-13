import { Image } from "sanity";

type sanityBase = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
};
interface Skill extends sanityBase {
  _type: skill;
  name: string;
  icon: Image;
}
interface Work extends sanityBase {
  _type: work;
  title: string;
  lightDescription: string;
  boldDescription: string;
  image: Image;
  tags: string;
  github: string;
}
