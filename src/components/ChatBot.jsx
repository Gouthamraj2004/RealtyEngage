import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Bot, User, Minimize2, Maximize2 } from 'lucide-react';

const ChatBot = ({ isOpen, onToggle }) => {
  const [messages, setMessages] = useState([
    {
      id: '1',
      text: 'Hello! I\'m your RealtyEngage assistant. How can I help you today? I can provide information about our projects, pricing, amenities, and more!',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    // Project-related queries
    if (message.includes('project') || message.includes('property')) {
      return 'We have several exciting projects! Our Luxury Residences in Downtown Central (₹85L-₹1.2Cr), Green Valley Villas in Suburb Hills (₹1.5Cr-₹2.8Cr), and Smart City Apartments in Tech Park Area (₹55L-₹95L). Which type of property interests you most?';
    }
    
    // Pricing queries
    if (message.includes('price') || message.includes('cost') || message.includes('budget')) {
      return 'Our properties range from ₹55 Lakhs to ₹2.8 Crores. Luxury Residences start at ₹85L, Smart City Apartments from ₹55L, and Green Valley Villas from ₹1.5Cr. Would you like detailed pricing for any specific project?';
    }
    
    // Amenities queries
    if (message.includes('amenities') || message.includes('facilities') || message.includes('features')) {
      return 'Our projects offer premium amenities including swimming pools, gyms, private gardens, club houses, 24/7 security, smart home features, EV charging stations, and co-working spaces. Which amenities are most important to you?';
    }
    
    // Location queries
    if (message.includes('location') || message.includes('where') || message.includes('address')) {
      return 'We have properties in prime locations: Downtown Central (city center), Suburb Hills (peaceful residential area), and Tech Park Area (IT hub). Each location offers unique advantages. What type of neighborhood do you prefer?';
    }
    
    // Payment queries
    if (message.includes('payment') || message.includes('emi') || message.includes('loan') || message.includes('finance')) {
      return 'We offer flexible payment plans including EMI options, construction-linked payments, and bank loan assistance. Our team can help you with loan processing and documentation. Would you like to speak with our finance team?';
    }
    
    // Site visit queries
    if (message.includes('visit') || message.includes('tour') || message.includes('see')) {
      return 'I\'d be happy to arrange a site visit! We offer guided tours of our projects with our expert team. You can schedule a visit through our enquiry form or I can connect you with our sales team right away. When would be convenient for you?';
    }
    
    // Contact queries
    if (message.includes('contact') || message.includes('call') || message.includes('phone')) {
      return 'You can reach us at +91 98765 43210 or email us at info@realtyengage.com. Our sales team is available Monday to Saturday, 9 AM to 7 PM. Would you like me to schedule a callback for you?';
    }
    
    // Booking queries
    if (message.includes('book') || message.includes('reserve') || message.includes('buy')) {
      return 'Great! To book a property, you can start with a token amount through our secure payment system. Our team will guide you through the documentation process. Which project are you interested in booking?';
    }
    
    // Greeting responses
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return 'Hello! Welcome to RealtyEngage. I\'m here to help you find your dream property. Are you looking for a specific type of home or would you like to explore our current projects?';
    }
    
    // Thank you responses
    if (message.includes('thank') || message.includes('thanks')) {
      return 'You\'re welcome! I\'m always here to help. Is there anything else you\'d like to know about our properties or services?';
    }
    
    // Default response
    return 'I understand you\'re interested in learning more about our properties. I can help you with information about our projects, pricing, amenities, payment options, and site visits. What specific information would you like to know?';
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const botResponse = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(inputText),
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={onToggle}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50"
      >
        <MessageCircle className="h-6 w-6" />
        <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
          <Bot className="h-3 w-3" />
        </div>
      </button>
    );
  }

  return (
    <div className={`fixed bottom-6 right-6 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 z-50 transition-all duration-300 ${
      isMinimized ? 'w-80 h-16' : 'w-80 h-96'
    }`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-blue-600 to-teal-600 rounded-t-xl">
        <div className="flex items-center space-x-3">
          <div className="bg-white/20 p-2 rounded-full">
            <Bot className="h-5 w-5 text-white" />
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm">RealtyBot</h3>
            <p className="text-blue-100 text-xs">Online now</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="text-white/80 hover:text-white p-1 rounded transition-colors duration-200"
          >
            {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
          </button>
          <button
            onClick={onToggle}
            className="text-white/80 hover:text-white p-1 rounded transition-colors duration-200"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages */}
          <div className="flex-1 p-4 h-64 overflow-y-auto space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
              >
                <div className={`flex items-start space-x-2 max-w-[80%] ${
                  message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}>
                  <div className={`p-2 rounded-full ${
                    message.sender === 'user' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}>
                    {message.sender === 'user' ? (
                      <User className="h-3 w-3" />
                    ) : (
                      <Bot className="h-3 w-3" />
                    )}
                  </div>
                  <div className={`p-3 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-br-sm'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-bl-sm'
                  }`}>
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    <p className={`text-xs mt-1 ${
                      message.sender === 'user' ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start animate-fade-in">
                <div className="flex items-start space-x-2">
                  <div className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                    <Bot className="h-3 w-3" />
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg rounded-bl-sm">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim()}
                className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 disabled:from-gray-400 disabled:to-gray-500 text-white p-2 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:transform-none"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ChatBot;