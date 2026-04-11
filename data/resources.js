export const RESOURCES = [
  {
    cat: '🎓 Free Courses & Tutorials',
    items: [
      { name: 'Linux Journey', url: 'https://linuxjourney.com', desc: 'Interactive Linux fundamentals from command line to system administration' },
      { name: 'Docker Getting Started', url: 'https://docs.docker.com/get-started/', desc: 'Official Docker tutorial covering containers, images, and multi-container apps' },
      { name: 'Kubernetes Basics', url: 'https://kubernetes.io/docs/tutorials/', desc: 'Official K8s tutorials from pods to deployments and services' },
      { name: 'FreeCodeCamp DevOps', url: 'https://www.freecodecamp.org', desc: 'Comprehensive free coding bootcamp with DevOps modules' },
      { name: 'AWS Free Tier', url: 'https://aws.amazon.com/free/', desc: 'Hands-on AWS cloud experience with 12-month free tier access' },
      { name: 'GitHub Skills', url: 'https://skills.github.com/', desc: 'Learn Git, GitHub Actions, and CI/CD through interactive courses' },
      { name: 'Terraform Learn', url: 'https://developer.hashicorp.com/terraform/tutorials', desc: 'Official HashiCorp Terraform tutorials for Infrastructure as Code' },
      { name: 'KodeKloud Free Labs', url: 'https://kodekloud.com', desc: 'Hands-on labs for Docker, K8s, Ansible, Terraform with browser-based terminals' },
    ]
  },
  {
    cat: '📜 Certifications',
    items: [
      { name: 'AWS Solutions Architect', url: 'https://aws.amazon.com/certification/', desc: 'Design distributed systems on AWS – most popular cloud certification' },
      { name: 'CKA - Kubernetes Admin', url: 'https://www.cncf.io/certification/cka/', desc: 'Certified Kubernetes Administrator – performance-based exam by CNCF' },
      { name: 'CKAD - K8s Developer', url: 'https://www.cncf.io/certification/ckad/', desc: 'Certified Kubernetes Application Developer for building cloud-native apps' },
      { name: 'Terraform Associate', url: 'https://www.hashicorp.com/certification', desc: 'HashiCorp Infrastructure Automation certification for IaC skills' },
      { name: 'Docker DCA', url: 'https://training.mirantis.com/dca-certification-exam/', desc: 'Docker Certified Associate – validates container orchestration skills' },
      { name: 'Linux LFCS', url: 'https://training.linuxfoundation.org/certification/linux-foundation-certified-sysadmin-lfcs/', desc: 'Linux Foundation Certified SysAdmin – proves Linux administration expertise' },
      { name: 'Azure DevOps Engineer', url: 'https://learn.microsoft.com/en-us/credentials/certifications/devops-engineer/', desc: 'Microsoft Azure DevOps certification covering CI/CD and monitoring' },
    ]
  },
  {
    cat: '🛠️ Practice Platforms',
    items: [
      { name: 'KillerCoda', url: 'https://killercoda.com', desc: 'Free interactive scenarios for Kubernetes, Docker, Linux, and more' },
      { name: 'Play with Docker', url: 'https://labs.play-with-docker.com', desc: 'Free Docker playground – 4-hour sessions with browser-based terminals' },
      { name: 'Play with Kubernetes', url: 'https://labs.play-with-k8s.com', desc: 'Free Kubernetes cluster in your browser for hands-on practice' },
      { name: 'Katacoda Alternatives', url: 'https://killercoda.com', desc: 'Interactive browser-based DevOps labs and tutorials' },
      { name: 'HackerRank Linux', url: 'https://www.hackerrank.com/domains/shell', desc: 'Shell scripting challenges to sharpen your Bash skills' },
      { name: 'TryHackMe', url: 'https://tryhackme.com', desc: 'Learn cybersecurity and DevSecOps through guided hands-on rooms' },
    ]
  },
  {
    cat: '🌐 Communities & Blogs',
    items: [
      { name: 'DevOps Subreddit', url: 'https://reddit.com/r/devops', desc: 'Active community for DevOps discussions, career advice, and tool reviews' },
      { name: 'CNCF Slack', url: 'https://slack.cncf.io', desc: 'Cloud Native Computing Foundation Slack – connect with K8s contributors' },
      { name: 'DevOps Roadmap', url: 'https://roadmap.sh/devops', desc: 'Visual roadmap with detailed guides for every DevOps topic' },
      { name: 'The New Stack', url: 'https://thenewstack.io', desc: 'Industry news and tutorials on cloud-native, DevOps, and microservices' },
      { name: 'HashiCorp Discuss', url: 'https://discuss.hashicorp.com', desc: 'Community forum for Terraform, Vault, Consul, and Nomad discussions' },
      { name: 'Docker Community', url: 'https://forums.docker.com', desc: 'Official Docker forums for troubleshooting and best practices' },
    ]
  }
];

