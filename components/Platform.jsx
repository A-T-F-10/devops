'use client';
import { useState, useEffect, useCallback, useMemo } from 'react';
import { ROADMAP as CURRICULUM } from '@/data/curriculum';
import { LANGUAGES, translations } from '@/data/translations';
import { RESOURCES, CHALLENGES } from '@/data/resources';
import {
  HiHome, HiAcademicCap, HiMap, HiBookOpen, HiLightningBolt,
  HiSearch, HiMenu, HiX, HiChevronRight, HiChevronDown, HiChevronLeft,
  HiCheck, HiBookmark, HiStar, HiClipboardCopy, HiLockClosed,
  HiMail, HiUser, HiLogout, HiTerminal, HiCode,
  HiGlobe, HiChartBar, HiShieldCheck, HiClock, HiPlay,
  HiDocumentText, HiLightBulb, HiPencilAlt, HiExternalLink,
  HiCheckCircle, HiXCircle, HiArrowRight, HiSparkles, HiCloud,
  HiTrendingUp, HiEye, HiEyeOff
} from 'react-icons/hi';
import { FaDocker, FaGitAlt, FaLinux, FaAws, FaPython } from 'react-icons/fa';
import { SiKubernetes, SiTerraform, SiAnsible, SiPrometheus } from 'react-icons/si';

/* ═══════════════════════════════════════════
   STORAGE HELPERS
   ═══════════════════════════════════════════ */
const loadJSON = (key, fallback) => {
  if (typeof window === 'undefined') return fallback;
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
};
const saveJSON = (key, val) => {
  try { localStorage.setItem(key, JSON.stringify(val)); } catch {}
};

/* ═══════════════════════════════════════════
   MAIN PLATFORM COMPONENT — DevOpser
   ═══════════════════════════════════════════ */
