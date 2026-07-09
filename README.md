# Neat Billing Protocol (NBP)

> **An open-source ISP Billing & AAA platform built on the RADIUS ecosystem, introducing FairTime™ active-session billing for hotspot and PPPoE networks.**

---

## 📖 Overview

Neat Billing Protocol (NBP) is an open-source project focused on building a modern ISP billing platform by extending proven RADIUS infrastructure instead of reinventing it.

The project aims to combine authentication, authorization, accounting, billing, analytics, and network operations into a modular platform while introducing **FairTime™**, an active-session billing model that ensures customers only consume the internet time they actually use.

Rather than building an AAA server from scratch, NBP is being engineered as an extensible layer on top of mature open-source technologies such as RadiusDesk and FreeRADIUS.

---

# 🎯 Vision

To become the most extensible open-source ISP billing platform that enables providers to deliver fair, intelligent, and scalable internet services.

---

# 🚀 Mission

Build a modern billing platform that helps ISPs:

- Manage Hotspot and PPPoE services
- Authenticate users securely
- Generate and manage vouchers
- Track sessions accurately
- Monitor network activity
- Provide actionable business analytics
- Deliver fairer billing through FairTime™

---

# 💡 The Problem

Traditional hotspot billing systems typically sell internet based on **calendar time**.

Example:

```
24-Hour Voucher

Purchased:
08:00 AM

Expires:
08:00 AM Tomorrow
```

Even if the customer only used the internet for 3 hours, the remaining 21 hours are lost.

Power outages, router failures, and unexpected disconnections continue consuming purchased time, creating customer frustration and reducing trust.

---

# ✅ The Solution

Neat Billing Protocol introduces **FairTime™**.

Instead of counting down continuously, billing is based on **actual active session time**.

Example:

```
24 Hours Purchased

Day 1:
10 Hours Used

Remaining:
14 Hours

Day 2:
8 Hours Used

Remaining:
6 Hours

Day 3:
6 Hours Used

Voucher Complete
```

Customers only consume internet while actively connected.

---

# ⭐ Core Objectives

- Modern ISP Billing Platform
- Hotspot Management
- PPPoE Management
- Voucher Management
- Session Accounting
- Provider Dashboard
- Router Management
- Revenue Analytics
- Extensible Architecture
- FairTime™ Active Billing

---

# 🏗 High-Level Architecture

```
                  Provider Dashboard
                          │
                          ▼
                  Neat Billing API
                          │
        ┌─────────────────┼─────────────────┐
        │                 │                 │
 Authentication      Billing Engine    Analytics
        │                 │                 │
        └─────────────────┼─────────────────┘
                          │
                    PostgreSQL
                          │
                    FreeRADIUS
                          │
                    MikroTik Router
                          │
                    Internet Users
```

---

# 🧩 Planned Modules

## Core Platform

- Authentication
- Organization Management
- User & Role Management
- Router Management
- Customer Management
- Package Management

---

## Billing

- Voucher Engine
- Billing Engine
- Payment Engine
- FairTime™ Engine

---

## Network

- Hotspot
- PPPoE
- Session Engine
- Accounting
- Outage Detection

---

## Operations

- Reports
- Revenue Analytics
- Notifications
- Monitoring
- Dashboard

---

# 🛠 Technology Stack

## Backend

- Node.js
- Express.js

## Database

- PostgreSQL

## Network

- FreeRADIUS
- MikroTik RouterOS
- RADIUS

## Foundation

- RadiusDesk

---

# 🧠 Engineering Philosophy

Neat Billing Protocol is **not** attempting to replace the RADIUS ecosystem.

Instead, it builds upon mature open-source infrastructure by extending existing authentication and accounting capabilities with modern billing and business logic.

```
FreeRADIUS
        +
RadiusDesk
        +
Neat Billing Protocol
        =
Modern ISP Billing Platform
```

---

# 📂 Project Status

Current phase:

> **Architecture Research & Reverse Engineering**

Current focus includes:

- RadiusDesk Architecture
- FreeRADIUS Policy Flow
- Session Accounting
- Voucher Architecture
- Profile Architecture
- RADIUS Attribute Generation
- Extension Points for FairTime™

---

# 🛣 Development Roadmap

## Phase 1

- Research
- Reverse Engineer RadiusDesk
- Understand FreeRADIUS
- Database Design

---

## Phase 2

- Authentication
- Router Management
- Customer Management
- Voucher Engine

---

## Phase 3

- Billing Engine
- Session Engine
- Payment Integration
- Analytics

---

## Phase 4

- FairTime™
- Outage Intelligence
- Business Intelligence
- Advanced Reporting

---

# 🎯 Long-Term Goals

- Multi-tenant Architecture
- Cloud Deployment
- High Availability
- REST API
- Plugin System
- Mobile Support
- Enterprise Analytics

---

# 🤝 Contributing

Contributions are welcome.

If you'd like to contribute:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push your branch
5. Open a Pull Request

---

# 📜 License

This project will be released under the MIT License.

---

# ⚠️ Disclaimer

Neat Billing Protocol is currently under active research and development.

Features, architecture, and implementation details may evolve as the project progresses.

---

# 🙏 Acknowledgements

This project builds upon the excellent work of the open-source networking community, particularly:

- FreeRADIUS
- RadiusDesk
- MikroTik RouterOS
- PostgreSQL
- Node.js
- Express.js

Their contributions have made projects like Neat Billing Protocol possible.

---

## ⭐ Support the Project

If you find this project interesting:

- ⭐ Star the repository
- 🍴 Fork it
- 💬 Share feedback
- 🤝 Contribute ideas or code

Together, we can build a fairer and more intelligent ISP billing platform.
