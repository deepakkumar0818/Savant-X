'use client';

import { useEffect, useState } from 'react';
import { 
  Mail, 
  Users, 
  TrendingUp, 
  Clock,
  CheckCircle,
  XCircle,
  MessageSquare
} from 'lucide-react';

interface DashboardStats {
  totalContacts: number;
  newContacts: number;
  respondedContacts: number;
  pendingContacts: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalContacts: 0,
    newContacts: 0,
    respondedContacts: 0,
    pendingContacts: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('/api/admin/stats', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setStats(data);
      }
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    {
      title: 'Total Contacts',
      value: stats.totalContacts,
      icon: Mail,
      color: 'from-blue-600 to-indigo-600',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'New Contacts',
      value: stats.newContacts,
      icon: Clock,
      color: 'from-yellow-600 to-orange-600',
      bgColor: 'bg-yellow-50',
    },
    {
      title: 'Responded',
      value: stats.respondedContacts,
      icon: CheckCircle,
      color: 'from-green-600 to-emerald-600',
      bgColor: 'bg-green-50',
    },
    {
      title: 'Pending',
      value: stats.pendingContacts,
      icon: XCircle,
      color: 'from-red-600 to-pink-600',
      bgColor: 'bg-red-50',
    },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Dashboard</h1>
        <p className="text-slate-600">Welcome to the SavantX Admin Panel</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 hover:shadow-xl transition-shadow duration-200"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className={`${card.bgColor} px-3 py-1 rounded-lg`}>
                  <TrendingUp className="w-4 h-4 text-slate-600" />
                </div>
              </div>
              <h3 className="text-sm font-medium text-slate-600 mb-1">{card.title}</h3>
              <p className="text-3xl font-bold text-slate-900">{card.value}</p>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6">
          <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-blue-600" />
            Recent Activity
          </h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Mail className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-slate-900">New contact submission</p>
                <p className="text-sm text-slate-500">2 minutes ago</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-slate-900">Contact responded</p>
                <p className="text-sm text-slate-500">1 hour ago</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6">
          <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-blue-600" />
            Quick Stats
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
              <span className="font-medium text-slate-700">Response Rate</span>
              <span className="text-2xl font-bold text-blue-600">
                {stats.totalContacts > 0
                  ? Math.round((stats.respondedContacts / stats.totalContacts) * 100)
                  : 0}%
              </span>
            </div>
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
              <span className="font-medium text-slate-700">Pending Rate</span>
              <span className="text-2xl font-bold text-green-600">
                {stats.totalContacts > 0
                  ? Math.round((stats.pendingContacts / stats.totalContacts) * 100)
                  : 0}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

