// ═══════════════════════════════════════════════════════════════
// COMPLETE DEVOPS CURRICULUM — 12 Phases, 36 Days, 160+ Lessons
// ═══════════════════════════════════════════════════════════════

export const ROADMAP = [
  // ───────────────────────────────────────
  // PHASE 1: LINUX FUNDAMENTALS
  // ───────────────────────────────────────
  {
    id: "linux",
    phase: "Phase 1",
    title: "Linux Fundamentals",
    icon: "🐧",
    color: "#22d3ee",
    duration: "Week 1-2",
    description: "Master the command line — the foundation of every DevOps engineer's toolkit.",
    days: [
      {
        day: 1,
        title: "Navigation & Basics",
        lessons: [
          { id: "nav1", title: "whoami & pwd", desc: "Know your identity and location in the filesystem", commands: ["whoami → shows current user", "pwd → print working directory", "hostname → shows machine name"], tip: "Always know WHO you are and WHERE you are before running any command." },
          { id: "nav2", title: "ls — List Files", desc: "View directory contents with various options", commands: ["ls → basic listing", "ls -l → long format with permissions", "ls -la → include hidden files", "ls -ltr → sort by time, newest last", "ls -lh → human-readable sizes"], tip: "Use 'ls -la' as your default — it shows everything." },
          { id: "nav3", title: "cd — Navigate", desc: "Move around the filesystem", commands: ["cd /etc → go to absolute path", "cd .. → go up one level", "cd ~ or cd → go home", "cd - → go to previous dir"], tip: "Tab completion saves time — press Tab while typing a path." },
          { id: "nav4", title: "cat, clear, echo", desc: "Display files and manage terminal", commands: ["cat /etc/hostname → show file", "cat /etc/os-release → distro info", "clear → wipe screen (Ctrl+L)", "echo 'hello' → print text", "echo $HOME → print variable"] },
          { id: "nav5", title: "System Info", desc: "Check system health", commands: ["uptime → system uptime + load", "free -m → memory in MB", "df -h → disk space human-readable", "uname -a → kernel info", "lscpu → CPU details"] },
          { id: "nav6", title: "Key Directories", desc: "Understand the Linux filesystem tree", commands: ["/bin → essential user commands", "/etc → configuration files", "/var/log → system logs", "/tmp → temporary files", "/proc → process info (virtual)", "/home → user home directories", "/usr → user programs & libraries"] },
        ],
        quiz: [
          { q: "Which command shows your current username?", opts: ["pwd", "whoami", "id", "ls"], a: 1 },
          { q: "What does pwd stand for?", opts: ["Password", "Print Working Directory", "Path Dir", "Present Dir"], a: 1 },
          { q: "Which flag shows hidden files?", opts: ["-l", "-t", "-a", "-r"], a: 2 },
          { q: "How to go to home directory?", opts: ["cd /home", "cd ~", "cd /", "cd /root"], a: 1 },
          { q: "Where are config files stored?", opts: ["/bin", "/tmp", "/etc", "/var"], a: 2 },
        ]
      },
      {
        day: 2,
        title: "Files, Vim & Types",
        lessons: [
          { id: "file1", title: "mkdir, touch — Create", desc: "Create directories and files", commands: ["mkdir mydir → create directory", "mkdir -p a/b/c → nested directories", "touch file.txt → create empty file", "touch f{1..10}.txt → batch create 10 files"] },
          { id: "file2", title: "cp, mv — Copy & Move", desc: "Copy and move/rename files", commands: ["cp file.txt backup/ → copy file", "cp -r dir/ backup/ → recursive copy", "mv old.txt new.txt → rename file", "mv file.txt dir/ → move file"] },
          { id: "file3", title: "rm — Remove", desc: "Delete files and directories safely", commands: ["rm file.txt → delete file", "rm -r dir/ → delete dir recursively", "rm -i file → ask before delete", "rm -rf * → force delete everything ⚠️"], tip: "NEVER run 'rm -rf /' as root — it destroys the entire system!" },
          { id: "file4", title: "Vim Editor", desc: "Essential text editor — available on every Linux system", commands: ["vim file → open file", "i → enter insert mode", "Esc → back to normal mode", ":w → save file", ":q → quit", ":wq → save and quit", ":q! → quit without saving", "dd → delete line", "/pattern → search", "u → undo"], tip: "If you get stuck in Vim, press Esc then type :q! to force quit." },
          { id: "file5", title: "File Types & Links", desc: "Identify files and create symbolic links", commands: ["file filename → detect file type", "ln -s target link → create symbolic link", "unlink link → remove symbolic link", "ls -l → first char shows type: d=dir, l=link, -=file"] },
        ],
        quiz: [
          { q: "Create nested directories?", opts: ["mkdir -r", "mkdir -p", "mkdir -n", "mkdir -v"], a: 1 },
          { q: "Rename a file?", opts: ["rn", "rename", "mv", "cp"], a: 2 },
          { q: "Enter Vim insert mode?", opts: ["e", "a", "i", "w"], a: 2 },
          { q: "Save and quit Vim?", opts: [":q!", ":wq", ":sq", ":exit"], a: 1 },
          { q: "What does rm -rf do?", opts: ["Read file", "Restore file", "Force recursive delete", "Rename file"], a: 2 },
        ]
      },
      {
        day: 3,
        title: "Filters & Text Processing",
        lessons: [
          { id: "filt1", title: "grep — Search Text", desc: "Find patterns in files — one of the most used commands", commands: ["grep pattern file → basic search", "grep -i pattern file → case insensitive", "grep -R pattern dir/ → recursive search", "grep -v pattern file → invert (exclude)", "grep -c pattern file → count matches", "grep -n pattern file → show line numbers"] },
          { id: "filt2", title: "head, tail, less", desc: "View specific parts of files", commands: ["head -20 file → first 20 lines", "tail -20 file → last 20 lines", "tail -f file → follow live updates", "less file → scrollable pager (q to quit)"], tip: "'tail -f' is essential for monitoring logs in real-time." },
          { id: "filt3", title: "cut, awk — Extract Columns", desc: "Extract specific fields from structured data", commands: ["cut -d: -f1 /etc/passwd → field 1 with : delimiter", "awk -F: '{print $1}' file → column 1", "awk '{print $2}' file → second word", "awk '/pattern/ {print}' file → filtered rows"] },
          { id: "filt4", title: "sed — Stream Editor", desc: "Find and replace text in files", commands: ["sed 's/old/new/' file → replace first match per line", "sed 's/old/new/g' file → replace all matches", "sed -i 's/old/new/g' file → edit file in-place", "sed '/pattern/d' file → delete matching lines"] },
          { id: "filt5", title: "wc, sort, uniq", desc: "Count, sort, and deduplicate data", commands: ["wc -l file → count lines", "wc -w file → count words", "sort file → sort alphabetically", "sort -n file → sort numerically", "sort -u file → sort and deduplicate", "uniq → remove adjacent duplicates", "sort file | uniq -c → count occurrences"] },
        ],
        quiz: [
          { q: "Case-insensitive grep?", opts: ["-c", "-i", "-v", "-r"], a: 1 },
          { q: "Follow a log file live?", opts: ["head -f", "tail -f", "less -f", "cat -f"], a: 1 },
          { q: "In-place edit with sed?", opts: ["-e", "-n", "-i", "-p"], a: 2 },
          { q: "Count lines in a file?", opts: ["wc -w", "wc -c", "wc -l", "wc -m"], a: 2 },
          { q: "Extract field 1 with ':' delimiter?", opts: ["cut -f1 file", "cut -d: -f1 file", "awk file", "sed file"], a: 1 },
        ]
      },
      {
        day: 4,
        title: "Redirections & Pipes",
        lessons: [
          { id: "red1", title: "Output Redirection", desc: "Send command output to files instead of the screen", commands: ["cmd > file → overwrite file with output", "cmd >> file → append output to file", "> file → create empty file / truncate"] },
          { id: "red2", title: "Error Redirection", desc: "Control where error messages go", commands: ["cmd 2> err.log → stderr to file", "cmd 2>> err.log → append stderr", "cmd &> file → both stdout + stderr", "cmd &>> file → append both streams"] },
          { id: "red3", title: "/dev/null", desc: "The data black hole — discard unwanted output", commands: ["cmd > /dev/null → discard stdout", "cmd 2>/dev/null → discard errors", "cmd &>/dev/null → discard everything"] },
          { id: "red4", title: "Pipes |", desc: "Chain commands together — the power of Unix", commands: ["ls | wc -l → count files", "ps -ef | grep nginx → find process", "cat file | sort | uniq → sorted unique lines", "history | grep 'docker' → search history"], tip: "Pipes are the secret weapon of Linux — learn to chain commands!" },
          { id: "red5", title: "find & locate", desc: "Search for files on the filesystem", commands: ["find /etc -name '*.conf' → find by name", "find / -type d -name log → find directories", "find . -size +100M → files over 100MB", "find . -mtime -7 → modified last 7 days", "locate filename → fast indexed search", "updatedb → refresh locate database"] },
        ],
        quiz: [
          { q: "Append output to a file?", opts: [">", ">>", ">>>", "|"], a: 1 },
          { q: "Discard all output?", opts: ["> /dev/zero", "> /dev/null", "> /tmp/null", "> /dev/random"], a: 1 },
          { q: "What does | do?", opts: ["Redirect to file", "Send to background", "Pipe output to next cmd", "Append output"], a: 2 },
          { q: "Search files by name?", opts: ["grep", "search", "find", "ls -R"], a: 2 },
          { q: "Redirect stderr only?", opts: ["1>", "2>", "&>", ">"], a: 1 },
        ]
      },
      {
        day: 5,
        title: "Users, Groups & Permissions",
        lessons: [
          { id: "usr1", title: "User Management", desc: "Create and manage system users", commands: ["useradd name → create user", "useradd -m name → create with home dir", "userdel -r name → delete user + home", "passwd name → set/change password", "id user → show UID, GID, groups"] },
          { id: "usr2", title: "Group Management", desc: "Organize users into groups for access control", commands: ["groupadd devops → create group", "usermod -aG devops user → add user to group", "groupdel devops → delete group", "groups user → list user's groups", "cat /etc/group → view all groups"] },
          { id: "usr3", title: "File Permissions", desc: "Control who can read, write, and execute files", commands: ["chmod 755 file → rwxr-xr-x", "chmod u+x file → add execute for owner", "chmod o-rw file → remove r/w for others", "r=4, w=2, x=1 → permission values", "777 = rwxrwxrwx → full access (dangerous!)"], tip: "Never use 777 in production — it means anyone can do anything!" },
          { id: "usr4", title: "Ownership", desc: "Change who owns files and directories", commands: ["chown user:group file → change both", "chown user file → change owner only", "chown -R user:group dir/ → recursive", "ls -l → view owner and group"] },
          { id: "usr5", title: "Sudo & Sudoers", desc: "Run commands with root privileges safely", commands: ["sudo cmd → run as root", "sudo -i → open root shell", "sudo -u user cmd → run as another user", "visudo → edit sudoers file safely", "/etc/sudoers.d/ → drop-in config directory"] },
        ],
        quiz: [
          { q: "Add user to a group?", opts: ["groupadd", "useradd -g", "usermod -aG", "passwd"], a: 2 },
          { q: "What does chmod 777 mean?", opts: ["No access", "Read only", "Full access for all", "Execute only"], a: 2 },
          { q: "Delete user with home dir?", opts: ["userdel user", "userdel -r user", "rm user", "deluser user"], a: 1 },
          { q: "Edit sudoers safely?", opts: ["vim /etc/sudoers", "visudo", "nano sudoers", "edit sudoers"], a: 1 },
          { q: "What value = read?", opts: ["1", "2", "4", "6"], a: 2 },
        ]
      },
      {
        day: 6,
        title: "Package Management",
        lessons: [
          { id: "pkg1", title: "RPM (Red Hat Family)", desc: "Low-level package management for RHEL, CentOS, Fedora", commands: ["rpm -ivh package.rpm → install", "rpm -qa → list all installed", "rpm -qi name → package info", "rpm -e name → remove package"] },
          { id: "pkg2", title: "YUM / DNF (CentOS/RHEL)", desc: "High-level package manager with dependency resolution", commands: ["yum search name → search repositories", "yum install name -y → install package", "yum remove name → uninstall", "yum update → update all packages", "dnf → modern replacement for yum"] },
          { id: "pkg3", title: "DPKG (Debian Family)", desc: "Low-level Debian package management", commands: ["dpkg -i package.deb → install", "dpkg -l → list all installed", "dpkg -r name → remove package", "dpkg -s name → package status"] },
          { id: "pkg4", title: "APT (Ubuntu/Debian)", desc: "High-level package manager for Debian-based systems", commands: ["apt update → refresh repository index", "apt install name → install package", "apt remove name → uninstall package", "apt purge name → remove + config files", "apt autoremove → clean unused deps", "apt search name → search packages"] },
        ],
        quiz: [
          { q: "Install RPM package?", opts: ["rpm -e", "rpm -ivh", "rpm -qa", "rpm -U"], a: 1 },
          { q: "Ubuntu equivalent of yum?", opts: ["dnf", "apt", "pacman", "brew"], a: 1 },
          { q: "Refresh Ubuntu repo index?", opts: ["apt refresh", "apt update", "apt sync", "apt fetch"], a: 1 },
          { q: "Remove package + config on Ubuntu?", opts: ["apt remove", "apt purge", "apt delete", "apt clean"], a: 1 },
          { q: "Search for a package in CentOS?", opts: ["yum find", "yum search", "yum query", "yum list"], a: 1 },
        ]
      },
      {
        day: 7,
        title: "Services, Processes & Archives",
        lessons: [
          { id: "svc1", title: "systemctl — Services", desc: "Manage system daemons and services", commands: ["systemctl start svc → start service", "systemctl stop svc → stop service", "systemctl restart svc → restart service", "systemctl enable svc → start on boot", "systemctl disable svc → don't start on boot", "systemctl status svc → check status"] },
          { id: "svc2", title: "Process Management", desc: "View, manage, and kill running processes", commands: ["top → live process monitor", "htop → enhanced process viewer", "ps aux → list all processes", "ps -ef | grep name → find specific process", "kill PID → graceful terminate", "kill -9 PID → force kill", "killall name → kill by name"] },
          { id: "svc3", title: "tar — Archives", desc: "Create and extract compressed archives", commands: ["tar -czvf out.tar.gz dir/ → create gzip", "tar -xzvf file.tar.gz → extract gzip", "tar -xzvf file.tar.gz -C /opt/ → extract to path", "tar -cjvf out.tar.bz2 dir/ → create bzip2"] },
          { id: "svc4", title: "zip / unzip", desc: "Work with ZIP format archives", commands: ["zip -r archive.zip dir/ → create zip", "unzip file.zip → extract", "unzip file.zip -d /path/ → extract to directory", "unzip -l file.zip → list contents"] },
        ],
        quiz: [
          { q: "Enable service on boot?", opts: ["systemctl start", "systemctl enable", "systemctl boot", "systemctl auto"], a: 1 },
          { q: "Force kill a process?", opts: ["kill PID", "kill -9 PID", "stop PID", "end PID"], a: 1 },
          { q: "What does tar -c mean?", opts: ["Copy", "Create", "Compress", "Check"], a: 1 },
          { q: "Live process monitor?", opts: ["ps", "top", "htop", "Both B and C"], a: 3 },
          { q: "Extract tar.gz to /opt/?", opts: ["-C /opt/", "-d /opt/", "-o /opt/", "-t /opt/"], a: 0 },
        ]
      },
    ]
  },

  // ───────────────────────────────────────
  // PHASE 2: NETWORKING & BASH SCRIPTING
  // ───────────────────────────────────────
  {
    id: "networking",
    phase: "Phase 2",
    title: "Networking & Bash Scripting",
    icon: "🌐",
    color: "#a78bfa",
    duration: "Week 3-4",
    description: "Understand networks, automate tasks with Bash, and schedule jobs with Cron.",
    days: [
      {
        day: 8,
        title: "Networking Basics",
        lessons: [
          { id: "net1", title: "IP & Interfaces", desc: "View and configure network interfaces", commands: ["ip addr → show all IP addresses", "ip link show → network interfaces", "ifconfig → legacy IP config (net-tools)", "hostname -I → quick IP lookup"] },
          { id: "net2", title: "Connectivity Tests", desc: "Test network connections and troubleshoot", commands: ["ping host → test reachability (ICMP)", "curl URL → fetch web content", "wget URL → download files", "traceroute host → trace packet path", "mtr host → combines ping + traceroute"] },
          { id: "net3", title: "DNS & Ports", desc: "Name resolution and port inspection", commands: ["nslookup domain → basic DNS lookup", "dig domain → detailed DNS query", "netstat -tlnp → listening TCP ports", "ss -tlnp → modern socket stats", "lsof -i :80 → what uses port 80"] },
          { id: "net4", title: "SSH — Secure Shell", desc: "Securely connect to remote machines", commands: ["ssh user@host → connect to remote", "ssh -p 2222 user@host → custom port", "ssh-keygen -t ed25519 → generate key pair", "ssh-copy-id user@host → copy public key", "scp file user@host:/path → secure file copy", "rsync -avz dir/ user@host:/path → sync files"] },
          { id: "net5", title: "Firewall Basics", desc: "Control network traffic with iptables/firewalld", commands: ["ufw enable → enable firewall (Ubuntu)", "ufw allow 22 → allow SSH port", "ufw status → show rules", "firewall-cmd --list-all → RHEL firewall", "iptables -L → list all rules"] },
        ],
        quiz: [
          { q: "Show IP addresses?", opts: ["ip addr", "show ip", "ifconfig -a", "Both A and C"], a: 3 },
          { q: "Download a file?", opts: ["curl", "wget", "Both work", "download"], a: 2 },
          { q: "Generate SSH keys?", opts: ["ssh-gen", "ssh-keygen", "ssh-key", "keygen"], a: 1 },
          { q: "Check listening ports?", opts: ["ports -l", "netstat -tlnp", "ps ports", "listen -p"], a: 1 },
          { q: "Secure copy files?", opts: ["cp -s", "scp", "sftp", "Both B and C"], a: 3 },
        ]
      },
      {
        day: 9,
        title: "Bash Scripting Basics",
        lessons: [
          { id: "bash1", title: "Script Structure", desc: "Create and run your first script", commands: ["#!/bin/bash → shebang (first line)", "chmod +x script.sh → make executable", "./script.sh → run the script", "bash script.sh → run with bash explicitly"] },
          { id: "bash2", title: "Variables & Input", desc: "Store data and read user input", commands: ["NAME='DevOps' → assign variable", "echo $NAME → use variable", "echo \"Hello $NAME\" → string interpolation", "read -p 'Enter name: ' VAR → read input", "export VAR → make environment variable"] },
          { id: "bash3", title: "Conditionals (if/else)", desc: "Make decisions in your scripts", commands: ["if [ $x -eq 5 ]; then ... fi", "-eq -ne -gt -lt -ge -le → number operators", "== != → string comparison", "-f file → true if file exists", "-d dir → true if directory exists", "-z \"$var\" → true if var is empty"] },
          { id: "bash4", title: "Loops", desc: "Repeat actions automatically", commands: ["for i in 1 2 3; do echo $i; done", "for f in *.txt; do cat $f; done", "for i in $(seq 1 10); do ... done", "while [ condition ]; do ... done", "while read line; do ... done < file"] },
          { id: "bash5", title: "Functions", desc: "Create reusable code blocks", commands: ["function greet() { echo \"Hi $1\"; }", "greet 'World' → call with argument", "$1 $2 → positional parameters", "$# → number of arguments", "return 0 → success exit code"] },
        ],
        quiz: [
          { q: "First line of a bash script?", opts: ["#!bash", "#!/bin/bash", "//bash", "#bash"], a: 1 },
          { q: "Make script executable?", opts: ["chmod +r", "chmod +x", "chmod +w", "chmod 644"], a: 1 },
          { q: "Check if file exists in bash?", opts: ["-e", "-f", "-d", "Both A and B"], a: 3 },
          { q: "Read user input?", opts: ["input", "scan", "read", "get"], a: 2 },
          { q: "Loop through files?", opts: ["for f in *", "loop *", "each *", "while *"], a: 0 },
        ]
      },
      {
        day: 10,
        title: "Advanced Scripting & Cron",
        lessons: [
          { id: "adv1", title: "Arrays & Strings", desc: "Work with data structures in Bash", commands: ["arr=(apple banana cherry) → define array", "${arr[0]} → first element", "${#arr[@]} → array length", "${str/old/new} → replace in string", "${str:0:5} → substring (first 5 chars)"] },
          { id: "adv2", title: "Error Handling", desc: "Handle failures gracefully in scripts", commands: ["set -e → exit script on any error", "set -u → error on undefined variables", "set -x → debug mode (print commands)", "set -o pipefail → catch pipe errors", "trap 'cleanup' EXIT → run function on exit", "$? → last command exit code (0=success)"] },
          { id: "adv3", title: "Cron Jobs", desc: "Schedule tasks to run automatically", commands: ["crontab -e → edit your cron jobs", "crontab -l → list your cron jobs", "* * * * * cmd → every minute", "0 2 * * * backup.sh → daily at 2 AM", "0 */6 * * * cmd → every 6 hours", "0 0 * * 0 cmd → weekly on Sunday"] },
          { id: "adv4", title: "Practical Script Patterns", desc: "Common patterns for DevOps scripts", commands: ["LOG=/var/log/script.log → log file", "echo \"$(date) - msg\" >> $LOG → timestamped logging", "if ! command -v docker &>/dev/null; then ... fi → check if tool installed", "exec > >(tee -a $LOG) 2>&1 → log everything"] },
        ],
        quiz: [
          { q: "Edit cron jobs?", opts: ["cron -e", "crontab -e", "schedule -e", "at -e"], a: 1 },
          { q: "Exit script on any error?", opts: ["set -x", "set -e", "set -v", "set -u"], a: 1 },
          { q: "Last command exit code?", opts: ["$!", "$?", "$0", "$#"], a: 1 },
          { q: "Run daily at midnight?", opts: ["* * * * *", "0 0 * * *", "0 * * * *", "* 0 * * *"], a: 1 },
          { q: "Array first element?", opts: ["${a[1]}", "${a[0]}", "${a}", "$a[0]"], a: 1 },
        ]
      },
    ]
  },

  // ───────────────────────────────────────
  // PHASE 3: GIT & VERSION CONTROL
  // ───────────────────────────────────────
  {
    id: "git",
    phase: "Phase 3",
    title: "Git & Version Control",
    icon: "📦",
    color: "#f97316",
    duration: "Week 5-6",
    description: "Track changes, collaborate with teams, and manage code professionally.",
    days: [
      {
        day: 11,
        title: "Git Basics",
        lessons: [
          { id: "git1", title: "Setup & Init", desc: "Initialize Git and configure your identity", commands: ["git init → initialize new repository", "git config --global user.name 'Your Name'", "git config --global user.email you@email.com", "git clone URL → clone a remote repo", "git config --list → view all settings"] },
          { id: "git2", title: "Stage & Commit", desc: "Track and save changes to your project", commands: ["git status → check working tree state", "git add file → stage a specific file", "git add . → stage all changes", "git commit -m 'message' → commit with message", "git diff → show unstaged changes", "git diff --staged → show staged changes"] },
          { id: "git3", title: "Branching", desc: "Work on features in parallel without conflicts", commands: ["git branch → list branches", "git branch feature → create branch", "git checkout feature → switch branch", "git checkout -b feature → create + switch", "git switch -c feature → modern create + switch", "git merge feature → merge into current"] },
          { id: "git4", title: "Remote Repositories", desc: "Push and pull code with GitHub/GitLab", commands: ["git remote add origin URL → add remote", "git remote -v → view remotes", "git push origin main → push to remote", "git pull origin main → pull latest", "git fetch origin → download without merge"] },
        ],
        quiz: [
          { q: "Initialize a git repo?", opts: ["git start", "git init", "git new", "git create"], a: 1 },
          { q: "Stage all changes?", opts: ["git add *", "git add .", "git stage all", "Both A and B"], a: 3 },
          { q: "Create + switch branch?", opts: ["git branch -s", "git checkout -b", "git switch -c", "Both B and C"], a: 3 },
          { q: "Download remote changes?", opts: ["git download", "git pull", "git fetch", "Both B and C"], a: 3 },
          { q: "Check repo state?", opts: ["git state", "git status", "git check", "git info"], a: 1 },
        ]
      },
      {
        day: 12,
        title: "Advanced Git Operations",
        lessons: [
          { id: "git5", title: "Git Stash", desc: "Save work-in-progress without committing", commands: ["git stash → save current changes", "git stash list → list saved stashes", "git stash pop → restore last stash", "git stash drop → discard last stash", "git stash apply stash@{2} → apply specific stash"] },
          { id: "git6", title: "Git Rebase", desc: "Rewrite history for cleaner commit logs", commands: ["git rebase main → rebase onto main", "git rebase -i HEAD~3 → interactive rebase", "git rebase --abort → cancel rebase", "git rebase --continue → continue after fix"], tip: "Use rebase for local branches; use merge for shared branches." },
          { id: "git7", title: "Cherry-pick & Tags", desc: "Pick specific commits and tag releases", commands: ["git cherry-pick <hash> → apply specific commit", "git tag v1.0 → lightweight tag", "git tag -a v1.0 -m 'Release 1.0' → annotated tag", "git push origin --tags → push all tags"] },
          { id: "git8", title: "Git Reflog & Recovery", desc: "Recover lost commits and undo mistakes", commands: ["git reflog → show all HEAD movements", "git reset --hard <hash> → reset to commit", "git reset --soft HEAD~1 → undo last commit, keep changes", "git revert <hash> → create undo commit"] },
          { id: "git9", title: "Git Log & History", desc: "Explore commit history effectively", commands: ["git log --oneline → compact log", "git log --graph --all → visual branch tree", "git log --author='name' → filter by author", "git blame file → who changed each line", "git show <hash> → view commit details"] },
        ],
        quiz: [
          { q: "Save work without committing?", opts: ["git save", "git stash", "git store", "git cache"], a: 1 },
          { q: "Interactive rebase last 3 commits?", opts: ["git rebase -3", "git rebase -i HEAD~3", "git rebase last 3", "git squash 3"], a: 1 },
          { q: "Create annotated tag?", opts: ["git tag v1.0", "git tag -a v1.0 -m 'msg'", "git label v1.0", "git mark v1.0"], a: 1 },
          { q: "Undo last commit, keep changes?", opts: ["git reset --hard HEAD~1", "git reset --soft HEAD~1", "git undo", "git revert HEAD"], a: 1 },
          { q: "See who changed each line?", opts: ["git author", "git blame", "git who", "git credit"], a: 1 },
        ]
      },
      {
        day: 13,
        title: "GitHub Collaboration",
        lessons: [
          { id: "git10", title: "Pull Requests (PRs)", desc: "Propose and review changes professionally", commands: ["Fork → copy repo to your account", "Create branch → work on feature", "Push → send changes to your fork", "Open PR → request merge into main", "Code Review → team reviews your changes"] },
          { id: "git11", title: "GitHub Issues & Projects", desc: "Track tasks, bugs, and project progress", commands: ["Issues → bug reports & feature requests", "Labels → categorize (bug, enhancement, etc.)", "Milestones → group issues by release", "Projects → kanban boards for tracking", "Assignees → who's working on it"] },
          { id: "git12", title: ".gitignore & Best Practices", desc: "Exclude files and write good commits", commands: [".gitignore → list files to ignore", "node_modules/ → ignore dependencies", "*.env → ignore secrets/environment files", ".DS_Store → ignore OS files", "Conventional commits → feat:, fix:, docs:, chore:"] },
          { id: "git13", title: "Git Hooks", desc: "Automate checks before commits and pushes", commands: [".git/hooks/ → hook scripts location", "pre-commit → run before commit", "pre-push → run before push", "husky → popular Git hooks tool (npm)", "lint-staged → lint only changed files"] },
        ],
        quiz: [
          { q: "What is a Pull Request?", opts: ["Download code", "Propose merging changes", "Delete a branch", "Clone a repo"], a: 1 },
          { q: "Which file excludes files from Git?", opts: [".gitexclude", ".gitignore", ".gitskip", ".gitblock"], a: 1 },
          { q: "What are GitHub Issues for?", opts: ["Deployment", "Bug tracking & tasks", "CI/CD", "Hosting"], a: 1 },
          { q: "When does pre-commit hook run?", opts: ["After push", "Before commit", "After merge", "Before clone"], a: 1 },
          { q: "Conventional commit for a bug fix?", opts: ["bug:", "fix:", "patch:", "repair:"], a: 1 },
        ]
      },
    ]
  },

  // ───────────────────────────────────────
  // PHASE 4: DOCKER & CONTAINERS
  // ───────────────────────────────────────
  {
    id: "docker",
    phase: "Phase 4",
    title: "Docker & Containers",
    icon: "🐳",
    color: "#0ea5e9",
    duration: "Week 7-8",
    description: "Containerize applications, build images, and orchestrate multi-container apps.",
    days: [
      {
        day: 14,
        title: "Docker Fundamentals",
        lessons: [
          { id: "dk1", title: "Images & Containers", desc: "Understand the core building blocks of Docker", commands: ["docker pull nginx → download image", "docker images → list local images", "docker run nginx → run container", "docker run -d nginx → run detached (background)", "docker ps → list running containers", "docker ps -a → list ALL containers"] },
          { id: "dk2", title: "Container Lifecycle", desc: "Start, stop, inspect, and remove containers", commands: ["docker stop <id> → graceful stop", "docker start <id> → start stopped container", "docker restart <id> → restart container", "docker rm <id> → remove stopped container", "docker rm -f <id> → force remove running", "docker logs <id> → view container logs", "docker logs -f <id> → follow logs live"] },
          { id: "dk3", title: "Running Containers", desc: "Use flags to control how containers run", commands: ["docker run -it ubuntu bash → interactive shell", "docker run -d -p 8080:80 nginx → port mapping", "docker run --name myapp nginx → custom name", "docker run -e DB_HOST=localhost app → env var", "docker exec -it <id> bash → exec into running container", "docker inspect <id> → detailed container info"] },
        ],
        quiz: [
          { q: "List running containers?", opts: ["docker list", "docker ps", "docker show", "docker containers"], a: 1 },
          { q: "Run container in background?", opts: ["-b", "-bg", "-d", "--background"], a: 2 },
          { q: "Map port 80 to 8080?", opts: ["-p 80:8080", "-p 8080:80", "--port 80", "-P 80"], a: 1 },
          { q: "Get shell in running container?", opts: ["docker ssh", "docker exec -it", "docker shell", "docker bash"], a: 1 },
          { q: "View container logs?", opts: ["docker output", "docker logs", "docker print", "docker cat"], a: 1 },
        ]
      },
      {
        day: 15,
        title: "Dockerfile & Images",
        lessons: [
          { id: "dk4", title: "Dockerfile Basics", desc: "Write instructions to build custom images", commands: ["FROM ubuntu:22.04 → base image", "RUN apt-get update && apt-get install -y nginx", "COPY . /app → copy files into image", "WORKDIR /app → set working directory", "EXPOSE 80 → document exposed port", "CMD [\"nginx\", \"-g\", \"daemon off;\"] → default command"] },
          { id: "dk5", title: "Building Images", desc: "Build and manage custom Docker images", commands: ["docker build -t myapp:v1 . → build image", "docker build -f Dockerfile.prod . → custom file", "docker tag myapp:v1 user/myapp:v1 → tag image", "docker push user/myapp:v1 → push to registry", "docker rmi image → remove image", "docker image prune → clean unused images"] },
          { id: "dk6", title: "Multi-stage Builds", desc: "Optimize images with multi-stage builds", commands: ["FROM node:18 AS builder → build stage", "RUN npm run build → compile app", "FROM nginx:alpine → production stage", "COPY --from=builder /app/dist /usr/share/nginx/html", "# Result: tiny production image!"], tip: "Multi-stage builds can reduce image size by 90%+!" },
          { id: "dk7", title: "Best Practices", desc: "Write production-ready Dockerfiles", commands: [".dockerignore → exclude files from build", "Use specific tags, not :latest", "Combine RUN commands with && to reduce layers", "Run as non-root user: USER appuser", "HEALTHCHECK CMD curl -f http://localhost/ || exit 1"] },
        ],
        quiz: [
          { q: "Set base image in Dockerfile?", opts: ["BASE", "IMAGE", "FROM", "USE"], a: 2 },
          { q: "Build image from Dockerfile?", opts: ["docker create", "docker make", "docker build", "docker compile"], a: 2 },
          { q: "Set working directory?", opts: ["WORKDIR", "CD", "DIR", "SETDIR"], a: 0 },
          { q: "Why use multi-stage builds?", opts: ["Faster runtime", "Smaller images", "More features", "Better logs"], a: 1 },
          { q: "Exclude files from Docker build?", opts: [".gitignore", ".dockerignore", ".buildignore", ".skipfile"], a: 1 },
        ]
      },
      {
        day: 16,
        title: "Docker Compose & Networking",
        lessons: [
          { id: "dk8", title: "Docker Compose", desc: "Define and run multi-container applications", commands: ["docker compose up -d → start all services", "docker compose down → stop and remove", "docker compose logs -f → follow all logs", "docker compose ps → list service status", "docker compose build → rebuild images", "docker compose exec web bash → exec into service"] },
          { id: "dk9", title: "Compose File Structure", desc: "Write docker-compose.yml files", commands: ["version: '3.8' → compose version", "services: → define containers", "  web: image: nginx → service definition", "  ports: ['8080:80'] → port mapping", "  volumes: ['./app:/usr/share/nginx/html']", "  depends_on: [db] → startup order"] },
          { id: "dk10", title: "Docker Networking", desc: "Connect containers and control traffic", commands: ["docker network ls → list networks", "docker network create mynet → create network", "docker run --network mynet app → join network", "bridge → default, containers on same host", "host → share host's network stack", "overlay → multi-host (Swarm/K8s)"] },
          { id: "dk11", title: "Docker Volumes", desc: "Persist data beyond container lifecycle", commands: ["docker volume create mydata → create volume", "docker volume ls → list volumes", "docker run -v mydata:/app/data app → mount volume", "docker run -v $(pwd):/app app → bind mount", "docker volume prune → remove unused volumes"] },
        ],
        quiz: [
          { q: "Start Compose stack?", opts: ["docker compose start", "docker compose up", "docker compose run", "docker compose begin"], a: 1 },
          { q: "Persist data in Docker?", opts: ["Containers", "Volumes", "Images", "Networks"], a: 1 },
          { q: "Default Docker network type?", opts: ["overlay", "host", "bridge", "none"], a: 2 },
          { q: "Stop and remove Compose stack?", opts: ["docker compose stop", "docker compose down", "docker compose rm", "docker compose kill"], a: 1 },
          { q: "Mount current directory?", opts: ["-v .:/app", "-v $(pwd):/app", "-m ./:/app", "Both A and B"], a: 3 },
        ]
      },
    ]
  },

  // ───────────────────────────────────────
  // PHASE 5: CI/CD PIPELINES
  // ───────────────────────────────────────
  {
    id: "cicd",
    phase: "Phase 5",
    title: "CI/CD Pipelines",
    icon: "🔄",
    color: "#ef4444",
    duration: "Week 9-10",
    description: "Automate building, testing, and deploying code with modern CI/CD tools.",
    days: [
      {
        day: 17,
        title: "CI/CD Concepts & Jenkins",
        lessons: [
          { id: "ci1", title: "CI/CD Fundamentals", desc: "Understand the pipeline philosophy", commands: ["CI → Continuous Integration: auto build & test on every commit", "CD → Continuous Delivery: auto deploy to staging", "CD → Continuous Deployment: auto deploy to production", "Pipeline → series of automated stages", "Artifact → output of a build (JAR, Docker image, etc.)"] },
          { id: "ci2", title: "Jenkins Setup", desc: "Install and configure Jenkins CI server", commands: ["Install Jenkins via apt/yum/docker", "Access UI at http://host:8080", "Get initial password from /var/lib/jenkins/secrets/", "Install suggested plugins on first run", "Create admin user and configure security"] },
          { id: "ci3", title: "Jenkinsfile", desc: "Define pipelines as code in your repository", commands: ["pipeline { agent any ... } → declarative pipeline", "stages { stage('Build') { ... } } → define stages", "steps { sh 'npm install' } → run commands", "post { always { cleanWs() } } → cleanup after build", "environment { API_KEY = credentials('api-key') }"] },
        ],
        quiz: [
          { q: "CI stands for?", opts: ["Container Integration", "Continuous Integration", "Code Inspection", "Cloud Init"], a: 1 },
          { q: "Jenkins default port?", opts: ["3000", "8080", "80", "443"], a: 1 },
          { q: "Pipeline defined in?", opts: ["Dockerfile", "Makefile", "Jenkinsfile", "pipeline.yml"], a: 2 },
          { q: "What runs after every build?", opts: ["pre", "post", "finally", "cleanup"], a: 1 },
          { q: "CD can stand for?", opts: ["Continuous Deployment", "Continuous Delivery", "Both A and B", "Container Deploy"], a: 2 },
        ]
      },
      {
        day: 18,
        title: "GitHub Actions",
        lessons: [
          { id: "ci4", title: "Workflow Basics", desc: "Create automated workflows on GitHub", commands: [".github/workflows/ci.yml → workflow file location", "name: CI Pipeline → workflow name", "on: [push, pull_request] → trigger events", "on: push: branches: [main] → specific branch", "jobs: → define one or more jobs"] },
          { id: "ci5", title: "Jobs & Steps", desc: "Define what runs in your pipeline", commands: ["runs-on: ubuntu-latest → runner OS", "steps: → list of actions to run", "- uses: actions/checkout@v4 → checkout code", "- uses: actions/setup-node@v4 → setup Node.js", "- run: npm test → run shell command", "- run: docker build -t myapp . → build Docker image"] },
          { id: "ci6", title: "Secrets & Variables", desc: "Securely manage sensitive data in workflows", commands: ["Settings > Secrets > Actions → add secrets", "${{ secrets.MY_SECRET }} → use in workflow", "env: NODE_ENV: production → set env var", "${{ github.sha }} → commit hash", "${{ github.ref_name }} → branch name"] },
          { id: "ci7", title: "Deploy with Actions", desc: "Auto-deploy to cloud services", commands: ["Deploy to Vercel → vercel-action", "Deploy to AWS → aws-actions/configure-aws-credentials", "Deploy to Docker Hub → docker/build-push-action", "Deploy to K8s → Azure/k8s-deploy", "Notify Slack → slackapi/slack-github-action"] },
        ],
        quiz: [
          { q: "Where do GitHub Actions workflows live?", opts: [".ci/", ".github/workflows/", ".actions/", "workflows/"], a: 1 },
          { q: "Checkout code in Actions?", opts: ["git clone", "actions/checkout", "actions/clone", "git fetch"], a: 1 },
          { q: "Access a secret in workflow?", opts: ["$SECRET", "${{ secrets.NAME }}", "env.SECRET", "${SECRET}"], a: 1 },
          { q: "Trigger on push to main?", opts: ["on: main", "on: push: branches: [main]", "trigger: main", "when: push main"], a: 1 },
          { q: "What is 'runs-on'?", opts: ["Docker image", "Runner OS/environment", "Branch name", "Job name"], a: 1 },
        ]
      },
      {
        day: 19,
        title: "Advanced CI/CD",
        lessons: [
          { id: "ci8", title: "GitLab CI/CD", desc: "CI/CD built into GitLab", commands: [".gitlab-ci.yml → pipeline config file", "stages: [build, test, deploy] → define stages", "script: → commands to run", "artifacts: paths: [dist/] → save build outputs", "only: [main] → run on specific branches", "cache: paths: [node_modules/] → speed up builds"] },
          { id: "ci9", title: "Deployment Strategies", desc: "How to release safely to production", commands: ["Rolling → gradually replace old instances", "Blue-Green → two identical environments, switch traffic", "Canary → route small % of traffic to new version", "Feature Flags → toggle features without deploying", "Rollback → quickly revert to previous version"] },
          { id: "ci10", title: "Pipeline Best Practices", desc: "Build efficient and reliable pipelines", commands: ["Fail fast → run quick tests first", "Cache dependencies → speed up builds", "Parallelize → run independent jobs simultaneously", "Pin versions → avoid surprise breakages", "Notify team → Slack/email on failure", "Branch protection → require passing CI before merge"] },
        ],
        quiz: [
          { q: "GitLab CI config file?", opts: ["Jenkinsfile", ".gitlab-ci.yml", "pipeline.yml", ".ci.yml"], a: 1 },
          { q: "Deploy with zero downtime?", opts: ["Big bang", "Blue-Green", "Stop and start", "Manual"], a: 1 },
          { q: "Route 5% traffic to new version?", opts: ["Rolling", "Blue-Green", "Canary", "Feature Flag"], a: 2 },
          { q: "Save build outputs in GitLab CI?", opts: ["cache", "artifacts", "outputs", "exports"], a: 1 },
          { q: "What should run first in pipeline?", opts: ["Deploy", "Quick tests (lint)", "Full integration test", "Build"], a: 1 },
        ]
      },
    ]
  },

  // ───────────────────────────────────────
  // PHASE 6: CLOUD & AWS
  // ───────────────────────────────────────
  {
    id: "cloud",
    phase: "Phase 6",
    title: "Cloud Computing & AWS",
    icon: "☁️",
    color: "#f59e0b",
    duration: "Week 11-13",
    description: "Understand cloud fundamentals and master core AWS services.",
    days: [
      {
        day: 20,
        title: "Cloud Fundamentals & IAM",
        lessons: [
          { id: "aws1", title: "Cloud Concepts", desc: "Understand cloud computing models", commands: ["IaaS → Infrastructure as a Service (EC2, VMs)", "PaaS → Platform as a Service (Elastic Beanstalk, Heroku)", "SaaS → Software as a Service (Gmail, Slack)", "Public Cloud → AWS, Azure, GCP (shared infra)", "Private Cloud → on-premises (dedicated infra)", "Hybrid → combination of public + private"] },
          { id: "aws2", title: "AWS IAM", desc: "Identity and Access Management", commands: ["Users → individual accounts", "Groups → collection of users", "Roles → temporary permissions (for services)", "Policies → JSON permission documents", "MFA → multi-factor authentication (always enable!)", "Principle of Least Privilege → minimum needed access"] },
          { id: "aws3", title: "AWS CLI", desc: "Control AWS from your terminal", commands: ["aws configure → set access key + secret", "aws sts get-caller-identity → verify who you are", "aws iam list-users → list IAM users", "aws --region us-east-1 → specify region", "aws --output json → output format"] },
        ],
        quiz: [
          { q: "EC2 is what cloud model?", opts: ["SaaS", "PaaS", "IaaS", "FaaS"], a: 2 },
          { q: "AWS identity service?", opts: ["EC2", "IAM", "S3", "VPC"], a: 1 },
          { q: "Set AWS CLI credentials?", opts: ["aws login", "aws configure", "aws auth", "aws setup"], a: 1 },
          { q: "Temporary permissions for services?", opts: ["Users", "Groups", "Roles", "Policies"], a: 2 },
          { q: "Minimum access principle?", opts: ["Maximum privilege", "Least privilege", "Admin always", "Root access"], a: 1 },
        ]
      },
      {
        day: 21,
        title: "EC2, S3 & Core Services",
        lessons: [
          { id: "aws4", title: "EC2 — Virtual Servers", desc: "Launch and manage cloud servers", commands: ["aws ec2 run-instances → launch server", "aws ec2 describe-instances → list servers", "aws ec2 stop-instances → stop server", "aws ec2 terminate-instances → delete server", "Instance Types → t2.micro, m5.large, etc.", "Security Groups → virtual firewall rules", "Key Pairs → SSH access to instances"] },
          { id: "aws5", title: "S3 — Object Storage", desc: "Store and serve files at scale", commands: ["aws s3 ls → list buckets", "aws s3 mb s3://my-bucket → create bucket", "aws s3 cp file s3://bucket/ → upload file", "aws s3 sync dir/ s3://bucket/ → sync directory", "S3 Classes → Standard, IA, Glacier (cold storage)", "Bucket Policies → control access to buckets"] },
          { id: "aws6", title: "VPC — Networking", desc: "Create isolated virtual networks", commands: ["VPC → Virtual Private Cloud (your network)", "Subnets → divide VPC into segments", "Public Subnet → internet-accessible", "Private Subnet → internal only", "Internet Gateway → connects VPC to internet", "NAT Gateway → lets private subnets reach internet", "Route Tables → control traffic routing"] },
        ],
        quiz: [
          { q: "AWS virtual server?", opts: ["Lambda", "EC2", "ECS", "Fargate"], a: 1 },
          { q: "AWS object storage?", opts: ["EBS", "EFS", "S3", "RDS"], a: 2 },
          { q: "Virtual network on AWS?", opts: ["VPN", "VPC", "VLAN", "VNet"], a: 1 },
          { q: "Cheapest S3 storage class?", opts: ["Standard", "IA", "Glacier", "One Zone"], a: 2 },
          { q: "Connect VPC to internet?", opts: ["NAT Gateway", "Internet Gateway", "VPN", "Router"], a: 1 },
        ]
      },
      {
        day: 22,
        title: "Advanced AWS Services",
        lessons: [
          { id: "aws7", title: "RDS & Databases", desc: "Managed database services", commands: ["RDS → Relational Database Service", "Supports MySQL, PostgreSQL, MariaDB, Oracle", "Multi-AZ → high availability across zones", "Read Replicas → scale read operations", "DynamoDB → managed NoSQL database", "ElastiCache → in-memory caching (Redis/Memcached)"] },
          { id: "aws8", title: "Lambda & Serverless", desc: "Run code without managing servers", commands: ["Lambda → event-driven functions", "Pay per request → no idle cost", "Supported: Python, Node.js, Java, Go, etc.", "API Gateway → create REST/HTTP APIs", "EventBridge → event routing", "Step Functions → orchestrate workflows"] },
          { id: "aws9", title: "ECS & Container Services", desc: "Run containers on AWS", commands: ["ECR → Elastic Container Registry (store images)", "ECS → Elastic Container Service (run containers)", "Fargate → serverless containers (no EC2 to manage)", "EKS → Elastic Kubernetes Service", "Task Definition → container configuration", "Service → maintains desired number of tasks"] },
          { id: "aws10", title: "Load Balancing & Auto Scaling", desc: "Handle traffic and scale automatically", commands: ["ALB → Application Load Balancer (HTTP/HTTPS)", "NLB → Network Load Balancer (TCP/UDP)", "Target Groups → route to healthy instances", "Auto Scaling Group → scale EC2 based on demand", "CloudWatch Alarms → trigger scaling actions", "Health Checks → monitor instance health"] },
        ],
        quiz: [
          { q: "Managed relational DB on AWS?", opts: ["DynamoDB", "RDS", "ElastiCache", "Redshift"], a: 1 },
          { q: "Run code without servers?", opts: ["EC2", "ECS", "Lambda", "Fargate"], a: 2 },
          { q: "Store Docker images on AWS?", opts: ["S3", "ECR", "ECS", "EKS"], a: 1 },
          { q: "HTTP load balancer?", opts: ["NLB", "ALB", "CLB", "ELB"], a: 1 },
          { q: "Serverless containers?", opts: ["EC2", "ECS", "Fargate", "Lambda"], a: 2 },
        ]
      },
    ]
  },

  // ───────────────────────────────────────
  // PHASE 7: INFRASTRUCTURE AS CODE
  // ───────────────────────────────────────
  {
    id: "iac",
    phase: "Phase 7",
    title: "Infrastructure as Code",
    icon: "🏗️",
    color: "#8b5cf6",
    duration: "Week 14-16",
    description: "Define, provision, and manage infrastructure through code instead of manual processes.",
    days: [
      {
        day: 23,
        title: "Terraform Basics",
        lessons: [
          { id: "tf1", title: "Terraform Fundamentals", desc: "Declarative infrastructure provisioning", commands: ["terraform init → initialize working directory", "terraform plan → preview what will change", "terraform apply → create/update infrastructure", "terraform destroy → tear everything down", "terraform fmt → format config files", "terraform validate → check syntax"] },
          { id: "tf2", title: "HCL Language", desc: "Write Terraform configuration files", commands: ["provider \"aws\" { region = \"us-east-1\" }", "resource \"aws_instance\" \"web\" { ... }", "variable \"name\" { type = string }", "output \"ip\" { value = aws_instance.web.public_ip }", "data \"aws_ami\" \"ubuntu\" { ... } → read existing resources"] },
          { id: "tf3", title: "State Management", desc: "Understand and manage Terraform state", commands: ["terraform.tfstate → tracks real infra", "terraform state list → list tracked resources", "terraform state show resource → show details", "Remote state → store in S3/Azure Blob", "terraform state rm → remove from state", "Never edit .tfstate manually!"], tip: "Always use remote state with locking for team projects." },
        ],
        quiz: [
          { q: "Preview Terraform changes?", opts: ["terraform check", "terraform plan", "terraform preview", "terraform diff"], a: 1 },
          { q: "Terraform create infra?", opts: ["terraform create", "terraform apply", "terraform build", "terraform deploy"], a: 1 },
          { q: "Terraform config language?", opts: ["YAML", "JSON", "HCL", "XML"], a: 2 },
          { q: "What tracks real infrastructure?", opts: ["terraform.lock", "terraform.tfstate", "main.tf", "providers.tf"], a: 1 },
          { q: "Terraform tear down?", opts: ["terraform remove", "terraform delete", "terraform destroy", "terraform clean"], a: 2 },
        ]
      },
      {
        day: 24,
        title: "Advanced Terraform",
        lessons: [
          { id: "tf4", title: "Modules", desc: "Reusable infrastructure components", commands: ["module \"vpc\" { source = \"./modules/vpc\" }", "source → local path, Git URL, or Terraform Registry", "variables → module inputs", "outputs → module exports", "terraform-aws-modules → popular community modules"] },
          { id: "tf5", title: "Workspaces & Backends", desc: "Manage multiple environments", commands: ["terraform workspace new staging → create workspace", "terraform workspace select production", "terraform workspace list → show all", "Backend → where state is stored (S3, GCS, Azure)", "DynamoDB → state locking for teams", "terraform { backend \"s3\" { ... } }"] },
          { id: "tf6", title: "Terraform Advanced Features", desc: "Loops, conditionals, and data transforms", commands: ["count = 3 → create 3 instances", "for_each → iterate over map/set", "dynamic blocks → generate nested blocks", "locals { } → local computed values", "depends_on → explicit dependencies", "lifecycle { prevent_destroy = true }"] },
        ],
        quiz: [
          { q: "Reusable Terraform component?", opts: ["Template", "Module", "Package", "Library"], a: 1 },
          { q: "Create multiple identical resources?", opts: ["repeat", "count", "multi", "clone"], a: 1 },
          { q: "Manage environments in Terraform?", opts: ["Branches", "Workspaces", "Folders", "Tags"], a: 1 },
          { q: "State locking on AWS?", opts: ["S3", "DynamoDB", "RDS", "Lambda"], a: 1 },
          { q: "Prevent resource deletion?", opts: ["lock = true", "prevent_destroy = true", "no_delete = true", "protected = true"], a: 1 },
        ]
      },
      {
        day: 25,
        title: "Ansible — Configuration Management",
        lessons: [
          { id: "ans1", title: "Ansible Basics", desc: "Agentless configuration management", commands: ["ansible all -m ping → test connectivity", "ansible-playbook site.yml → run playbook", "Inventory file → list of managed hosts", "ansible.cfg → Ansible configuration", "Agentless → uses SSH, no agent needed!"] },
          { id: "ans2", title: "Playbooks", desc: "Write YAML automation scripts", commands: ["- hosts: webservers → target group", "  tasks: → list of actions", "  - name: Install nginx → task description", "    apt: name=nginx state=present → module call", "  handlers: → triggered by notify", "  - name: Restart nginx → runs only when notified"] },
          { id: "ans3", title: "Roles & Galaxy", desc: "Organize and share automation", commands: ["ansible-galaxy init myrole → create role structure", "roles/ → reusable task collections", "  tasks/ → main tasks", "  templates/ → Jinja2 templates", "  vars/ → variables", "ansible-galaxy install user.role → install from Galaxy"] },
          { id: "ans4", title: "Ansible Vault", desc: "Encrypt sensitive data in playbooks", commands: ["ansible-vault create secrets.yml → create encrypted file", "ansible-vault edit secrets.yml → edit encrypted file", "ansible-vault encrypt existing.yml → encrypt file", "ansible-playbook --ask-vault-pass site.yml → prompt for password", "ansible-vault decrypt secrets.yml → decrypt file"] },
        ],
        quiz: [
          { q: "Ansible run a playbook?", opts: ["ansible run", "ansible-playbook", "ansible exec", "ansible play"], a: 1 },
          { q: "Ansible test connectivity?", opts: ["ansible -m test", "ansible -m ping", "ansible -m check", "ansible -m connect"], a: 1 },
          { q: "Does Ansible need agents?", opts: ["Yes, always", "No, agentless via SSH", "Only on Linux", "Only for Windows"], a: 1 },
          { q: "Encrypt secrets in Ansible?", opts: ["ansible-secret", "ansible-vault", "ansible-encrypt", "ansible-safe"], a: 1 },
          { q: "Reusable task collection?", opts: ["Module", "Plugin", "Role", "Package"], a: 2 },
        ]
      },
    ]
  },

  // ───────────────────────────────────────
  // PHASE 8: KUBERNETES
  // ───────────────────────────────────────
  {
    id: "k8s",
    phase: "Phase 8",
    title: "Kubernetes",
    icon: "☸️",
    color: "#3b82f6",
    duration: "Week 17-20",
    description: "Orchestrate containers at scale — the industry standard for cloud-native applications.",
    days: [
      {
        day: 26,
        title: "Kubernetes Core Concepts",
        lessons: [
          { id: "k1", title: "Architecture", desc: "Understand the K8s cluster components", commands: ["Control Plane → API Server, Scheduler, Controller Manager, etcd", "Worker Nodes → kubelet, kube-proxy, container runtime", "Pod → smallest deployable unit (1+ containers)", "Namespace → virtual cluster for isolation", "kubectl → CLI to interact with cluster"] },
          { id: "k2", title: "kubectl Basics", desc: "Essential commands for cluster interaction", commands: ["kubectl get pods → list pods", "kubectl get svc → list services", "kubectl get deploy → list deployments", "kubectl get nodes → list nodes", "kubectl get all → list everything", "kubectl describe pod <name> → detailed info"] },
          { id: "k3", title: "Pods & Deployments", desc: "Run and scale applications", commands: ["kubectl run nginx --image=nginx → create pod", "kubectl apply -f deploy.yml → apply manifest", "kubectl scale deploy app --replicas=3 → scale", "kubectl rollout status deploy/app → check rollout", "kubectl rollout undo deploy/app → rollback", "kubectl delete -f deploy.yml → delete resources"] },
        ],
        quiz: [
          { q: "Smallest K8s unit?", opts: ["Container", "Pod", "Node", "Deployment"], a: 1 },
          { q: "List all pods?", opts: ["kubectl list pods", "kubectl get pods", "kubectl show pods", "kubectl pods"], a: 1 },
          { q: "Apply a manifest?", opts: ["kubectl deploy", "kubectl apply -f", "kubectl create -f", "Both B and C"], a: 3 },
          { q: "Scale to 3 replicas?", opts: ["kubectl scale --replicas=3", "kubectl resize", "kubectl replicas 3", "kubectl expand 3"], a: 0 },
          { q: "Rollback deployment?", opts: ["kubectl rollback", "kubectl rollout undo", "kubectl revert", "kubectl reset"], a: 1 },
        ]
      },
      {
        day: 27,
        title: "K8s Services & Networking",
        lessons: [
          { id: "k4", title: "Services", desc: "Expose applications inside and outside the cluster", commands: ["ClusterIP → internal only (default)", "NodePort → expose on each node's port", "LoadBalancer → cloud load balancer", "kubectl expose deploy app --port=80 --type=NodePort", "kubectl get svc → list services with ports"] },
          { id: "k5", title: "Ingress", desc: "Route external HTTP traffic to services", commands: ["Ingress Controller → nginx, traefik, etc.", "Ingress Resource → routing rules in YAML", "Host-based → route by domain name", "Path-based → route by URL path", "TLS termination → HTTPS at ingress level"] },
          { id: "k6", title: "ConfigMaps & Secrets", desc: "Manage configuration and sensitive data", commands: ["kubectl create configmap app-config --from-file=config.txt", "kubectl create secret generic db-pass --from-literal=password=abc", "envFrom: configMapRef: name: app-config → use in pod", "secretKeyRef → reference secret in pod spec", "kubectl get configmaps → list configs", "kubectl get secrets → list secrets"] },
        ],
        quiz: [
          { q: "Internal-only K8s service?", opts: ["NodePort", "LoadBalancer", "ClusterIP", "ExternalName"], a: 2 },
          { q: "Route HTTP traffic by domain?", opts: ["Service", "Ingress", "Gateway", "Proxy"], a: 1 },
          { q: "Store non-sensitive config?", opts: ["Secret", "ConfigMap", "Volume", "Env file"], a: 1 },
          { q: "Expose on cloud load balancer?", opts: ["ClusterIP", "NodePort", "LoadBalancer", "Ingress"], a: 2 },
          { q: "Store passwords in K8s?", opts: ["ConfigMap", "Secret", "Volume", "Variable"], a: 1 },
        ]
      },
      {
        day: 28,
        title: "K8s Storage & Debugging",
        lessons: [
          { id: "k7", title: "Persistent Storage", desc: "Store data that survives pod restarts", commands: ["PersistentVolume (PV) → cluster-level storage", "PersistentVolumeClaim (PVC) → pod requests storage", "StorageClass → dynamic provisioning", "volumeMounts → mount in container", "accessModes → ReadWriteOnce, ReadOnlyMany, ReadWriteMany"] },
          { id: "k8", title: "Debugging K8s", desc: "Troubleshoot pods and cluster issues", commands: ["kubectl logs <pod> → view pod logs", "kubectl logs -f <pod> → follow live logs", "kubectl exec -it <pod> -- bash → shell into pod", "kubectl get events → cluster events", "kubectl top pods → CPU/memory usage", "kubectl describe pod <pod> → find error details"] },
          { id: "k9", title: "RBAC & Security", desc: "Control who can do what in the cluster", commands: ["Role → permissions within a namespace", "ClusterRole → cluster-wide permissions", "RoleBinding → assign role to user/group", "ServiceAccount → identity for pods", "kubectl auth can-i create pods → check permissions", "NetworkPolicy → control pod-to-pod traffic"] },
        ],
        quiz: [
          { q: "Request storage for a pod?", opts: ["PV", "PVC", "StorageClass", "Volume"], a: 1 },
          { q: "Get shell in a pod?", opts: ["kubectl ssh", "kubectl exec -it", "kubectl shell", "kubectl bash"], a: 1 },
          { q: "View pod logs?", opts: ["kubectl output", "kubectl logs", "kubectl cat", "kubectl print"], a: 1 },
          { q: "Namespace-level permissions?", opts: ["ClusterRole", "Role", "ServiceAccount", "Policy"], a: 1 },
          { q: "Check CPU/memory usage?", opts: ["kubectl usage", "kubectl top", "kubectl stats", "kubectl monitor"], a: 1 },
        ]
      },
      {
        day: 29,
        title: "Helm & K8s Advanced",
        lessons: [
          { id: "k10", title: "Helm Package Manager", desc: "Package, distribute, and manage K8s applications", commands: ["helm repo add stable https://charts.helm.sh/stable", "helm search repo nginx → search charts", "helm install myapp stable/nginx → install chart", "helm upgrade myapp stable/nginx → upgrade release", "helm list → list installed releases", "helm uninstall myapp → remove release"] },
          { id: "k11", title: "Helm Charts", desc: "Create your own Helm charts", commands: ["helm create mychart → scaffold new chart", "Chart.yaml → chart metadata", "values.yaml → default configuration values", "templates/ → Kubernetes manifest templates", "{{ .Values.replicaCount }} → template variable", "helm template mychart → render locally"] },
          { id: "k12", title: "K8s in Production", desc: "Patterns for running K8s at scale", commands: ["Horizontal Pod Autoscaler (HPA) → auto-scale pods", "Pod Disruption Budget → safe upgrades", "Resource requests/limits → CPU/memory bounds", "Liveness probe → restart unhealthy pods", "Readiness probe → route traffic when ready", "kubectl top nodes → monitor node resources"] },
        ],
        quiz: [
          { q: "K8s package manager?", opts: ["npm", "apt", "Helm", "yum"], a: 2 },
          { q: "Install a Helm chart?", opts: ["helm deploy", "helm install", "helm apply", "helm run"], a: 1 },
          { q: "Auto-scale pods?", opts: ["VPA", "HPA", "Replica scaling", "Pod scaling"], a: 1 },
          { q: "Chart default config?", opts: ["config.yaml", "values.yaml", "defaults.yaml", "settings.yaml"], a: 1 },
          { q: "Check if pod is healthy?", opts: ["Health check", "Liveness probe", "Status check", "Ping test"], a: 1 },
        ]
      },
    ]
  },

  // ───────────────────────────────────────
  // PHASE 9: MONITORING & OBSERVABILITY
  // ───────────────────────────────────────
  {
    id: "monitoring",
    phase: "Phase 9",
    title: "Monitoring & Observability",
    icon: "📊",
    color: "#10b981",
    duration: "Week 21-22",
    description: "Monitor systems, visualize metrics, centralize logs, and set up alerts.",
    days: [
      {
        day: 30,
        title: "Prometheus & Grafana",
        lessons: [
          { id: "mon1", title: "Prometheus", desc: "Metrics collection and alerting", commands: ["Prometheus → pull-based metrics collection", "Targets → endpoints to scrape metrics from", "PromQL → query language for metrics", "Exporters → expose app/system metrics", "node_exporter → Linux system metrics", "AlertManager → route and manage alerts"] },
          { id: "mon2", title: "Grafana", desc: "Visualization and dashboards", commands: ["Grafana → create beautiful dashboards", "Data Sources → connect to Prometheus, etc.", "Panels → visualize queries as graphs/tables", "Alerting → set thresholds, get notified", "Dashboard JSON → export/import dashboards", "Variables → make dashboards dynamic"] },
          { id: "mon3", title: "Key Metrics", desc: "What to monitor in any system", commands: ["The Four Golden Signals:", "  Latency → time to serve a request", "  Traffic → demand on the system", "  Errors → rate of failed requests", "  Saturation → how full the system is", "USE method → Utilization, Saturation, Errors (for resources)"] },
        ],
        quiz: [
          { q: "Metrics collection tool?", opts: ["Grafana", "Prometheus", "Kibana", "Loki"], a: 1 },
          { q: "Dashboard visualization?", opts: ["Prometheus", "Grafana", "Elasticsearch", "Logstash"], a: 1 },
          { q: "Prometheus query language?", opts: ["SQL", "PromQL", "KQL", "DQL"], a: 1 },
          { q: "Linux system metrics exporter?", opts: ["sys_exporter", "node_exporter", "linux_exporter", "host_exporter"], a: 1 },
          { q: "Four Golden Signals includes?", opts: ["Speed", "Latency", "Bandwidth", "Throughput"], a: 1 },
        ]
      },
      {
        day: 31,
        title: "Log Management & ELK",
        lessons: [
          { id: "mon4", title: "ELK Stack", desc: "Elasticsearch + Logstash + Kibana", commands: ["Elasticsearch → search and analytics engine", "Logstash → log processing pipeline", "Kibana → visualization and exploration", "Filebeat → lightweight log shipper", "Index patterns → organize data in Elasticsearch", "KQL → Kibana Query Language"] },
          { id: "mon5", title: "Loki & Modern Logging", desc: "Lightweight log aggregation", commands: ["Loki → like Prometheus, but for logs", "Promtail → agent that ships logs to Loki", "LogQL → query language for Loki", "Labels → index and filter logs efficiently", "Grafana + Loki → unified metrics & logs", "CloudWatch Logs → AWS native logging"] },
          { id: "mon6", title: "Alerting & On-Call", desc: "Set up alerts and incident response", commands: ["Alert rules → define conditions for alerts", "Alert channels → Slack, email, PagerDuty, etc.", "Runbooks → step-by-step incident response", "SLA/SLO/SLI → service level agreements & objectives", "On-call rotation → team scheduling for incidents", "Post-mortem → learn from incidents (blameless!)"] },
        ],
        quiz: [
          { q: "ELK: E stands for?", opts: ["Envoy", "Elastic", "Elasticsearch", "Event"], a: 2 },
          { q: "AWS native logging?", opts: ["S3 Logs", "CloudWatch", "CloudTrail", "X-Ray"], a: 1 },
          { q: "Lightweight log aggregation?", opts: ["Logstash", "Fluentd", "Loki", "Splunk"], a: 2 },
          { q: "Lightweight log shipper (ELK)?", opts: ["Logstash", "Filebeat", "Fluentd", "Promtail"], a: 1 },
          { q: "Learn from incidents?", opts: ["Blame report", "Post-mortem", "Incident log", "Error report"], a: 1 },
        ]
      },
    ]
  },

  // ───────────────────────────────────────
  // PHASE 10: SECURITY & DEVSECOPS
  // ───────────────────────────────────────
  {
    id: "security",
    phase: "Phase 10",
    title: "Security & DevSecOps",
    icon: "🔒",
    color: "#ec4899",
    duration: "Week 23-24",
    description: "Integrate security into every stage of the DevOps pipeline.",
    days: [
      {
        day: 32,
        title: "Security Fundamentals",
        lessons: [
          { id: "sec1", title: "Network Security", desc: "Protect systems from network-based attacks", commands: ["SSL/TLS → encrypt data in transit", "HTTPS → HTTP over TLS (port 443)", "Firewalls → control network traffic", "VPN → encrypted tunnel for remote access", "SSH keys → secure remote access (disable password auth)", "Port scanning → nmap host to find open ports"] },
          { id: "sec2", title: "Application Security", desc: "Understand common vulnerabilities", commands: ["OWASP Top 10 → most critical web app risks", "SQL Injection → malicious database queries", "XSS → Cross-Site Scripting attacks", "CSRF → Cross-Site Request Forgery", "Input validation → always validate user input", "Dependency scanning → check for vulnerable packages"] },
          { id: "sec3", title: "Secrets Management", desc: "Handle passwords, keys, and tokens securely", commands: ["Never store secrets in code or Git!", "HashiCorp Vault → centralized secrets management", "AWS Secrets Manager → AWS native secrets", "Environment variables → pass secrets to apps", "Sealed Secrets → encrypted K8s secrets", ".env files → local development (add to .gitignore!)"] },
        ],
        quiz: [
          { q: "Encrypt data in transit?", opts: ["SSH", "SSL/TLS", "VPN", "All of the above"], a: 3 },
          { q: "OWASP Top 10 is about?", opts: ["Best tools", "Web app security risks", "Cloud services", "Performance"], a: 1 },
          { q: "Where to store secrets?", opts: ["Git repo", "Code comments", "Vault/Secrets Manager", "README"], a: 2 },
          { q: "Scan for open ports?", opts: ["curl", "ping", "nmap", "traceroute"], a: 2 },
          { q: "Check vulnerable dependencies?", opts: ["npm audit", "pip check", "Snyk", "All of the above"], a: 3 },
        ]
      },
      {
        day: 33,
        title: "DevSecOps Practices",
        lessons: [
          { id: "sec4", title: "Shift Left Security", desc: "Find security issues early in development", commands: ["Shift Left → move security earlier in pipeline", "SAST → Static Application Security Testing (code analysis)", "SCA → Software Composition Analysis (dependencies)", "Pre-commit hooks → scan before commit", "IDE plugins → security warnings while coding"] },
          { id: "sec5", title: "Container Security", desc: "Secure Docker images and containers", commands: ["Trivy → scan images for vulnerabilities", "Docker Scout → Docker's built-in scanner", "Use minimal base images (Alpine, distroless)", "Run as non-root user in containers", "Read-only filesystem → --read-only flag", "Docker Content Trust → verify image signatures"] },
          { id: "sec6", title: "Pipeline Security", desc: "Secure your CI/CD pipelines", commands: ["DAST → Dynamic Application Security Testing", "Secret scanning → detect leaked credentials", "Image signing → verify image integrity", "Policy as Code → OPA/Gatekeeper for K8s", "Compliance scanning → CIS benchmarks", "Supply chain security → SBOM, Sigstore"] },
        ],
        quiz: [
          { q: "Shift Left means?", opts: ["Deploy faster", "Test earlier in pipeline", "Use left panel", "Reduce code"], a: 1 },
          { q: "Scan code for vulnerabilities?", opts: ["DAST", "SAST", "IAST", "RAST"], a: 1 },
          { q: "Scan Docker images?", opts: ["docker scan", "Trivy", "Docker Scout", "All of the above"], a: 3 },
          { q: "Minimal Docker base image?", opts: ["ubuntu", "debian", "alpine", "centos"], a: 2 },
          { q: "Policy as Code for K8s?", opts: ["Helm", "OPA/Gatekeeper", "Istio", "Calico"], a: 1 },
        ]
      },
    ]
  },

  // ───────────────────────────────────────
  // PHASE 11: PYTHON FOR DEVOPS
  // ───────────────────────────────────────
  {
    id: "python",
    phase: "Phase 11",
    title: "Python for DevOps",
    icon: "🐍",
    color: "#eab308",
    duration: "Week 25-26",
    description: "Automate DevOps tasks with Python — scripting, APIs, and cloud automation.",
    days: [
      {
        day: 34,
        title: "Python Scripting Basics",
        lessons: [
          { id: "py1", title: "Python Fundamentals", desc: "Core Python for automation scripts", commands: ["python3 script.py → run a script", "variables → name = 'DevOps'", "lists → servers = ['web1', 'web2', 'db1']", "dicts → config = {'port': 8080, 'host': 'localhost'}", "for server in servers: print(server)", "if status == 'running': restart()"] },
          { id: "py2", title: "File & OS Operations", desc: "Work with files and system commands", commands: ["import os → operating system interface", "os.path.exists('/etc/nginx') → check path", "os.listdir('/var/log') → list directory", "import subprocess → run shell commands", "subprocess.run(['ls', '-la'], capture_output=True)", "with open('config.txt') as f: data = f.read()"] },
          { id: "py3", title: "Working with APIs", desc: "Interact with REST APIs programmatically", commands: ["import requests → HTTP library", "r = requests.get('https://api.github.com/users/name')", "r.json() → parse JSON response", "requests.post(url, json=data) → send data", "r.status_code → check HTTP status", "Headers, auth, pagination → handle real APIs"] },
          { id: "py4", title: "Error Handling & Logging", desc: "Write robust scripts that handle failures", commands: ["try: ... except Exception as e: ... → handle errors", "import logging → built-in logging module", "logging.basicConfig(level=logging.INFO)", "logging.info('Server started') → log messages", "logging.error(f'Failed: {e}') → log errors", "sys.exit(1) → exit with error code"] },
        ],
        quiz: [
          { q: "Run a Python script?", opts: ["python script.py", "python3 script.py", "run script.py", "Both A and B"], a: 3 },
          { q: "Make HTTP GET request?", opts: ["requests.fetch()", "requests.get()", "http.get()", "urllib.get()"], a: 1 },
          { q: "Run shell command from Python?", opts: ["os.run()", "subprocess.run()", "shell.exec()", "sys.run()"], a: 1 },
          { q: "Handle errors in Python?", opts: ["try/catch", "try/except", "if/error", "handle/error"], a: 1 },
          { q: "Check if path exists?", opts: ["os.exists()", "os.path.exists()", "path.check()", "fs.exists()"], a: 1 },
        ]
      },
      {
        day: 35,
        title: "Python Automation",
        lessons: [
          { id: "py5", title: "AWS with Boto3", desc: "Automate AWS operations with Python", commands: ["import boto3 → AWS SDK for Python", "ec2 = boto3.client('ec2') → EC2 client", "ec2.describe_instances() → list instances", "s3 = boto3.resource('s3') → S3 resource", "s3.Bucket('name').upload_file('local', 'remote')", "boto3.client('cloudwatch') → monitoring"] },
          { id: "py6", title: "Server Automation", desc: "Automate server tasks with Python", commands: ["import paramiko → SSH library", "ssh = paramiko.SSHClient() → create SSH client", "ssh.connect('host', username='user', key_filename='key')", "stdin, stdout, stderr = ssh.exec_command('uptime')", "Fabric → high-level SSH automation library", "psutil → system monitoring (CPU, memory, disk)"] },
          { id: "py7", title: "Data Parsing & Reports", desc: "Process logs, configs, and generate reports", commands: ["import json → parse/write JSON", "import yaml → parse YAML configs (pip install pyyaml)", "import csv → process CSV files", "import re → regular expressions", "from datetime import datetime → timestamps", "jinja2 → template engine for reports/configs"] },
        ],
        quiz: [
          { q: "AWS SDK for Python?", opts: ["aws-sdk", "boto3", "awscli", "pyaws"], a: 1 },
          { q: "SSH automation library?", opts: ["ssh-lib", "paramiko", "openssh", "pyssh"], a: 1 },
          { q: "Parse YAML in Python?", opts: ["json.load()", "yaml.safe_load()", "toml.load()", "xml.parse()"], a: 1 },
          { q: "Monitor system resources?", opts: ["os.system()", "psutil", "sysmon", "systemd"], a: 1 },
          { q: "Template engine for configs?", opts: ["mustache", "handlebars", "jinja2", "ejs"], a: 2 },
        ]
      },
    ]
  },

  // ───────────────────────────────────────
  // PHASE 12: DEVOPS CULTURE & CAREER
  // ───────────────────────────────────────
  {
    id: "career",
    phase: "Phase 12",
    title: "DevOps Culture & Career",
    icon: "🚀",
    color: "#06b6d4",
    duration: "Week 27-28",
    description: "Understand DevOps culture, prepare for interviews, and build your career.",
    days: [
      {
        day: 36,
        title: "DevOps Culture & Mindset",
        lessons: [
          { id: "cul1", title: "DevOps Principles", desc: "Core cultural values of DevOps", commands: ["CALMS framework:", "  Culture → collaboration over silos", "  Automation → automate repetitive tasks", "  Lean → eliminate waste, continuous improvement", "  Measurement → measure everything", "  Sharing → share knowledge openly"] },
          { id: "cul2", title: "Agile & SRE", desc: "Related methodologies and practices", commands: ["Agile → iterative development, sprints, standups", "Scrum → sprint planning, retrospectives", "Kanban → visual workflow management", "SRE → Site Reliability Engineering (Google's approach)", "Error Budgets → acceptable failure rate", "Toil → repetitive manual work to eliminate"] },
          { id: "cul3", title: "Incident Management", desc: "Handle production issues professionally", commands: ["On-call → someone always available", "Incident Commander → leads the response", "Communication → status page, Slack updates", "Blameless post-mortem → focus on systems, not people", "Action items → prevent recurrence", "Runbooks → documented response procedures"] },
        ],
        quiz: [
          { q: "CALMS: C stands for?", opts: ["Coding", "Culture", "Containers", "Cloud"], a: 1 },
          { q: "Google's DevOps approach?", opts: ["DevOps", "SRE", "Agile", "Lean"], a: 1 },
          { q: "Focus of blameless post-mortem?", opts: ["Find who caused it", "Systems improvement", "Punishment", "Documentation"], a: 1 },
          { q: "Repetitive manual work?", opts: ["Debt", "Toil", "Waste", "Overhead"], a: 1 },
          { q: "Acceptable failure rate?", opts: ["SLA", "SLO", "Error Budget", "MTTR"], a: 2 },
        ]
      },
    ]
  },
];
