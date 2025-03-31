import React, { useState } from 'react';
import { AuthButton } from './AuthButton';
import { 
  BarChart3, 
  BookOpen, 
  Users, 
  Wallet, 
  Award,
  TrendingUp,
  Gift,
  MessageSquare,
  Building2,
  Briefcase,
  CreditCard,
  Receipt,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  Search,
  Filter,
  DollarSign,
  Clock,
  Users2,
  Percent,
  ArrowUpRight,
  Heart,
  MessageCircle,
  ThumbsUp,
  Share2,
  Bookmark,
  Send,
  Tag,
  User,
  Play,
  BookMarked,
  GraduationCap,
  Star,
  Timer,
  BarChart,
  FileText,
  Video,
  PenTool,
  Lightbulb,
  Lock,
  CheckCircle,
  ArrowRightCircle
} from 'lucide-react';

const Dashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [showCreditEval, setShowCreditEval] = useState(false);
  const [showMarketplace, setShowMarketplace] = useState(false);
  const [showCommunity, setShowCommunity] = useState(false);
  const [showEducation, setShowEducation] = useState(false);
  const [showFundingForm, setShowFundingForm] = useState(false);

  // Login handler
  const handleLogin = (email: string, password: string) => {
    console.log('Logging in with:', email);
    // Here you would implement actual login logic with your backend
    // For demonstration purposes:
    setIsAuthenticated(true);
    setUser({
      name: email.split('@')[0], // This would come from your authentication response
      email: email
    });
  };

   // Signup handler
   const handleSignup = (email: string, password: string, name: string) => {
    console.log('Signing up:', name, email);
    // Here you would implement actual signup logic with your backend
    // For demonstration purposes:
    setIsAuthenticated(true);
    setUser({
      name: name,
      email: email
    });
  };
  
  // Google login handler
  const handleGoogleLogin = () => {
    console.log('Google login initiated');
    // Here you would implement Google OAuth flow
    // For demonstration purposes:
    setIsAuthenticated(true);
    setUser({
      name: 'Google User',
      email: 'user@gmail.com'
    });
  };
  
  // Logout handler
  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };



// Form state
const [fundingForm, setFundingForm] = useState({
  businessName: '',
  ownerName: '',
  email: '',
  phoneNumber: '',
  businessType: '',
  fundingAmount: '',
  purpose: '',
  timeInBusiness: '',
  monthlyRevenue: '',
  businessDescription: ''
});

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFundingForm({
    ...fundingForm,
    [name]: value
  });
};

