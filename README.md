# 🌐 Get my IP

A simple, lightweight website built with [Bun](https://bun.sh)
that displays the client's public IP address in a clean way with zero bloat.

## 🚀 Features
- Retrieves the real client IP via the `x-forwarded-for` header (works behind reverse proxies)
- Minimal, dark-themed UI
- 
## 📦 Requirements
- [Bun](https://bun.sh/docs/installation) installed on your system
- Node-compatible environment
- Optional: Reverse proxy (e.g., NGINX) if you're running this in production behind a firewall/load balancer

## 🛠 Setup

1. **Clone the repository:**
```bash
git clone hhttps://github.com/HeapReaper/get-my-ip.git
cd get-my-ip
bun --watch src/index.ts
```
2. Visit the site:
http://localhost:3132