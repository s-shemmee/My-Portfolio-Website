// IntersectionObserver options type
export interface IntersectionOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

// Result of the useInView hook
export interface InViewResult {
  inView: boolean;
  hasBeenInView: boolean;
}

// Types for Experience component
export interface Experiences {
  role: string;
  year: string;
}

export interface Technology {
  name: string;
}

// Types for Projects component
export interface Project {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  githubLink: string;
  demoLink: string;
}

// GitHub information type
export interface GitHubInfo {
  stars: number | null;
  forks: number | null;
}
