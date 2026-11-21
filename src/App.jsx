import { useEffect, useState } from 'react'
import { Link, Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import {
  ArrowRight, BarChart3, Bell, ChevronDown, CircleDollarSign, CreditCard,
  Download, Edit3, Eye, EyeOff, Globe2, Goal, LayoutDashboard, Menu, PieChart, Plus,
  ReceiptText, Search, Settings, Sparkles, Trash2, TrendingDown, TrendingUp,
  Send, RotateCcw, ShieldCheck, LockKeyhole, CheckCircle2, Wallet, X, Zap
} from 'lucide-react'
import {
  Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Legend,
  Pie, PieChart as RechartsPieChart, ResponsiveContainer, Tooltip, XAxis, YAxis
} from 'recharts'

const chartData = [
  { month: 'Jan', income: 82000, expenses: 51000 },
  { month: 'Feb', income: 86000, expenses: 56000 },
  { month: 'Mar', income: 84000, expenses: 52000 },
  { month: 'Apr', income: 94000, expenses: 61000 },
  { month: 'May', income: 90000, expenses: 58000 },
  { month: 'Jun', income: 98000, expenses: 63000 },
]

function Brand({ inverse = false }) {
  return (
    <Link className={`brand ${inverse ? 'brand-inverse' : ''}`} to="/" aria-label="MoneyWise home">
      <span className="brand-mark"><Wallet size={19} strokeWidth={2.4} /></span>
      <span>MoneyWise</span>
    </Link>
  )
}

function Landing() {
  return (
    <main className="landing">
      <nav className="landing-nav">
        <Brand />
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#how">How it works</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQs</a>
        </div>
        <div className="nav-actions">
          <Link className="text-button" to="/login">Log in</Link>
          <Link className="button button-small" to="/signup">Get started <ArrowRight size={16} /></Link>
        </div>
      </nav>

      <section className="hero-section">
        <div className="hero-copy">
          <div className="eyebrow"><Sparkles size={14} /> Your AI finance companion</div>
          <h1>Take control of your money.<br /><span>Build your future.</span></h1>
          <p>Understand your spending, manage your budgets, and make smarter financial decisions—all in one beautifully simple place.</p>
          <div className="hero-actions">
            <Link className="button button-large" to="/signup">Get Started — It's Free <ArrowRight size={17} /></Link>
            <a className="button button-secondary button-large" href="#features">Explore features</a>
          </div>
          <div className="hero-proof"><span className="proof-avatars">AZ</span><span>Trusted by 12,000+ smarter savers</span></div>
        </div>
        <DashboardPreview />
      </section>

      <section className="logo-strip" aria-label="Trusted use cases">
        <span>Built for every money journey</span>
        <strong>STUDENTS</strong><strong>PROFESSIONALS</strong><strong>FAMILIES</strong><strong>FREELANCERS</strong>
      </section>

      <section className="landing-section" id="features">
        <div className="section-heading">
          <div className="eyebrow">Everything in one place</div>
          <h2>Smarter money management,<br />without the complexity.</h2>
        </div>
        <div className="feature-grid">
          <Feature icon={<PieChart />} title="See where every rupee goes" text="Clear categories and visual reports turn financial activity into decisions you can act on." />
          <Feature icon={<Zap />} title="Get AI-powered insights" text="MoneyWise explains trends and recommends practical next steps based on your own data." />
          <Feature icon={<Goal />} title="Make progress on goals" text="Create savings goals, automate your contributions, and watch progress grow." />
        </div>
      </section>

      <section className="insight-section" id="how">
        <div className="insight-copy">
          <div className="eyebrow">Personalized guidance</div>
          <h2>Advice that knows your real financial picture.</h2>
          <p>Ask questions in plain language. MoneyWise combines your verified transactions, budgets, and goals to explain what is changing—and what you can do next.</p>
          <ul className="check-list">
            <li>Calculations stay connected to your actual data</li>
            <li>Clear explanations without financial jargon</li>
            <li>Private, secure, and always in your control</li>
          </ul>
        </div>
        <div className="insight-card">
          <div className="insight-label"><Sparkles size={16} /> MoneyWise Insight</div>
          <h3>Your food spending is 15% higher this month.</h3>
          <p>At this pace, you will use 92% of your dining budget. A weekly limit of Rs. 2,500 could keep you on track.</p>
          <button className="button button-white">View full analysis <ArrowRight size={16} /></button>
        </div>
      </section>

      <section className="faq-section" id="faq">
        <div className="section-heading">
          <div className="eyebrow">Questions</div>
          <h2>Frequently asked questions</h2>
        </div>
        <details><summary>Is MoneyWise free to use?</summary><p>This demo includes the complete product experience. A free personal plan can be used for everyday budgeting and savings.</p></details>
        <details><summary>Can I use multiple currencies?</summary><p>Yes. MoneyWise is designed to preserve original transaction currencies while reporting in your preferred currency.</p></details>
        <details><summary>Is my financial data secure?</summary><p>The production architecture uses authenticated, user-scoped records and secure password hashing. Demo data stays only in this browser.</p></details>
      </section>

      <section className="final-cta" id="pricing">
        <h2>A better financial future starts today.</h2>
        <p>Join thousands building healthier money habits with MoneyWise.</p>
        <Link className="button button-white button-large" to="/signup">Create your free account <ArrowRight size={17} /></Link>
      </section>

      <footer className="landing-footer">
        <Brand />
        <p>© 2026 MoneyWise. Your money, made clearer.</p>
        <div><a href="#features">Privacy</a><a href="#features">Terms</a><a href="#features">Contact</a></div>
      </footer>
    </main>
  )
}

function Feature({ icon, title, text }) {
  return <article className="feature-card"><div className="feature-icon">{icon}</div><h3>{title}</h3><p>{text}</p><a href="#how">Learn more <ArrowRight size={15} /></a></article>
}

function DashboardPreview() {
  return (
    <div className="preview-shell" aria-label="MoneyWise dashboard preview">
      <div className="preview-sidebar">
        <div className="mini-brand"><Wallet size={15} /></div>
        {[LayoutDashboard, ReceiptText, PieChart, Goal].map((Icon, i) => <span className={i === 0 ? 'mini-active' : ''} key={i}><Icon size={16} /></span>)}
      </div>
      <div className="preview-main">
        <div className="preview-top"><div><small>Welcome back</small><b>Good morning, Arslan</b></div><div className="preview-avatar">A</div></div>
        <div className="preview-cards">
          <div><small>Total balance</small><strong>Rs. 245,800</strong><em>+12.5%</em></div>
          <div><small>Monthly income</small><strong>Rs. 98,000</strong><em>+8.2%</em></div>
          <div><small>Monthly expenses</small><strong>Rs. 63,400</strong><em className="negative">+4.1%</em></div>
        </div>
        <div className="preview-chart-card">
          <div className="preview-card-head"><b>Cash flow</b><span>Last 6 months⌄</span></div>
          <ResponsiveContainer width="100%" height={155}>
            <AreaChart data={chartData}>
              <defs><linearGradient id="income" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#16a36a" stopOpacity={0.25}/><stop offset="95%" stopColor="#16a36a" stopOpacity={0}/></linearGradient></defs>
              <CartesianGrid stroke="#edf1ee" vertical={false} />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fontSize: 9, fill:'#718078'}} />
              <YAxis hide />
              <Tooltip />
              <Area type="monotone" dataKey="income" stroke="#16a36a" strokeWidth={2.5} fill="url(#income)" />
              <Area type="monotone" dataKey="expenses" stroke="#a4b0a8" strokeWidth={2} fill="none" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

function Auth({ mode }) {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const isSignup = mode === 'signup'

  function submit(event) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    if (isSignup && data.get('password') !== data.get('confirm')) {
      setError('Passwords do not match.')
      return
    }
    setError('')
    setLoading(true)
    setTimeout(() => {
      localStorage.setItem('moneywise-demo-user', JSON.stringify({
        name: isSignup ? data.get('name') : 'Arslan',
        email: data.get('email'),
      }))
      localStorage.setItem('moneywise-auth', 'true')
      setLoading(false)
      navigate(isSignup ? '/onboarding' : '/dashboard')
    }, 700)
  }

  return (
    <main className="auth-page">
      <div className="auth-aside">
        <Brand inverse />
        <div className="auth-quote">
          <Sparkles size={22} />
          <blockquote>“Clarity about where your money goes is the first step toward choosing where it grows.”</blockquote>
        </div>
      </div>
      <div className="auth-main">
        <div className="auth-form-wrap">
          <div className="auth-mobile-brand"><Brand /></div>
          <h1>{isSignup ? 'Create your account' : 'Welcome back'}</h1>
          <p>{isSignup ? 'Start building healthier money habits today.' : 'Sign in to continue to your financial dashboard.'}</p>
          {error && <div className="form-error">{error}</div>}
          <form onSubmit={submit}>
            {isSignup && <label>Full name<input name="name" type="text" placeholder="Arslan" required /></label>}
            <label>Email address<input name="email" type="email" placeholder="you@example.com" required /></label>
            <label>Password<div className="password-field"><input name="password" type={showPassword ? 'text' : 'password'} placeholder="At least 8 characters" minLength={8} required /><button type="button" onClick={() => setShowPassword(!showPassword)} aria-label="Toggle password visibility">{showPassword ? <EyeOff size={18}/> : <Eye size={18}/>}</button></div></label>
            {isSignup && <label>Confirm password<input name="confirm" type="password" placeholder="Repeat your password" minLength={8} required /></label>}
            {!isSignup && <div className="form-row"><label className="check-label"><input type="checkbox" /> Remember me</label><a href="#forgot">Forgot password?</a></div>}
            <button className="button auth-submit" disabled={loading}>{loading ? 'Please wait…' : isSignup ? 'Create account' : 'Log in'} <ArrowRight size={17} /></button>
          </form>
          <div className="auth-switch">{isSignup ? 'Already have an account?' : 'New to MoneyWise?'} <Link to={isSignup ? '/login' : '/signup'}>{isSignup ? 'Log in' : 'Create account'}</Link></div>
        </div>
      </div>
    </main>
  )
}

