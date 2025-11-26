'use client';

import { Users, UserPlus, Search } from 'lucide-react';

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Users</h1>
          <p className="text-slate-600">Manage user accounts and permissions</p>
        </div>
        <button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg">
          <UserPlus className="w-5 h-5" />
          Add User
        </button>
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-12 text-center">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Users className="w-8 h-8 text-blue-600" />
        </div>
        <h2 className="text-xl font-bold text-slate-900 mb-2">User Management</h2>
        <p className="text-slate-600 mb-6">
          This section will allow you to manage user accounts, roles, and permissions.
        </p>
        <p className="text-sm text-slate-500">
          Coming soon - Connect to your user database to enable this feature.
        </p>
      </div>
    </div>
  );
}