const handleSubmit = (e) => {
  e.preventDefault();
  // Here you would process the form submission
  console.log("Form submitted:", fundingForm);
  
  // Show success message and reset form
  alert("Your funding application has been submitted successfully!");
  setFundingForm({
    businessName: '',
    ownerName: '',
    email: '',
    phoneNumber: '',
    businessType: '',
    fundingAmount: '',
    purpose: '',
    timeInBusiness: '',
    monthlyRevenue: '',
    businessDescription: ''
  });
  
  // Close the form
  setShowFundingForm(false);
};


  return (
    
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Award className="h-8 w-8 text-purple-600" />
              <span className="ml-2 text-xl font-semibold text-gray-900">EmpowerFin</span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowFundingForm(true)}
                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
              >
                Apply for Funding
              </button>
            </div>
          </div>
        </div>
      </nav>

    



      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <button 
            onClick={() => {
              setShowMarketplace(true);
              setShowCreditEval(false);
              setShowCommunity(false);
              setShowEducation(false);
            }}
            className="text-left focus:outline-none"
          >
            <DashboardCard
              icon={<Wallet className="h-6 w-6 text-purple-600" />}
              title="Alternative Financing"
              description="Explore crowdfunding, P2P lending, and revenue-based options"
            />
          </button>
          <button 
            onClick={() => {
              setShowCreditEval(true);
              setShowMarketplace(false);
              setShowCommunity(false);
              setShowEducation(false);
            }}
            className="text-left focus:outline-none"
          >
            <DashboardCard
              icon={<TrendingUp className="h-6 w-6 text-purple-600" />}
              title="AI Credit Evaluation"
              description="Fair and transparent credit assessment"
            />
          </button>
          <button
            onClick={() => {
              setShowEducation(true);
              setShowMarketplace(false);
              setShowCreditEval(false);
              setShowCommunity(false);
            }}
            className="text-left focus:outline-none"
          >
            <DashboardCard
              icon={<BookOpen className="h-6 w-6 text-purple-600" />}
              title="Financial Education"
              description="Personalized learning paths and resources"
            />
          </button>
          <button
            onClick={() => {
              setShowCommunity(true);
              setShowMarketplace(false);
              setShowCreditEval(false);
              setShowEducation(false);
            }}
            className="text-left focus:outline-none"
          >
            <DashboardCard
              icon={<Users className="h-6 w-6 text-purple-600" />}
              title="Community"
              description="Connect with fellow entrepreneurs"
            />
          </button>
        </div>

        {showCreditEval ? (
          <CreditEvaluation onClose={() => setShowCreditEval(false)} />
        ) : showMarketplace ? (
          <Marketplace onClose={() => setShowMarketplace(false)} />
        ) : showCommunity ? (
          <CommunityForum onClose={() => setShowCommunity(false)} />
        ) : showEducation ? (
          <EducationLibrary onClose={() => setShowEducation(false)} />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-4">Financial Overview</h2>
                <div className="h-64 flex items-center justify-center">
                  <BarChart3 className="h-48 w-48 text-gray-300" />
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
                <div className="space-y-4">
                  <EventCard
                    icon={<Gift className="h-5 w-5 text-purple-600" />}
                    title="Grant Writing Workshop"
                    date="March 15, 2024"
                  />
                  <EventCard
                    icon={<MessageSquare className="h-5 w-5 text-purple-600" />}
                    title="Mentor Meetup"
                    date="March 20, 2024"
                  />
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-4">Learning Progress</h2>
                <div className="space-y-4">
                  <ProgressBar title="Financial Planning" progress={75} />
                  <ProgressBar title="Business Strategy" progress={60} />
                  <ProgressBar title="Investment Basics" progress={45} />
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      {/* Funding Application Form Modal */}
{showFundingForm && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-xl shadow-lg max-w-2xl w-full max-h-screen overflow-y-auto">
      <div className="p-6 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-900">Funding Application</h2>
          <button
            onClick={() => setShowFundingForm(false)}
            className="text-gray-500 hover:text-gray-700 transition"
          >
            Close
          </button>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-1">
              Business Name*
            </label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              value={fundingForm.businessName}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          
          <div>
            <label htmlFor="ownerName" className="block text-sm font-medium text-gray-700 mb-1">
              Owner Name*
            </label>
            <input
              type="text"
              id="ownerName"
              name="ownerName"
              value={fundingForm.ownerName}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={fundingForm.email}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number*
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={fundingForm.phoneNumber}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          
          <div>
            <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-1">
              Business Type*
            </label>
            <select
              id="businessType"
              name="businessType"
              value={fundingForm.businessType}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Select Business Type</option>
              <option value="sole_proprietorship">Sole Proprietorship</option>
              <option value="partnership">Partnership</option>
              <option value="llc">LLC</option>
              <option value="corporation">Corporation</option>
              <option value="nonprofit">Non-Profit</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="fundingAmount" className="block text-sm font-medium text-gray-700 mb-1">
              Funding Amount Requested ($)*
            </label>
            <input
              type="number"
              id="fundingAmount"
              name="fundingAmount"
              value={fundingForm.fundingAmount}
              onChange={handleInputChange}
              required
              min="1000"
              step="500"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          
          <div>
            <label htmlFor="timeInBusiness" className="block text-sm font-medium text-gray-700 mb-1">
              Time in Business
            </label>
            <select
              id="timeInBusiness"
              name="timeInBusiness"
              value={fundingForm.timeInBusiness}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Select Time in Business</option>
              <option value="pre_launch">Pre-Launch</option>
              <option value="0_6months">0-6 months</option>
              <option value="6_12months">6-12 months</option>
              <option value="1_2years">1-2 years</option>
              <option value="2_5years">2-5 years</option>
              <option value="5plus_years">5+ years</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="monthlyRevenue" className="block text-sm font-medium text-gray-700 mb-1">
              Monthly Revenue ($)
            </label>
            <input
              type="number"
              id="monthlyRevenue"
              name="monthlyRevenue"
              value={fundingForm.monthlyRevenue}
              onChange={handleInputChange}
              min="0"
              step="100"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="purpose" className="block text-sm font-medium text-gray-700 mb-1">
            Purpose of Funding*
          </label>
          <select
            id="purpose"
            name="purpose"
            value={fundingForm.purpose}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="">Select Purpose</option>
            <option value="startup_costs">Startup Costs</option>
            <option value="expansion">Business Expansion</option>
            <option value="equipment">Equipment Purchase</option>
            <option value="inventory">Inventory</option>
            <option value="marketing">Marketing & Advertising</option>
            <option value="hiring">Hiring & Staffing</option>
            <option value="debt_refinance">Debt Refinancing</option>
            <option value="working_capital">Working Capital</option>
            <option value="other">Other</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="businessDescription" className="block text-sm font-medium text-gray-700 mb-1">
            Business Description*
          </label>
          <textarea
            id="businessDescription"
            name="businessDescription"
            value={fundingForm.businessDescription}
            onChange={handleInputChange}
            required
            rows="4"
            placeholder="Briefly describe your business and how you plan to use the funds..."
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        
        <div className="pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">
            Fields marked with * are required. By submitting this application, you agree to our terms and conditions.
          </p>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setShowFundingForm(false)}
              className="px-4 py-2 text-gray-700 hover:text-gray-900 transition mr-4"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition"
            >
              Submit Application
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
)}
    </div>
    
  );
};

