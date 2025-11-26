'use client';

import { useEffect, useState } from 'react';
import { FileText, Home, Save, Edit2, Eye } from 'lucide-react';
import Link from 'next/link';

interface PageContent {
  id: string;
  page: string;
  section: string;
  content: Record<string, unknown>;
  updatedAt: string;
}

export default function PagesManagement() {
  const [pages, setPages] = useState<string[]>(['home', 'about', 'contact', 'products', 'work']);
  const [selectedPage, setSelectedPage] = useState<string>('home');
  const [sections, setSections] = useState<PageContent[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingSection, setEditingSection] = useState<string | null>(null);
  const [editContent, setEditContent] = useState<Record<string, unknown>>({});

  useEffect(() => {
    fetchPages();
  }, []);

  useEffect(() => {
    if (selectedPage) {
      fetchPageContent(selectedPage);
    }
  }, [selectedPage]);


  const fetchPages = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('/api/admin/pages', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        if (data.pages && data.pages.length > 0) {
          setPages(data.pages);
        }
        // If API returns empty or fails, keep default pages
      }
    } catch (error) {
      console.error('Error fetching pages:', error);
      // Keep default pages if API fails
    }
  };

  const initializeDefaultContent = async (page: string) => {
    setLoading(true);
    try {
      const token = localStorage.getItem('adminToken');
      const defaultSections = [
        {
          section: 'hero',
          content: {
            title: "Transform Your Business with",
            titleHighlight: "Cutting-Edge Technology",
            subtitle: "We build innovative digital solutions that drive growth, enhance user experiences, and transform businesses into industry leaders.",
            ctaText: "Let's Build",
            ctaLink: "/contact"
          }
        },
        {
          section: 'whyChoose',
          content: {
            title: "Excellence in Every",
            titleHighlight: "Solution",
            subtitle: "We combine cutting-edge technology with strategic thinking to deliver solutions that transform businesses and drive sustainable growth."
          }
        },
        {
          section: 'stats',
          content: {
            projects: "500+",
            clients: "200+",
            experience: "10+",
            satisfaction: "98%"
          }
        }
      ];
      
      // Save defaults to backend
      for (const sectionData of defaultSections) {
        const response = await fetch(`/api/admin/pages/${page}/${sectionData.section}`, {
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ content: sectionData.content }),
        });
        
        if (!response.ok) {
          console.error(`Failed to save section ${sectionData.section}`);
        }
      }
      
      // Refetch after creating
      await fetchPageContent(page);
    } catch (error) {
      console.error('Error initializing content:', error);
      alert('Failed to initialize content. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const fetchPageContent = async (page: string): Promise<void> => {
    setLoading(true);
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`/api/admin/pages/${page}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        const sections = data.sections || [];
        setSections(sections);
        return Promise.resolve();
      }
    } catch (error) {
      console.error('Error fetching page content:', error);
    } finally {
      setLoading(false);
    }
    return Promise.resolve();
  };

  const handleEdit = (section: PageContent) => {
    setEditingSection(section.section);
    setEditContent(section.content);
  };

  const handleSave = async (section: string) => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`/api/admin/pages/${selectedPage}/${section}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: editContent }),
      });

      if (response.ok) {
        setEditingSection(null);
        fetchPageContent(selectedPage);
      }
    } catch (error) {
      console.error('Error saving content:', error);
      alert('Failed to save content');
    }
  };

  const handleCancel = () => {
    setEditingSection(null);
    setEditContent({});
  };

  const updateField = (key: string, value: unknown) => {
    setEditContent(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  const getPageIcon = (page: string) => {
    switch (page) {
      case 'home':
        return <Home className="w-5 h-5" />;
      default:
        return <FileText className="w-5 h-5" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Page Content Management</h1>
          <p className="text-slate-600">Edit and manage content for all pages</p>
        </div>
        <Link
          href="/"
          target="_blank"
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Eye className="w-4 h-4" />
          View Site
        </Link>
      </div>

      {/* Page Selector */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6">
        <h2 className="text-lg font-semibold text-slate-900 mb-4">Select Page</h2>
        <div className="flex flex-wrap gap-3">
          {pages.length === 0 ? (
            <p className="text-slate-500">Loading pages...</p>
          ) : (
            pages.map((page) => (
              <button
                key={page}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedPage(page);
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all cursor-pointer ${
                  selectedPage === page
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {getPageIcon(page)}
                <span className="capitalize">{page}</span>
              </button>
            ))
          )}
        </div>
        {selectedPage && (
          <div className="mt-4 p-3 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-700">
              <span className="font-semibold">Selected:</span> {selectedPage.charAt(0).toUpperCase() + selectedPage.slice(1)} Page
            </p>
          </div>
        )}
      </div>

      {/* Sections */}
      {loading ? (
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-slate-600">Loading content...</p>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {sections.length === 0 ? (
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-12 text-center">
              <FileText className="w-16 h-16 text-slate-400 mx-auto mb-4" />
              <p className="text-slate-600 mb-6">No content sections found for this page.</p>
              {selectedPage === 'home' && (
                <button
                  onClick={() => initializeDefaultContent(selectedPage)}
                  className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors mx-auto"
                >
                  <Save className="w-5 h-5" />
                  Initialize Default Content
                </button>
              )}
            </div>
          ) : (
            sections.map((section) => (
              <div
                key={section.id}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 capitalize">
                      {section.section} Section
                    </h3>
                    <p className="text-sm text-slate-500">
                      Last updated: {new Date(section.updatedAt).toLocaleString()}
                    </p>
                  </div>
                  {editingSection !== section.section && (
                    <button
                      onClick={() => handleEdit(section)}
                      className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Edit2 className="w-4 h-4" />
                      Edit
                    </button>
                  )}
                </div>

                {editingSection === section.section ? (
                  <div className="space-y-4">
                    {Object.entries(editContent).map(([key, value]) => (
                      <div key={key}>
                        <label className="block text-sm font-semibold text-slate-700 mb-2 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </label>
                        {typeof value === 'string' && value.length > 100 ? (
                          <textarea
                            value={value}
                            onChange={(e) => updateField(key, e.target.value)}
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            rows={4}
                          />
                        ) : (
                          <input
                            type="text"
                            value={typeof value === 'string' || typeof value === 'number' ? String(value) : ''}
                            onChange={(e) => updateField(key, e.target.value)}
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                        )}
                      </div>
                    ))}
                    <div className="flex gap-3">
                      <button
                        onClick={() => handleSave(section.section)}
                        className="flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
                      >
                        <Save className="w-4 h-4" />
                        Save Changes
                      </button>
                      <button
                        onClick={handleCancel}
                        className="px-6 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="bg-slate-50 rounded-lg p-4">
                    <pre className="text-sm text-slate-700 whitespace-pre-wrap">
                      {JSON.stringify(section.content, null, 2)}
                    </pre>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