function Onboarding() {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [accountType, setAccountType] = useState('Employee')
  const [goal, setGoal] = useState('Build emergency fund')

  return (
    <main className="onboarding-page">
      <header><Brand /><span>Step {step} of 3</span></header>
      <div className="onboarding-progress"><span style={{width: `${step * 33.333}%`}} /></div>
      <section className="onboarding-card">
        {step === 1 && <>
          <div className="eyebrow">Personalize your experience</div>
          <h1>Which best describes you?</h1>
          <p>We'll tailor budgets and insights to your lifestyle.</p>
          <div className="choice-grid">
            {['Student','Employee','Professional','Family'].map(item => <button key={item} className={accountType === item ? 'choice active' : 'choice'} onClick={() => setAccountType(item)}>{item}</button>)}
          </div>
        </>}
        {step === 2 && <>
          <div className="eyebrow">Currency & income</div>
          <h1>Set up your financial base</h1>
          <p>You can update these details anytime.</p>
          <div className="onboarding-fields">
            <label>Country<select defaultValue="Pakistan"><option>Pakistan</option><option>United States</option><option>United Kingdom</option><option>United Arab Emirates</option></select></label>
            <label>Preferred currency<select defaultValue="PKR"><option>PKR</option><option>USD</option><option>EUR</option><option>GBP</option><option>AED</option></select></label>
            <label>Monthly income (optional)<input type="number" placeholder="0" /></label>
          </div>
        </>}
        {step === 3 && <>
          <div className="eyebrow">Almost done</div>
          <h1>What would you like to achieve?</h1>
          <p>Choose your primary financial goal.</p>
          <div className="choice-grid">
            {['Build emergency fund','Pay off debt','Save for education','Buy a home','Track everyday spending'].map(item => <button key={item} className={goal === item ? 'choice active' : 'choice'} onClick={() => setGoal(item)}>{item}</button>)}
          </div>
        </>}
        <div className="onboarding-actions">
          {step > 1 && <button className="button button-secondary" onClick={() => setStep(step - 1)}>Back</button>}
          <button className="button" onClick={() => step < 3 ? setStep(step + 1) : navigate('/dashboard')}>{step < 3 ? 'Continue' : 'Open my dashboard'} <ArrowRight size={17}/></button>
        </div>
      </section>
    </main>
  )
}

function Protected({ children }) {
  return localStorage.getItem('moneywise-auth') === 'true' ? children : <Navigate to="/login" replace />
}

const demoTransactions = [
  { id: 'tx-1', name: 'Monthly Salary', category: 'Salary', date: '2026-11-20', amount: 98000, type: 'income', currency: 'PKR', note: '' },
  { id: 'tx-2', name: 'Grocery Store', category: 'Food', date: '2026-11-19', amount: 8450, type: 'expense', currency: 'PKR', note: 'Weekly groceries' },
  { id: 'tx-3', name: 'Careem Ride', category: 'Transport', date: '2026-11-18', amount: 1240, type: 'expense', currency: 'PKR', note: '' },
  { id: 'tx-4', name: 'Fiverr Project', category: 'Freelancing', date: '2026-11-16', amount: 24500, type: 'income', currency: 'PKR', note: 'Landing page project' },
  { id: 'tx-5', name: 'Apartment Rent', category: 'Rent', date: '2026-11-15', amount: 26000, type: 'expense', currency: 'PKR', note: '' },
]

const demoBudgets = [
  { id: 'budget-1', category: 'Food', period: 'Monthly', limit: 10000, spent: 6500 },
  { id: 'budget-2', category: 'Transport', period: 'Monthly', limit: 5000, spent: 3200 },
  { id: 'budget-3', category: 'Shopping', period: 'Monthly', limit: 12000, spent: 8100 },
  { id: 'budget-4', category: 'Entertainment', period: 'Monthly', limit: 6000, spent: 1700 },
]

const demoGoals = [
  { id: 'goal-1', name: 'Emergency fund', target: 300000, saved: 182400, date: '2027-06-30', color: '#16a36a' },
  { id: 'goal-2', name: 'New laptop', target: 220000, saved: 94000, date: '2027-02-28', color: '#4f7f68' },
  { id: 'goal-3', name: 'University fees', target: 150000, saved: 48000, date: '2026-12-31', color: '#d6a64d' },
]

