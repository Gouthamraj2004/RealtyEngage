import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import ChatBot from './components/ChatBot';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import AdminDashboard from './components/AdminDashboard';
import Projects from './components/Projects';
import EnquiryForm from './components/EnquiryForm';
import PaymentInterface from './components/PaymentInterface';
import SupportCenter from './components/SupportCenter';

const AppContent: React.FC = () => {
  const { isAuthenticated, user, isLoading } = useAuth();
  const [activeTab, setActiveTab] = useState('projects');
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<string | undefined>();
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleEnquire = (projectId: string) => {
    setSelectedProjectId(projectId);
    setActiveTab('enquiry');
    setShowEnquiryForm(true);
  };

  const handleEnquirySubmit = (enquiry: any) => {
    console.log('New enquiry:', enquiry);
    setShowEnquiryForm(false);
    setSelectedProjectId(undefined);
  };

  const renderContent = () => {
    if (user?.role === 'admin' && activeTab === 'dashboard') {
      return <AdminDashboard />;
    }
    
    switch (activeTab) {
      case 'projects':
        return <Projects onEnquire={handleEnquire} />;
      case 'enquiry':
        return (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Submit Enquiry</h2>
              <p className="text-gray-600 dark:text-gray-400">Get in touch with our expert team</p>
            </div>
            <EnquiryForm
              selectedProjectId={selectedProjectId}
              onSubmit={handleEnquirySubmit}
              onClose={showEnquiryForm ? () => setShowEnquiryForm(false) : undefined}
            />
          </div>
        );
      case 'payments':
        return <PaymentInterface />;
      case 'support':
        return <SupportCenter />;
      default:
        return <Projects onEnquire={handleEnquire} />;
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <LoginForm 
        onToggleMode={() => setIsRegisterMode(!isRegisterMode)}
        isRegisterMode={isRegisterMode}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="transition-colors duration-300">
        {renderContent()}
      </main>
      <ChatBot isOpen={isChatOpen} onToggle={() => setIsChatOpen(!isChatOpen)} />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;