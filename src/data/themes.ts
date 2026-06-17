
export type ThemeItem = {
  slug: string;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  purpose: string;
  purposeAr: string;
  pages: string[];
  features: string[];
  featuresAr: string[];
  stack: string[];
  demoUrl?: string;
  githubUrl?: string;
  screenshots: string[];
  status: "public" | "private" | "starter" | "client";
};

export const themes: ThemeItem[] = [];