function AppShell() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [transactions, setTransactions] = useState(() => {
    try { return JSON.parse(localStorage.getItem('moneywise-demo-transactions')) || demoTransactions } catch { return demoTransactions }
  })
  const [budgets, setBudgets] = useState(() => {
    try { return JSON.parse(localStorage.getItem('moneywise-demo-budgets')) || demoBudgets } catch { return demoBudgets }
  })
  const [goals, setGoals] = useState(() => {
    try { return JSON.parse(localStorage.getItem('moneywise-demo-goals')) || demoGoals } catch { return demoGoals }
  })
  useEffect(() => localStorage.setItem('moneywise-demo-transactions', JSON.stringify(transactions)), [transactions])
  useEffect(() => localStorage.setItem('moneywise-demo-budgets', JSON.stringify(budgets)), [budgets])
  useEffect(() => localStorage.setItem('moneywise-demo-goals', JSON.stringify(goals)), [goals])
  const userJson = localStorage.getItem('moneywise-demo-user')
  const storedUser = userJson ? JSON.parse(userJson) : null
  const user = storedUser?.name === 'Ali Hassan'
    ? { ...storedUser, name: 'Arslan', email: storedUser.email === 'ali@example.com' ? 'arslan@example.com' : storedUser.email }
    : storedUser || { name: 'Arslan' }
  useEffect(() => {
    if (storedUser?.name === 'Ali Hassan') {
      localStorage.setItem('moneywise-demo-user', JSON.stringify({
        name: 'Arslan',
        email: storedUser.email === 'ali@example.com' ? 'arslan@example.com' : storedUser.email,
      }))
    }
  }, [storedUser?.name, storedUser?.email])
  const firstName = user.name?.split(' ')[0] || 'Arslan'
  const nav = [
    {path:'/dashboard', label:'Overview', icon:<LayoutDashboard/>},
    {path:'/transactions', label:'Transactions', icon:<ReceiptText/>},
    {path:'/budgets', label:'Budgets', icon:<PieChart/>},
    {path:'/goals', label:'Savings goals', icon:<Goal/>},
  ]

  return (
    <div className="app-shell">
      <aside className={menuOpen ? 'sidebar open' : 'sidebar'}>
        <div className="sidebar-brand"><Brand /><button className="close-menu" onClick={() => setMenuOpen(false)}><X/></button></div>
        <nav>
          <span className="nav-label">Workspace</span>
          {nav.map(item => <Link key={item.path} className={location.pathname === item.path ? 'side-link active' : 'side-link'} to={item.path}>{item.icon}<span>{item.label}</span></Link>)}
          <span className="nav-label">Manage</span>
          <Link className={location.pathname === '/analytics' ? 'side-link active' : 'side-link'} to="/analytics"><BarChart3/><span>Analytics</span></Link>
          <Link className={location.pathname === '/currencies' ? 'side-link active' : 'side-link'} to="/currencies"><Globe2/><span>Currencies</span></Link>
          <Link className={location.pathname === '/assistant' ? 'side-link active' : 'side-link'} to="/assistant"><Sparkles/><span>MoneyWise AI</span><b>NEW</b></Link>
          <Link className={location.pathname === '/settings' ? 'side-link active' : 'side-link'} to="/settings"><Settings/><span>Settings</span></Link>
        </nav>
        <div className="sidebar-profile"><div className="profile-avatar">{firstName[0]}</div><div><strong>{user.name}</strong><small>Personal account</small></div><ChevronDown size={16}/></div>
      </aside>
      {menuOpen && <div className="sidebar-backdrop" onClick={() => setMenuOpen(false)} />}
      <main className="app-main">
        <header className="app-header">
          <button className="mobile-menu" onClick={() => setMenuOpen(true)}><Menu/></button>
          <div><h1>{location.pathname === '/dashboard' ? `Good morning, ${firstName}` : pageTitle(location.pathname)}</h1>{location.pathname === '/dashboard' && <p>Friday, November 21, 2026</p>}</div>
          <div className="header-actions"><button className="currency-button">PKR <ChevronDown size={14}/></button><Link className="icon-button" to="/notifications" aria-label="Notifications"><Bell size={20}/><span /></Link><button className="header-avatar">{firstName[0]}</button></div>
        </header>
        {location.pathname === '/dashboard' && <Dashboard transactions={transactions} setTransactions={setTransactions} />}
        {location.pathname === '/transactions' && <TransactionsPage transactions={transactions} setTransactions={setTransactions} />}
        {location.pathname === '/budgets' && <BudgetsPage budgets={budgets} setBudgets={setBudgets} />}
        {location.pathname === '/goals' && <GoalsPage goals={goals} setGoals={setGoals} />}
        {location.pathname === '/analytics' && <AnalyticsPage transactions={transactions} budgets={budgets} />}
        {location.pathname === '/currencies' && <CurrencyPage />}
        {location.pathname === '/assistant' && <AssistantPage transactions={transactions} budgets={budgets} goals={goals} />}
        {location.pathname === '/notifications' && <NotificationsPage budgets={budgets} />}
        {location.pathname === '/settings' && <SettingsPage transactions={transactions} budgets={budgets} goals={goals} />}
        {!['/dashboard','/transactions','/budgets','/goals','/analytics','/currencies','/assistant','/notifications','/settings'].includes(location.pathname) && <ComingSoonPage title={pageTitle(location.pathname)} />}
      </main>
    </div>
  )
}

function pageTitle(path) {
  return {
    '/transactions': 'Transactions',
    '/budgets': 'Budget planner',
    '/goals': 'Savings goals',
    '/analytics': 'Analytics',
    '/currencies': 'Currency management',
    '/assistant': 'MoneyWise AI',
    '/notifications': 'Notifications',
    '/settings': 'Settings',
  }[path] || 'MoneyWise'
}

function Dashboard({ transactions = [], setTransactions }) {
  const [showModal, setShowModal] = useState(false)
  const monthlyIncome = transactions.filter((tx) => tx.type === 'income').reduce((sum, tx) => sum + Number(tx.amount), 0)
  const monthlyExpenses = transactions.filter((tx) => tx.type === 'expense').reduce((sum, tx) => sum + Number(tx.amount), 0)
  const balance = monthlyIncome - monthlyExpenses + 182400
  const cards = [
    {label:'Total balance', amount:`Rs. ${balance.toLocaleString()}`, change:'12.5%', positive:true, icon:<Wallet/>},
    {label:'Monthly income', amount:`Rs. ${monthlyIncome.toLocaleString()}`, change:'8.2%', positive:true, icon:<TrendingUp/>},
    {label:'Monthly expenses', amount:`Rs. ${monthlyExpenses.toLocaleString()}`, change:'4.1%', positive:false, icon:<TrendingDown/>},
    {label:'Total savings', amount:'Rs. 182,400', change:'15.3%', positive:true, icon:<CircleDollarSign/>},
  ]
  return (
    <div className="dashboard">
      {showModal && <AddTransactionModal onClose={() => setShowModal(false)} onSave={(tx) => setTransactions((items) => [{ ...tx, id: `tx-${Date.now()}` }, ...items])} />}
      <div className="dashboard-toolbar"><span className="demo-badge">Demo workspace</span><button className="button" onClick={() => setShowModal(true)}><Plus size={17}/> Add transaction</button></div>
      <section className="metric-grid">
        {cards.map(card => <article className="metric-card" key={card.label}><div className="metric-top"><span className="metric-icon">{card.icon}</span><span className={card.positive ? 'change positive' : 'change negative'}>{card.positive ? '↗' : '↘'} {card.change}</span></div><p>{card.label}</p><strong>{card.amount}</strong><small>vs. previous month</small></article>)}
      </section>

      <section className="dashboard-grid">
        <article className="panel cash-flow"><div className="panel-head"><div><h2>Income vs expenses</h2><p>Cash flow over the last 6 months</p></div><button className="select-button">6 months <ChevronDown size={14}/></button></div><ResponsiveContainer width="100%" height={250}><AreaChart data={chartData} margin={{top:10,right:8,left:-18,bottom:0}}><defs><linearGradient id="dashboardIncome" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#16a36a" stopOpacity={0.18}/><stop offset="95%" stopColor="#16a36a" stopOpacity={0}/></linearGradient></defs><CartesianGrid stroke="#edf1ee" vertical={false}/><XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill:'#718078',fontSize:12}}/><YAxis axisLine={false} tickLine={false} tick={{fill:'#718078',fontSize:11}} tickFormatter={v=>`${v/1000}k`}/><Tooltip/><Area type="monotone" dataKey="income" stroke="#16a36a" strokeWidth={2.5} fill="url(#dashboardIncome)"/><Area type="monotone" dataKey="expenses" stroke="#b1bbb5" strokeWidth={2} fill="none"/></AreaChart></ResponsiveContainer></article>
        <article className="panel insight-panel"><div className="insight-top"><span><Sparkles size={16}/> MoneyWise Insight</span><span className="ai-dot">AI</span></div><h3>You're on track this month</h3><p>Your food expenses increased by 15%. A weekly limit of Rs. 2,500 will keep you within budget.</p><button>View full analysis <ArrowRight size={15}/></button></article>
      </section>

      <section className="dashboard-grid lower-grid">
        <article className="panel transactions-panel"><div className="panel-head"><div><h2>Recent transactions</h2><p>Your latest financial activity</p></div><Link to="/transactions">View all <ArrowRight size={14}/></Link></div><div className="transaction-list">{transactions.slice(0,4).map((tx)=><div className="transaction-row" key={tx.id}><span className={tx.type === 'income'?'transaction-icon income':'transaction-icon'}>{tx.type === 'income'?<TrendingUp size={17}/>:<CreditCard size={17}/>}</span><div className="transaction-name"><strong>{tx.name}</strong><small>{tx.category}</small></div><div className="transaction-date">{formatDate(tx.date)}</div><strong className={tx.type === 'income'?'amount income-amount':'amount'}>{tx.type === 'income'?'+' : '-'}Rs. {Number(tx.amount).toLocaleString()}</strong></div>)}</div></article>
        <article className="panel budget-panel"><div className="panel-head"><div><h2>Budget overview</h2><p>Monthly spending limits</p></div><Link to="/budgets">Manage <ArrowRight size={14}/></Link></div><BudgetRow label="Food" spent="Rs. 6,500" total="Rs. 10,000" percent={65}/><BudgetRow label="Transport" spent="Rs. 3,200" total="Rs. 5,000" percent={64}/><BudgetRow label="Shopping" spent="Rs. 8,100" total="Rs. 12,000" percent={68}/></article>
      </section>
    </div>
  )
}

