
export type BackendProject = {
  slug: string;
  title: string;
  titleAr: string;
  type: "dashboard" | "api" | "booking" | "inventory" | "crm" | "reports" | "auth" | "payments";
  modules: string[];
  modulesAr: string[];
  problem: string;
  problemAr: string;
  solution: string;
  solutionAr: string;
  role: string[];
  stack: string[];
  databaseNotes?: string[];
  apiNotes?: string[];
  screenshots: string[];
  status: "live" | "private" | "demo" | "case-study";
};

export const backendProjects: BackendProject[] = [];
