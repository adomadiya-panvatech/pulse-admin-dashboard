
import React, { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { TopBar } from '@/components/TopBar';
import { StatsCards } from '@/components/StatsCards';
import { SalesChart } from '@/components/SalesChart';
import { ActivityChart } from '@/components/ActivityChart';
import { RecentActivities } from '@/components/RecentActivities';
import { QuickActions } from '@/components/QuickActions';
import { ContactModal } from '@/components/ContactModal';
import { LeadModal } from '@/components/LeadModal';
import { ChatBot } from '@/components/ChatBot';
import { ThemeProvider } from '@/contexts/ThemeContext';

const Index = () => {
  const [activeModule, setActiveModule] = useState('dashboard');
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-500">
        <div className="flex w-full">
          <Sidebar activeModule={activeModule} setActiveModule={setActiveModule} />
          
          <main className="flex-1 min-h-screen">
            <TopBar />
            
            <div className="p-6 space-y-6">
              {/* Quick Stats */}
              <StatsCards />
              
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
                    onAddContact={() => setIsContactModalOpen(true)}
                    onAddLead={() => setIsLeadModalOpen(true)}
                  />
                </div>
              </div>
            </div>
          </main>
        </div>
        
        {/* Modals */}
        <ContactModal 
          isOpen={isContactModalOpen} 
          onClose={() => setIsContactModalOpen(false)} 
        />
        <LeadModal 
          isOpen={isLeadModalOpen} 
          onClose={() => setIsLeadModalOpen(false)} 
        />
        
        {/* ChatBot */}
        <ChatBot />
      </div>
    </ThemeProvider>
  );
};

export default Index;