function BudgetRow({label,spent,total,percent}) {
  return <div className="budget-row"><div><strong>{label}</strong><span>{spent} <small>of {total}</small></span></div><div className="progress"><span style={{width:`${percent}%`}} /></div></div>
}

function formatDate(value) {
  if (!value) return ''
  return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(new Date(`${value}T12:00:00`))
}

function AddTransactionModal({ onClose, onSave, initial = null }) {
  const [type, setType] = useState(initial?.type || 'expense')
  const expenseCategories = ['Food','Transport','Shopping','Education','Healthcare','Rent','Utilities','Entertainment','Family','Other']
  const incomeCategories = ['Salary','Freelancing','Business','Allowance','Investments','Gifts','Other']

  function submit(event) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    onSave({
      id: initial?.id,
      name: data.get('name').trim(),
      amount: Number(data.get('amount')),
      currency: data.get('currency'),
      category: data.get('category'),
      date: data.get('date'),
      type,
      note: data.get('note')?.trim() || '',
    })
    onClose()
  }

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true">
      <div className="modal">
        <div className="modal-head"><div><h2>{initial ? 'Edit transaction' : 'Add transaction'}</h2><p>Record income or an expense</p></div><button onClick={onClose} aria-label="Close"><X size={20}/></button></div>
        <div className="type-toggle"><button type="button" className={type==='expense'?'active':''} onClick={()=>setType('expense')}>Expense</button><button type="button" className={type==='income'?'active':''} onClick={()=>setType('income')}>Income</button></div>
        <form onSubmit={submit}>
          <label>Transaction name<input name="name" defaultValue={initial?.name || ''} placeholder="e.g. Grocery store" required /></label>
          <div className="form-grid">
            <label>Amount<input name="amount" type="number" min="0.01" step="0.01" defaultValue={initial?.amount || ''} placeholder="0" required /></label>
            <label>Currency<select name="currency" defaultValue={initial?.currency || 'PKR'}><option>PKR</option><option>USD</option><option>EUR</option><option>GBP</option><option>AED</option><option>SAR</option><option>INR</option></select></label>
          </div>
          <label>Category<select name="category" defaultValue={initial?.category || (type==='expense'?'Food':'Salary')}>{(type==='expense'?expenseCategories:incomeCategories).map(category => <option key={category}>{category}</option>)}</select></label>
          <label>Date<input name="date" type="date" defaultValue={initial?.date || '2026-11-21'} required /></label>
          <label>Note<textarea name="note" defaultValue={initial?.note || ''} placeholder="Optional description" /></label>
          <div className="modal-actions"><button type="button" className="button button-secondary" onClick={onClose}>Cancel</button><button type="submit" className="button">{initial?'Save changes':'Save transaction'}</button></div>
        </form>
      </div>
    </div>
  )
}

function TransactionsPage({ transactions, setTransactions }) {
  const [query, setQuery] = useState('')
  const [type, setType] = useState('all')
  const [category, setCategory] = useState('all')
  const [modal, setModal] = useState(null)

  const categories = [...new Set(transactions.map((tx) => tx.category))]
  const filtered = transactions.filter((tx) =>
    (type === 'all' || tx.type === type) &&
    (category === 'all' || tx.category === category) &&
    `${tx.name} ${tx.category} ${tx.note}`.toLowerCase().includes(query.toLowerCase())
  )

  function saveTransaction(tx) {
    if (tx.id) setTransactions((items) => items.map((item) => item.id === tx.id ? tx : item))
    else setTransactions((items) => [{ ...tx, id: `tx-${Date.now()}` }, ...items])
  }

  return (
    <div className="workspace-page">
      {modal && <AddTransactionModal initial={modal !== 'new' ? modal : null} onClose={() => setModal(null)} onSave={saveTransaction} />}
      <div className="workspace-toolbar">
        <div><span className="demo-badge inline-badge">Demo workspace</span><p>Search, filter, edit, or delete your financial activity.</p></div>
        <button className="button" onClick={() => setModal('new')}><Plus size={17}/> Add transaction</button>
      </div>
      <section className="data-panel">
        <div className="table-toolbar">
          <label className="search-box"><Search size={16}/><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search transactions" /></label>
          <select value={type} onChange={(event) => setType(event.target.value)}><option value="all">All types</option><option value="income">Income</option><option value="expense">Expense</option></select>
          <select value={category} onChange={(event) => setCategory(event.target.value)}><option value="all">All categories</option>{categories.map((item) => <option key={item}>{item}</option>)}</select>
        </div>
        {filtered.length ? <div className="table-wrap">
          <table><thead><tr><th>Name</th><th>Category</th><th>Date</th><th>Type</th><th>Amount</th><th></th></tr></thead>
            <tbody>{filtered.map((tx) => <tr key={tx.id}><td><div className="table-name"><span className={tx.type === 'income'?'transaction-icon income':'transaction-icon'}>{tx.type === 'income'?<TrendingUp size={16}/>:<CreditCard size={16}/>}</span><div><strong>{tx.name}</strong><small>{tx.note || 'No description'}</small></div></div></td><td>{tx.category}</td><td>{formatDate(tx.date)}</td><td><span className={`type-pill ${tx.type}`}>{tx.type}</span></td><td className={tx.type === 'income'?'table-amount income-amount':'table-amount'}>{tx.type === 'income'?'+':'-'} Rs. {Number(tx.amount).toLocaleString()}</td><td><div className="row-actions"><button onClick={() => setModal(tx)} aria-label={`Edit ${tx.name}`}><Edit3 size={15}/></button><button onClick={() => setTransactions((items) => items.filter((item) => item.id !== tx.id))} aria-label={`Delete ${tx.name}`}><Trash2 size={15}/></button></div></td></tr>)}</tbody>
          </table>
        </div> : <div className="empty-state"><ReceiptText size={28}/><h3>No transactions found</h3><p>Try changing your filters or add a new transaction.</p></div>}
      </section>
    </div>
  )
}

