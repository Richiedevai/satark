import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { 
  Shield, 
  Zap, 
  Globe, 
  Users, 
  BarChart3, 
  CheckCircle, 
  ArrowRight, 
  Play,
  Moon,
  Sun,
  Brain,
  MessageSquare,
  Scan,
  Database,
  Clock,
  FileText,
  AlertTriangle,
  TrendingUp,
  Award,
  MapPin,
  Smartphone,
  Languages,
  Lock,
  Eye,
  Download
} from 'lucide-react';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const { t, language, toggleLanguage } = useLanguage();
  const { isDark, toggleTheme } = useTheme();

  const stats = [
    { number: '247', label: language === 'en' ? 'Surveys Created' : 'सर्वेक्षण बनाए गए', icon: FileText },
    { number: '28', label: language === 'en' ? 'Districts Onboarded' : 'जिले शामिल', icon: MapPin },
    { number: '18', label: language === 'en' ? 'Avg Turnaround' : 'औसत समय', suffix: language === 'en' ? 'hours' : 'घंटे', icon: Clock },
    { number: '94.8%', label: language === 'en' ? 'Data Accuracy' : 'डेटा सटीकता', icon: Award }
  ];

  const problems = [
    {
      icon: Clock,
      title: language === 'en' ? 'Long Processing Delays' : 'लंबी प्रसंस्करण देरी',
      description: language === 'en' ? 'Traditional surveys take months to process' : 'पारंपरिक सर्वेक्षणों को प्रसंस्करण में महीनों लगते हैं'
    },
    {
      icon: FileText,
      title: language === 'en' ? 'Paper-based Inefficiencies' : 'कागज़-आधारित अक्षमताएं',
      description: language === 'en' ? 'Manual data entry leads to errors and delays' : 'मैनुअल डेटा एंट्री से त्रुटियां और देरी होती है'
    },
    {
      icon: AlertTriangle,
      title: language === 'en' ? 'Manual Data Entry Errors' : 'मैनुअल डेटा एंट्री त्रुटियां',
      description: language === 'en' ? 'Human errors compromise data quality' : 'मानवीय त्रुटियां डेटा गुणवत्ता को प्रभावित करती हैं'
    },
    {
      icon: Languages,
      title: language === 'en' ? 'Language & Literacy Barriers' : 'भाषा और साक्षरता बाधाएं',
      description: language === 'en' ? 'Limited accessibility for diverse populations' : 'विविध जनसंख्या के लिए सीमित पहुंच'
    }
  ];

  const solutions = [
    {
      icon: Brain,
      title: language === 'en' ? 'AI-powered Survey Generation' : 'AI-संचालित सर्वेक्षण निर्माण',
      description: language === 'en' ? 'Create intelligent surveys with natural language prompts' : 'प्राकृतिक भाषा संकेतों के साथ बुद्धिमान सर्वेक्षण बनाएं'
    },
    {
      icon: MessageSquare,
      title: language === 'en' ? 'WhatsApp & Voice Input' : 'व्हाट्सऐप और आवाज़ इनपुट',
      description: language === 'en' ? 'Collect responses through familiar channels' : 'परिचित चैनलों के माध्यम से प्रतिक्रियाएं एकत्र करें'
    },
    {
      icon: Scan,
      title: language === 'en' ? 'Smart Document Scanning' : 'स्मार्ट दस्तावेज़ स्कैनिंग',
      description: language === 'en' ? 'OCR technology for instant data extraction' : 'तत्काल डेटा निष्कर्षण के लिए OCR तकनीक'
    },
    {
      icon: Database,
      title: language === 'en' ? 'Federated Secure Storage' : 'संघीय सुरक्षित भंडारण',
      description: language === 'en' ? 'DPDP compliant data management' : 'DPDP अनुपालित डेटा प्रबंधन'
    }
  ];

  const features = [
    {
      icon: Zap,
      title: language === 'en' ? 'Lightning Fast' : 'बिजली की तेज़ी',
      description: language === 'en' ? 'Reduce survey turnaround from months to hours' : 'सर्वेक्षण समय को महीनों से घंटों में कम करें'
    },
    {
      icon: Shield,
      title: language === 'en' ? 'Government Grade Security' : 'सरकारी ग्रेड सुरक्षा',
      description: language === 'en' ? 'DPDP 2023 compliant with end-to-end encryption' : 'एंड-टू-एंड एन्क्रिप्शन के साथ DPDP 2023 अनुपालित'
    },
    {
      icon: Globe,
      title: language === 'en' ? 'Multi-lingual Support' : 'बहुभाषी समर्थन',
      description: language === 'en' ? 'Support for 15+ Indian languages with voice input' : 'आवाज़ इनपुट के साथ 15+ भारतीय भाषाओं का समर्थन'
    },
    {
      icon: BarChart3,
      title: language === 'en' ? 'Real-time Analytics' : 'वास्तविक समय विश्लेषण',
      description: language === 'en' ? 'Live dashboards with AI-powered insights' : 'AI-संचालित अंतर्दृष्टि के साथ लाइव डैशबोर्ड'
    }
  ];

  const techLogos = [
    { name: 'LangChain', logo: '🦜' },
    { name: 'Tesseract', logo: '👁️' },
    { name: 'Whisper', logo: '🎤' },
    { name: 'DPDP', logo: '🔒' },
    { name: 'NDSAP', logo: '🏛️' },
    { name: 'GSBPM', logo: '📊' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Government Header Bar */}
      <div className="h-1 bg-gradient-to-r from-orange-500 via-white via-green-500 to-orange-500"></div>
      
      {/* Navigation */}
      <nav className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-md shadow-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {t('header.title')}
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  {t('header.subtitle')}
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleLanguage}
                className="px-4 py-2 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-xl hover:bg-orange-200 dark:hover:bg-orange-800 transition-colors font-medium"
              >
                {language === 'en' ? 'हिंदी' : 'English'}
              </button>
              
              <button
                onClick={toggleTheme}
                className="p-3 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              
              <button
                onClick={() => navigate('/login')}
                className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-semibold shadow-lg"
              >
                {t('header.login')}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-orange-600/10 dark:from-blue-900/20 dark:to-orange-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-semibold mb-8 shadow-lg">
              <Award className="h-4 w-4 mr-2" />
              {language === 'en' ? 'Winner - MoSPI Statathon 2025' : 'विजेता - MoSPI स्टेटाथॉन 2025'}
            </div>
            
            <h1 className="text-4xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
              {t('hero.title')}
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
              <button
                onClick={() => navigate('/login?role=admin')}
                className="group flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
              >
                <Shield className="h-6 w-6" />
                <span>{t('hero.admin_login')}</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={() => navigate('/login?role=agent')}
                className="group flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-2xl hover:from-green-700 hover:to-green-800 transition-all duration-300 font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
              >
                <Users className="h-6 w-6" />
                <span>{t('hero.agent_login')}</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={() => navigate('/demo')}
                className="group flex items-center space-x-3 px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-600 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                <Play className="h-6 w-6" />
                <span>{t('hero.demo')}</span>
                <Eye className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border-2 border-gray-100 dark:border-gray-700 hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 group-hover:border-blue-200 dark:group-hover:border-blue-700">
                    <div className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                      {stat.number}
                      {stat.suffix && <span className="text-2xl text-gray-600 dark:text-gray-400 ml-1">{stat.suffix}</span>}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 font-semibold">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Problems */}
            <div>
              <div className="text-center lg:text-left mb-12">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  {language === 'en' ? 'Challenges in Traditional Surveys' : 'पारंपरिक सर्वेक्षणों में चुनौतियां'}
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                  {language === 'en' 
                    ? 'Current survey methods face significant obstacles that SATARK.AI addresses'
                    : 'वर्तमान सर्वेक्षण विधियों में महत्वपूर्ण बाधाएं हैं जिन्हें SATARK.AI संबोधित करता है'
                  }
                </p>
              </div>
              
              <div className="space-y-6">
                {problems.map((problem, index) => {
                  const Icon = problem.icon;
                  return (
                    <div key={index} className="group bg-red-50 dark:bg-red-900/20 rounded-2xl p-6 border-l-4 border-red-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-start space-x-4">
                        <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                          <Icon className="h-6 w-6 text-red-600 dark:text-red-400" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{problem.title}</h3>
                          <p className="text-gray-600 dark:text-gray-400">{problem.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Solutions */}
            <div>
              <div className="text-center lg:text-left mb-12">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  {language === 'en' ? 'SATARK.AI Solutions' : 'SATARK.AI समाधान'}
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                  {language === 'en' 
                    ? 'Advanced AI technology transforms how government surveys are conducted'
                    : 'उन्नत AI तकनीक सरकारी सर्वेक्षणों के संचालन को बदल देती है'
                  }
                </p>
              </div>
              
              <div className="space-y-6">
                {solutions.map((solution, index) => {
                  const Icon = solution.icon;
                  return (
                    <div key={index} className="group bg-green-50 dark:bg-green-900/20 rounded-2xl p-6 border-l-4 border-green-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-start space-x-4">
                        <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                          <Icon className="h-6 w-6 text-green-600 dark:text-green-400" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{solution.title}</h3>
                          <p className="text-gray-600 dark:text-gray-400">{solution.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {language === 'en' ? 'Why Choose SATARK.AI?' : 'SATARK.AI क्यों चुनें?'}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {language === 'en' 
                ? 'Built specifically for Indian government needs with cutting-edge AI technology'
                : 'अत्याधुनिक AI तकनीक के साथ भारतीय सरकार की आवश्यकताओं के लिए विशेष रूप से निर्मित'
              }
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="group">
                  <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-200 dark:border-gray-700 hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 group-hover:border-blue-200 dark:group-hover:border-blue-700 h-full">
                    <div className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech & Compliance Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {language === 'en' ? 'Technology & Compliance' : 'तकनीक और अनुपालन'}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {language === 'en' 
                ? 'Built with industry-leading technologies and government compliance standards'
                : 'उद्योग-अग्रणी तकनीकों और सरकारी अनुपालन मानकों के साथ निर्मित'
              }
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {techLogos.map((tech, index) => (
              <div key={index} className="group text-center">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-300 hover:shadow-lg group-hover:-translate-y-1">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {tech.logo}
                  </div>
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">{tech.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            {language === 'en' ? 'Ready to Transform Your Surveys?' : 'अपने सर्वेक्षणों को बदलने के लिए तैयार हैं?'}
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
            {language === 'en' 
              ? 'Join the future of government data collection with SATARK.AI'
              : 'SATARK.AI के साथ सरकारी डेटा संग्रह के भविष्य में शामिल हों'
            }
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={() => navigate('/login?role=admin')}
              className="group flex items-center space-x-3 px-8 py-4 bg-white text-blue-600 rounded-2xl hover:bg-gray-100 transition-all duration-300 font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
            >
              <Shield className="h-6 w-6" />
              <span>{language === 'en' ? 'Start as Admin' : 'एडमिन के रूप में शुरू करें'}</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={() => navigate('/login?role=agent')}
              className="group flex items-center space-x-3 px-8 py-4 bg-transparent border-2 border-white text-white rounded-2xl hover:bg-white hover:text-blue-600 transition-all duration-300 font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
            >
              <Users className="h-6 w-6" />
              <span>{language === 'en' ? 'Join as Agent' : 'एजेंट के रूप में जुड़ें'}</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-orange-600 rounded-xl flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div className="text-xl font-bold">SATARK.AI</div>
              </div>
              <p className="text-gray-400 mb-4">
                {language === 'en' 
                  ? 'India\'s first AI-powered survey intelligence system for government operations.'
                  : 'सरकारी संचालन के लिए भारत की पहली AI-संचालित सर्वेक्षण बुद्धिमत्ता प्रणाली।'
                }
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">
                {language === 'en' ? 'Quick Links' : 'त्वरित लिंक'}
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => navigate('/login')} className="hover:text-white transition-colors">Login</button></li>
                <li><button onClick={() => navigate('/demo')} className="hover:text-white transition-colors">Demo</button></li>
                <li><button className="hover:text-white transition-colors">Documentation</button></li>
                <li><button className="hover:text-white transition-colors">Support</button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">
                {language === 'en' ? 'Contact' : 'संपर्क'}
              </h3>
              <div className="text-gray-400 space-y-2">
                <p>{t('footer.built')}</p>
                <p>{t('footer.contact')}</p>
                <p className="text-sm">© 2025 SATARK.AI - All rights reserved</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;