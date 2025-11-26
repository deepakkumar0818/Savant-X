// Simple in-memory storage for contact submissions
// In production, replace this with a proper database (PostgreSQL, MongoDB, etc.)

export interface ContactSubmission {
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

// In-memory store (will be lost on server restart)
// In production, use a database
let contacts: ContactSubmission[] = [];

export function saveContact(contact: Omit<ContactSubmission, 'id' | 'status' | 'createdAt'>): ContactSubmission {
  const newContact: ContactSubmission = {
    ...contact,
    id: `contact_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`,
    status: 'new',
    createdAt: new Date().toISOString(),
  };

  contacts.push(newContact);
  return newContact;
}

export function getContacts(): ContactSubmission[] {
  return [...contacts].sort((a, b) => 
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function getContactById(id: string): ContactSubmission | undefined {
  return contacts.find(contact => contact.id === id);
}

export function updateContactStatus(id: string, status: 'new' | 'responded' | 'pending'): boolean {
  const contact = contacts.find(c => c.id === id);
  if (contact) {
    contact.status = status;
    return true;
  }
  return false;
}

export function deleteContact(id: string): boolean {
  const index = contacts.findIndex(c => c.id === id);
  if (index !== -1) {
    contacts.splice(index, 1);
    return true;
  }
  return false;
}

export function getStats() {
  const total = contacts.length;
  const newContacts = contacts.filter(c => c.status === 'new').length;
  const responded = contacts.filter(c => c.status === 'responded').length;
  const pending = contacts.filter(c => c.status === 'pending').length;

  return {
    totalContacts: total,
    newContacts,
    respondedContacts: responded,
    pendingContacts: pending,
  };
}