function BudgetsPage({ budgets, setBudgets }) {
  const [modal, setModal] = useState(false)

  function addBudget(event) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    setBudgets((items) => [...items, { id: `budget-${Date.now()}`, category: data.get('category'), period: data.get('period'), limit: Number(data.get('limit')), spent: Number(data.get('spent') || 0) }])
    setModal(false)
  }

  return (
    <div className="workspace-page">
      {modal && <div className="modal-backdrop"><form className="modal" onSubmit={addBudget}><div className="modal-head"><div><h2>Create budget</h2><p>Set a category spending limit</p></div><button type="button" onClick={()=>setModal(false)}><X size={20}/></button></div><div className="budget-form"><label>Category<input name="category" placeholder="e.g. Food" required /></label><label>Period<select name="period"><option>Monthly</option><option>Weekly</option></select></label><label>Spending limit<input name="limit" type="number" min="1" required /></label><label>Already spent<input name="spent" type="number" min="0" defaultValue="0" /></label></div><div className="modal-actions"><button type="button" className="button button-secondary" onClick={()=>setModal(false)}>Cancel</button><button className="button">Create budget</button></div></form></div>}
      <div className="workspace-toolbar"><div><span className="demo-badge inline-badge">Demo workspace</span><p>Track spending limits and remaining budgets.</p></div><button className="button" onClick={()=>setModal(true)}><Plus size={17}/> Create budget</button></div>
      <section className="budget-grid">{budgets.map((budget) => {
        const percent = Math.min(100, Math.round((budget.spent / budget.limit) * 100))
        const remaining = budget.limit - budget.spent
        return <article className="budget-card" key={budget.id}><div className="budget-card-head"><span className="budget-icon"><PieChart size={18}/></span><div><h3>{budget.category}</h3><p>{budget.period}</p></div><button onClick={() => setBudgets((items) => items.filter((item) => item.id !== budget.id))} aria-label={`Delete ${budget.category} budget`}><Trash2 size={15}/></button></div><div className="budget-numbers"><strong>Rs. {budget.spent.toLocaleString()}</strong><span>of Rs. {budget.limit.toLocaleString()}</span></div><div className="progress budget-progress"><span className={percent > 90 ? 'danger' : ''} style={{width:`${percent}%`}} /></div><div className="budget-footer"><span>{percent}% used</span><strong className={remaining < 0?'over':''}>{remaining >= 0 ? `Rs. ${remaining.toLocaleString()} left` : `Rs. ${Math.abs(remaining).toLocaleString()} over`}</strong></div></article>
      })}</section>
    </div>
  )
}

function GoalsPage({ goals, setGoals }) {
  const [modal, setModal] = useState(false)
  function addGoal(event) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    setGoals((items) => [...items, { id: `goal-${Date.now()}`, name: data.get('name'), target: Number(data.get('target')), saved: Number(data.get('saved') || 0), date: data.get('date'), color: '#16a36a' }])
    setModal(false)
  }
  return (
    <div className="workspace-page">
      {modal && <div className="modal-backdrop"><form className="modal" onSubmit={addGoal}><div className="modal-head"><div><h2>Create savings goal</h2><p>Define a target and deadline</p></div><button type="button" onClick={()=>setModal(false)}><X size={20}/></button></div><div className="budget-form"><label>Goal name<input name="name" placeholder="e.g. Emergency fund" required /></label><label>Target amount<input name="target" type="number" min="1" required /></label><label>Already saved<input name="saved" type="number" min="0" defaultValue="0" /></label><label>Target date<input name="date" type="date" required /></label></div><div className="modal-actions"><button type="button" className="button button-secondary" onClick={()=>setModal(false)}>Cancel</button><button className="button">Create goal</button></div></form></div>}
      <div className="workspace-toolbar"><div><span className="demo-badge inline-badge">Demo workspace</span><p>Turn future plans into measurable savings progress.</p></div><button className="button" onClick={()=>setModal(true)}><Plus size={17}/> Create goal</button></div>
      <section className="goal-grid">{goals.map((goal) => {
        const percent = Math.min(100, Math.round((goal.saved / goal.target) * 100))
        return <article className="goal-card" key={goal.id}><div className="goal-card-top"><span className="goal-icon" style={{background:`${goal.color}18`,color:goal.color}}><Goal size={20}/></span><button onClick={()=>setGoals((items)=>items.filter((item)=>item.id!==goal.id))} aria-label={`Delete ${goal.name}`}><Trash2 size={15}/></button></div><h3>{goal.name}</h3><p>Target: Rs. {goal.target.toLocaleString()}</p><div className="goal-progress-ring" style={{'--progress':`${percent * 3.6}deg`, '--goal-color':goal.color}}><div><strong>{percent}%</strong><small>saved</small></div></div><div className="goal-footer"><div><small>Saved</small><strong>Rs. {goal.saved.toLocaleString()}</strong></div><div><small>Target date</small><strong>{formatDate(goal.date)}</strong></div></div></article>
      })}</section>
    </div>
  )
}

