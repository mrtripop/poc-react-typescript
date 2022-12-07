import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export type SkillType = {
  _id: string;
  name: string;
  bgColor: string;
  icon: ImageBitmap;
};

export type WorkExperienceType = {
  name: string;
  company: string;
  desc: string;
};

export type ExperienceType = {
  _id: string;
  year: string;
  works: Array<WorkExperienceType>;
};

export type BrandType = {
  _id: string;
  imgUrl: SanityImageSource;
  name: string;
};

export type TestimonialType = {
  imgurl: SanityImageSource;
  name: string;
  company: string;
  feedback: string;
};
