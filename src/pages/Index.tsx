
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { EnhancedStatsCards } from '@/components/EnhancedStatsCards';
import { SalesChart } from '@/components/SalesChart';
import { ActivityChart } from '@/components/ActivityChart';
import { RecentActivities } from '@/components/RecentActivities';
import { QuickActions } from '@/components/QuickActions';
import { Button } from '@/components/ui/button';
import { TrendingUp, Users, Building2, UserCheck, MessageSquare, ArrowRight } from 'lucide-react';

const Index = () => {
  const quickLinks = [
    { 
      title: 'Opportunities', 
      description: 'Manage sales pipeline', 
      icon: TrendingUp, 
      path: '/opportunities',
      color: 'from-blue-500 to-indigo-600',
      count: '12 active'
    },
    { 
      title: 'Accounts', 
      description: 'Customer accounts', 
      icon: Building2, 
      path: '/accounts',
      color: 'from-green-500 to-emerald-600',
      count: '247 total'
    },
    { 
      title: 'Contacts', 
      description: 'Business contacts', 
      icon: Users, 
      path: '/contacts',
      color: 'from-purple-500 to-pink-600',
      count: '5,678 contacts'
    },
    { 
      title: 'Leads', 
      description: 'Sales prospects', 
      icon: UserCheck, 
      path: '/leads',
      color: 'from-orange-500 to-red-600',
      count: '89 hot leads'
    },
    { 
      title: 'Communications', 
      description: 'All messages', 
      icon: MessageSquare, 
      path: '/communications',
      color: 'from-cyan-500 to-blue-600',
      count: '2,456 sent'
    }
  ];

  return (
    <Layout>
      <div className="p-6 space-y-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 dark:from-blue-500/10 dark:to-purple-600/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-slate-700/30">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="mb-6 lg:mb-0">
              <h1 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">
                Welcome back, John! 👋
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-4">
                Here's what's happening with your business today
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center space-x-2 bg-white/20 dark:bg-slate-800/20 rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-slate-700 dark:text-slate-300">12 new leads today</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/20 dark:bg-slate-800/20 rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-slate-700 dark:text-slate-300">3 meetings scheduled</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/20 dark:bg-slate-800/20 rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  <span className="text-slate-700 dark:text-slate-300">$45K in pipeline</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-3">
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200">
                View Full Report
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* Enhanced Stats */}
        <EnhancedStatsCards />

        {/* Quick Access Cards */}
        <div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Quick Access</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {quickLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link key={link.title} to={link.path}>
                  <div className="bg-white/20 dark:bg-slate-800/20 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-slate-700/30 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105 cursor-pointer">
                    <div className={`w-12 h-12 bg-gradient-to-br ${link.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200 mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">{link.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">{link.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500 dark:text-slate-500">{link.count}</span>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        
        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SalesChart />
          <ActivityChart />
        </div>
        
        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <RecentActivities />
          </div>
          <div>
            <QuickActions 
              onAddContact={() => {}}
              onAddLead={() => {}}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
