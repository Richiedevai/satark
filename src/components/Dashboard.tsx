import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  BarChart3, 
  Users, 
  FileText, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  MapPin,
  Activity,
  Zap,
  Shield,
  Globe,
  Eye,
  Download,
  RefreshCw,
  Calendar,
  Target,
  Award,
  Smartphone,
  MessageSquare,
  Brain,
  Filter,
  Search
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const { language } = useLanguage();
  const [selectedTimeframe, setSelectedTimeframe] = useState('7d');
  const [selectedState, setSelectedState] = useState('all');

  const stats = {
    totalSurveys: 247,
    activeSurveys: 12,
    totalAgents: 1847,
    activeAgents: 156,
    responsesToday: 3247,
    completionRate: 87.3,
    avgResponseTime: 4.2,
    dataQualityScore: 94.8
  };

  const recentSurveys = [
    {
      id: 'RHS-2024-001',
      title: 'Rural Healthcare Access Survey',
      titleHi: 'ग्रामीण स्वास्थ्य सेवा पहुंच सर्वेक्षण',
      state: 'Gujarat',
      stateHi: 'गुजरात',
      responses: 1247,
      target: 1500,
      completion: 83,
      status: 'active',
      lastUpdated: '2 hours ago'
    },
    {
      id: 'AIS-2024-002',
      title: 'Agricultural Income Study',
      titleHi: 'कृषि आय अध्ययन',
      state: 'Maharashtra',
      stateHi: 'महाराष्ट्र',
      responses: 892,
      target: 1000,
      completion: 89,
      status: 'active',
      lastUpdated: '4 hours ago'
    },
    {
      id: 'DLS-2024-003',
      title: 'Digital Literacy Survey',
      titleHi: 'डिजिटल साक्षरता सर्वेक्षण',
      state: 'Karnataka',
      stateHi: 'कर्नाटक',
      responses: 750,
      target: 750,
      completion: 100,
      status: 'completed',
      lastUpdated: '1 day ago'
    }
  ];

  const alerts = [
    {
      type: 'warning',
      message: language === 'en' ? 'High dropout rate detected in Survey RHS-2024-001' : 'सर्वे RHS-2024-001 में उच्च ड्रॉपआउट दर का पता चला',
      time: '15 minutes ago'
    },
    {
      type: 'info',
      message: language === 'en' ? 'New batch of 25 agents onboarded in Tamil Nadu' : 'तमिलनाडु में 25 एजेंटों का नया बैच शामिल हुआ',
      time: '1 hour ago'
    },
    {
      type: 'success',
      message: language === 'en' ? 'Survey AIS-2024-002 reached 90% completion' : 'सर्वे AIS-2024-002 ने 90% पूर्णता हासिल की',
      time: '3 hours ago'
    }
  ];

  const channelData = [
    { channel: 'WhatsApp', responses: 1456, percentage: 45, color: 'bg-green-500' },
    { channel: 'Voice/IVR', responses: 987, percentage: 30, color: 'bg-blue-500' },
    { channel: 'SMS', responses: 534, percentage: 16, color: 'bg-purple-500' },
    { channel: 'Field App', responses: 290, percentage: 9, color: 'bg-orange-500' }
  ];

  const statePerformance = [
    { state: 'Gujarat', stateHi: 'गुजरात', completion: 94, responses: 2847, agents: 45 },
    { state: 'Maharashtra', stateHi: 'महाराष्ट्र', completion: 91, responses: 3156, agents: 52 },
    { state: 'Karnataka', stateHi: 'कर्नाटक', completion: 88, responses: 2234, agents: 38 },
    { state: 'Tamil Nadu', stateHi: 'तमिलनाडु', completion: 85, responses: 1987, agents: 41 },
    { state: 'Uttar Pradesh', stateHi: 'उत्तर प्रदेश', completion: 82, responses: 4567, agents: 78 }
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'active': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'completed': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'paused': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  const getAlertColor = (type: string) => {
    switch(type) {
      case 'warning': return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-700 text-yellow-800 dark:text-yellow-300';
      case 'info': return 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700 text-blue-800 dark:text-blue-300';
      case 'success': return 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700 text-green-800 dark:text-green-300';
      default: return 'bg-gray-50 dark:bg-gray-900/20 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-300';
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-2">
            {language === 'en' ? 'System Overview' : 'सिस्टम अवलोकन'}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {language === 'en' 
              ? 'Real-time insights into survey operations across India' 
              : 'भारत भर में सर्वे संचालन की वास्तविक समय की जानकारी'
            }
          </p>
        </div>
        
        <div className="flex items-center space-x-4">
          <select
            value={selectedTimeframe}
            onChange={(e) => setSelectedTimeframe(e.target.value)}
            className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
          >
            <option value="24h">{language === 'en' ? 'Last 24 Hours' : 'पिछले 24 घंटे'}</option>
            <option value="7d">{language === 'en' ? 'Last 7 Days' : 'पिछले 7 दिन'}</option>
            <option value="30d">{language === 'en' ? 'Last 30 Days' : 'पिछले 30 दिन'}</option>
            <option value="90d">{language === 'en' ? 'Last 90 Days' : 'पिछले 90 दिन'}</option>
          </select>
          
          <button className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition-colors shadow-lg">
            <RefreshCw className="h-5 w-5" />
            <span className="font-semibold">
              {language === 'en' ? 'Refresh' : 'रीफ्रेश'}
            </span>
          </button>
        </div>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl border-2 border-blue-100 dark:border-blue-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-bold text-gray-600 dark:text-gray-400 mb-2">
                {language === 'en' ? 'Active Surveys' : 'सक्रिय सर्वेक्षण'}
              </p>
              <p className="text-4xl font-bold text-blue-600 mb-1">{stats.activeSurveys}</p>
              <p className="text-xs text-blue-500 font-semibold">
                {language === 'en' ? `${stats.totalSurveys} total` : `कुल ${stats.totalSurveys}`}
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
              <FileText className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl border-2 border-green-100 dark:border-green-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-bold text-gray-600 dark:text-gray-400 mb-2">
                {language === 'en' ? 'Field Agents' : 'फील्ड एजेंट'}
              </p>
              <p className="text-4xl font-bold text-green-600 mb-1">{stats.activeAgents}</p>
              <p className="text-xs text-green-500 font-semibold">
                {language === 'en' ? `${stats.totalAgents} registered` : `${stats.totalAgents} पंजीकृत`}
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
              <Users className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl border-2 border-purple-100 dark:border-purple-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-bold text-gray-600 dark:text-gray-400 mb-2">
                {language === 'en' ? 'Responses Today' : 'आज की प्रतिक्रियाएं'}
              </p>
              <p className="text-4xl font-bold text-purple-600 mb-1">{stats.responsesToday.toLocaleString()}</p>
              <p className="text-xs text-purple-500 font-semibold">
                +12% {language === 'en' ? 'from yesterday' : 'कल से'}
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
              <Activity className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl border-2 border-orange-100 dark:border-orange-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-bold text-gray-600 dark:text-gray-400 mb-2">
                {language === 'en' ? 'Completion Rate' : 'पूर्णता दर'}
              </p>
              <p className="text-4xl font-bold text-orange-600 mb-1">{stats.completionRate}%</p>
              <p className="text-xs text-orange-500 font-semibold">
                {language === 'en' ? 'Above target' : 'लक्ष्य से ऊपर'}
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900/30 dark:to-orange-800/30 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
              <Target className="h-8 w-8 text-orange-600 dark:text-orange-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Surveys */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700">
            <div className="p-8 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {language === 'en' ? 'Active Surveys' : 'सक्रिय सर्वेक्षण'}
                </h3>
                <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold flex items-center">
                  <Eye className="mr-2 h-4 w-4" />
                  {language === 'en' ? 'View All' : 'सभी देखें'}
                </button>
              </div>
            </div>
            
            <div className="p-8 space-y-6">
              {recentSurveys.map((survey) => (
                <div key={survey.id} className="group bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1 border border-gray-200 dark:border-gray-600">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="font-bold text-xl text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                        {language === 'en' ? survey.title : survey.titleHi}
                      </h4>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{language === 'en' ? survey.state : survey.stateHi}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{survey.lastUpdated}</span>
                        </div>
                      </div>
                    </div>
                    <span className={`px-4 py-2 rounded-full text-sm font-bold ${getStatusColor(survey.status)} shadow-lg`}>
                      {survey.status}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{survey.responses}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        {language === 'en' ? 'Responses' : 'प्रतिक्रियाएं'}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400">{survey.target}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        {language === 'en' ? 'Target' : 'लक्ष्य'}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{survey.completion}%</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        {language === 'en' ? 'Complete' : 'पूर्ण'}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">
                        {language === 'en' ? 'Progress' : 'प्रगति'}
                      </span>
                      <span className="font-bold text-gray-900 dark:text-white">{survey.completion}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-green-500 h-3 rounded-full transition-all duration-500 shadow-inner" 
                        style={{ width: `${survey.completion}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Alerts */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <AlertTriangle className="mr-3 h-6 w-6 text-yellow-500" />
              {language === 'en' ? 'System Alerts' : 'सिस्टम अलर्ट'}
            </h3>
            
            <div className="space-y-4">
              {alerts.map((alert, index) => (
                <div key={index} className={`p-4 rounded-2xl border-l-4 ${getAlertColor(alert.type)}`}>
                  <p className="font-medium text-sm mb-2">{alert.message}</p>
                  <p className="text-xs opacity-75">{alert.time}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Response Channels */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <MessageSquare className="mr-3 h-6 w-6 text-blue-500" />
              {language === 'en' ? 'Response Channels' : 'प्रतिक्रिया चैनल'}
            </h3>
            
            <div className="space-y-4">
              {channelData.map((channel, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-900 dark:text-white">{channel.channel}</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{channel.responses}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div 
                      className={`${channel.color} h-2 rounded-full transition-all duration-500`}
                      style={{ width: `${channel.percentage}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{channel.percentage}%</div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Zap className="mr-3 h-6 w-6 text-yellow-500" />
              {language === 'en' ? 'Quick Actions' : 'त्वरित कार्य'}
            </h3>
            
            <div className="space-y-3">
              <button className="w-full flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-blue-200 dark:border-blue-700">
                <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <span className="font-semibold text-blue-900 dark:text-blue-100">
                  {language === 'en' ? 'Create Survey' : 'सर्वे बनाएं'}
                </span>
              </button>
              
              <button className="w-full flex items-center space-x-3 p-4 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-green-200 dark:border-green-700">
                <Users className="h-5 w-5 text-green-600 dark:text-green-400" />
                <span className="font-semibold text-green-900 dark:text-green-100">
                  {language === 'en' ? 'Manage Agents' : 'एजेंट प्रबंधन'}
                </span>
              </button>
              
              <button className="w-full flex items-center space-x-3 p-4 bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-purple-200 dark:border-purple-700">
                <Download className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                <span className="font-semibold text-purple-900 dark:text-purple-100">
                  {language === 'en' ? 'Export Data' : 'डेटा निर्यात'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* State Performance Table */}
      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700">
        <div className="p-8 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {language === 'en' ? 'State Performance' : 'राज्य प्रदर्शन'}
            </h3>
            <div className="flex items-center space-x-4">
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
              >
                <option value="all">{language === 'en' ? 'All States' : 'सभी राज्य'}</option>
                <option value="gujarat">Gujarat</option>
                <option value="maharashtra">Maharashtra</option>
                <option value="karnataka">Karnataka</option>
              </select>
              <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold">
                {language === 'en' ? 'View Map' : 'मैप देखें'}
              </button>
            </div>
          </div>
        </div>
        
        <div className="p-8">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-4 px-2 font-bold text-gray-900 dark:text-white">
                    {language === 'en' ? 'State' : 'राज्य'}
                  </th>
                  <th className="text-center py-4 px-2 font-bold text-gray-900 dark:text-white">
                    {language === 'en' ? 'Completion %' : 'पूर्णता %'}
                  </th>
                  <th className="text-center py-4 px-2 font-bold text-gray-900 dark:text-white">
                    {language === 'en' ? 'Responses' : 'प्रतिक्रियाएं'}
                  </th>
                  <th className="text-center py-4 px-2 font-bold text-gray-900 dark:text-white">
                    {language === 'en' ? 'Agents' : 'एजेंट'}
                  </th>
                  <th className="text-center py-4 px-2 font-bold text-gray-900 dark:text-white">
                    {language === 'en' ? 'Status' : 'स्थिति'}
                  </th>
                </tr>
              </thead>
              <tbody>
                {statePerformance.map((state, index) => (
                  <tr key={index} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                    <td className="py-4 px-2">
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {language === 'en' ? state.state : state.stateHi}
                      </div>
                    </td>
                    <td className="py-4 px-2 text-center">
                      <div className="flex items-center justify-center space-x-2">
                        <span className="font-bold text-lg text-gray-900 dark:text-white">{state.completion}%</span>
                        <div className="w-16 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full"
                            style={{ width: `${state.completion}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-2 text-center font-semibold text-gray-900 dark:text-white">
                      {state.responses.toLocaleString()}
                    </td>
                    <td className="py-4 px-2 text-center font-semibold text-gray-900 dark:text-white">
                      {state.agents}
                    </td>
                    <td className="py-4 px-2 text-center">
                      <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                        state.completion >= 90 ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' :
                        state.completion >= 80 ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300' :
                        'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                      }`}>
                        {state.completion >= 90 ? 'Excellent' : state.completion >= 80 ? 'Good' : 'Needs Attention'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;