function AssistantPage({ transactions, budgets, goals }) {
  const [messages, setMessages] = useState([
    { role: 'assistant', text: 'Hello, I’m MoneyWise AI in demo mode. I can explain your recorded activity and calculate budget or savings guidance from the data available in this demo workspace.' }
  ])
  const [draft, setDraft] = useState('')
  const [typing, setTyping] = useState(false)

  const income = transactions.filter((tx) => tx.type === 'income').reduce((sum, tx) => sum + Number(tx.amount), 0)
  const expenses = transactions.filter((tx) => tx.type === 'expense').reduce((sum, tx) => sum + Number(tx.amount), 0)

  function expenseByCategory() {
    return transactions.filter((tx) => tx.type === 'expense').reduce((groups, tx) => {
      groups[tx.category] = (groups[tx.category] || 0) + Number(tx.amount)
      return groups
    }, {})
  }

  function answer(question) {
    const text = question.toLowerCase()
    const categories = expenseByCategory()
    const highest = Object.entries(categories).sort((a, b) => b[1] - a[1])[0]
    const budgetUsed = budgets.reduce((sum, budget) => sum + budget.spent, 0)
    const budgetLimit = budgets.reduce((sum, budget) => sum + budget.limit, 0)
    const net = income - expenses

    if (text.includes('where') && (text.includes('money') || text.includes('spend'))) {
      return {
        text: highest
          ? `Your highest recorded expense category is ${highest[0]} at Rs. ${highest[1].toLocaleString()}.`
          : 'There are no recorded expenses to analyze.',
        details: highest ? [
          `Recorded expenses total Rs. ${expenses.toLocaleString()}.`,
          `Your ${highest[0]} spending represents ${Math.round((highest[1] / (expenses || 1)) * 100)}% of recorded expenses.`,
        ] : ['Add an expense to receive category analysis.'],
      }
    }
    if (text.includes('reduce') || text.includes('cut') || text.includes('saving')) {
      const biggest = highest || ['expenses', 0]
      const suggested = budgets.find((budget) => budget.category === biggest[0])
      const weeklyLimit = suggested ? Math.floor(suggested.limit / 4) : Math.floor(expenses / 4)
      return {
        text: `Based on your recorded activity, review ${biggest[0]} first. A practical starting point is a weekly limit of Rs. ${weeklyLimit.toLocaleString()}.`,
        details: [
          `Current recorded income: Rs. ${income.toLocaleString()}.`,
          `Current recorded expenses: Rs. ${expenses.toLocaleString()}.`,
          `This suggestion is general guidance, not professional financial advice.`,
        ],
      }
    }
    if (text.includes('budget') || text.includes('budgeted')) {
      const remaining = budgetLimit - budgetUsed
      const over = budgets.filter((budget) => budget.spent > budget.limit)
      return {
        text: over.length
          ? `You are over budget in ${over.map((budget) => budget.category).join(' and ')}.`
          : `Your recorded budgets are not currently over their limits.`,
        details: [
          `Budget usage: Rs. ${budgetUsed.toLocaleString()} of Rs. ${budgetLimit.toLocaleString()}.`,
          `Remaining across budgets: Rs. ${Math.max(0, remaining).toLocaleString()}.`,
        ],
      }
    }
    if (text.includes('save') || text.includes('month')) {
      const goalText = goals.length
        ? goals.map((goal) => `${goal.name}: Rs. ${(goal.target - goal.saved).toLocaleString()} remaining`).join('; ')
        : 'No savings goals are currently recorded.'
      return {
        text: `Your recorded net cash remaining is Rs. ${net.toLocaleString()}.`,
        details: [
          `Income minus expenses: Rs. ${income.toLocaleString()} − Rs. ${expenses.toLocaleString()} = Rs. ${net.toLocaleString()}.`,
          goalText,
        ],
      }
    }
    if (text.includes('laptop') || text.includes('afford')) {
      const laptop = goals.find((goal) => goal.name.toLowerCase().includes('laptop'))
      if (!laptop) return { text: 'No laptop goal is currently recorded.', details: ['Create a savings goal to assess your remaining target.'] }
      const remaining = laptop.target - laptop.saved
      return {
        text: net >= 0
          ? `You have Rs. ${net.toLocaleString()} in recorded net cash, while your laptop goal has Rs. ${remaining.toLocaleString()} remaining.`
          : 'Recorded expenses currently exceed recorded income, so a new purchase should be reviewed carefully.',
        details: [
          `Laptop target: Rs. ${laptop.target.toLocaleString()}.`,
          `Already saved: Rs. ${laptop.saved.toLocaleString()}.`,
          'This is an affordability estimate, not a credit or investment recommendation.',
        ],
      }
    }
    if (text.includes('compare') || text.includes('last month')) {
      return {
        text: `Your recorded data shows Rs. ${net.toLocaleString()} remaining after recorded income and expenses.`,
        details: [
          `Income: Rs. ${income.toLocaleString()}.`,
          `Expenses: Rs. ${expenses.toLocaleString()}.`,
          'A longer history is not available in this demo workspace.',
        ],
      }
    }
    return {
      text: 'I can calculate this from your recorded demo transactions, budgets, and savings goals.',
      details: [
        `Current income: Rs. ${income.toLocaleString()}.`,
        `Current expenses: Rs. ${expenses.toLocaleString()}.`,
        'Try asking where most of your money went or whether you are following your budgets.',
      ],
    }
  }

  function sendQuestion(question) {
    const text = question.trim()
    if (!text || typing) return
    setMessages((items) => [...items, { role: 'user', text }])
    setDraft('')
    setTyping(true)
    window.setTimeout(() => {
      setMessages((items) => [...items, { role: 'assistant', ...answer(text) }])
      setTyping(false)
    }, 650)
  }

  function resetChat() {
    setMessages([{ role: 'assistant', text: 'Chat cleared. I’ll continue using the data currently stored in this demo workspace.' }])
  }

  const suggestions = [
    'Where did most of my money go?',
    'How can I reduce my expenses?',
    'How much should I save every month?',
    'Am I following my budget?',
    'Can I afford a new laptop?',
  ]

  return (
    <div className="workspace-page assistant-page">
      <div className="assistant-layout">
        <aside className="assistant-history">
          <div className="assistant-history-head"><div className="assistant-avatar"><Sparkles size={18}/></div><div><strong>MoneyWise AI</strong><small><i/> Demo mode</small></div></div>
          <button className="new-chat-button" onClick={resetChat}><RotateCcw size={15}/> Reset conversation</button>
          <div className="history-title">Recent</div>
          <button className="history-item active"><span>Financial overview</span><small>Today</small></button>
        </aside>
        <section className="chat-panel">
          <header className="chat-header"><div><span className="assistant-avatar small"><Sparkles size={16}/></span><div><strong>MoneyWise AI</strong><small>Verified calculations · Demo mode</small></div></div><span className="demo-chat-badge">Not connected to a live AI</span></header>
          <div className="chat-messages">
            {messages.map((message, index) => (
              <div className={`chat-message ${message.role}`} key={`${message.role}-${index}`}>
                {message.role === 'assistant' && <span className="message-avatar"><Sparkles size={15}/></span>}
                <div className="message-bubble">
                  <p>{message.text}</p>
                  {message.details && <div className="message-details">{message.details.map((detail) => <div key={detail}>{detail}</div>)}</div>}
                </div>
              </div>
            ))}
            {typing && <div className="chat-message assistant"><span className="message-avatar"><Sparkles size={15}/></span><div className="typing-bubble"><i/><i/><i/></div></div>}
          </div>
          <div className="chat-composer-wrap">
            <div className="suggestion-row">{suggestions.slice(0,4).map((item)=><button key={item} onClick={()=>sendQuestion(item)}>{item}</button>)}</div>
            <form className="chat-composer" onSubmit={(event)=>{event.preventDefault(); sendQuestion(draft)}}><input value={draft} onChange={(event)=>setDraft(event.target.value)} placeholder="Ask about your money…" aria-label="Message MoneyWise AI"/><button disabled={!draft.trim() || typing} aria-label="Send message"><Send size={17}/></button></form>
            <p className="chat-disclaimer">Demo assistant: answers use local sample data and verified calculations. No live AI service is connected.</p>
          </div>
        </section>
      </div>
    </div>
  )
}

function ComingSoonPage({ title }) {
  return <div className="workspace-page"><div className="coming-soon"><span><Sparkles size={22}/></span><h2>{title}</h2><p>This section is ready to continue in the next implementation phase.</p><Link className="button" to="/dashboard">Return to dashboard</Link></div></div>
}

function AnalyticsPage({ transactions, budgets }) {
  const monthData = [
    { month: 'Jun', income: 82000, expenses: 51000, savings: 31000 },
    { month: 'Jul', income: 86000, expenses: 56000, savings: 30000 },
    { month: 'Aug', income: 84000, expenses: 52000, savings: 32000 },
    { month: 'Sep', income: 94000, expenses: 61000, savings: 33000 },
    { month: 'Oct', income: 90000, expenses: 58000, savings: 32000 },
    { month: 'Nov', income: 122500, expenses: 35690, savings: 86810 },
  ]
  const categoryTotals = transactions
    .filter((tx) => tx.type === 'expense')
    .reduce((groups, tx) => {
      groups[tx.category] = (groups[tx.category] || 0) + Number(tx.amount)
      return groups
    }, {})
  const expenseData = Object.entries(categoryTotals).map(([name, value]) => ({ name, value }))
  const colors = ['#16a36a','#123b2a','#74b98f','#d6a64d','#c98d80','#98a89f']
  const income = transactions.filter((tx) => tx.type === 'income').reduce((sum, tx) => sum + Number(tx.amount), 0)
  const expenses = transactions.filter((tx) => tx.type === 'expense').reduce((sum, tx) => sum + Number(tx.amount), 0)

  function exportCsv() {
    const rows = [
      ['Name','Category','Date','Type','Currency','Amount','Note'],
      ...transactions.map((tx) => [tx.name,tx.category,tx.date,tx.type,tx.currency,tx.amount,tx.note || '']),
    ]
    const csv = rows.map((row) => row.map((value) => `"${String(value).replaceAll('"','""')}"`).join(',')).join('\n')
    const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }))
    const anchor = document.createElement('a')
    anchor.href = url
    anchor.download = 'moneywise-transactions.csv'
    anchor.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="workspace-page analytics-page">
      <div className="workspace-toolbar">
        <div><span className="demo-badge inline-badge">Demo report</span><p>November 2026 · PKR</p></div>
        <div className="report-actions"><button className="button button-secondary" onClick={exportCsv}><Download size={16}/> Export CSV</button><button className="button" onClick={() => window.print()}><Download size={16}/> Download PDF</button></div>
      </div>
      <section className="analytics-summary">
        <article><p>Income</p><strong>Rs. {income.toLocaleString()}</strong><span className="summary-positive">+8.2% vs last month</span></article>
        <article><p>Expenses</p><strong>Rs. {expenses.toLocaleString()}</strong><span className="summary-negative">+4.1% vs last month</span></article>
        <article><p>Net savings</p><strong>Rs. {(income-expenses).toLocaleString()}</strong><span className="summary-positive">70.8% savings rate</span></article>
        <article><p>Budget health</p><strong>{budgets.filter((b) => b.spent <= b.limit).length}/{budgets.length}</strong><span>Budgets on track</span></article>
      </section>
      <section className="analytics-grid">
        <article className="panel analytics-chart"><div className="panel-head"><div><h2>Income vs expenses</h2><p>Six-month financial trend</p></div></div><ResponsiveContainer width="100%" height={280}><BarChart data={monthData} margin={{top:18,right:8,left:-18,bottom:0}}><CartesianGrid stroke="#edf1ee" vertical={false}/><XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill:'#718078',fontSize:11}}/><YAxis axisLine={false} tickLine={false} tick={{fill:'#718078',fontSize:10}} tickFormatter={(value)=>`${value/1000}k`}/><Tooltip/><Legend iconType="circle"/><Bar dataKey="income" fill="#16a36a" radius={[5,5,0,0]} barSize={14}/><Bar dataKey="expenses" fill="#b7c2bc" radius={[5,5,0,0]} barSize={14}/></BarChart></ResponsiveContainer></article>
        <article className="panel analytics-chart"><div className="panel-head"><div><h2>Expense breakdown</h2><p>Spending by category</p></div></div><ResponsiveContainer width="100%" height={280}><RechartsPieChart><Pie data={expenseData} dataKey="value" nameKey="name" innerRadius={62} outerRadius={95} paddingAngle={3}>{expenseData.map((entry,index)=><Cell key={entry.name} fill={colors[index % colors.length]}/>)}</Pie><Tooltip/><Legend iconType="circle"/></RechartsPieChart></ResponsiveContainer></article>
      </section>
      <section className="analytics-grid lower-analytics">
        <article className="panel analytics-chart"><div className="panel-head"><div><h2>Savings growth</h2><p>Monthly net savings</p></div></div><ResponsiveContainer width="100%" height={220}><AreaChart data={monthData} margin={{top:12,right:8,left:-18,bottom:0}}><defs><linearGradient id="savingsGradient" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#16a36a" stopOpacity={0.22}/><stop offset="95%" stopColor="#16a36a" stopOpacity={0}/></linearGradient></defs><CartesianGrid stroke="#edf1ee" vertical={false}/><XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill:'#718078',fontSize:11}}/><YAxis hide/><Tooltip/><Area type="monotone" dataKey="savings" stroke="#16a36a" strokeWidth={3} fill="url(#savingsGradient)"/></AreaChart></ResponsiveContainer></article>
        <article className="panel highest-category"><div className="panel-head"><div><h2>Highest spending</h2><p>Current recorded activity</p></div></div>{expenseData.sort((a,b)=>b.value-a.value).slice(0,4).map((item,index)=><div className="category-ranking" key={item.name}><span>{index+1}</span><div><strong>{item.name}</strong><small>Rs. {item.value.toLocaleString()}</small></div><div className="ranking-bar"><i style={{width:`${Math.min(100, item.value / (expenseData[0]?.value || 1) * 100)}%`}}/></div></div>)}</article>
      </section>
    </div>
  )
}

