'use client';

import { useEffect, useState } from 'react';
import { 
  Mail, 
  Phone, 
  Building, 
  DollarSign,
  Calendar,
  CheckCircle,
  XCircle,
  Search,
  Filter,
  Trash2,
  Eye
} from 'lucide-react';

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  budget?: string;
  message: string;
  status: 'new' | 'responded' | 'pending';
  createdAt: string;
}

export default function ContactsPage() {
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'new' | 'responded' | 'pending'>('all');
  const [selectedContact, setSelectedContact] = useState<ContactSubmission | null>(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('/api/admin/contacts', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setContacts(data);
      }
    } catch (error) {
      console.error('Error fetching contacts:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateContactStatus = async (id: string, status: string) => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`/api/admin/contacts/${id}`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });

      if (response.ok) {
        fetchContacts();
      }
    } catch (error) {
      console.error('Error updating contact:', error);
    }
  };

  const deleteContact = async (id: string) => {
    if (!confirm('Are you sure you want to delete this contact?')) {
      return;
    }

    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`/api/admin/contacts/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        fetchContacts();
      }
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  const filteredContacts = contacts.filter((contact) => {
    const matchesSearch =
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.service.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === 'all' || contact.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    const styles = {
      new: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      responded: 'bg-green-100 text-green-800 border-green-200',
      pending: 'bg-red-100 text-red-800 border-red-200',
    };

    return (
      <span
        className={`px-3 py-1 rounded-full text-xs font-semibold border ${
          styles[status as keyof typeof styles] || styles.new
        }`}
      >
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600">Loading contacts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Contact Submissions</h1>
          <p className="text-slate-600">Manage and respond to contact form submissions</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search contacts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Status Filter */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as any)}
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
            >
              <option value="all">All Status</option>
              <option value="new">New</option>
              <option value="responded">Responded</option>
              <option value="pending">Pending</option>
            </select>
          </div>
        </div>
      </div>

      {/* Contacts List */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold">Name</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Email</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Service</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Date</th>
                <th className="px-6 py-4 text-center text-sm font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {filteredContacts.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-slate-500">
                    No contacts found
                  </td>
                </tr>
              ) : (
                filteredContacts.map((contact) => (
                  <tr key={contact.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-medium text-slate-900">{contact.name}</div>
                      {contact.company && (
                        <div className="text-sm text-slate-500 flex items-center gap-1 mt-1">
                          <Building className="w-3 h-3" />
                          {contact.company}
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-slate-900">{contact.email}</div>
                      {contact.phone && (
                        <div className="text-sm text-slate-500 flex items-center gap-1 mt-1">
                          <Phone className="w-3 h-3" />
                          {contact.phone}
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-slate-900">{contact.service}</div>
                      {contact.budget && (
                        <div className="text-sm text-slate-500 flex items-center gap-1 mt-1">
                          <DollarSign className="w-3 h-3" />
                          {contact.budget}
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4">{getStatusBadge(contact.status)}</td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-slate-600 flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(contact.createdAt).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => setSelectedContact(contact)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          title="View Details"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() =>
                            updateContactStatus(
                              contact.id,
                              contact.status === 'responded' ? 'new' : 'responded'
                            )
                          }
                          className={`p-2 rounded-lg transition-colors ${
                            contact.status === 'responded'
                              ? 'text-yellow-600 hover:bg-yellow-50'
                              : 'text-green-600 hover:bg-green-50'
                          }`}
                          title={
                            contact.status === 'responded' ? 'Mark as New' : 'Mark as Responded'
                          }
                        >
                          {contact.status === 'responded' ? (
                            <XCircle className="w-4 h-4" />
                          ) : (
                            <CheckCircle className="w-4 h-4" />
                          )}
                        </button>
                        <button
                          onClick={() => deleteContact(contact.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Contact Detail Modal */}
      {selectedContact && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-slate-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-slate-900">Contact Details</h2>
                <button
                  onClick={() => setSelectedContact(null)}
                  className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <XCircle className="w-5 h-5 text-slate-600" />
                </button>
              </div>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-slate-500 mb-2">Personal Information</h3>
                <div className="bg-slate-50 rounded-lg p-4 space-y-3">
                  <div>
                    <p className="text-sm text-slate-500">Name</p>
                    <p className="font-medium text-slate-900">{selectedContact.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Email</p>
                    <p className="font-medium text-slate-900">{selectedContact.email}</p>
                  </div>
                  {selectedContact.phone && (
                    <div>
                      <p className="text-sm text-slate-500">Phone</p>
                      <p className="font-medium text-slate-900">{selectedContact.phone}</p>
                    </div>
                  )}
                  {selectedContact.company && (
                    <div>
                      <p className="text-sm text-slate-500">Company</p>
                      <p className="font-medium text-slate-900">{selectedContact.company}</p>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-slate-500 mb-2">Project Details</h3>
                <div className="bg-slate-50 rounded-lg p-4 space-y-3">
                  <div>
                    <p className="text-sm text-slate-500">Service</p>
                    <p className="font-medium text-slate-900">{selectedContact.service}</p>
                  </div>
                  {selectedContact.budget && (
                    <div>
                      <p className="text-sm text-slate-500">Budget</p>
                      <p className="font-medium text-slate-900">{selectedContact.budget}</p>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-slate-500 mb-2">Message</h3>
                <div className="bg-slate-50 rounded-lg p-4">
                  <p className="text-slate-700 whitespace-pre-wrap">{selectedContact.message}</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                <div>
                  <p className="text-sm text-slate-500">Status</p>
                  {getStatusBadge(selectedContact.status)}
                </div>
                <div>
                  <p className="text-sm text-slate-500">Submitted</p>
                  <p className="font-medium text-slate-900">
                    {new Date(selectedContact.createdAt).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

