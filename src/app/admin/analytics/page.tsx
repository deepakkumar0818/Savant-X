'use client';

import { BarChart3, TrendingUp, Eye, MousePointerClick } from 'lucide-react';

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Analytics</h1>
        <p className="text-slate-600">View website analytics and performance metrics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg">
              <Eye className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="text-sm font-medium text-slate-600 mb-1">Total Views</h3>
          <p className="text-3xl font-bold text-slate-900">0</p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center shadow-lg">
              <MousePointerClick className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="text-sm font-medium text-slate-600 mb-1">Total Clicks</h3>
          <p className="text-3xl font-bold text-slate-900">0</p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-lg">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="text-sm font-medium text-slate-600 mb-1">Growth Rate</h3>
          <p className="text-3xl font-bold text-slate-900">0%</p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center shadow-lg">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="text-sm font-medium text-slate-600 mb-1">Engagement</h3>
          <p className="text-3xl font-bold text-slate-900">0%</p>
        </div>
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-12 text-center">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <BarChart3 className="w-8 h-8 text-blue-600" />
        </div>
        <h2 className="text-xl font-bold text-slate-900 mb-2">Analytics Dashboard</h2>
        <p className="text-slate-600 mb-6">
          Connect Google Analytics or other analytics services to view detailed metrics.
        </p>
        <p className="text-sm text-slate-500">
          Coming soon - Integrate with analytics APIs to enable this feature.
        </p>
      </div>
    </div>
  );
}