export const CHALLENGES = [
  {
    group: '🐧 Linux Fundamentals',
    icon: '🐧',
    color: 'from-amber-500 to-orange-500',
    items: [
      {
        title: 'File System Navigator',
        difficulty: 'Beginner',
        time: '15 min',
        description: 'Master essential Linux file system navigation and manipulation commands.',
        explanation: 'The Linux file system is organized as a tree structure starting from the root directory (/). Understanding how to navigate, create, copy, and move files is the foundation of every DevOps task. These commands are used thousands of times daily by system administrators.',
        steps: [
          'Create a nested directory structure: mkdir -p /tmp/devops/{logs,configs,scripts}',
          'Navigate into the structure: cd /tmp/devops',
          'Create sample files: touch logs/app.log configs/nginx.conf scripts/deploy.sh',
          'List all files recursively: ls -laR',
          'Copy a file: cp configs/nginx.conf configs/nginx.conf.backup',
          'Move a file: mv scripts/deploy.sh scripts/deploy_v2.sh',
          'Find files by name: find /tmp/devops -name "*.conf"',
          'Check disk usage: du -sh /tmp/devops/*'
        ],
        hints: ['Use tab completion to speed up navigation', 'The -p flag in mkdir creates parent directories automatically', 'ls -la shows hidden files and permissions'],
        expectedOutput: 'You should see the complete directory tree with all files, permissions, and sizes displayed.',
        quiz: [
          { q: 'What does the -p flag do in mkdir -p?', opts: ['Creates parent directories as needed', 'Sets file permissions', 'Creates the directory as private', 'Prints the path created'], a: 0 },
          { q: 'Which command finds files by name recursively?', opts: ['ls -R', 'grep -r', 'find -name', 'locate'], a: 2 },
          { q: 'What does du -sh display?', opts: ['Disk usage in human-readable format', 'Directory users', 'Duplicate files', 'Download URLs'], a: 0 }
        ]
      },
      {
        title: 'Permission Master',
        difficulty: 'Beginner',
        time: '20 min',
        description: 'Understand and configure Linux file permissions and ownership.',
        explanation: 'Linux permissions control who can read, write, and execute files. Every file has three permission groups: owner (u), group (g), and others (o). Each can have read (r=4), write (w=2), and execute (x=1) permissions. Understanding this is critical for securing servers and applications.',
        steps: [
          'Create a test file: echo "#!/bin/bash\\necho Hello DevOps" > test.sh',
          'Check current permissions: ls -la test.sh',
          'Make it executable: chmod +x test.sh',
          'Set specific permissions (owner:rwx, group:rx, others:r): chmod 754 test.sh',
          'Change ownership: sudo chown $USER:$USER test.sh',
          'Try running the script: ./test.sh',
          'Remove write permission for others: chmod o-w test.sh',
          'Use symbolic mode: chmod u=rwx,g=rx,o=r test.sh'
        ],
        hints: ['Remember: 4=read, 2=write, 1=execute', 'chmod 755 is a common permission for scripts', 'Use chown user:group for ownership changes'],
        expectedOutput: 'The script should execute and print "Hello DevOps". Permissions should show -rwxr-xr--.',
        quiz: [
          { q: 'What does chmod 755 set?', opts: ['rwxr-xr-x', 'rwxrwxrwx', 'rw-r--r--', 'rwx------'], a: 0 },
          { q: 'Which permission number represents read+write?', opts: ['3', '5', '6', '7'], a: 2 },
          { q: 'What command changes file ownership?', opts: ['chmod', 'chown', 'chgrp', 'chperm'], a: 1 }
        ]
      },
      {
        title: 'Process & System Monitor',
        difficulty: 'Intermediate',
        time: '25 min',
        description: 'Monitor system resources, manage processes, and analyze performance.',
        explanation: 'System monitoring is crucial for DevOps engineers. You need to track CPU usage, memory consumption, disk I/O, and network activity. Understanding processes helps you debug application issues and optimize server performance.',
        steps: [
          'View running processes: ps aux | head -20',
          'Real-time process monitoring: top (press q to exit)',
          'Check memory usage: free -h',
          'View disk space: df -h',
          'Check system uptime and load: uptime',
          'Find a specific process: ps aux | grep ssh',
          'Monitor system logs: tail -f /var/log/syslog',
          'Check network connections: ss -tuln',
          'View CPU info: lscpu | head -15'
        ],
        hints: ['Use htop for a better interactive process viewer', 'Load average shows 1, 5, 15 minute averages', 'ss replaces the older netstat command'],
        expectedOutput: 'You should see system stats including CPU cores, memory usage, disk space, and active processes.',
        quiz: [
          { q: 'What does free -h show?', opts: ['Free disk space', 'Free memory in human-readable format', 'Free network ports', 'Free CPU cores'], a: 1 },
          { q: 'Which command shows real-time process activity?', opts: ['ps aux', 'top', 'ls -la', 'df -h'], a: 1 },
          { q: 'What does the load average represent?', opts: ['CPU temperature', 'Average number of processes in the run queue', 'Network load', 'Disk read speed'], a: 1 }
        ]
      }
    ]
  },
  {
    group: '📜 Bash Scripting',
    icon: '📜',
    color: 'from-green-500 to-emerald-500',
    items: [
      {
        title: 'Automated Backup Script',
        difficulty: 'Intermediate',
        time: '30 min',
        description: 'Write a production-ready backup script with logging, rotation, and error handling.',
        explanation: 'Backup automation is one of the most practical DevOps tasks. A good backup script should handle errors gracefully, log its activities, rotate old backups to save disk space, and notify administrators of failures. This challenge teaches scripting patterns used in production environments.',
        steps: [
          'Create the script file: touch backup.sh && chmod +x backup.sh',
          'Add shebang and variables: #!/bin/bash, BACKUP_DIR, LOG_FILE, RETENTION_DAYS',
          'Add timestamp function: timestamp() { date "+%Y-%m-%d %H:%M:%S"; }',
          'Create backup directory if not exists: mkdir -p $BACKUP_DIR',
          'Add tar command to create compressed backups: tar -czf $BACKUP_DIR/backup_$(date +%Y%m%d).tar.gz /target/dir',
          'Add rotation: find $BACKUP_DIR -name "*.tar.gz" -mtime +$RETENTION_DAYS -delete',
          'Add error handling with trap and exit codes',
          'Add logging: echo "[$(timestamp)] Backup completed" >> $LOG_FILE',
          'Test: ./backup.sh && echo "Success" || echo "Failed"'
        ],
        hints: ['Use set -euo pipefail at the top for strict error handling', 'trap cleanup EXIT handles unexpected script termination', 'Use $? to check the exit code of the last command'],
        expectedOutput: 'A compressed .tar.gz backup file should be created in the backup directory with a timestamp, and old backups should be cleaned up.',
        quiz: [
          { q: 'What does set -e do in a bash script?', opts: ['Enables echo mode', 'Exits on first error', 'Enables extended globbing', 'Sets environment variables'], a: 1 },
          { q: 'Which command compresses files into a .tar.gz archive?', opts: ['zip -r', 'tar -czf', 'gzip -c', 'compress -z'], a: 1 },
          { q: 'What does the -mtime +7 flag mean in find?', opts: ['Files modified more than 7 minutes ago', 'Files modified more than 7 days ago', 'Files larger than 7MB', 'Files with 7 links'], a: 1 }
        ]
      },
      {
        title: 'Log Analyzer Script',
        difficulty: 'Intermediate',
        time: '25 min',
        description: 'Build a script that parses, filters, and reports on application log files.',
        explanation: 'Log analysis is essential for troubleshooting and monitoring. DevOps engineers regularly parse logs to find errors, track request patterns, and identify security issues. This challenge uses grep, awk, sed, and sort — the Swiss Army knives of text processing.',
        steps: [
          'Generate sample log data with different severity levels',
          'Count errors by type: grep -c "ERROR" app.log',
          'Extract unique IP addresses: awk \'{print $1}\' access.log | sort -u',
          'Find top 10 most frequent requests: awk \'{print $7}\' access.log | sort | uniq -c | sort -rn | head -10',
          'Filter logs by date range using awk and date comparison',
          'Generate a summary report with total requests, errors, and top endpoints',
          'Add email notification for critical errors (simulated)',
          'Output results in both text and CSV format'
        ],
        hints: ['awk is powerful for column-based text processing', 'sort | uniq -c | sort -rn gives frequency counts', 'Use grep -E for extended regex patterns'],
        expectedOutput: 'A formatted report showing error counts, top IP addresses, most requested URLs, and error rate percentage.',
        quiz: [
          { q: 'What does awk \'{print $1}\' do?', opts: ['Prints the first line', 'Prints the first column of each line', 'Prints one character', 'Prints files starting with 1'], a: 1 },
          { q: 'How do you count unique lines?', opts: ['wc -l', 'sort -u | wc -l', 'grep -c', 'uniq -c'], a: 1 },
          { q: 'What flag makes grep use extended regex?', opts: ['-r', '-i', '-E', '-w'], a: 2 }
        ]
      },
      {
        title: 'Server Health Check Script',
        difficulty: 'Beginner',
        time: '20 min',
        description: 'Create a script that checks system health metrics and alerts on issues.',
        explanation: 'Health check scripts are the simplest form of monitoring. Before tools like Prometheus, sysadmins relied on cron-scheduled scripts to check disk space, CPU load, memory usage, and service status. This is still a valuable skill for quick diagnostics.',
        steps: [
          'Check CPU load: uptime | awk -F"load average:" \'{print $2}\'',
          'Check memory usage percentage: free | awk \'/Mem/{printf("%.1f%%", $3/$2*100)}\'',
          'Check disk usage: df -h / | awk \'NR==2{print $5}\'',
          'Check if critical services are running: systemctl is-active nginx docker',
          'Set thresholds and alert if exceeded',
          'Add color-coded output (green=OK, yellow=warning, red=critical)',
          'Schedule with cron: crontab -e → */5 * * * * /path/to/healthcheck.sh'
        ],
        hints: ['Use ANSI color codes: \\033[32m for green, \\033[31m for red', 'Exit code 0 means success, non-zero means failure', 'cron uses the format: minute hour day month weekday command'],
        expectedOutput: 'A color-coded health report showing CPU, memory, disk, and service status with OK/WARNING/CRITICAL indicators.',
        quiz: [
          { q: 'What cron expression runs every 5 minutes?', opts: ['5 * * * *', '*/5 * * * *', '0 5 * * *', '* * * * 5'], a: 1 },
          { q: 'What does exit code 0 mean?', opts: ['Error occurred', 'Script not found', 'Success', 'Permission denied'], a: 2 },
          { q: 'Which command checks if a systemd service is running?', opts: ['service check', 'systemctl is-active', 'ps aux | grep', 'chkconfig --list'], a: 1 }
        ]
      }
    ]
  },
  {
    group: '🐳 Docker Challenges',
    icon: '🐳',
    color: 'from-blue-500 to-cyan-500',
    items: [
      {
        title: 'Multi-Stage Build Mastery',
        difficulty: 'Intermediate',
        time: '30 min',
        description: 'Create optimized Docker images using multi-stage builds to reduce image size by 90%.',
        explanation: 'Multi-stage builds are a Docker best practice that dramatically reduces image size. Instead of shipping build tools, source code, and dependencies in your final image, you use one stage to build and another to run. A Node.js app image can go from 1GB to under 100MB!',
        steps: [
          'Create a simple Node.js app: mkdir docker-app && cd docker-app',
          'Write a basic Express server in index.js',
          'Create package.json with express dependency',
          'Write a single-stage Dockerfile (observe the large image size)',
          'Build and check size: docker build -t app:single . && docker images app:single',
          'Rewrite as multi-stage: Stage 1 (node:18) for building, Stage 2 (node:18-alpine) for running',
          'Build multi-stage: docker build -t app:multi . && docker images app:multi',
          'Compare sizes: docker images | grep app',
          'Run the container: docker run -d -p 3000:3000 app:multi',
          'Verify: curl http://localhost:3000'
        ],
        hints: ['Alpine images are much smaller than full images', 'COPY --from=build /app /app copies from a previous stage', 'Use .dockerignore to exclude node_modules and .git'],
        expectedOutput: 'The multi-stage image should be ~100MB compared to ~900MB for the single-stage build. The app should respond on port 3000.',
        quiz: [
          { q: 'What is the main benefit of multi-stage builds?', opts: ['Faster build times', 'Smaller final image size', 'Better security', 'More layers'], a: 1 },
          { q: 'Which base image is smallest?', opts: ['ubuntu:latest', 'node:18', 'node:18-alpine', 'debian:bullseye'], a: 2 },
          { q: 'How do you copy files from a previous build stage?', opts: ['COPY --stage=0', 'COPY --from=builder', 'ADD --previous', 'IMPORT --from=0'], a: 1 }
        ]
      },
      {
        title: 'Docker Compose Full Stack',
        difficulty: 'Intermediate',
        time: '40 min',
        description: 'Deploy a full-stack app with frontend, backend, database, and cache using Docker Compose.',
        explanation: 'Docker Compose orchestrates multi-container applications defined in a single YAML file. In production environments, you often need a web server, API server, database, and cache working together. Compose handles networking, volumes, and dependency management between services.',
        steps: [
          'Create project structure: mkdir -p fullstack/{frontend,backend,db-init}',
          'Write backend API with Express + PostgreSQL connection',
          'Write frontend with Nginx serving static files',
          'Create database init script: db-init/init.sql with schema',
          'Write docker-compose.yml with services: frontend, backend, postgres, redis',
          'Configure named volumes for data persistence',
          'Set up custom network for service communication',
          'Add health checks for each service',
          'Launch: docker compose up -d',
          'Verify: docker compose ps && curl http://localhost',
          'Check logs: docker compose logs -f backend'
        ],
        hints: ['Services on the same network can reference each other by service name', 'Use depends_on with condition: service_healthy for startup order', 'Named volumes persist data across container restarts'],
        expectedOutput: 'All four services should be running and healthy. Frontend serves on port 80, backend on 3000, Postgres on 5432, Redis on 6379.',
        quiz: [
          { q: 'How do Docker Compose services communicate?', opts: ['By IP address only', 'By service name on the same network', 'Through shared volumes', 'Via environment variables'], a: 1 },
          { q: 'What persists data when a container is removed?', opts: ['Container layers', 'Environment variables', 'Named volumes', 'Docker networks'], a: 2 },
          { q: 'Which command shows running compose services?', opts: ['docker compose list', 'docker compose ps', 'docker compose status', 'docker compose show'], a: 1 }
        ]
      },
      {
        title: 'Docker Security Hardening',
        difficulty: 'Advanced',
        time: '35 min',
        description: 'Apply security best practices to Docker containers and images.',
        explanation: 'Container security is critical in production. Running containers as root, using images with known vulnerabilities, or exposing unnecessary ports can lead to security breaches. This challenge covers non-root users, image scanning, secrets management, and network policies.',
        steps: [
          'Scan an image for vulnerabilities: docker scout cves nginx:latest',
          'Create a non-root user in Dockerfile: RUN addgroup -S app && adduser -S app -G app',
          'Switch to non-root: USER app',
          'Use read-only filesystem: docker run --read-only --tmpfs /tmp nginx',
          'Limit resources: docker run --memory=256m --cpus=0.5 nginx',
          'Drop all capabilities: docker run --cap-drop=ALL nginx',
          'Use Docker secrets instead of environment variables for sensitive data',
          'Scan your own images: docker scout quickview myapp:latest',
          'Implement health checks in Dockerfile: HEALTHCHECK CMD curl -f http://localhost/ || exit 1'
        ],
        hints: ['Never run containers as root in production', 'Use docker scout or trivy for vulnerability scanning', '--read-only prevents filesystem modifications inside the container'],
        expectedOutput: 'A hardened container running as non-root with limited resources, no excess capabilities, and a clean vulnerability scan.',
        quiz: [
          { q: 'Why should containers run as non-root?', opts: ['Better performance', 'Limits damage if container is compromised', 'Required by Docker', 'Saves disk space'], a: 1 },
          { q: 'What does --cap-drop=ALL do?', opts: ['Stops the container', 'Removes all Linux capabilities', 'Drops all network connections', 'Removes all volumes'], a: 1 },
          { q: 'How should secrets be passed to containers?', opts: ['Environment variables', 'Docker secrets or mounted files', 'Hardcoded in Dockerfile', 'Command line arguments'], a: 1 }
        ]
      }
    ]
  },
  {
    group: '☸️ Kubernetes Challenges',
    icon: '☸️',
    color: 'from-indigo-500 to-blue-500',
    items: [
      {
        title: 'Deploy a Microservices App',
        difficulty: 'Intermediate',
        time: '45 min',
        description: 'Deploy a microservices application with multiple pods, services, and ingress on Kubernetes.',
        explanation: 'Kubernetes is the industry standard for container orchestration. Deploying microservices involves creating Deployments (for scaling), Services (for networking), ConfigMaps (for configuration), and Ingress (for external access). Understanding these resources is essential for any DevOps engineer.',
        steps: [
          'Start a local cluster: minikube start or kind create cluster',
          'Create a namespace: kubectl create namespace microservices',
          'Write a Deployment manifest for the frontend (3 replicas)',
          'Write a Deployment manifest for the backend API (2 replicas)',
          'Create ClusterIP Services for internal communication',
          'Create a ConfigMap for application configuration',
          'Create a Secret for database credentials: kubectl create secret generic db-creds',
          'Write an Ingress resource for external routing',
          'Apply all manifests: kubectl apply -f k8s/',
          'Verify: kubectl get all -n microservices',
          'Test scaling: kubectl scale deployment frontend --replicas=5'
        ],
        hints: ['Use labels consistently for service selector matching', 'ConfigMaps for non-sensitive config, Secrets for sensitive data', 'Ingress needs an Ingress Controller (nginx-ingress) installed'],
        expectedOutput: 'Multiple pods running across deployments, services routing traffic correctly, and ingress providing external access.',
        quiz: [
          { q: 'What is the smallest deployable unit in Kubernetes?', opts: ['Container', 'Pod', 'Deployment', 'Node'], a: 1 },
          { q: 'Which resource type enables horizontal scaling?', opts: ['Service', 'Pod', 'Deployment', 'ConfigMap'], a: 2 },
          { q: 'How do Services find their target Pods?', opts: ['By Pod name', 'By IP address', 'By label selectors', 'By namespace'], a: 2 }
        ]
      },
      {
        title: 'Rolling Updates & Rollbacks',
        difficulty: 'Intermediate',
        time: '30 min',
        description: 'Perform zero-downtime deployments with rolling updates and instant rollbacks.',
        explanation: 'Rolling updates allow you to update your application without downtime by gradually replacing old pods with new ones. If something goes wrong, Kubernetes can instantly roll back to the previous version. This is fundamental to continuous deployment.',
        steps: [
          'Deploy v1 of your app: kubectl apply -f deployment-v1.yaml',
          'Watch pods: kubectl get pods -w',
          'Update to v2: kubectl set image deployment/myapp myapp=myapp:v2',
          'Watch the rolling update: kubectl rollout status deployment/myapp',
          'Check rollout history: kubectl rollout history deployment/myapp',
          'Simulate a bad deployment with v3 (broken image)',
          'Rollback immediately: kubectl rollout undo deployment/myapp',
          'Rollback to specific revision: kubectl rollout undo deployment/myapp --to-revision=1',
          'Configure update strategy: maxSurge and maxUnavailable'
        ],
        hints: ['Use --record flag to track deployment changes', 'maxSurge controls how many extra pods can be created during update', 'Use liveness and readiness probes to detect failed deployments faster'],
        expectedOutput: 'v2 deployment completes with zero downtime. v3 deployment fails and is rolled back to v2 automatically.',
        quiz: [
          { q: 'What strategy does Kubernetes use for zero-downtime updates?', opts: ['Blue-Green', 'Rolling Update', 'Canary', 'Recreate'], a: 1 },
          { q: 'How do you undo a bad deployment?', opts: ['kubectl delete deployment', 'kubectl rollout undo', 'kubectl apply -f old.yaml', 'kubectl restart'], a: 1 },
          { q: 'What does maxUnavailable: 0 ensure?', opts: ['No pods are ever deleted', 'All pods are always available during updates', 'The deployment never fails', 'Zero replicas'], a: 1 }
        ]
      },
      {
        title: 'Kubernetes RBAC & Security',
        difficulty: 'Advanced',
        time: '35 min',
        description: 'Implement Role-Based Access Control and Pod Security in Kubernetes.',
        explanation: 'RBAC controls who can do what in your Kubernetes cluster. Combined with Pod Security Standards, Network Policies, and Service Accounts, you can create a secure multi-tenant cluster. This is critical for enterprise environments.',
        steps: [
          'Create a ServiceAccount: kubectl create sa developer',
          'Create a Role with limited permissions (read-only on pods)',
          'Bind the Role to the ServiceAccount: kubectl create rolebinding',
          'Test access: kubectl auth can-i list pods --as=system:serviceaccount:default:developer',
          'Create a NetworkPolicy to restrict pod-to-pod communication',
          'Set Pod Security Context: runAsNonRoot, readOnlyRootFilesystem',
          'Apply resource quotas to namespace: kubectl apply -f quota.yaml',
          'Verify restrictions work by attempting unauthorized actions'
        ],
        hints: ['Roles are namespace-scoped, ClusterRoles are cluster-wide', 'Always follow least-privilege principle', 'Network Policies default to allow-all if none exist'],
        expectedOutput: 'The developer ServiceAccount can only list and get pods, not create or delete them. Network policies restrict communication between namespaces.',
        quiz: [
          { q: 'What is the difference between Role and ClusterRole?', opts: ['No difference', 'Role is namespace-scoped, ClusterRole is cluster-wide', 'ClusterRole is deprecated', 'Role is for users, ClusterRole is for services'], a: 1 },
          { q: 'What does runAsNonRoot: true enforce?', opts: ['Container must run as root', 'Container cannot run as UID 0', 'Pod runs on non-root nodes', 'Network runs in non-root mode'], a: 1 },
          { q: 'What happens when no NetworkPolicy exists?', opts: ['All traffic is denied', 'All traffic is allowed', 'Only DNS is allowed', 'Error occurs'], a: 1 }
        ]
      }
    ]
  },
  {
    group: '🔄 CI/CD Pipelines',
    icon: '🔄',
    color: 'from-purple-500 to-pink-500',
    items: [
      {
        title: 'GitHub Actions Complete Pipeline',
        difficulty: 'Intermediate',
        time: '40 min',
        description: 'Build a full CI/CD pipeline with testing, building, scanning, and deploying using GitHub Actions.',
        explanation: 'GitHub Actions is the most popular CI/CD platform for modern development. A complete pipeline automates everything from code linting to production deployment. Understanding workflows, jobs, steps, and secrets is essential for DevOps automation.',
        steps: [
          'Create .github/workflows/ci-cd.yml',
          'Add trigger events: push to main, pull_request',
          'Job 1 - Lint: Run ESLint or Pylint on the codebase',
          'Job 2 - Test: Run unit tests with coverage reporting',
          'Job 3 - Build: Build Docker image with git SHA tag',
          'Job 4 - Security Scan: Run Trivy or Snyk on the Docker image',
          'Job 5 - Push: Push image to container registry (GHCR)',
          'Job 6 - Deploy: Deploy to staging/production with environment protection',
          'Add caching for dependencies to speed up builds',
          'Add status badges to README.md',
          'Test by pushing a commit and watching the pipeline'
        ],
        hints: ['Use actions/cache for node_modules or pip packages', 'Use environments with required reviewers for production deploys', 'Store secrets in GitHub Settings > Secrets'],
        expectedOutput: 'A complete pipeline that runs on every push: lint → test → build → scan → push → deploy, with each stage depending on the previous.',
        quiz: [
          { q: 'What file path defines a GitHub Actions workflow?', opts: ['.github/ci.yml', '.github/workflows/*.yml', '.circleci/config.yml', 'Jenkinsfile'], a: 1 },
          { q: 'How are sensitive values stored in GitHub Actions?', opts: ['In the workflow file', 'As repository secrets', 'In a .env file', 'In the Dockerfile'], a: 1 },
          { q: 'What speeds up CI/CD pipelines the most?', opts: ['More runners', 'Dependency caching', 'Smaller code', 'Faster internet'], a: 1 }
        ]
      },
      {
        title: 'Jenkins Pipeline as Code',
        difficulty: 'Advanced',
        time: '45 min',
        description: 'Create a declarative Jenkins pipeline with parallel stages and shared libraries.',
        explanation: 'Jenkins is the most widely used CI server in enterprises. Pipeline as Code (Jenkinsfile) defines your build pipeline in version control alongside your application code. Declarative pipelines are easier to read and maintain than scripted ones.',
        steps: [
          'Create a Jenkinsfile in your repository root',
          'Define pipeline with agent, stages, and post blocks',
          'Stage 1: Checkout code with checkout scm',
          'Stage 2: Run tests in parallel (unit, integration, e2e)',
          'Stage 3: Build artifacts and Docker image',
          'Stage 4: Deploy to staging with input approval',
          'Stage 5: Deploy to production with environment-specific configs',
          'Add post actions: always (cleanup), success (notify), failure (alert)',
          'Configure webhooks for automatic trigger on git push',
          'Add shared library for reusable pipeline functions'
        ],
        hints: ['Use declarative syntax (pipeline { ... }) not scripted', 'parallel {} block runs stages concurrently', 'Use credentials() to inject secrets securely'],
        expectedOutput: 'A multi-stage pipeline that checks out code, runs parallel tests, builds, and deploys with manual approval for production.',
        quiz: [
          { q: 'What is the Jenkins pipeline definition file called?', opts: ['pipeline.yml', 'Jenkinsfile', '.jenkins/config', 'build.groovy'], a: 1 },
          { q: 'How do you run stages in parallel?', opts: ['async { }', 'parallel { }', 'concurrent { }', 'fork { }'], a: 1 },
          { q: 'What does the post { always { } } block do?', opts: ['Runs only on success', 'Runs regardless of pipeline result', 'Runs on the first stage only', 'Posts to a webhook'], a: 1 }
        ]
      }
    ]
  },
  {
    group: '☁️ Cloud & AWS',
    icon: '☁️',
    color: 'from-orange-500 to-yellow-500',
    items: [
      {
        title: 'Deploy to AWS with EC2 & S3',
        difficulty: 'Intermediate',
        time: '45 min',
        description: 'Launch an EC2 instance, configure security groups, and deploy a web app with S3 static hosting.',
        explanation: 'AWS is the leading cloud provider. EC2 provides virtual servers, S3 provides object storage, and Security Groups act as virtual firewalls. Understanding these core services is the foundation of cloud computing for DevOps engineers.',
        steps: [
          'Configure AWS CLI: aws configure (set access key, secret key, region)',
          'Create a key pair: aws ec2 create-key-pair --key-name devops-key',
          'Create a security group allowing SSH (22) and HTTP (80)',
          'Launch an EC2 instance: aws ec2 run-instances with Amazon Linux 2 AMI',
          'SSH into the instance: ssh -i devops-key.pem ec2-user@<public-ip>',
          'Install and start Nginx: sudo yum install -y nginx && sudo systemctl start nginx',
          'Create an S3 bucket: aws s3 mb s3://my-devops-site-123',
          'Enable static website hosting on S3',
          'Upload files: aws s3 sync ./website s3://my-devops-site-123',
          'Access both the EC2 Nginx server and S3 website via browser'
        ],
        hints: ['Always use the principle of least privilege for security groups', 'S3 bucket names must be globally unique', 'Use t2.micro for free tier eligibility'],
        expectedOutput: 'A running EC2 instance serving Nginx on port 80, and an S3 bucket serving a static website.',
        quiz: [
          { q: 'What is the default port for SSH?', opts: ['80', '443', '22', '3306'], a: 2 },
          { q: 'Which AWS service provides virtual servers?', opts: ['S3', 'EC2', 'Lambda', 'RDS'], a: 1 },
          { q: 'What controls network access to EC2 instances?', opts: ['IAM Policies', 'S3 Policies', 'Security Groups', 'Route Tables'], a: 2 }
        ]
      },
      {
        title: 'Serverless with AWS Lambda',
        difficulty: 'Advanced',
        time: '40 min',
        description: 'Build a serverless API using AWS Lambda, API Gateway, and DynamoDB.',
        explanation: 'Serverless computing removes the need to manage servers. AWS Lambda runs your code in response to events, API Gateway provides HTTP endpoints, and DynamoDB offers a scalable NoSQL database. This architecture scales automatically and you pay only for what you use.',
        steps: [
          'Create a DynamoDB table: aws dynamodb create-table',
          'Write a Lambda function in Python to handle CRUD operations',
          'Package and deploy: zip function.zip lambda_function.py',
          'Create a Lambda function: aws lambda create-function',
          'Create an API Gateway REST API',
          'Create resources and methods (GET, POST, DELETE)',
          'Integrate API Gateway with Lambda',
          'Deploy the API: aws apigateway create-deployment',
          'Test with curl: curl -X POST https://api-id.execute-api.region.amazonaws.com/prod/items'
        ],
        hints: ['Lambda timeout default is 3 seconds — increase for complex operations', 'Use environment variables for DynamoDB table name', 'API Gateway supports request/response transformation'],
        expectedOutput: 'A fully functional REST API backed by Lambda and DynamoDB, accessible via a public HTTPS endpoint.',
        quiz: [
          { q: 'What triggers an AWS Lambda function in this scenario?', opts: ['Cron schedule', 'API Gateway HTTP request', 'S3 file upload', 'SNS notification'], a: 1 },
          { q: 'What is the maximum default timeout for Lambda?', opts: ['30 seconds', '1 minute', '15 minutes', '1 hour'], a: 2 },
          { q: 'What type of database is DynamoDB?', opts: ['Relational SQL', 'Graph database', 'NoSQL key-value', 'Time-series'], a: 2 }
        ]
      }
    ]
  },
  {
    group: '🏗️ Infrastructure as Code',
    icon: '🏗️',
    color: 'from-teal-500 to-cyan-500',
    items: [
      {
        title: 'Terraform AWS Infrastructure',
        difficulty: 'Intermediate',
        time: '45 min',
        description: 'Provision a complete AWS infrastructure with VPC, subnets, EC2, and RDS using Terraform.',
        explanation: 'Terraform enables you to define infrastructure as code, making it reproducible, version-controlled, and reviewable. Instead of clicking through AWS console, you write declarative HCL code that Terraform translates into API calls. This is the backbone of modern infrastructure management.',
        steps: [
          'Initialize project: mkdir terraform-aws && cd terraform-aws',
          'Write provider.tf: Configure AWS provider with region',
          'Write vpc.tf: Create VPC, public/private subnets, internet gateway',
          'Write security.tf: Security groups for web, app, and database tiers',
          'Write ec2.tf: Launch EC2 instances in public subnet',
          'Write rds.tf: Create PostgreSQL RDS in private subnet',
          'Write outputs.tf: Output public IP, RDS endpoint, VPC ID',
          'Initialize: terraform init',
          'Plan: terraform plan (review changes)',
          'Apply: terraform apply -auto-approve',
          'Verify: terraform show && terraform state list',
          'Destroy when done: terraform destroy'
        ],
        hints: ['Always run terraform plan before apply', 'Use variables.tf for configurable values', 'State file should be stored remotely (S3) for team collaboration'],
        expectedOutput: 'A complete VPC with subnets, an EC2 instance accessible via SSH, and an RDS database in a private subnet.',
        quiz: [
          { q: 'What command shows planned infrastructure changes?', opts: ['terraform show', 'terraform plan', 'terraform status', 'terraform diff'], a: 1 },
          { q: 'Where should Terraform state be stored in a team?', opts: ['Local filesystem', 'Git repository', 'Remote backend (S3)', 'Docker volume'], a: 2 },
          { q: 'What language does Terraform use?', opts: ['YAML', 'JSON', 'HCL (HashiCorp Configuration Language)', 'Python'], a: 2 }
        ]
      },
      {
        title: 'Ansible Configuration Management',
        difficulty: 'Intermediate',
        time: '40 min',
        description: 'Automate server configuration with Ansible playbooks, roles, and templates.',
        explanation: 'Ansible automates configuration management using agentless SSH connections. Playbooks define the desired state of your servers in YAML, and Ansible ensures they match. Roles organize complex playbooks into reusable, shareable components.',
        steps: [
          'Install Ansible: pip install ansible',
          'Create inventory file with target hosts grouped by role',
          'Write a playbook to install and configure Nginx',
          'Use Ansible templates (Jinja2) for dynamic config files',
          'Create a role structure: ansible-galaxy init webserver',
          'Define tasks, handlers, templates, and variables in the role',
          'Use Ansible Vault for secrets: ansible-vault create secrets.yml',
          'Run the playbook: ansible-playbook -i inventory site.yml',
          'Verify idempotency: Run again — no changes should occur',
          'Add tags for selective execution: ansible-playbook site.yml --tags nginx'
        ],
        hints: ['Ansible is agentless — only needs SSH access', 'Handlers run only when notified by a changed task', 'Use --check flag for dry-run mode'],
        expectedOutput: 'Target servers configured with Nginx, custom config from templates, and secrets encrypted with Vault. Running twice shows no changes (idempotent).',
        quiz: [
          { q: 'What protocol does Ansible use to connect to servers?', opts: ['HTTP', 'SSH', 'SNMP', 'RPC'], a: 1 },
          { q: 'What does idempotent mean?', opts: ['Runs only once', 'Running multiple times produces the same result', 'Cannot be reversed', 'Runs in parallel'], a: 1 },
          { q: 'How are secrets managed in Ansible?', opts: ['Plain text files', 'Environment variables', 'Ansible Vault', 'Docker secrets'], a: 2 }
        ]
      }
    ]
  },
  {
    group: '📊 Monitoring & Observability',
    icon: '📊',
    color: 'from-rose-500 to-pink-500',
    items: [
      {
        title: 'Prometheus & Grafana Setup',
        difficulty: 'Intermediate',
        time: '45 min',
        description: 'Set up a complete monitoring stack with Prometheus metrics collection and Grafana dashboards.',
        explanation: 'Prometheus collects and stores metrics as time-series data, while Grafana visualizes them in beautiful dashboards. Together, they form the most popular open-source monitoring stack. Understanding metrics, alerts, and dashboards is crucial for maintaining reliable systems.',
        steps: [
          'Create docker-compose.yml with Prometheus and Grafana services',
          'Write prometheus.yml config with scrape targets',
          'Add Node Exporter for system metrics',
          'Launch: docker compose up -d',
          'Access Prometheus UI at http://localhost:9090',
          'Write PromQL queries: rate(node_cpu_seconds_total[5m])',
          'Access Grafana at http://localhost:3000 (admin/admin)',
          'Add Prometheus as a data source in Grafana',
          'Import a pre-built dashboard (ID: 1860 for Node Exporter)',
          'Create a custom dashboard with CPU, memory, disk panels',
          'Set up alert rules for high CPU (>80%) and disk usage (>90%)'
        ],
        hints: ['PromQL rate() function is essential for counter metrics', 'Use recording rules for frequently used complex queries', 'Grafana dashboard ID 1860 is a popular Node Exporter dashboard'],
        expectedOutput: 'Prometheus collecting metrics every 15s, Grafana showing real-time dashboards with CPU, memory, disk, and network graphs.',
        quiz: [
          { q: 'What data model does Prometheus use?', opts: ['Relational tables', 'Document store', 'Time-series', 'Graph database'], a: 2 },
          { q: 'What is PromQL used for?', opts: ['Container orchestration', 'Querying Prometheus metrics', 'Configuration management', 'Log analysis'], a: 1 },
          { q: 'What port does Grafana run on by default?', opts: ['8080', '9090', '3000', '5601'], a: 2 }
        ]
      },
      {
        title: 'ELK Stack Log Management',
        difficulty: 'Advanced',
        time: '50 min',
        description: 'Deploy the ELK stack (Elasticsearch, Logstash, Kibana) for centralized log management.',
        explanation: 'The ELK stack is the industry standard for centralized logging. Elasticsearch stores and indexes logs, Logstash processes and transforms them, and Kibana provides powerful search and visualization. This enables you to troubleshoot issues across hundreds of servers from a single interface.',
        steps: [
          'Create docker-compose.yml with Elasticsearch, Logstash, and Kibana',
          'Configure Elasticsearch cluster settings and memory limits',
          'Write Logstash pipeline: input (beats), filter (grok, date), output (elasticsearch)',
          'Configure Kibana to connect to Elasticsearch',
          'Launch the stack: docker compose up -d',
          'Install Filebeat on a server to ship logs',
          'Configure Filebeat to send to Logstash',
          'Access Kibana at http://localhost:5601',
          'Create an index pattern in Kibana',
          'Build a dashboard with log volume, error rate, and top sources',
          'Set up alerts for error spikes'
        ],
        hints: ['Elasticsearch needs at least 2GB of heap memory', 'Grok patterns parse unstructured log data into fields', 'Use Filebeat instead of Logstash for simple log shipping'],
        expectedOutput: 'Centralized logs searchable in Kibana, with parsed fields, visualizations, and alerts for error patterns.',
        quiz: [
          { q: 'What does the "E" in ELK stand for?', opts: ['Envoy', 'Elastic/Elasticsearch', 'Event', 'Endpoint'], a: 1 },
          { q: 'Which component processes and transforms logs?', opts: ['Elasticsearch', 'Kibana', 'Logstash', 'Filebeat'], a: 2 },
          { q: 'What is a grok pattern used for?', opts: ['Data encryption', 'Log parsing and field extraction', 'Network routing', 'Container orchestration'], a: 1 }
        ]
      }
    ]
  },
  {
    group: '🔐 Security & DevSecOps',
    icon: '🔐',
    color: 'from-red-500 to-rose-500',
    items: [
      {
        title: 'Secret Management with Vault',
        difficulty: 'Advanced',
        time: '40 min',
        description: 'Set up HashiCorp Vault for secure secret management with dynamic credentials.',
        explanation: 'HashiCorp Vault is the leading solution for secrets management. It provides centralized secret storage, dynamic credentials (temporary passwords that expire), encryption as a service, and detailed audit logs. Every production environment should have a secrets management solution.',
        steps: [
          'Run Vault in dev mode: vault server -dev',
          'Set environment: export VAULT_ADDR="http://127.0.0.1:8200"',
          'Store a secret: vault kv put secret/myapp db_password=supersecret',
          'Retrieve a secret: vault kv get secret/myapp',
          'Enable the database secrets engine: vault secrets enable database',
          'Configure dynamic database credentials that expire after 1 hour',
          'Create a Vault policy limiting access to specific paths',
          'Generate a token with the policy attached',
          'Integrate Vault with a Kubernetes pod using the Vault Agent',
          'Enable audit logging: vault audit enable file file_path=/var/log/vault_audit.log'
        ],
        hints: ['Never use dev mode in production — always use TLS and proper storage backend', 'Dynamic secrets are more secure because they expire automatically', 'Use policies to follow least-privilege access'],
        expectedOutput: 'Vault running with stored secrets, dynamic database credentials rotating every hour, and audit logs capturing all access.',
        quiz: [
          { q: 'What are dynamic secrets?', opts: ['Secrets that change format', 'Temporary credentials generated on-demand that expire', 'Encrypted secrets', 'Secrets stored in environment variables'], a: 1 },
          { q: 'What does vault kv put do?', opts: ['Creates a new vault', 'Stores a key-value secret', 'Generates a token', 'Enables audit log'], a: 1 },
          { q: 'Why is dev mode unsafe for production?', opts: ['It is slower', 'Secrets are stored in memory and it uses HTTP', 'It costs more', 'It does not support policies'], a: 1 }
        ]
      },
      {
        title: 'Container Image Scanning Pipeline',
        difficulty: 'Intermediate',
        time: '30 min',
        description: 'Integrate security scanning into your CI/CD pipeline to catch vulnerabilities before deployment.',
        explanation: 'Shifting security left means finding vulnerabilities early in the development process. Container image scanning analyzes your Docker images for known CVEs (Common Vulnerabilities and Exposures), misconfiguration, and compliance violations. This should be a mandatory step in every CI/CD pipeline.',
        steps: [
          'Install Trivy: brew install trivy (or apt-get install trivy)',
          'Scan a popular image: trivy image nginx:latest',
          'Understand severity levels: CRITICAL, HIGH, MEDIUM, LOW',
          'Scan your own Dockerfile: trivy config Dockerfile',
          'Add Trivy to GitHub Actions workflow as a CI step',
          'Set policy: fail the build on CRITICAL or HIGH vulnerabilities',
          'Generate reports in JSON and HTML format',
          'Scan for misconfigurations: trivy config --severity HIGH .',
          'Create an allow-list for accepted vulnerabilities (.trivyignore)',
          'Set up scheduled scans for running containers'
        ],
        hints: ['Use --exit-code 1 to fail CI pipeline on findings', 'Alpine-based images typically have fewer vulnerabilities', '.trivyignore file skips known/accepted CVEs'],
        expectedOutput: 'A CI pipeline that scans every Docker image before deployment, blocking releases with critical vulnerabilities.',
        quiz: [
          { q: 'What does CVE stand for?', opts: ['Container Virtual Environment', 'Common Vulnerabilities and Exposures', 'Cloud Vendor Extension', 'Continuous Validation Engine'], a: 1 },
          { q: 'What does "shift left" mean in DevSecOps?', opts: ['Deploy to left region', 'Move security earlier in the development process', 'Use left-handed tools', 'Shift workload to dev team'], a: 1 },
          { q: 'How do you fail a CI build on critical findings?', opts: ['--strict mode', '--exit-code 1 --severity CRITICAL', '--fail-fast', '--block-deploy'], a: 1 }
        ]
      }
    ]
  },
  {
    group: '🐍 Python for DevOps',
    icon: '🐍',
    color: 'from-yellow-500 to-green-500',
    items: [
      {
        title: 'AWS Automation with Boto3',
        difficulty: 'Intermediate',
        time: '35 min',
        description: 'Automate AWS infrastructure management using Python and the Boto3 SDK.',
        explanation: 'Boto3 is the official AWS SDK for Python. It allows you to programmatically manage AWS services — create EC2 instances, manage S3 buckets, configure IAM, and more. Python scripts with Boto3 are common in DevOps for automation tasks that are too complex for shell scripts.',
        steps: [
          'Install boto3: pip install boto3',
          'Configure credentials: aws configure or use environment variables',
          'List all EC2 instances: ec2.describe_instances()',
          'Create a function to launch EC2 with specific AMI and instance type',
          'Write a script to find and clean up unused EBS volumes',
          'Automate S3 bucket lifecycle policies',
          'Create a Lambda deployment script',
          'Build a cost optimization script that stops idle instances',
          'Add error handling with botocore.exceptions',
          'Schedule with cron or AWS EventBridge'
        ],
        hints: ['Use boto3.resource() for high-level interface, boto3.client() for low-level', 'Always handle pagination for large result sets', 'Use Waiter objects to wait for resource state changes'],
        expectedOutput: 'Python scripts that can list, create, and manage AWS resources automatically with proper error handling.',
        quiz: [
          { q: 'What is Boto3?', opts: ['A container runtime', 'AWS SDK for Python', 'A CI/CD tool', 'A monitoring agent'], a: 1 },
          { q: 'What is the difference between boto3.client() and boto3.resource()?', opts: ['No difference', 'client is low-level API, resource is high-level OOP interface', 'client is faster', 'resource is deprecated'], a: 1 },
          { q: 'How should AWS credentials be managed in scripts?', opts: ['Hardcoded in source code', 'Environment variables or IAM roles', 'In a text file', 'As command line arguments'], a: 1 }
        ]
      },
      {
        title: 'REST API Health Monitor',
        difficulty: 'Intermediate',
        time: '30 min',
        description: 'Build a Python service that monitors API endpoints and sends alerts on failures.',
        explanation: 'Custom monitoring scripts complement tools like Prometheus for specific use cases. This script checks API endpoints for availability, response time, and correct content, then sends notifications when issues are detected. This pattern is used for synthetic monitoring in production.',
        steps: [
          'Install requests: pip install requests',
          'Define endpoints to monitor with expected status codes',
          'Write a check function: measure response time, verify status code',
          'Add content verification: check response body for expected strings',
          'Implement retry logic with exponential backoff',
          'Add alerting via Slack webhook or email (SMTP)',
          'Store results in a JSON log file for historical tracking',
          'Create a summary dashboard output',
          'Schedule checks every 60 seconds with a while loop + time.sleep',
          'Add SSL certificate expiry checking'
        ],
        hints: ['Use requests.get(url, timeout=5) to avoid hanging', 'Exponential backoff: wait 1s, 2s, 4s, 8s between retries', 'Use threading for concurrent endpoint checking'],
        expectedOutput: 'A monitoring service that checks endpoints every minute, logs results, and alerts on failures or slow responses.',
        quiz: [
          { q: 'What HTTP status code indicates success?', opts: ['301', '200', '404', '500'], a: 1 },
          { q: 'What is exponential backoff?', opts: ['Increasing wait time between retries', 'Backing up data exponentially', 'Reducing server load linearly', 'Caching responses'], a: 0 },
          { q: 'Why set a timeout on HTTP requests?', opts: ['To speed up the internet', 'To prevent requests from hanging indefinitely', 'To reduce bandwidth', 'Timeouts are optional'], a: 1 }
        ]
      }
    ]
  }
];