const exchangeRates = [
  { code: 'PKR', name: 'Pakistani Rupee', rate: 1, symbol: 'Rs.' },
  { code: 'USD', name: 'US Dollar', rate: 278.42, symbol: '$' },
  { code: 'EUR', name: 'Euro', rate: 322.18, symbol: '€' },
  { code: 'GBP', name: 'British Pound', rate: 374.56, symbol: '£' },
  { code: 'AED', name: 'UAE Dirham', rate: 75.79, symbol: 'د.إ' },
  { code: 'SAR', name: 'Saudi Riyal', rate: 74.23, symbol: 'ر.س' },
  { code: 'INR', name: 'Indian Rupee', rate: 3.34, symbol: '₹' },
  { code: 'CAD', name: 'Canadian Dollar', rate: 201.36, symbol: 'C$' },
  { code: 'AUD', name: 'Australian Dollar', rate: 181.24, symbol: 'A$' },
]

function CurrencyPage() {
  const [preferred, setPreferred] = useState(() => localStorage.getItem('moneywise-preferred-currency') || 'PKR')
  const [amount, setAmount] = useState('100')
  const [from, setFrom] = useState('USD')
  const [to, setTo] = useState('PKR')

  function changePreferred(code) {
    setPreferred(code)
    localStorage.setItem('moneywise-preferred-currency', code)
  }

  const fromRate = exchangeRates.find((item) => item.code === from)?.rate || 1
  const toRate = exchangeRates.find((item) => item.code === to)?.rate || 1
  const converted = (Number(amount || 0) * fromRate) / toRate

  return (
    <div className="workspace-page currency-page">
      <div className="workspace-toolbar"><div><span className="demo-badge inline-badge">Demo exchange rates</span><p>Reference data only · Updated Nov 21, 2026</p></div></div>
      <section className="currency-grid">
        <article className="panel preferred-currency"><div className="panel-head"><div><h2>Reporting currency</h2><p>This setting is saved on this device.</p></div></div><label>Preferred currency<select value={preferred} onChange={(event)=>changePreferred(event.target.value)}>{exchangeRates.map((item)=><option key={item.code} value={item.code}>{item.code} — {item.name}</option>)}</select></label><div className="currency-preview"><span>{exchangeRates.find((item)=>item.code===preferred)?.symbol}</span><div><small>Reporting in</small><strong>{preferred}</strong></div></div></article>
        <article className="panel converter"><div className="panel-head"><div><h2>Currency converter</h2><p>Demo conversion · does not alter original transactions</p></div></div><div className="converter-fields"><label>Amount<input type="number" min="0" value={amount} onChange={(event)=>setAmount(event.target.value)} /></label><label>From<select value={from} onChange={(event)=>setFrom(event.target.value)}>{exchangeRates.map((item)=><option key={item.code}>{item.code}</option>)}</select></label><label>To<select value={to} onChange={(event)=>setTo(event.target.value)}>{exchangeRates.map((item)=><option key={item.code}>{item.code}</option>)}</select></label></div><div className="conversion-result"><small>Converted amount</small><strong>{exchangeRates.find((item)=>item.code===to)?.symbol} {converted.toLocaleString(undefined,{maximumFractionDigits:2})}</strong><p>{from} 1 = {to} {(fromRate/toRate).toFixed(4)}</p></div></article>
      </section>
      <section className="panel exchange-panel"><div className="panel-head"><div><h2>Available currencies</h2><p>Values are illustrative demo rates relative to PKR</p></div></div><div className="currency-table"><div className="currency-table-head"><span>Currency</span><span>Code</span><span>1 unit in PKR</span></div>{exchangeRates.slice(1).map((item)=><div className="currency-table-row" key={item.code}><div className="currency-name"><span>{item.symbol}</span><strong>{item.name}</strong></div><strong>{item.code}</strong><strong>{item.rate.toLocaleString()} PKR</strong></div>)}</div></section>
    </div>
  )
}