export default function Platform() {
  /* ── Auth State ── */
  const [authPage, setAuthPage] = useState(null); // null = check, 'landing', 'login', 'signup', 'app'
  const [user, setUser] = useState(null);
  const [authError, setAuthError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  /* ── App State ── */
  const [page, setPage] = useState('home');
  const [phase, setPhase] = useState(0);
  const [day, setDay] = useState(0);
  const [tab, setTab] = useState(0);
  const [completed, setCompleted] = useState({});
  const [quizScores, setQuizScores] = useState({});
  const [lang, setLang] = useState('en');
  const [search, setSearch] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const [bookmarks, setBookmarks] = useState([]);
  const [notes, setNotes] = useState({});
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileSidebar, setMobileSidebar] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [expandedChallenge, setExpandedChallenge] = useState(null);
  const [challengeQuiz, setChallengeQuiz] = useState({ active: false, groupIdx: null, itemIdx: null, current: 0, selected: null, answered: false, score: 0 });
  const [challengeQuizScores, setChallengeQuizScores] = useState({});
  const [copiedCmd, setCopiedCmd] = useState(null);

  /* ── Init ── */
  useEffect(() => {
    const savedUser = loadJSON('devopser_user', null);
    if (savedUser) {
      setUser(savedUser);
      setAuthPage('app');
    } else {
      setAuthPage('landing');
    }
    setCompleted(loadJSON('devops_completed', {}));
    setQuizScores(loadJSON('devops_quizScores', {}));
    setLang(loadJSON('devops_lang', 'en'));
    setBookmarks(loadJSON('devops_bookmarks', []));
    setNotes(loadJSON('devops_notes', {}));
    setChallengeQuizScores(loadJSON('devops_challengeQuizScores', {}));
    setLoading(false);
  }, []);

  /* ── Auth Actions ── */
  const handleSignup = (name, email, password) => {
    setAuthError('');
    if (!name || !email || !password) { setAuthError('All fields are required'); return; }
    if (password.length < 6) { setAuthError('Password must be at least 6 characters'); return; }
    if (!email.includes('@')) { setAuthError('Please enter a valid email'); return; }
    const users = loadJSON('devopser_users', []);
    if (users.find(u => u.email === email)) { setAuthError('Account already exists with this email'); return; }
    const newUser = { id: Date.now(), name, email, password, joined: new Date().toISOString() };
    saveJSON('devopser_users', [...users, newUser]);
    const session = { id: newUser.id, name: newUser.name, email: newUser.email };
    setUser(session);
    saveJSON('devopser_user', session);
    setAuthPage('app');
  };
  const handleLogin = (email, password) => {
    setAuthError('');
    if (!email || !password) { setAuthError('All fields are required'); return; }
    const users = loadJSON('devopser_users', []);
    const found = users.find(u => u.email === email && u.password === password);
    if (!found) { setAuthError('Invalid email or password'); return; }
    const session = { id: found.id, name: found.name, email: found.email };
    setUser(session);
    saveJSON('devopser_user', session);
    setAuthPage('app');
  };
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('devopser_user');
    setAuthPage('landing');
    setPage('home');
  };

  /* ── Translation ── */
  const t = useCallback((key) => translations[lang]?.[key] || translations.en[key] || key, [lang]);
  const dir = LANGUAGES.find(l => l.code === lang)?.dir || 'ltr';

  /* ── Computed ── */
  const allLessons = useMemo(() => CURRICULUM.flatMap((p, pi) => p.days.flatMap((d, di) => d.lessons.map((l, li) => ({ ...l, pi, di, li })))), []);
  const totalLessons = allLessons.length;
  const completedCount = Object.keys(completed).length;
  const progress = totalLessons ? Math.round((completedCount / totalLessons) * 100) : 0;
  const totalQuizzes = allLessons.filter(l => l.quiz?.length).length;
  const quizzesTaken = Object.keys(quizScores).length;
  const avgScore = quizzesTaken ? Math.round(Object.values(quizScores).reduce((a, b) => a + b, 0) / quizzesTaken) : 0;
  const bookmarkCount = bookmarks.length;

  /* ── Actions ── */
  const markComplete = (key) => { const next = { ...completed, [key]: true }; setCompleted(next); saveJSON('devops_completed', next); };
  const saveQuizScore = (key, score) => { const next = { ...quizScores, [key]: score }; setQuizScores(next); saveJSON('devops_quizScores', next); };
  const changeLang = (code) => { setLang(code); saveJSON('devops_lang', code); setLangOpen(false); };
  const resetProgress = () => {
    if (!confirm(t('confirmReset') || 'Reset all progress?')) return;
    setCompleted({}); setQuizScores({}); setBookmarks([]); setNotes({}); setChallengeQuizScores({});
    ['devops_completed', 'devops_quizScores', 'devops_bookmarks', 'devops_notes', 'devops_challengeQuizScores'].forEach(k => localStorage.removeItem(k));
  };
  const toggleBookmark = (key) => { const next = bookmarks.includes(key) ? bookmarks.filter(b => b !== key) : [...bookmarks, key]; setBookmarks(next); saveJSON('devops_bookmarks', next); };
  const saveNote = (key, text) => { const next = { ...notes, [key]: text }; setNotes(next); saveJSON('devops_notes', next); };
  const goToLesson = (pi, di, li) => { setPhase(pi); setDay(di); setTab(li); setPage('learn'); setSearchOpen(false); setMobileMenu(false); };
  const copyCommand = (cmd, idx) => { navigator.clipboard?.writeText(cmd); setCopiedCmd(idx); setTimeout(() => setCopiedCmd(null), 2000); };

  /* ── Search ── */
  const searchResults = useMemo(() => {
    if (!search.trim()) return [];
    const q = search.toLowerCase();
    return allLessons.filter(l => l.title.toLowerCase().includes(q) || (l.content || '').toLowerCase().includes(q) || (l.commands || []).some(c => c.toLowerCase().includes(q))).slice(0, 12);
  }, [search, allLessons]);

  /* ── Loading ── */
  if (loading) return (
    <div className="fixed inset-0 bg-[#050510] flex items-center justify-center z-50">
      <div className="text-center">
        <div className="w-16 h-16 border-2 border-indigo-500/30 border-t-indigo-400 rounded-full animate-spin mb-6" />
        <p className="text-gray-500 text-sm tracking-widest uppercase">DevOpser</p>
      </div>
    </div>
  );

  /* ═══════════════════════════════════════════
     LOGO COMPONENT
     ═══════════════════════════════════════════ */
  const Logo = ({ size = 'md', showText = true, onClick }) => {
    const sizes = { sm: 'w-8 h-8 text-xs', md: 'w-10 h-10 text-sm', lg: 'w-14 h-14 text-xl' };
    return (
      <button onClick={onClick} className="flex items-center gap-3 group">
        <div className={`${sizes[size]} rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:shadow-indigo-400/50 transition-all duration-300 group-hover:scale-105`}>
          <HiTerminal className="text-white" />
        </div>
        {showText && (
          <div>
            <span className="font-black text-white tracking-tight text-lg">Dev<span className="gradient-text">Opser</span></span>
            {size !== 'sm' && <span className="text-[9px] text-gray-600 block -mt-1 tracking-wider uppercase">by Atif</span>}
          </div>
        )}
      </button>
    );
  };

  /* ═══════════════════════════════════════════
     LANDING PAGE
     ═══════════════════════════════════════════ */
  if (authPage === 'landing') return (
    <div className="min-h-screen relative">
      <div className="bg-orbs"><div className="orb orb-1" /><div className="orb orb-2" /><div className="orb orb-3" /></div>
      <div className="noise-overlay" />
      <div className="relative z-10">
        {/* Landing Navbar */}
        <nav className="nav-glass">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
            <Logo onClick={() => {}} />
            <div className="flex items-center gap-3">
              <button onClick={() => setAuthPage('login')} className="btn-secondary text-xs px-5 py-2.5">Log In</button>
              <button onClick={() => setAuthPage('signup')} className="btn-primary text-xs px-5 py-2.5"><span className="relative z-10">Get Started Free</span></button>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-24 text-center">
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-xs text-gray-500 mb-8">
              <HiSparkles className="text-indigo-400" />
              <span>100% Free • {totalLessons}+ Lessons • 12 Languages</span>
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-[1.08]">
              Master <span className="gradient-text">DevOps</span><br />
              <span className="text-gray-400">From Zero to Production</span>
            </h1>
            <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              DevOpser is the ultimate free platform to become a DevOps engineer. Interactive lessons, real-world challenges, quizzes, and a structured roadmap — everything you need to go from beginner to job-ready.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <button onClick={() => setAuthPage('signup')} className="btn-primary text-base px-10 py-4">
                <span className="relative z-10 flex items-center gap-2"><HiPlay className="text-lg" /> Start Learning — It&apos;s Free</span>
              </button>
              <button onClick={() => setAuthPage('login')} className="btn-secondary text-sm px-8 py-4 flex items-center gap-2">
                <HiUser /> I have an account
              </button>
            </div>

            {/* Tech Logos */}
            <div className="flex items-center justify-center gap-6 sm:gap-8 text-gray-700 mb-4">
              <FaLinux className="text-2xl sm:text-3xl hover:text-gray-400 transition-colors" title="Linux" />
              <FaGitAlt className="text-2xl sm:text-3xl hover:text-orange-400 transition-colors" title="Git" />
              <FaDocker className="text-2xl sm:text-3xl hover:text-blue-400 transition-colors" title="Docker" />
              <SiKubernetes className="text-2xl sm:text-3xl hover:text-blue-400 transition-colors" title="Kubernetes" />
              <FaAws className="text-2xl sm:text-3xl hover:text-amber-400 transition-colors" title="AWS" />
              <SiTerraform className="text-2xl sm:text-3xl hover:text-purple-400 transition-colors" title="Terraform" />
              <SiAnsible className="text-2xl sm:text-3xl hover:text-red-400 transition-colors" title="Ansible" />
              <SiPrometheus className="text-2xl sm:text-3xl hover:text-orange-400 transition-colors" title="Prometheus" />
              <FaPython className="text-2xl sm:text-3xl hover:text-yellow-400 transition-colors" title="Python" />
            </div>
            <p className="text-[10px] text-gray-700 tracking-wider uppercase">Technologies you&apos;ll master</p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-24">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">Why <span className="gradient-text">DevOpser</span>?</h2>
            <p className="text-gray-600 text-sm max-w-lg mx-auto">Everything you need to become a production-ready DevOps engineer, structured and organized.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: <HiAcademicCap className="text-2xl" />, title: '160+ Interactive Lessons', desc: 'Structured curriculum from Linux basics to advanced Kubernetes, with real commands and examples.', color: 'from-indigo-500/20 to-violet-500/20' },
              { icon: <HiMap className="text-2xl" />, title: '12-Phase Roadmap', desc: 'A clear learning path: Linux → Networking → Git → Docker → CI/CD → Cloud → IaC → K8s → Monitoring → Security.', color: 'from-emerald-500/20 to-teal-500/20' },
              { icon: <HiLightningBolt className="text-2xl" />, title: 'Hands-On Challenges', desc: 'Real-world projects with step-by-step guidance, explanations, hints, and graded quizzes.', color: 'from-amber-500/20 to-orange-500/20' },
              { icon: <HiShieldCheck className="text-2xl" />, title: 'Quizzes & Assessments', desc: 'Test your knowledge after every lesson. Track scores and retake quizzes to improve.', color: 'from-rose-500/20 to-pink-500/20' },
              { icon: <HiGlobe className="text-2xl" />, title: '12 Languages', desc: 'Learn in English, Arabic, Spanish, French, German, Portuguese, Chinese, Hindi, Turkish, Russian, Japanese, or Korean.', color: 'from-cyan-500/20 to-blue-500/20' },
              { icon: <HiTerminal className="text-2xl" />, title: 'Real CLI Commands', desc: 'Every lesson includes real terminal commands you can copy and practice on your own machine.', color: 'from-purple-500/20 to-fuchsia-500/20' },
            ].map((f, i) => (
              <div key={i} className="feature-card animate-slide-up" style={{ animationDelay: `${i * 80}ms` }}>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-4 text-white`}>{f.icon}</div>
                <h3 className="text-sm font-bold text-white mb-2">{f.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-24">
          <div className="glass rounded-3xl p-8 sm:p-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { value: '160+', label: 'Lessons', icon: <HiBookOpen className="text-lg text-indigo-400" /> },
                { value: '12', label: 'Phases', icon: <HiMap className="text-lg text-emerald-400" /> },
                { value: '25+', label: 'Challenges', icon: <HiLightningBolt className="text-lg text-amber-400" /> },
                { value: '12', label: 'Languages', icon: <HiGlobe className="text-lg text-cyan-400" /> },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="flex items-center justify-center mb-2">{s.icon}</div>
                  <p className="text-3xl sm:text-4xl font-black text-white mb-1">{s.value}</p>
                  <p className="text-xs text-gray-600">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-24 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Ready to start your <span className="gradient-text">DevOps journey</span>?</h2>
          <p className="text-gray-600 text-sm mb-8">Join thousands of learners mastering DevOps the right way. No credit card. No hidden fees. Just pure learning.</p>
          <button onClick={() => setAuthPage('signup')} className="btn-primary text-base px-10 py-4">
            <span className="relative z-10 flex items-center gap-2"><HiArrowRight /> Create Free Account</span>
          </button>
        </section>

        {/* Landing Footer */}
        <footer className="border-t border-white/[0.04] py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Logo size="sm" showText={true} onClick={() => {}} />
            <p className="text-[10px] text-gray-700">© {new Date().getFullYear()} DevOpser — Created with ♡ by <span className="text-indigo-400/60 font-medium">Atif</span></p>
          </div>
        </footer>
      </div>
    </div>
  );

  /* ═══════════════════════════════════════════
     AUTH PAGES (Login / Signup)
     ═══════════════════════════════════════════ */
  if (authPage === 'login' || authPage === 'signup') {
    const isLogin = authPage === 'login';
    return (
      <div className="min-h-screen relative flex items-center justify-center px-4">
        <div className="bg-orbs"><div className="orb orb-1" /><div className="orb orb-2" /><div className="orb orb-3" /></div>
        <div className="noise-overlay" />
        <div className="relative z-10 w-full max-w-md animate-slide-up">
          <div className="text-center mb-8">
            <Logo size="lg" onClick={() => setAuthPage('landing')} />
          </div>
          <div className="auth-card">
            <h2 className="text-2xl font-black text-white mb-1">{isLogin ? 'Welcome back' : 'Create your account'}</h2>
            <p className="text-sm text-gray-600 mb-8">{isLogin ? 'Sign in to continue learning' : 'Start your DevOps journey today'}</p>
            {authError && (
              <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 mb-4">
                <HiXCircle className="text-red-400 shrink-0" />
                <p className="text-xs text-red-400">{authError}</p>
              </div>
            )}
            <AuthForm isLogin={isLogin} onSubmit={isLogin ? handleLogin : handleSignup} showPassword={showPassword} setShowPassword={setShowPassword} />
            <div className="mt-6 text-center">
              <p className="text-xs text-gray-600">
                {isLogin ? "Don't have an account? " : 'Already have an account? '}
                <button onClick={() => { setAuthPage(isLogin ? 'signup' : 'login'); setAuthError(''); }} className="text-indigo-400 hover:text-indigo-300 font-medium">{isLogin ? 'Sign up' : 'Log in'}</button>
              </p>
            </div>
          </div>
          <button onClick={() => setAuthPage('landing')} className="mt-6 text-xs text-gray-700 hover:text-gray-500 transition-colors flex items-center gap-1 mx-auto">
            <HiChevronLeft className="text-sm" /> Back to home
          </button>
        </div>
      </div>
    );
  }

  /* ═══════════════════════════════════════════
     MAIN APP (after auth)
     ═══════════════════════════════════════════ */

  /* ── Navbar ── */
  const Navbar = () => {
    const navItems = [
      { key: 'home', label: t('home'), icon: <HiHome /> },
      { key: 'learn', label: t('learn'), icon: <HiAcademicCap /> },
      { key: 'roadmap', label: t('roadmap'), icon: <HiMap /> },
      { key: 'resources', label: t('resources'), icon: <HiBookOpen /> },
      { key: 'challenges', label: t('challenges'), icon: <HiLightningBolt /> },
    ];
    return (
      <nav className="nav-glass" dir={dir}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <button onClick={() => setPage('home')} className="flex items-center gap-2 group">
              <span className="text-lg font-black text-white tracking-tight">Dev<span className="gradient-text">Opser</span></span>
            </button>
            <div className="hidden md:flex items-center gap-1">
              {navItems.map(n => (
                <button key={n.key} onClick={() => { setPage(n.key); setMobileMenu(false); }}
                  className={`px-4 py-2 rounded-lg text-[13px] font-medium transition-all duration-200 flex items-center gap-1.5 ${page === n.key ? 'bg-white/[0.08] text-white' : 'text-gray-500 hover:text-gray-300 hover:bg-white/[0.03]'}`}>
                  <span className="text-base opacity-70">{n.icon}</span>{n.label}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => setSearchOpen(true)} className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-gray-500 hover:text-gray-300 hover:bg-white/[0.08] transition-all">
                <HiSearch className="text-sm" />
              </button>
              <div className="relative">
                <button onClick={() => setLangOpen(!langOpen)} className="h-9 px-3 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center gap-1.5 text-gray-500 hover:text-gray-300 hover:bg-white/[0.08] transition-all text-xs">
                  {LANGUAGES.find(l => l.code === lang)?.flag}
                </button>
                {langOpen && (
                  <div className="absolute right-0 mt-2 w-48 glass rounded-xl shadow-2xl py-1 animate-fade-in z-50 max-h-72 overflow-y-auto">
                    {LANGUAGES.map(l => (
                      <button key={l.code} onClick={() => changeLang(l.code)}
                        className={`w-full px-3 py-2 text-left text-xs flex items-center gap-2 hover:bg-white/[0.06] transition-colors ${lang === l.code ? 'text-indigo-300 bg-indigo-500/10' : 'text-gray-400'}`}>
                        <span>{l.flag}</span><span>{l.name}</span>{lang === l.code && <HiCheck className="ml-auto text-indigo-400" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <div className="hidden sm:flex items-center gap-2 h-9 px-3 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                <div className="w-20 h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
                </div>
                <span className="text-[11px] text-gray-500 font-medium">{progress}%</span>
              </div>
              {/* User menu */}
              <div className="relative group">
                <button className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/[0.08] flex items-center justify-center text-indigo-300 text-sm font-bold hover:border-indigo-500/30 transition-all">
                  {user?.name?.[0]?.toUpperCase() || 'U'}
                </button>
                <div className="absolute right-0 mt-2 w-52 glass rounded-xl shadow-2xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="px-4 py-2 border-b border-white/[0.06]">
                    <p className="text-xs font-bold text-white truncate">{user?.name}</p>
                    <p className="text-[10px] text-gray-600 truncate">{user?.email}</p>
                  </div>
                  <button onClick={handleLogout} className="w-full px-4 py-2.5 text-left text-xs text-gray-500 hover:text-red-400 hover:bg-white/[0.04] flex items-center gap-2 transition-colors">
                    <HiLogout /> Sign out
                  </button>
                </div>
              </div>
              <button onClick={() => setMobileMenu(!mobileMenu)} className="md:hidden w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-gray-500">
                {mobileMenu ? <HiX /> : <HiMenu />}
              </button>
            </div>
          </div>
          {mobileMenu && (
            <div className="md:hidden pb-4 animate-slide-up">
              {navItems.map(n => (
                <button key={n.key} onClick={() => { setPage(n.key); setMobileMenu(false); }}
                  className={`flex items-center gap-2 w-full text-left px-4 py-3 rounded-xl text-sm font-medium mb-1 transition-all ${page === n.key ? 'bg-white/[0.08] text-white' : 'text-gray-500 hover:text-gray-300'}`}>
                  <span className="text-base opacity-70">{n.icon}</span>{n.label}
                </button>
              ))}
              <button onClick={handleLogout} className="flex items-center gap-2 w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-red-400/60 hover:text-red-400">
                <HiLogout /> Sign out
              </button>
            </div>
          )}
        </div>
      </nav>
    );
  };

  /* ── Search Modal ── */
  const SearchModal = () => searchOpen && (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[12vh]" onClick={() => setSearchOpen(false)}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div className="relative w-full max-w-xl mx-4 animate-slide-up" onClick={e => e.stopPropagation()}>
        <div className="glass rounded-2xl shadow-2xl shadow-black/40 overflow-hidden">
          <div className="flex items-center px-5 border-b border-white/[0.06]">
            <HiSearch className="text-gray-500 shrink-0" />
            <input autoFocus value={search} onChange={e => setSearch(e.target.value)} placeholder={t('searchPlaceholder') || 'Search lessons...'} className="w-full px-4 py-4 bg-transparent text-white text-sm placeholder-gray-600 outline-none" />
            <kbd className="text-[10px] text-gray-600 border border-white/[0.08] px-1.5 py-0.5 rounded">ESC</kbd>
          </div>
          {searchResults.length > 0 && (
            <div className="max-h-72 overflow-y-auto p-2">
              {searchResults.map((r, i) => (
                <button key={i} onClick={() => goToLesson(r.pi, r.di, r.li)}
                  className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/[0.05] transition-colors group flex items-center gap-3">
                  <HiAcademicCap className="text-gray-600 shrink-0" />
                  <div>
                    <p className="text-sm text-gray-200 font-medium group-hover:text-white">{r.title}</p>
                    <p className="text-xs text-gray-600 mt-0.5">Phase {r.pi + 1} → Day {r.di + 1}</p>
                  </div>
                </button>
              ))}
            </div>
          )}
          {search && searchResults.length === 0 && (
            <div className="p-8 text-center text-gray-600 text-sm">{t('noResults') || 'No results found'}</div>
          )}
        </div>
      </div>
    </div>
  );

  /* ── Home Page ── */
  const HomePage = () => (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-12 animate-slide-up">
        <h1 className="text-2xl sm:text-3xl font-black text-white mb-2">
          Welcome back, <span className="gradient-text">{user?.name}</span> 👋
        </h1>
        <p className="text-gray-500 text-sm mb-6">{t('subtitle') || 'Track your progress and continue learning'}</p>
        <div className="flex items-center gap-3">
          <button onClick={() => setPage('learn')} className="btn-primary text-sm px-6 py-3">
            <span className="relative z-10 flex items-center gap-2"><HiPlay /> {completedCount > 0 ? 'Continue Learning' : t('startLearning') || 'Start Learning'}</span>
          </button>
          <button onClick={() => setPage('roadmap')} className="btn-secondary text-sm px-6 py-3 flex items-center gap-2"><HiMap /> {t('viewRoadmap') || 'View Roadmap'}</button>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-16">
        {[
          { label: t('progress') || 'Progress', value: `${progress}%`, icon: <HiChartBar className="text-lg text-indigo-400" />, color: 'from-indigo-500/20 to-violet-500/20' },
          { label: t('completed') || 'Completed', value: `${completedCount}/${totalLessons}`, icon: <HiCheckCircle className="text-lg text-emerald-400" />, color: 'from-emerald-500/20 to-teal-500/20' },
          { label: t('quizScore') || 'Avg Quiz', value: `${avgScore}%`, icon: <HiShieldCheck className="text-lg text-amber-400" />, color: 'from-amber-500/20 to-orange-500/20' },
          { label: t('bookmarks') || 'Bookmarks', value: bookmarkCount, icon: <HiBookmark className="text-lg text-pink-400" />, color: 'from-pink-500/20 to-rose-500/20' },
        ].map((s, i) => (
          <div key={i} className="glass p-5 text-center glass-hover animate-slide-up" style={{ animationDelay: `${i * 80}ms` }}>
            <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mx-auto mb-3`}>{s.icon}</div>
            <p className="text-xl sm:text-2xl font-black text-white mb-1">{s.value}</p>
            <p className="text-xs text-gray-600">{s.label}</p>
          </div>
        ))}
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2"><HiMap className="text-indigo-400" /> {t('phases') || 'Phases'}</h2>
        <div className="space-y-2">
          {CURRICULUM.map((p, i) => {
            const pLessons = p.days.flatMap(d => d.lessons);
            return (
              <button key={i} onClick={() => { setPhase(i); setDay(0); setTab(0); setPage('learn'); }}
                className="glass p-4 flex items-center gap-4 w-full glass-hover group animate-slide-up" style={{ animationDelay: `${i * 40}ms` }}>
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${p.color || 'from-indigo-500/20 to-violet-500/20'} flex items-center justify-center text-lg shrink-0`}>{p.icon}</div>
                <div className="flex-1 text-left min-w-0">
                  <p className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors truncate">{p.title}</p>
                  <p className="text-xs text-gray-600 mt-0.5">{p.days.length} days • {pLessons.length} lessons</p>
                </div>
                <HiChevronRight className="text-gray-700 group-hover:text-gray-500 transition-colors shrink-0" />
              </button>
            );
          })}
        </div>
      </div>
      <div className="text-center">
        <button onClick={resetProgress} className="text-xs text-gray-700 hover:text-red-400 transition-colors">{t('resetProgress') || 'Reset All Progress'}</button>
      </div>
    </div>
  );

  /* ── Learn Page ── */
  const LearnPage = () => {
    const currentPhase = CURRICULUM[phase];
    const currentDay = currentPhase?.days[day];
    const lessons = currentDay?.lessons || [];
    const lesson = lessons[tab];
    const lessonKey = `${phase}-${day}-${tab}`;
    const isDone = completed[lessonKey];
    const isBookmarked = bookmarks.includes(lessonKey);
    const [quizActive, setQuizActive] = useState(false);
    const [qIdx, setQIdx] = useState(0);
    const [selected, setSelected] = useState(null);
    const [answered, setAnswered] = useState(false);
    const [score, setScore] = useState(0);
    const quiz = currentDay?.quiz || [];
    const dayKey = `${phase}-${day}`;

    const handleQuizAnswer = (idx) => { if (answered) return; setSelected(idx); setAnswered(true); if (idx === quiz[qIdx].a) setScore(s => s + 1); };
    const nextQuestion = () => {
      if (qIdx + 1 < quiz.length) { setQIdx(qIdx + 1); setSelected(null); setAnswered(false); }
      else { const pct = Math.round(((score + (selected === quiz[qIdx].a ? 1 : 0)) / quiz.length) * 100); saveQuizScore(dayKey, pct); setQuizActive(false); setQIdx(0); setSelected(null); setAnswered(false); setScore(0); }
    };

    if (!lesson) return <div className="p-12 text-center text-gray-600">{t('selectLesson') || 'Select a lesson'}</div>;

    return (
      <div className="flex h-[calc(100vh-4rem)]">
        <button onClick={() => setMobileSidebar(!mobileSidebar)} className="md:hidden fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full bg-indigo-500 shadow-xl shadow-indigo-500/30 flex items-center justify-center text-white"><HiMenu className="text-lg" /></button>
        {/* Sidebar */}
        <aside className={`${mobileSidebar ? 'fixed inset-y-0 left-0 z-40 w-72' : 'hidden'} md:block md:relative md:w-72 bg-black/40 backdrop-blur-2xl border-r border-white/[0.05] overflow-y-auto shrink-0`}>
          <div className="p-4"><h3 className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-3 flex items-center gap-1.5"><HiBookOpen className="text-indigo-400" /> Curriculum</h3></div>
          {CURRICULUM.map((p, pi) => (
            <div key={pi}>
              <button onClick={() => { setPhase(pi); setDay(0); setTab(0); }}
                className={`w-full text-left px-4 py-2.5 text-xs font-bold transition-colors flex items-center gap-1.5 ${phase === pi ? 'text-indigo-300 bg-indigo-500/[0.08]' : 'text-gray-600 hover:text-gray-400 hover:bg-white/[0.03]'}`}>
                <span>{p.icon}</span><span className="truncate">{p.title}</span>
              </button>
              {phase === pi && p.days.map((d, di) => (
                <div key={di}>
                  <button onClick={() => { setDay(di); setTab(0); }} className={`sidebar-btn ${day === di ? 'sidebar-btn-active' : 'text-gray-600 hover:text-gray-400'}`}>{d.title}</button>
                  {day === di && d.lessons.map((l, li) => (
                    <button key={li} onClick={() => setTab(li)}
                      className={`flex items-center gap-1.5 w-full text-left px-4 py-1.5 pl-10 text-[12px] transition-colors ${tab === li ? 'text-indigo-300' : 'text-gray-700 hover:text-gray-500'}`}>
                      {completed[`${pi}-${di}-${li}`] ? <HiCheckCircle className="text-emerald-500 shrink-0" /> : <span className="w-3 h-3 rounded-full border border-gray-700 shrink-0" />}
                      <span className="truncate">{l.title}</span>
                    </button>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </aside>
        {mobileSidebar && <div className="sidebar-overlay md:hidden" onClick={() => setMobileSidebar(false)} />}

        {/* Lesson Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-8">
          <div className="max-w-3xl mx-auto animate-fade-in">
            {/* Day Title + Lesson Count */}
            <div className="mb-5">
              <div className="inline-block px-3 py-1 rounded-lg text-[10px] font-bold tracking-wider uppercase mb-2" style={{ color: currentPhase.color, background: `${currentPhase.color}18` }}>{currentPhase.phase}</div>
              <h1 className="text-2xl sm:text-3xl font-black text-white">Day {currentDay.day}: {currentDay.title}</h1>
              <p className="text-xs text-gray-600 mt-1">Lesson {tab + 1} of {lessons.length}</p>
            </div>

            {/* Lesson Tabs */}
            <div className="flex gap-1.5 mb-6 overflow-x-auto pb-2 scrollbar-none">
              {lessons.map((l, i) => (
                <button key={i} onClick={() => setTab(i)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 ${i === tab ? 'bg-indigo-500/15 text-indigo-300 border border-indigo-500/30' : completed[`${phase}-${day}-${i}`] ? 'bg-emerald-500/8 text-emerald-400/80 border border-emerald-500/15' : 'bg-white/[0.03] text-gray-600 border border-white/[0.05] hover:text-gray-400 hover:bg-white/[0.06]'}`}>
                  {completed[`${phase}-${day}-${i}`] && <HiCheckCircle className="text-emerald-500 text-[11px]" />}
                  {l.title}
                </button>
              ))}
            </div>

            {/* Lesson Card */}
            <div className="lesson-card mb-6">
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div>
                  <h2 className="text-xl font-bold text-white mb-1.5">{lesson.title}</h2>
                  <p className="text-gray-400 text-sm leading-relaxed">{lesson.desc}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button onClick={() => toggleBookmark(lessonKey)}
                    className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-all ${isBookmarked ? 'bg-amber-500/10 border-amber-500/30 text-amber-400' : 'bg-white/[0.03] border-white/[0.06] text-gray-600 hover:text-gray-400'}`}>
                    {isBookmarked ? <HiStar /> : <HiBookmark />}
                  </button>
                  {!isDone ? (
                    <button onClick={() => markComplete(lessonKey)} className="btn-success text-xs px-4 py-2"><span className="relative z-10 flex items-center gap-1"><HiCheck /> {t('markComplete') || 'Complete'}</span></button>
                  ) : (
                    <span className="px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold flex items-center gap-1"><HiCheckCircle /> Done</span>
                  )}
                </div>
              </div>
            </div>

            {/* Terminal Commands */}
            {lesson.commands?.length > 0 && (
              <div className="terminal-window mb-6">
                <div className="terminal-header">
                  <div className="terminal-dot bg-red-500/80" />
                  <div className="terminal-dot bg-yellow-500/80" />
                  <div className="terminal-dot bg-green-500/80" />
                  <span className="ml-3 text-[10px] text-gray-500 font-mono flex items-center gap-1.5"><HiTerminal className="text-xs" /> terminal</span>
                  <span className="ml-auto text-[9px] text-gray-700">{lesson.commands.length} command{lesson.commands.length > 1 ? 's' : ''}</span>
                </div>
                <div className="p-4 space-y-0">
                  {lesson.commands.map((cmd, i) => {
                    const parts = cmd.split('→');
                    const command = parts[0]?.trim();
                    const desc = parts[1]?.trim();
                    return (
                      <div key={i} className="cmd-block">
                        <span className="text-emerald-400 text-xs font-mono mt-0.5 shrink-0 select-none">$</span>
                        <code className="text-[13px] font-mono flex-1 leading-[2]">
                          <span className="text-sky-300 font-semibold">{command}</span>
                          {desc && <span className="text-gray-600"> → {desc}</span>}
                        </code>
                        <button onClick={() => copyCommand(command, `${lessonKey}-${i}`)} className="cmd-copy" title="Copy command">
                          {copiedCmd === `${lessonKey}-${i}` ? <HiCheck className="text-emerald-400 text-xs" /> : <HiClipboardCopy className="text-xs" />}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Pro Tip */}
            {lesson.tip && (
              <div className="glass-sm p-5 mb-6 border-l-2 border-amber-500/40">
                <p className="text-xs font-bold text-amber-400 mb-1.5 flex items-center gap-1.5"><HiLightBulb /> Pro Tip</p>
                <p className="text-sm text-gray-400 leading-relaxed">{lesson.tip}</p>
              </div>
            )}

            {/* Notes */}
            <div className="glass-sm p-5 mb-6">
              <p className="text-xs font-bold text-gray-500 mb-2 flex items-center gap-1.5"><HiPencilAlt className="text-indigo-400" /> Your Notes</p>
              <textarea value={notes[lessonKey] || ''} onChange={e => saveNote(lessonKey, e.target.value)}
                placeholder="Write your notes here..." rows={3}
                className="w-full bg-white/[0.02] border border-white/[0.06] rounded-xl p-3 text-sm text-gray-300 placeholder-gray-700 outline-none focus:border-indigo-500/30 focus:bg-white/[0.04] resize-none transition-all" />
            </div>

            {/* Quiz — Day Level */}
            {quiz.length > 0 && !quizActive && (
              <div className="glass p-6 text-center mb-6">
                <HiShieldCheck className="text-3xl text-indigo-400 mx-auto mb-3" />
                <p className="text-sm font-bold text-white mb-1">Day {currentDay.day} Quiz</p>
                <p className="text-xs text-gray-600 mb-4">{quiz.length} questions to test your understanding</p>
                <button onClick={() => { setQuizActive(true); setQIdx(0); setSelected(null); setAnswered(false); setScore(0); }} className="btn-primary text-xs px-6 py-2.5">
                  <span className="relative z-10">{quizScores[dayKey] !== undefined ? `Retake (Last: ${quizScores[dayKey]}%)` : 'Start Quiz'}</span>
                </button>
              </div>
            )}

            {quizActive && quiz[qIdx] && (
              <div className="glass p-6 sm:p-8 animate-slide-up">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2"><HiShieldCheck className="text-indigo-400" /> Quiz — {qIdx + 1}/{quiz.length}</h3>
                  <div className="w-24 h-1.5 bg-white/[0.06] rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all" style={{ width: `${((qIdx + 1) / quiz.length) * 100}%` }} /></div>
                </div>
                <p className="text-gray-200 font-medium mb-5">{quiz[qIdx].q}</p>
                {quiz[qIdx].opts.map((opt, oi) => {
                  let cls = 'quiz-option';
                  if (answered) { if (oi === quiz[qIdx].a) cls += ' quiz-option-correct'; else if (oi === selected) cls += ' quiz-option-wrong'; }
                  else if (oi === selected) cls += ' quiz-option-selected';
                  return <button key={oi} onClick={() => handleQuizAnswer(oi)} className={cls}><span className="flex items-center gap-2">{answered && oi === quiz[qIdx].a && <HiCheckCircle className="text-emerald-400" />}{answered && oi === selected && oi !== quiz[qIdx].a && <HiXCircle className="text-red-400" />}{opt}</span></button>;
                })}
                {answered && (
                  <div className="mt-5 flex items-center justify-between">
                    <p className={`text-xs font-medium ${selected === quiz[qIdx].a ? 'text-emerald-400' : 'text-red-400'}`}>
                      {selected === quiz[qIdx].a ? '✓ Correct!' : `✗ Answer: ${quiz[qIdx].opts[quiz[qIdx].a]}`}
                    </p>
                    <button onClick={nextQuestion} className="btn-primary text-xs px-5 py-2.5"><span className="relative z-10">{qIdx + 1 < quiz.length ? 'Next →' : 'Finish'}</span></button>
                  </div>
                )}
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-white/[0.05]">
              <button onClick={() => { if (tab > 0) setTab(tab - 1); else if (day > 0) { setDay(day - 1); setTab(CURRICULUM[phase].days[day - 1].lessons.length - 1); } else if (phase > 0) { setPhase(phase - 1); const pp = CURRICULUM[phase - 1]; setDay(pp.days.length - 1); setTab(pp.days[pp.days.length - 1].lessons.length - 1); } }}
                disabled={phase === 0 && day === 0 && tab === 0} className="btn-secondary text-xs px-4 py-2 disabled:opacity-20 flex items-center gap-1"><HiChevronLeft /> Previous</button>
              <button onClick={() => { if (tab < lessons.length - 1) setTab(tab + 1); else if (day < currentPhase.days.length - 1) { setDay(day + 1); setTab(0); } else if (phase < CURRICULUM.length - 1) { setPhase(phase + 1); setDay(0); setTab(0); } }}
                disabled={phase === CURRICULUM.length - 1 && day === currentPhase.days.length - 1 && tab === lessons.length - 1} className="btn-primary text-xs px-4 py-2 disabled:opacity-20">
                <span className="relative z-10 flex items-center gap-1">Next <HiChevronRight /></span>
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  };

  /* ── Roadmap Page ── */
  const RoadmapPage = () => (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <div className="text-center mb-12 animate-slide-up">
        <h1 className="text-3xl sm:text-4xl font-black text-white mb-2 flex items-center justify-center gap-3"><HiMap className="text-indigo-400" /> {t('roadmap') || 'Roadmap'}</h1>
        <p className="text-gray-600 text-sm">Your complete DevOps learning journey</p>
        <div className="hero-line w-32 mx-auto mt-4" />
      </div>
      <div className="relative">
        <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/40 via-purple-500/20 to-transparent" />
        {CURRICULUM.map((p, i) => {
          const pLessons = p.days.flatMap(d => d.lessons);
          const done = pLessons.filter((_, li) => completed[`${i}-0-${li}`]).length;
          const pct = pLessons.length ? Math.round((done / pLessons.length) * 100) : 0;
          return (
            <div key={i} className="relative pl-16 sm:pl-20 pb-10 animate-slide-up" style={{ animationDelay: `${i * 60}ms` }}>
              <div className={`absolute left-4 sm:left-6 w-5 h-5 rounded-full border-2 ${pct === 100 ? 'bg-emerald-500 border-emerald-400' : pct > 0 ? 'bg-indigo-500 border-indigo-400' : 'bg-gray-800 border-gray-700'} shadow-lg flex items-center justify-center`}>
                {pct === 100 && <HiCheck className="text-[8px] text-white" />}
              </div>
              <div className="glass p-5 glass-hover cursor-pointer" onClick={() => { setPhase(i); setDay(0); setTab(0); setPage('learn'); }}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-lg">{p.icon}</span>
                  <div><p className="text-[10px] text-gray-600 uppercase tracking-wider">Phase {i + 1}</p><h3 className="text-sm font-bold text-white">{p.title}</h3></div>
                  {pct > 0 && <span className={`ml-auto text-[10px] px-2.5 py-1 rounded-full font-bold ${pct === 100 ? 'bg-emerald-500/10 text-emerald-400' : 'bg-indigo-500/10 text-indigo-400'}`}>{pct}%</span>}
                </div>
                <p className="text-xs text-gray-600">{p.days.length} days • {pLessons.length} lessons</p>
                {pct > 0 && <div className="mt-3 h-1 bg-white/[0.06] rounded-full overflow-hidden"><div className={`h-full rounded-full transition-all ${pct === 100 ? 'bg-emerald-500' : 'bg-gradient-to-r from-indigo-500 to-purple-500'}`} style={{ width: `${pct}%` }} /></div>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  /* ── Resources Page ── */
  const ResourcesPage = () => (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="text-center mb-12 animate-slide-up">
        <h1 className="text-3xl sm:text-4xl font-black text-white mb-2 flex items-center justify-center gap-3"><HiBookOpen className="text-indigo-400" /> {t('resources') || 'Resources'}</h1>
        <p className="text-gray-600 text-sm">Curated tools, courses, and communities</p>
        <div className="hero-line w-32 mx-auto mt-4" />
      </div>
      {RESOURCES.map((cat, ci) => (
        <div key={ci} className="mb-10 animate-slide-up" style={{ animationDelay: `${ci * 80}ms` }}>
          <h2 className="text-lg font-bold text-white mb-4">{cat.cat}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {cat.items.map((item, ii) => (
              <a key={ii} href={item.url} target="_blank" rel="noopener noreferrer" className="glass p-5 glass-hover group">
                <p className="text-sm font-bold text-white mb-1.5 group-hover:text-indigo-300 transition-colors">{item.name}</p>
                <p className="text-xs text-gray-600 leading-relaxed mb-3">{item.desc}</p>
                <div className="flex items-center gap-1.5 text-indigo-400/60 text-[10px] font-medium"><HiExternalLink /> Visit</div>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  /* ── Challenges Page ── */
  const ChallengesPage = () => {
    const cq = challengeQuiz;
    const handleCQAnswer = (oi) => { if (cq.answered) return; setChallengeQuiz(prev => ({ ...prev, selected: oi, answered: true, score: oi === CHALLENGES[prev.groupIdx].items[prev.itemIdx].quiz[prev.current].a ? prev.score + 1 : prev.score })); };
    const nextCQ = () => {
      const item = CHALLENGES[cq.groupIdx].items[cq.itemIdx];
      if (cq.current + 1 < item.quiz.length) { setChallengeQuiz(prev => ({ ...prev, current: prev.current + 1, selected: null, answered: false })); }
      else { const fs = cq.score + (cq.selected === item.quiz[cq.current].a ? 1 : 0); const pct = Math.round((fs / item.quiz.length) * 100); const k = `${cq.groupIdx}-${cq.itemIdx}`; const n = { ...challengeQuizScores, [k]: pct }; setChallengeQuizScores(n); saveJSON('devops_challengeQuizScores', n); setChallengeQuiz({ active: false, groupIdx: null, itemIdx: null, current: 0, selected: null, answered: false, score: 0 }); }
    };
    const startCQ = (gi, ii) => setChallengeQuiz({ active: true, groupIdx: gi, itemIdx: ii, current: 0, selected: null, answered: false, score: 0 });
    const diffColor = (d) => d === 'Beginner' ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' : d === 'Intermediate' ? 'text-amber-400 bg-amber-500/10 border-amber-500/20' : 'text-red-400 bg-red-500/10 border-red-500/20';

    if (cq.active && CHALLENGES[cq.groupIdx]?.items[cq.itemIdx]?.quiz?.[cq.current]) {
      const item = CHALLENGES[cq.groupIdx].items[cq.itemIdx]; const q = item.quiz[cq.current];
      return (
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12 animate-fade-in">
          <div className="glass p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <div><p className="text-xs text-gray-600 mb-1">{item.title}</p><h2 className="text-lg font-bold text-white flex items-center gap-2"><HiShieldCheck className="text-indigo-400" /> Challenge Quiz</h2></div>
              <div className="flex items-center gap-3"><span className="text-xs text-gray-500">{cq.current + 1}/{item.quiz.length}</span><button onClick={() => setChallengeQuiz({ active: false, groupIdx: null, itemIdx: null, current: 0, selected: null, answered: false, score: 0 })} className="text-gray-600 hover:text-gray-400"><HiX /></button></div>
            </div>
            <div className="mb-5 h-1 bg-white/[0.06] rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all" style={{ width: `${((cq.current + 1) / item.quiz.length) * 100}%` }} /></div>
            <p className="text-gray-200 font-medium mb-5">{q.q}</p>
            {q.opts.map((opt, oi) => {
              let cls = 'quiz-option'; if (cq.answered) { if (oi === q.a) cls += ' quiz-option-correct'; else if (oi === cq.selected) cls += ' quiz-option-wrong'; } else if (oi === cq.selected) cls += ' quiz-option-selected';
              return <button key={oi} onClick={() => handleCQAnswer(oi)} className={cls}><span className="flex items-center gap-2">{cq.answered && oi === q.a && <HiCheckCircle className="text-emerald-400" />}{cq.answered && oi === cq.selected && oi !== q.a && <HiXCircle className="text-red-400" />}{opt}</span></button>;
            })}
            {cq.answered && <div className="mt-5 flex items-center justify-between"><p className={`text-xs font-medium ${cq.selected === q.a ? 'text-emerald-400' : 'text-red-400'}`}>{cq.selected === q.a ? '✓ Correct!' : `✗ Answer: ${q.opts[q.a]}`}</p><button onClick={nextCQ} className="btn-primary text-xs px-5 py-2.5"><span className="relative z-10">{cq.current + 1 < item.quiz.length ? 'Next →' : 'Finish'}</span></button></div>}
          </div>
        </div>
      );
    }

    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-2 flex items-center justify-center gap-3"><HiLightningBolt className="text-indigo-400" /> {t('challenges') || 'Challenges'}</h1>
          <p className="text-gray-600 text-sm">Hands-on challenges with explanations and quizzes</p>
          <div className="hero-line w-32 mx-auto mt-4" />
        </div>
        {CHALLENGES.map((group, gi) => (
          <div key={gi} className="mb-10 animate-slide-up" style={{ animationDelay: `${gi * 60}ms` }}>
            <div className="flex items-center gap-3 mb-4"><h2 className="text-lg font-bold text-white">{group.group}</h2><span className="text-xs text-gray-600 bg-white/[0.04] px-2 py-0.5 rounded-full">{group.items.length}</span></div>
            <div className="space-y-3">
              {group.items.map((item, ii) => {
                const isExp = expandedChallenge === `${gi}-${ii}`; const qk = `${gi}-${ii}`; const qs = challengeQuizScores[qk];
                return (
                  <div key={ii} className="challenge-card">
                    <button onClick={() => setExpandedChallenge(isExp ? null : `${gi}-${ii}`)} className="w-full text-left p-5 flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${group.color} flex items-center justify-center text-white text-sm font-bold shrink-0 opacity-80`}>{ii + 1}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                          <h3 className="text-sm font-bold text-white">{item.title}</h3>
                          <span className={`text-[10px] px-2 py-0.5 rounded-full border font-medium ${diffColor(item.difficulty)}`}>{item.difficulty}</span>
                          <span className="text-[10px] text-gray-600 flex items-center gap-0.5"><HiClock /> {item.time}</span>
                          {qs !== undefined && <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${qs >= 70 ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400'}`}>Quiz: {qs}%</span>}
                        </div>
                        <p className="text-xs text-gray-600 line-clamp-1">{item.description}</p>
                      </div>
                      <HiChevronDown className={`text-gray-600 shrink-0 transition-transform duration-200 ${isExp ? 'rotate-180' : ''}`} />
                    </button>
                    {isExp && (
                      <div className="px-5 pb-5 animate-fade-in">
                        <div className="border-t border-white/[0.05] pt-5">
                          <div className="glass-sm p-5 mb-4 border-l-2 border-indigo-500/30"><p className="text-xs font-bold text-indigo-400 mb-1.5 flex items-center gap-1.5"><HiDocumentText /> Explanation</p><p className="text-sm text-gray-400 leading-relaxed">{item.explanation}</p></div>
                          <div className="mb-4"><p className="text-xs font-bold text-gray-500 mb-3 flex items-center gap-1.5"><HiCode /> Steps</p>
                            <div className="space-y-2">{item.steps.map((step, si) => (<div key={si} className="flex gap-3 items-start"><span className="w-5 h-5 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[10px] text-gray-600 shrink-0 mt-0.5">{si + 1}</span><p className="text-sm text-gray-400 leading-relaxed">{step}</p></div>))}</div>
                          </div>
                          {item.hints?.length > 0 && (<div className="glass-sm p-4 mb-4 border-l-2 border-amber-500/30"><p className="text-xs font-bold text-amber-400 mb-2 flex items-center gap-1.5"><HiLightBulb /> Hints</p><ul className="space-y-1">{item.hints.map((h, hi) => (<li key={hi} className="text-xs text-gray-500 flex items-start gap-2"><span className="text-amber-500/60 mt-0.5">•</span>{h}</li>))}</ul></div>)}
                          {item.expectedOutput && (<div className="glass-sm p-4 mb-4 border-l-2 border-emerald-500/30"><p className="text-xs font-bold text-emerald-400 mb-1.5 flex items-center gap-1.5"><HiCheckCircle /> Expected Output</p><p className="text-xs text-gray-500 leading-relaxed">{item.expectedOutput}</p></div>)}
                          {item.quiz?.length > 0 && (<div className="pt-2"><button onClick={() => startCQ(gi, ii)} className="btn-primary text-xs px-5 py-2.5"><span className="relative z-10 flex items-center gap-1.5"><HiShieldCheck /> {qs !== undefined ? `Retake (Last: ${qs}%)` : `Take Quiz (${item.quiz.length}q)`}</span></button></div>)}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    );
  };

  /* ── Footer ── */
  const Footer = () => (
    <footer className="border-t border-white/[0.04] py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <Logo size="sm" showText={false} onClick={() => setPage('home')} />
          <div className="flex items-center gap-6 text-xs text-gray-600">
            <span className="flex items-center gap-1"><HiBookOpen className="text-indigo-400/60" /> {totalLessons} lessons</span>
            <span>•</span>
            <span className="flex items-center gap-1"><HiMap className="text-indigo-400/60" /> {CURRICULUM.length} phases</span>
            <span>•</span>
            <span className="flex items-center gap-1"><HiLightningBolt className="text-indigo-400/60" /> {CHALLENGES.reduce((a, g) => a + g.items.length, 0)} challenges</span>
          </div>
          <p className="text-[10px] text-gray-700">© {new Date().getFullYear()} DevOpser — Created with ♡ by <span className="text-indigo-400/60 font-medium">Atif</span></p>
        </div>
      </div>
    </footer>
  );

  /* ── Main Render ── */
  return (
    <div dir={dir} className="min-h-screen flex flex-col relative">
      <div className="bg-orbs"><div className="orb orb-1" /><div className="orb orb-2" /><div className="orb orb-3" /></div>
      <div className="noise-overlay" />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <SearchModal />
        <main className="flex-1">
          {page === 'home' && <HomePage />}
          {page === 'learn' && <LearnPage />}
          {page === 'roadmap' && <RoadmapPage />}
          {page === 'resources' && <ResourcesPage />}
          {page === 'challenges' && <ChallengesPage />}
        </main>
        {page !== 'learn' && <Footer />}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   AUTH FORM COMPONENT
   ═══════════════════════════════════════════ */
function AuthForm({ isLogin, onSubmit, showPassword, setShowPassword }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handle = (e) => { e.preventDefault(); isLogin ? onSubmit(email, password) : onSubmit(name, email, password); };
  return (
    <form onSubmit={handle} className="space-y-4">
      {!isLogin && (
        <div>
          <label className="text-xs text-gray-500 font-medium mb-1.5 block">Full Name</label>
          <div className="relative">
            <HiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" />
            <input value={name} onChange={e => setName(e.target.value)} placeholder="John Doe" className="auth-input pl-10" />
          </div>
        </div>
      )}
      <div>
        <label className="text-xs text-gray-500 font-medium mb-1.5 block">Email</label>
        <div className="relative">
          <HiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" />
          <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="you@email.com" className="auth-input pl-10" />
        </div>
      </div>
      <div>
        <label className="text-xs text-gray-500 font-medium mb-1.5 block">Password</label>
        <div className="relative">
          <HiLockClosed className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" />
          <input value={password} onChange={e => setPassword(e.target.value)} type={showPassword ? 'text' : 'password'} placeholder="••••••••" className="auth-input pl-10 pr-10" />
          <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-400">
            {showPassword ? <HiEyeOff /> : <HiEye />}
          </button>
        </div>
      </div>
      <button type="submit" className="btn-primary w-full mt-2"><span className="relative z-10">{isLogin ? 'Sign In' : 'Create Account'}</span></button>
    </form>
  );
}