const EducationLibrary = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('courses');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    'all',
    'financial-planning',
    'business-strategy',
    'investment',
    'marketing',
    'leadership',
    'technology'
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="border-b border-gray-200 p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-900">Education Library</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition"
          >
            Close
          </button>
        </div>

        <div className="flex space-x-4 mt-6">
          <button
            onClick={() => setActiveTab('courses')}
            className={`px-4 py-2 rounded-lg transition ${
              activeTab === 'courses'
                ? 'bg-purple-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Courses
          </button>
          <button
            onClick={() => setActiveTab('learning-paths')}
            className={`px-4 py-2 rounded-lg transition ${
              activeTab === 'learning-paths'
                ? 'bg-purple-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Learning Paths
          </button>
          <button
            onClick={() => setActiveTab('saved')}
            className={`px-4 py-2 rounded-lg transition ${
              activeTab === 'saved'
                ? 'bg-purple-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Saved
          </button>
        </div>
      </div>

      <div className="p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search courses and resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="text-gray-400 h-5 w-5" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </option>
              ))}
            </select>
          </div>
        </div>

        {activeTab === 'courses' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CourseCard
              title="Financial Planning Fundamentals"
              description="Learn the basics of financial planning and build a strong foundation for your business's financial future."
              instructor="Sarah Miller"
              duration="4 hours"
              level="Beginner"
              rating={4.8}
              reviews={128}
              image="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
              progress={0}
            />
            <CourseCard
              title="Business Strategy Masterclass"
              description="Develop effective business strategies and learn how to make data-driven decisions for your company."
              instructor="Michael Chang"
              duration="6 hours"
              level="Intermediate"
              rating={4.9}
              reviews={256}
              image="https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              progress={35}
            />
            <CourseCard
              title="Investment Strategies for Growth"
              description="Master the art of strategic investment and learn how to maximize returns while minimizing risks."
              instructor="Emma Thompson"
              duration="5 hours"
              level="Advanced"
              rating={4.7}
              reviews={192}
              image="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              progress={0}
            />
          </div>
        ) : activeTab === 'learning-paths' ? (
          <div className="space-y-6">
            <LearningPath
              title="Financial Management"
              description="Master the essentials of financial management from basic accounting to advanced investment strategies."
              courses={[
                "Financial Planning Fundamentals",
                "Budgeting and Forecasting",
                "Investment Strategies",
                "Risk Management"
              ]}
              duration="16 hours"
              level="Beginner to Advanced"
              progress={25}
            />
            <LearningPath
              title="Startup Growth"
              description="Learn everything you need to know about growing your startup from idea to scale."
              courses={[
                "Business Model Canvas",
                "Market Research",
                "Growth Strategies",
                "Pitch Deck Creation"
              ]}
              duration="20 hours"
              level="Intermediate"
              progress={0}
            />
            <LearningPath
              title="Digital Marketing"
              description="Comprehensive guide to digital marketing strategies for small businesses."
              courses={[
                "Social Media Marketing",
                "Content Strategy",
                "SEO Fundamentals",
                "Email Marketing"
              ]}
              duration="18 hours"
              level="Beginner"
              progress={75}
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SavedResourceCard
              title="Ultimate Guide to Business Finance"
              type="ebook"
              author="Financial Experts Hub"
              lastAccessed="2 days ago"
            />
            <SavedResourceCard
              title="Startup Funding Strategies"
              type="video"
              author="Venture Capital Insights"
              lastAccessed="1 week ago"
            />
            <SavedResourceCard
              title="Financial Modeling Templates"
              type="template"
              author="Business Tools Pro"
              lastAccessed="3 days ago"
            />
          </div>
        )}
      </div>
    </div>
  );
};

const CourseCard = ({ title, description, instructor, duration, level, rating, reviews, image, progress }) => (
  <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition">
    <div className="relative">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      {progress > 0 && (
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 px-4 py-2">
          <div className="flex items-center text-white text-sm">
            <div className="flex-1">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-purple-600 h-2 rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
            <span className="ml-2">{progress}%</span>
          </div>
        </div>
      )}
    </div>
    <div className="p-4">
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <BookMarked className="h-5 w-5 text-gray-400 hover:text-purple-600 cursor-pointer" />
      </div>
      <p className="mt-2 text-sm text-gray-600 line-clamp-2">{description}</p>
      
      <div className="mt-4 flex items-center text-sm text-gray-500">
        <User className="h-4 w-4 mr-1" />
        <span>{instructor}</span>
      </div>

      <div className="mt-2 flex items-center justify-between text-sm">
        <div className="flex items-center text-gray-500">
          <Timer className="h-4 w-4 mr-1" />
          {duration}
        </div>
        <div className="flex items-center text-gray-500">
          <GraduationCap className="h-4 w-4 mr-1" />
          {level}
        </div>
      </div>

      <div className="mt-2 flex items-center text-sm">
        <div className="flex items-center text-yellow-400">
          <Star className="h-4 w-4" />
          <span className="ml-1 text-gray-700">{rating}</span>
        </div>
        <span className="mx-1 text-gray-500">•</span>
        <span className="text-gray-500">{reviews} reviews</span>
      </div>

      <button className="mt-4 w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition flex items-center justify-center">
        <Play className="h-4 w-4 mr-2" />
        <span>{progress > 0 ? 'Continue Learning' : 'Start Learning'}</span>
      </button>
    </div>
  </div>
);

const LearningPath = ({ title, description, courses, duration, level, progress }) => (
  <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition">
    <div className="flex items-start justify-between">
      <div>
        <h3 className="text-xl font-medium text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
      <BookMarked className="h-5 w-5 text-gray-400 hover:text-purple-600 cursor-pointer" />
    </div>

    <div className="mt-4 flex items-center justify-between text-sm">
      <div className="flex items-center text-gray-500">
        <Timer className="h-4 w-4 mr-1" />
        {duration}
      </div>
      <div className="flex items-center text-gray-500">
        <GraduationCap className="h-4 w-4 mr-1" />
        {level}
      </div>
    </div>

    <div className="mt-4">
      <div className="flex justify-between text-sm text-gray-600 mb-1">
        <span>Progress</span>
        <span>{progress}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-purple-600 h-2 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>

    <div className="mt-6 space-y-3">
      <h4 className="text-sm font-medium text-gray-700">Included Courses:</h4>
      {courses.map((course, index) => (
        <div key={index} className="flex items-center text-sm">
          <CheckCircle className="h-4 w-4 text-purple-600 mr-2" />
          <span>{course}</span>
        </div>
      ))}
    </div>

    <button className="mt-6 w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition flex items-center justify-center">
      <ArrowRightCircle className="h-4 w-4 mr-2" />
      <span>{progress > 0 ? 'Continue Path' : 'Start Path'}</span>
    </button>
  </div>
);

const SavedResourceCard = ({ title, type, author, lastAccessed }) => {
  const getIcon = () => {
    switch (type) {
      case 'ebook':
        return <FileText className="h-6 w-6 text-purple-600" />;
      case 'video':
        return <Video className="h-6 w-6 text-purple-600" />;
      case 'template':
        return <PenTool className="h-6 w-6 text-purple-600" />;
      default:
        return <Lightbulb className="h-6 w-6 text-purple-600" />;
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-lg transition">
      <div className="flex items-start space-x-4">
        <div className="p-2 bg-purple-50 rounded-lg">
          {getIcon()}
        </div>
        <div className="flex-1">
          <h3 className="font-medium text-gray-900">{title}</h3>
          <p className="mt-1 text-sm text-gray-500">{author}</p>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <Clock className="h-4 w-4 mr-1" />
            <span>Last accessed {lastAccessed}</span>
          </div>
        </div>
      </div>
      <button className="mt-4 w-full bg-gray-50 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100 transition flex items-center justify-center">
        <ArrowRightCircle className="h-4 w-4 mr-2" />
        <span>Access Resource</span>
      </button>
    </div>
  );
};


const CommunityForum = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('trending');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('all');
  
  // New state for form inputs
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');
  const [newPostTopic, setNewPostTopic] = useState('');

  // Sample user data - in a real app, this would come from authentication
  const currentUser = {
    name: 'Your Name',
    role: 'Member',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  };

  // Initial posts state with sample data
  const [posts, setPosts] = useState([
    {
      id: 1,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      author: "Sarah Chen",
      role: "Startup Founder",
      title: "How did you secure your first round of funding?",
      content: "I'm in the process of seeking seed funding for my tech startup. Would love to hear success stories and tips from founders who've been through this journey. What worked for you? What should I avoid?",
      topic: "funding",
      likes: 42,
      comments: 18,
      timeAgo: "2 hours ago"
    },
    {
      id: 2,
      avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      author: "Michael Roberts",
      role: "Marketing Expert",
      title: "Best marketing strategies for bootstrapped startups",
      content: "After 5 years of bootstrapping and growing my business, I wanted to share some effective marketing strategies that don't require a huge budget. Here's what worked for me...",
      topic: "marketing",
      likes: 35,
      comments: 24,
      timeAgo: "4 hours ago"
    },
    {
      id: 3,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      author: "Emily Watson",
      role: "Tech Entrepreneur",
      title: "Looking for a technical co-founder",
      content: "I have a validated business idea in the fintech space with some early traction. Currently looking for a technical co-founder who's passionate about democratizing finance. Anyone interested or know someone who might be?",
      topic: "startups",
      likes: 28,
      comments: 31,
      timeAgo: "6 hours ago"
    }
  ]);

  const topics = [
    'all',
    'funding',
    'startups',
    'marketing',
    'technology',
    'mentorship',
    'networking'
  ];

  // Function to handle post submission
  const handlePostSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!newPostTitle.trim() || !newPostContent.trim() || !newPostTopic) {
      alert('Please fill in all fields');
      return;
    }
    
    // Create new post object
    const newPost = {
      id: Date.now(), // Use timestamp as ID
      avatar: currentUser.avatar,
      author: currentUser.name,
      role: currentUser.role,
      title: newPostTitle,
      content: newPostContent,
      topic: newPostTopic,
      likes: 0,
      comments: 0,
      timeAgo: "Just now"
    };
    
    // Add new post to state
    setPosts([newPost, ...posts]);
    
    // Clear form
    setNewPostTitle('');
    setNewPostContent('');
    setNewPostTopic('');
    
    // Optionally switch to a tab where the new post will be visible
    setActiveTab('latest');
  };

  // Filter posts based on active tab and search
  const filteredPosts = posts.filter(post => {
    // Filter by tab
    if (activeTab === 'my-posts' && post.author !== currentUser.name) {
      return false;
    }
    
    // Filter by search query
    if (searchQuery && !post.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !post.content.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Filter by topic
    if (selectedTopic !== 'all' && post.topic !== selectedTopic) {
      return false;
    }
    
    return true;
  });
  
  // Sort posts
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (activeTab === 'trending') {
      // Sort by likes + comments
      return (b.likes + b.comments) - (a.likes + a.comments);
    } else {
      // Sort by newest first (we're simulating this with the id)
      return b.id - a.id;
    }
  });

  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="border-b border-gray-200 p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-900">Community Forum</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition"
          >
            Close
          </button>
        </div>

        <div className="flex space-x-4 mt-6">
          <button
            onClick={() => setActiveTab('trending')}
            className={`px-4 py-2 rounded-lg transition ${
              activeTab === 'trending'
                ? 'bg-purple-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Trending
          </button>
          <button
            onClick={() => setActiveTab('latest')}
            className={`px-4 py-2 rounded-lg transition ${
              activeTab === 'latest'
                ? 'bg-purple-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Latest
          </button>
          <button
            onClick={() => setActiveTab('my-posts')}
            className={`px-4 py-2 rounded-lg transition ${
              activeTab === 'my-posts'
                ? 'bg-purple-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            My Posts
          </button>
        </div>
      </div>

      <div className="p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search discussions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Tag className="text-gray-400 h-5 w-5" />
            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {topics.map((topic) => (
                <option key={topic} value={topic}>
                  {topic.charAt(0).toUpperCase() + topic.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-6">
          {sortedPosts.length > 0 ? (
            sortedPosts.map(post => (
              <ForumPost
                key={post.id}
                avatar={post.avatar}
                author={post.author}
                role={post.role}
                title={post.title}
                content={post.content}
                topic={post.topic}
                likes={post.likes}
                comments={post.comments}
                timeAgo={post.timeAgo}
              />
            ))
          ) : (
            <div className="text-center py-8 text-gray-500">
              No discussions found. Start a new one below!
            </div>
          )}
        </div>

        <div className="mt-8 bg-purple-50 rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Start a Discussion</h3>
          <form onSubmit={handlePostSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Discussion title"
              value={newPostTitle}
              onChange={(e) => setNewPostTitle(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <textarea
              placeholder="Share your thoughts, questions, or insights..."
              rows={4}
              value={newPostContent}
              onChange={(e) => setNewPostContent(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <div className="flex justify-between items-center">
              <select 
                value={newPostTopic}
                onChange={(e) => setNewPostTopic(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="">Select topic</option>
                {topics.filter(t => t !== 'all').map((topic) => (
                  <option key={topic} value={topic}>
                    {topic.charAt(0).toUpperCase() + topic.slice(1)}
                  </option>
                ))}
              </select>
              <button 
                type="submit"
                className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition flex items-center"
              >
                <Send className="h-4 w-4 mr-2" />
                Post Discussion
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const ForumPost = ({ avatar, author, role, title, content, topic, likes, comments, timeAgo }) => (
  <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
    <div className="flex items-start space-x-4">
      <img
        src={avatar}
        alt={author}
        className="w-12 h-12 rounded-full"
      />
      <div className="flex-1">
        <div className="flex items-center space-x-2">
          <h3 className="font-medium text-gray-900">{author}</h3>
          <span className="text-sm text-gray-500">•</span>
          <span className="text-sm text-gray-500">{role}</span>
          <span className="text-sm text-gray-500">•</span>
          <span className="text-sm text-gray-500">{timeAgo}</span>
        </div>
        <h4 className="mt-2 text-lg font-medium text-gray-900">{title}</h4>
        <p className="mt-2 text-gray-600">{content}</p>
        
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-1 text-gray-500 hover:text-purple-600">
              <ThumbsUp className="h-5 w-5" />
              <span>{likes}</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-500 hover:text-purple-600">
              <MessageCircle className="h-5 w-5" />
              <span>{comments}</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-500 hover:text-purple-600">
              <Share2 className="h-5 w-5" />
            </button>
            <button className="flex items-center space-x-1 text-gray-500 hover:text-purple-600">
              <Bookmark className="h-5 w-5" />
            </button>
          </div>
          <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
            #{topic}
          </span>
        </div>
      </div>
    </div>
  </div>
);

const Marketplace = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('crowdfunding');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    'all',
    'technology',
    'retail',
    'healthcare',
    'education',
    'food & beverage',
    'sustainability'
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="border-b border-gray-200 p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-900">Funding Marketplace</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition"
          >
            Close
          </button>
        </div>

        <div className="flex space-x-4 mt-6">
          <button
            onClick={() => setActiveTab('crowdfunding')}
            className={`px-4 py-2 rounded-lg transition ${
              activeTab === 'crowdfunding'
                ? 'bg-purple-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Crowdfunding
          </button>
          <button
            onClick={() => setActiveTab('p2p')}
            className={`px-4 py-2 rounded-lg transition ${
              activeTab === 'p2p'
                ? 'bg-purple-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            P2P Lending
          </button>
        </div>
      </div>

      <div className="p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search opportunities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="text-gray-400 h-5 w-5" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeTab === 'crowdfunding' ? (
            <>
              <CrowdfundingCard
                title="Eco-Friendly Fashion Marketplace"
                description="Revolutionizing sustainable fashion with AI-powered marketplace connecting conscious consumers with ethical brands."
                raised={75000}
                goal={100000}
                backers={142}
                daysLeft={15}
                category="sustainability"
                image="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              />
              <CrowdfundingCard
                title="Women's Tech Education Platform"
                description="Building an inclusive online platform offering coding bootcamps and mentorship for women in tech."
                raised={45000}
                goal={80000}
                backers={98}
                daysLeft={23}
                category="education"
                image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
              />
              <CrowdfundingCard
                title="Health & Wellness App"
                description="Personalized wellness app combining traditional wisdom with modern health tracking technology."
                raised={120000}
                goal={150000}
                backers={256}
                daysLeft={8}
                category="healthcare"
                image="https://images.unsplash.com/photo-1576602976047-174e57a47881?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
              />
            </>
          ) : (
            <>
              <P2PLendingCard
                title="Organic Food Distribution"
                description="Expanding local organic food distribution network to serve more communities."
                amount={50000}
                term={12}
                rate={8.5}
                risk="Low"
                category="food & beverage"
                image="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2087&q=80"
              />
              <P2PLendingCard
                title="Mobile Beauty Services"
                description="Expanding on-demand beauty services platform to new cities."
                amount={75000}
                term={18}
                rate={9.2}
                risk="Medium"
                category="retail"
                image="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80"
              />
              <P2PLendingCard
                title="EdTech Platform Expansion"
                description="Growing our adaptive learning platform for K-12 students."
                amount={100000}
                term={24}
                rate={7.8}
                risk="Low"
                category="education"
                image="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2132&q=80"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const CrowdfundingCard = ({ title, description, raised, goal, backers, daysLeft, category, image }) => (
  <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <Heart className="h-5 w-5 text-gray-400 hover:text-red-500 cursor-pointer" />
      </div>
      <p className="mt-2 text-sm text-gray-600 line-clamp-2">{description}</p>
      
      <div className="mt-4">
        <div className="flex justify-between text-sm text-gray-600 mb-1">
          <span>${raised.toLocaleString()} raised</span>
          <span>{((raised / goal) * 100).toFixed(0)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-purple-600 h-2 rounded-full"
            style={{ width: `${(raised / goal) * 100}%` }}
          />
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between text-sm">
        <div className="flex items-center text-gray-600">
          <Users2 className="h-4 w-4 mr-1" />
          {backers} backers
        </div>
        <div className="flex items-center text-gray-600">
          <Clock className="h-4 w-4 mr-1" />
          {daysLeft} days left
        </div>
      </div>

      <button className="mt-4 w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition flex items-center justify-center">
        <span>Back Project</span>
        <ArrowUpRight className="h-4 w-4 ml-1" />
      </button>
    </div>
  </div>
);

const P2PLendingCard = ({ title, description, amount, term, rate, risk, category, image }) => (
  <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <Heart className="h-5 w-5 text-gray-400 hover:text-red-500 cursor-pointer" />
      </div>
      <p className="mt-2 text-sm text-gray-600 line-clamp-2">{description}</p>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="text-center p-2 bg-gray-50 rounded-lg">
          <DollarSign className="h-5 w-5 text-purple-600 mx-auto" />
          <span className="block mt-1 text-sm font-medium text-gray-900">
            ${amount.toLocaleString()}
          </span>
          <span className="block text-xs text-gray-600">Loan Amount</span>
        </div>
        <div className="text-center p-2 bg-gray-50 rounded-lg">
          <Percent className="h-5 w-5 text-purple-600 mx-auto" />
          <span className="block mt-1 text-sm font-medium text-gray-900">
            {rate}%
          </span>
          <span className="block text-xs text-gray-600">Interest Rate</span>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between text-sm">
        <div className="flex items-center text-gray-600">
          <Clock className="h-4 w-4 mr-1" />
          {term} months
        </div>
        <div className="flex items-center">
          <span className={`px-2 py-1 rounded-full text-xs ${
            risk === 'Low' ? 'bg-green-100 text-green-800' :
            risk === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'
          }`}>
            {risk} Risk
          </span>
        </div>
      </div>

      <button className="mt-4 w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition flex items-center justify-center">
        <span>Invest Now</span>
        <ArrowUpRight className="h-4 w-4 ml-1" />
      </button>
    </div>
  </div>
);

const CreditEvaluation = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="border-b border-gray-200 p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-900">AI Credit Evaluation</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition"
          >
            Close
          </button>
        </div>
        <div className="mt-4">
          <div className="flex items-center">
            {[1, 2, 3, 4].map((index) => (
              <React.Fragment key={index}>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step >= index
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {step > index ? (
                    <CheckCircle2 className="w-5 h-5" />
                  ) : (
                    index
                  )}
                </div>
                {index < 4 && (
                  <div
                    className={`h-1 w-16 ${
                      step > index ? 'bg-purple-600' : 'bg-gray-200'
                    }`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6">
        {step === 1 && (
          <BusinessInfoStep onNext={nextStep} />
        )}
        {step === 2 && (
          <FinancialDataStep onNext={nextStep} />
        )}
        {step === 3 && (
          <AlternativeMetricsStep onNext={nextStep} />
        )}
        {step === 4 && (
          <ResultsStep onClose={onClose} />
        )}
      </div>
    </div>
  );
};

const BusinessInfoStep = ({ onNext }) => (
  <div className="space-y-6">
    <h3 className="text-xl font-medium text-gray-900">Business Information</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Business Name
        </label>
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Enter business name"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Industry
        </label>
        <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
          <option>Select industry</option>
          <option>Technology</option>
          <option>Retail</option>
          <option>Healthcare</option>
          <option>Education</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Years in Business
        </label>
        <input
          type="number"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Enter years"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Number of Employees
        </label>
        <input
          type="number"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Enter number of employees"
        />
      </div>
    </div>
    <div className="flex justify-end">
      <button
        onClick={onNext}
        className="flex items-center space-x-2 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition"
      >
        <span>Next</span>
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  </div>
);

const FinancialDataStep = ({ onNext }) => (
  <div className="space-y-6">
    <h3 className="text-xl font-medium text-gray-900">Financial Data</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Monthly Revenue
        </label>
        <input
          type="number"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Enter monthly revenue"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Monthly Expenses
        </label>
        <input
          type="number"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Enter monthly expenses"
        />
      </div>
      <div className="md:col-span-2">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Upload Financial Statements
        </label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
          <Receipt className="mx-auto h-12 w-12 text-gray-400" />
          <p className="mt-2 text-sm text-gray-600">
            Drag and drop files here or click to browse
          </p>
        </div>
      </div>
    </div>
    <div className="flex justify-end">
      <button
        onClick={onNext}
        className="flex items-center space-x-2 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition"
      >
        <span>Next</span>
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  </div>
);

const AlternativeMetricsStep = ({ onNext }) => (
  <div className="space-y-6">
    <h3 className="text-xl font-medium text-gray-900">Alternative Metrics</h3>
    <div className="space-y-6">
      <div>
        <h4 className="text-lg font-medium text-gray-800 mb-4">Digital Presence</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Website URL"
          />
          <input
            type="text"
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Social Media Profiles"
          />
        </div>
      </div>
      <div>
        <h4 className="text-lg font-medium text-gray-800 mb-4">Business Performance</h4>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Customer Growth Rate (last 12 months)
            </label>
            <input
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter growth rate %"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Online Reviews Score (if applicable)
            </label>
            <input
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter average review score (1-5)"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="flex justify-end">
      <button
        onClick={onNext}
        className="flex items-center space-x-2 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition"
      >
        <span>Generate Evaluation</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  </div>
);

const ResultsStep = ({ onClose }) => (
  <div className="space-y-6">
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full">
        <CheckCircle2 className="w-8 h-8 text-green-500" />
      </div>
      <h3 className="mt-4 text-xl font-medium text-gray-900">Evaluation Complete</h3>
      <p className="mt-2 text-gray-600">
        Our AI has analyzed your business profile and generated a comprehensive evaluation
      </p>
    </div>

    <div className="bg-gray-50 rounded-lg p-6">
      <h4 className="text-lg font-medium text-gray-800 mb-4">Credit Score Factors</h4>
      <div className="space-y-4">
        <ScoreCard
          title="Business Stability"
          score={85}
          icon={<Building2 className="w-5 h-5" />}
        />
        <ScoreCard
          title="Financial Health"
          score={92}
          icon={<CreditCard className="w-5 h-5" />}
        />
        <ScoreCard
          title="Market Position"
          score={78}
          icon={<Briefcase className="w-5 h-5" />}
        />
      </div>
    </div>

    <div className="bg-purple-50 rounded-lg p-6">
      <h4 className="text-lg font-medium text-gray-800 mb-4">Recommendations</h4>
      <ul className="space-y-2">
        <li className="flex items-start">
          <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 mr-2" />
          <span>Eligible for up to $50,000 in revenue-based financing</span>
        </li>
        <li className="flex items-start">
          <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 mr-2" />
          <span>Consider applying for our women-owned business grant program</span>
        </li>
        <li className="flex items-start">
          <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 mr-2" />
          <span>Join our mentorship program to strengthen market position</span>
        </li>
      </ul>
    </div>

    <div className="flex justify-end space-x-4">
      <button
        onClick={onClose}
        className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
      >
        Close
      </button>
      <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition">
        Apply for Funding
      </button>
    </div>
  </div>
);

const ScoreCard = ({ title, score, icon }) => (
  <div className="flex items-center justify-between bg-white rounded-lg p-4 shadow-sm">
    <div className="flex items-center space-x-3">
      <div className="p-2 bg-purple-100 rounded-lg">
        {icon}
      </div>
      <span className="font-medium text-gray-900">{title}</span>
    </div>
    <div className="flex items-center">
      <div className="w-12 h-12 rounded-full border-4 border-purple-200 flex items-center justify-center">
        <span className="text-lg font-semibold text-purple-600">{score}</span>
      </div>
    </div>
  </div>
);

const DashboardCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition">
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="ml-3 text-lg font-medium text-gray-900">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);

const EventCard = ({ icon, title, date }) => (
  <div className="flex items-center space-x-3">
    <div className="bg-purple-50 rounded-lg p-2">{icon}</div>
    <div>
      <p className="font-medium text-gray-900">{title}</p>
      <p className="text-sm text-gray-500">{date}</p>
    </div>
  </div>
);

const ProgressBar = ({ title, progress }) => (
  <div>
    <div className="flex justify-between mb-1">
      <span className="text-sm font-medium text-gray-700">{title}</span>
      <span className="text-sm font-medium text-gray-500">{progress}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div
        className="bg-purple-600 h-2 rounded-full"
        style={{ width: `${progress}%` }}
      />
    </div>
  </div>
);

export default Dashboard;