function NotificationsPage({ budgets }) {
  const [readIds, setReadIds] = useState(() => JSON.parse(localStorage.getItem('moneywise-read-notifications') || '[]'))
  const [preferences, setPreferences] = useState(() => {
    try { return JSON.parse(localStorage.getItem('moneywise-notification-preferences')) || { budget: true, savings: true, bills: true, weekly: true } }
    catch { return { budget: true, savings: true, bills: true, weekly: true } }
  })

  useEffect(() => localStorage.setItem('moneywise-notification-preferences', JSON.stringify(preferences)), [preferences])
  useEffect(() => localStorage.setItem('moneywise-read-notifications', JSON.stringify(readIds)), [readIds])

  const overBudget = budgets.filter((budget) => budget.spent >= budget.limit * 0.9)
  const notifications = [
    ...overBudget.map((budget) => ({
      id: `budget-${budget.id}`,
      tone: budget.spent > budget.limit ? 'warning' : 'info',
      title: budget.spent > budget.limit ? `${budget.category} budget exceeded` : `${budget.category} budget is nearly full`,
      text: `You have used Rs. ${budget.spent.toLocaleString()} of your Rs. ${budget.limit.toLocaleString()} limit.`,
      time: 'Today',
    })),
    { id: 'savings-1', tone: 'success', title: 'Emergency fund contribution', text: 'Your emergency fund remains on track at 60.8% of target.', time: 'Yesterday' },
    { id: 'bills-1', tone: 'info', title: 'Upcoming recurring payment', text: 'Apartment rent of Rs. 26,000 is scheduled for November 30.', time: 'Nov 19' },
    { id: 'weekly-1', tone: 'neutral', title: 'Weekly money summary', text: 'Review your spending trend and savings progress for the week.', time: 'Nov 17' },
  ]

  function togglePreference(key) {
    setPreferences((items) => ({ ...items, [key]: !items[key] }))
  }

  return (
    <div className="workspace-page notifications-page">
      <div className="workspace-toolbar"><div><span className="demo-badge inline-badge">Notification center</span><p>Stay informed about your financial activity.</p></div><button className="button button-secondary" onClick={() => setReadIds(notifications.map((item) => item.id))}>Mark all as read</button></div>
      <section className="notification-layout">
        <div className="notification-list">
          {notifications.map((item) => (
            <article className={readIds.includes(item.id) ? 'notification-card read' : 'notification-card'} key={item.id}>
              <div className={`notification-icon ${item.tone}`}><Bell size={17}/></div>
              <div className="notification-copy"><div><h3>{item.title}</h3><span>{item.time}</span></div><p>{item.text}</p></div>
              {!readIds.includes(item.id) && <button onClick={() => setReadIds((items) => [...items, item.id])} aria-label={`Mark ${item.title} as read`}><CheckCircle2 size={17}/></button>}
            </article>
          ))}
        </div>
        <aside className="notification-settings">
          <div className="panel-head"><div><h2>Preferences</h2><p>Choose what you want to receive</p></div></div>
          <PreferenceRow label="Budget warnings" detail="Limits and overspending" enabled={preferences.budget} onChange={() => togglePreference('budget')}/>
          <PreferenceRow label="Savings reminders" detail="Goal progress updates" enabled={preferences.savings} onChange={() => togglePreference('savings')}/>
          <PreferenceRow label="Recurring bills" detail="Upcoming payments" enabled={preferences.bills} onChange={() => togglePreference('bills')}/>
          <PreferenceRow label="Weekly summaries" detail="Every Sunday" enabled={preferences.weekly} onChange={() => togglePreference('weekly')}/>
        </aside>
      </section>
    </div>
  )
}

function PreferenceRow({ label, detail, enabled, onChange }) {
  return <div className="preference-row"><div><strong>{label}</strong><small>{detail}</small></div><button className={enabled?'toggle enabled':'toggle'} onClick={onChange} role="switch" aria-checked={enabled}><span/></button></div>
}

function SettingsPage({ transactions, budgets, goals }) {
  const userJson = localStorage.getItem('moneywise-demo-user')
  const storedUser = userJson ? JSON.parse(userJson) : null
  const user = storedUser?.name === 'Ali Hassan'
    ? { ...storedUser, name: 'Arslan', email: storedUser.email === 'ali@example.com' ? 'arslan@example.com' : storedUser.email }
    : storedUser || { name: 'Arslan', email: 'arslan@example.com' }
  const [theme, setTheme] = useState(() => localStorage.getItem('moneywise-theme') || 'Light')
  const [language, setLanguage] = useState(() => localStorage.getItem('moneywise-language') || 'English')
  const [saved, setSaved] = useState('')
  const [deleteOpen, setDeleteOpen] = useState(false)
  const navigate = useNavigate()

  function savePreferences(event) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    localStorage.setItem('moneywise-language', language)
    localStorage.setItem('moneywise-theme', theme)
    localStorage.setItem('moneywise-demo-user', JSON.stringify({ name: data.get('name'), email: data.get('email') }))
    setSaved('Profile preferences saved on this device.')
  }

  function exportData() {
    const payload = { exportedAt: new Date().toISOString(), transactions, budgets, goals }
    const url = URL.createObjectURL(new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' }))
    const anchor = document.createElement('a')
    anchor.href = url
    anchor.download = 'moneywise-data.json'
    anchor.click()
    URL.revokeObjectURL(url)
  }

  function deleteDemoAccount() {
    ['moneywise-demo-transactions','moneywise-demo-budgets','moneywise-demo-goals','moneywise-notification-preferences','moneywise-read-notifications','moneywise-preferred-currency','moneywise-demo-user','moneywise-auth'].forEach((key) => localStorage.removeItem(key))
    navigate('/')
  }

  return (
    <div className="workspace-page settings-page">
      {deleteOpen && <div className="modal-backdrop"><div className="modal"><div className="modal-head"><div><h2>Delete demo account?</h2><p>This removes all MoneyWise demo data stored in this browser.</p></div><button onClick={()=>setDeleteOpen(false)}><X size={20}/></button></div><div className="delete-warning"><ShieldCheck size={20}/><p>This action cannot be undone. No server account will be deleted because this build has no live backend.</p></div><div className="modal-actions"><button className="button button-secondary" onClick={()=>setDeleteOpen(false)}>Cancel</button><button className="button danger-button" onClick={deleteDemoAccount}>Delete demo data</button></div></div></div>}
      <div className="settings-layout">
        <aside className="settings-nav"><span>Account</span><button className="active">Profile</button><button>Security</button><button>Privacy</button></aside>
        <div className="settings-content">
          {saved && <div className="settings-success"><CheckCircle2 size={16}/>{saved}</div>}
          <section className="settings-card"><div className="settings-card-head"><div><h2>Personal profile</h2><p>Manage your demo account details</p></div><div className="profile-avatar large">{user.name?.[0] || 'A'}</div></div><form className="profile-form" onSubmit={savePreferences}><label>Full name<input name="name" defaultValue={user.name || ''} required /></label><label>Email address<input name="email" type="email" defaultValue={user.email || ''} required /></label><div className="form-grid"><label>Preferred language<select value={language} onChange={(event)=>setLanguage(event.target.value)}><option>English</option><option>Urdu</option></select></label><label>Theme<select value={theme} onChange={(event)=>setTheme(event.target.value)}><option>Light</option><option>Dark</option></select></label></div><button className="button">Save changes</button></form></section>
          <section className="settings-card"><div className="settings-card-head"><div><h2>Password & security</h2><p>Demo security controls</p></div><LockKeyhole size={20}/></div><form className="profile-form" onSubmit={(event)=>{event.preventDefault(); setSaved('Password validation completed. Live password updates require a backend.')}}><div className="form-grid"><label>New password<input type="password" minLength={8} placeholder="At least 8 characters" /></label><label>Confirm password<input type="password" minLength={8} placeholder="Repeat password" /></label></div><button type="submit" className="button button-secondary">Validate password</button></form></section>
          <section className="settings-card"><div className="settings-card-head"><div><h2>Data & privacy</h2><p>Control your information</p></div><ShieldCheck size={20}/></div><div className="privacy-actions"><button onClick={exportData}><Download size={17}/><div><strong>Export financial data</strong><small>Download JSON with your local demo records</small></div></button><button className="danger-action" onClick={()=>setDeleteOpen(true)}><Trash2 size={17}/><div><strong>Delete demo account</strong><small>Permanently clear data in this browser</small></div></button></div></section>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/signup" element={<Auth mode="signup" />} />
      <Route path="/login" element={<Auth mode="login" />} />
      <Route path="/onboarding" element={<Protected><Onboarding /></Protected>} />
      <Route path="/dashboard" element={<Protected><AppShell /></Protected>} />
      <Route path="/transactions" element={<Protected><AppShell /></Protected>} />
      <Route path="/budgets" element={<Protected><AppShell /></Protected>} />
      <Route path="/goals" element={<Protected><AppShell /></Protected>} />
      <Route path="/analytics" element={<Protected><AppShell /></Protected>} />
      <Route path="/currencies" element={<Protected><AppShell /></Protected>} />
      <Route path="/assistant" element={<Protected><AppShell /></Protected>} />
      <Route path="/notifications" element={<Protected><AppShell /></Protected>} />
      <Route path="/settings" element={<Protected><AppShell /></Protected>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
