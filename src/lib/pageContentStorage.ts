// Storage for page content
// In production, replace with a database

export interface PageContent {
  id: string;
  page: string; // 'home', 'about', etc.
  section: string; // 'hero', 'services', etc.
  content: Record<string, unknown>; // Flexible content structure
  updatedAt: string;
}

// In-memory store (will be lost on server restart)
// In production, use a database
const pageContents: PageContent[] = [];

// Default content for home page
const defaultHomeContent = {
  hero: {
    title: "Transform Your Business with",
    titleHighlight: "Cutting-Edge Technology",
    subtitle: "We build innovative digital solutions that drive growth, enhance user experiences, and transform businesses into industry leaders.",
    ctaText: "Let's Build",
    ctaLink: "/contact"
  },
  whyChoose: {
    title: "Excellence in Every",
    titleHighlight: "Solution",
    subtitle: "We combine cutting-edge technology with strategic thinking to deliver solutions that transform businesses and drive sustainable growth."
  },
  services: {
    title: "Our Services",
    subtitle: "Comprehensive solutions for your digital transformation"
  },
  stats: {
    projects: "500+",
    clients: "200+",
    experience: "10+",
    satisfaction: "98%"
  }
};

export function getPageContent(page: string, section?: string): Record<string, unknown> {
  if (section) {
    const content = pageContents.find(
      pc => pc.page === page && pc.section === section
    );
    return content ? content.content : (defaultHomeContent[section as keyof typeof defaultHomeContent] || {});
  }
  
  // Return all sections for a page
  const allSections = pageContents.filter(pc => pc.page === page);
  if (allSections.length === 0) {
    return defaultHomeContent;
  }
  
  const result: Record<string, unknown> = {};
  allSections.forEach(section => {
    result[section.section] = section.content;
  });
  
  // Merge with defaults for missing sections
  return { ...defaultHomeContent, ...result };
}

export function savePageContent(
  page: string,
  section: string,
  content: Record<string, unknown>
): PageContent {
  const existing = pageContents.find(
    pc => pc.page === page && pc.section === section
  );

  const pageContent: PageContent = {
    id: existing?.id || `content_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`,
    page,
    section,
    content,
    updatedAt: new Date().toISOString(),
  };

  if (existing) {
    const index = pageContents.findIndex(pc => pc.id === existing.id);
    pageContents[index] = pageContent;
  } else {
    pageContents.push(pageContent);
  }

  return pageContent;
}

export function getAllPageContents(page?: string): PageContent[] {
  if (page) {
    return pageContents.filter(pc => pc.page === page);
  }
  return [...pageContents];
}

export function deletePageContent(id: string): boolean {
  const index = pageContents.findIndex(pc => pc.id === id);
  if (index !== -1) {
    pageContents.splice(index, 1);
    return true;
  }
  return false;
}

