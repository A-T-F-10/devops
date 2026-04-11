import './globals.css';

export const metadata = {
  title: 'DevOpser — Master DevOps From Zero to Hero',
  description: 'DevOpser is the ultimate free DevOps learning platform. Master Linux, Git, Docker, CI/CD, Cloud, Kubernetes, Monitoring, Security and more with interactive lessons, quizzes, and hands-on challenges.',
  keywords: 'devopser, devops, learning, linux, docker, kubernetes, ci/cd, aws, terraform, ansible, free course, platform',
  openGraph: {
    title: 'DevOpser — Master DevOps From Zero to Hero',
    description: 'The ultimate free platform to master DevOps engineering with 160+ interactive lessons, quizzes, and real-world challenges.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#050510] text-gray-200 antialiased min-h-screen" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
