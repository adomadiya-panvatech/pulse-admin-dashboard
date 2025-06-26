
import React from 'react';
import { cn } from '@/lib/utils';
import { 
  BarChart3, 
  Users, 
  UserCheck, 
  TrendingUp, 
  MessageSquare,
  Building2,
  Phone,
  Mail,
  MessageCircle
} from 'lucide-react';

interface SidebarProps {
  activeModule: string;
  setActiveModule: (module: string) => void;
}

const modules = [
  { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
  { id: 'opportunities', label: 'Opportunities', icon: TrendingUp },
  { id: 'accounts', label: 'Accounts', icon: Building2 },
  { id: 'contacts', label: 'Contacts', icon: Users },
  { id: 'leads', label: 'Leads', icon: UserCheck },
  { id: 'communications', label: 'Communications', icon: MessageSquare },
];

const communicationSubModules = [
  { id: 'sms', label: 'SMS', icon: Phone },
  { id: 'email', label: 'Email', icon: Mail },
  { id: 'teams', label: 'MS Teams', icon: MessageCircle },
];

export const Sidebar: React.FC<SidebarProps> = ({ activeModule, setActiveModule }) => {
  return (
    <div className="w-64 h-screen bg-white/10 dark:bg-slate-800/50 backdrop-blur-xl border-r border-white/20 dark:border-slate-700/50 shadow-xl">
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-800 dark:text-white">CRM Suite</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">Admin Dashboard</p>
          </div>
        </div>
        
        <nav className="space-y-2">
          {modules.map((module) => {
            const Icon = module.icon;
            const isActive = activeModule === module.id;
            
            return (
              <div key={module.id}>
                <button
                  onClick={() => setActiveModule(module.id)}
                  className={cn(
                    "w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 group",
                    isActive 
                      ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg transform scale-105" 
                      : "text-slate-600 dark:text-slate-300 hover:bg-white/20 dark:hover:bg-slate-700/50 hover:text-slate-800 dark:hover:text-white"
                  )}
                >
                  <Icon className={cn(
                    "w-5 h-5 transition-transform duration-200",
                    isActive ? "scale-110" : "group-hover:scale-105"
                  )} />
                  <span className="font-medium">{module.label}</span>
                </button>
                
                {/* Communications Sub-modules */}
                {module.id === 'communications' && activeModule === 'communications' && (
                  <div className="ml-6 mt-2 space-y-1 animate-fade-in">
                    {communicationSubModules.map((subModule) => {
                      const SubIcon = subModule.icon;
                      return (
                        <button
                          key={subModule.id}
                          className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm text-slate-500 dark:text-slate-400 hover:bg-white/10 dark:hover:bg-slate-700/30 hover:text-slate-700 dark:hover:text-slate-200 transition-all duration-200"
                        >
                          <SubIcon className="w-4 h-4" />
                          <span>{subModule.label}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
};
