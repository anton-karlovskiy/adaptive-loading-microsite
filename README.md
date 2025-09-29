# Adaptive Loading Microsite

> **Differentially deliver fast, lighter experiences for users on slow networks & devices**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-adaptive--loading.web.app-blue?style=flat-square&logo=firebase)](https://adaptive-loading.web.app/)
[![GitHub](https://img.shields.io/badge/GitHub-GoogleChromeLabs%2Fadaptive--loading-black?style=flat-square&logo=github)](https://github.com/GoogleChromeLabs/adaptive-loading/)
[![License](https://img.shields.io/badge/License-Apache%202.0-green?style=flat-square)](https://opensource.org/licenses/Apache-2.0)

A comprehensive showcase of **adaptive loading strategies** for modern web applications. This microsite demonstrates how to deliver optimized experiences based on user device capabilities, network conditions, and hardware constraints.

## 🚀 Features

### **Adaptive Loading Techniques**
- **Network-aware loading** - Optimize content based on connection speed
- **Memory-considerate loading** - Adapt to device memory constraints  
- **Battery-aware loading** - Respect user's battery preferences
- **Hardware concurrency optimization** - Scale based on CPU cores
- **Save Data API integration** - Honor data saver preferences
- **Device class awareness** - Target specific device capabilities

### **Framework Support**
- **React** - Complete React Hooks library for adaptive loading
- **Next.js** - Server-side rendering with adaptive strategies
- **Node.js** - Backend adaptive serving examples
- **Create React App** - Client-side adaptive loading patterns

## 📱 Live Demos

Explore **24+ interactive demos** showcasing different adaptive loading strategies:

### **React Examples**
- [React Twitter - Save Data Loading](https://adaptive-loading.web.app/react-twitter-save-data-loading(client-hint)/)
- [React Movie - Network-Aware Loading](https://adaptive-loading.web.app/react-movie-network-aware-loading/)
- [React Shrine - Network-Aware Code Splitting](https://adaptive-loading.web.app/react-shrine-network-aware-code-splitting/)
- [React YouTube - Multi-Factor Adaptive Loading](https://adaptive-loading.web.app/react-youtube-adaptive-loading/)

### **Create React App Examples**
- [Network-Aware Loading](https://adaptive-loading.web.app/cra-network-aware-loading/)
- [Memory-Considerate Loading](https://adaptive-loading.web.app/cra-memory-considerate-loading/)
- [Battery-Considerate Loading](https://adaptive-loading.web.app/cra-battery-considerate-loading/)
- [Hardware Concurrency Optimization](https://adaptive-loading.web.app/cra-hardware-concurrency-considerate-loading/)

### **Node.js Examples**
- [DPR-Aware Loading](https://adaptive-loading.web.app/node-dpr-aware-loading/)
- [Memory Client Hints](https://adaptive-loading.web.app/node-memory-considerate-loading/)
- [Network Client Hints](https://adaptive-loading.web.app/node-network-aware-loading/)

## 🛠 React Adaptive Hooks

This project includes a comprehensive **React Hooks library** for adaptive loading:

```bash
npm install react-adaptive-hooks
```

### **Available Hooks**

```javascript
import { useNetworkStatus } from 'react-adaptive-hooks/network';
import { useSaveData } from 'react-adaptive-hooks/save-data';
import { useHardwareConcurrency } from 'react-adaptive-hooks/hardware-concurrency';
import { useMemoryStatus } from 'react-adaptive-hooks/memory';
```

### **Quick Example**

```javascript
import React from 'react';
import { useNetworkStatus } from 'react-adaptive-hooks/network';

const AdaptiveComponent = () => {
  const { effectiveConnectionType } = useNetworkStatus();
  
  return (
    <div>
      {effectiveConnectionType === '4g' ? (
        <video controls>High-quality video</video>
      ) : (
        <img src="optimized-image.jpg" alt="Lightweight content" />
      )}
    </div>
  );
};
```

## 🌐 Browser Support

| API | Chrome | Firefox | Safari | Edge |
|-----|--------|---------|--------|------|
| **Network Information API** | 61+ | 68+ (Android) | - | 76+ |
| **Save Data API** | 65+ | - | - | - |
| **Hardware Concurrency** | 37+ | 48+ | 10.1+ | 15+ |
| **Device Memory API** | 63+ | - | - | 50+ |

## 🚀 Getting Started

### **Prerequisites**
- Node.js 12+ 
- npm or yarn

### **Installation**

```bash
# Clone the repository
git clone https://github.com/GoogleChromeLabs/adaptive-loading.git
cd adaptive-loading-microsite

# Install dependencies
npm install
# or
yarn install

# Start development server
npm run dev
# or
yarn dev
```

### **Available Scripts**

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run deploy   # Deploy to Firebase
npm run serve    # Serve locally with Firebase
```

## 📚 Resources & Learning

### **Key Concepts**
- **Adaptive Loading** - Delivering experiences optimized for user constraints
- **Network Information API** - Detecting connection quality
- **Client Hints** - Server-side device capability detection
- **Progressive Enhancement** - Building from core to advanced features

### **Learning Materials**
- [Chrome Dev Summit Talk](https://www.youtube.com/watch?v=puUPpVrIRkc) - Deep dive into adaptive loading
- [Adaptive Serving Guide](https://web.dev/adaptive-serving-based-on-network-quality/) - Web.dev comprehensive guide
- [Sophisticated Adaptive Loading Strategies](https://medium.com/@roderickhsiao/sophisticated-adaptive-loading-strategies-7118341fcf91) - Advanced techniques

### **Related Projects**
- [React Adaptive Hooks](https://github.com/GoogleChromeLabs/react-adaptive-hooks) - Official React hooks library
- [Device Year Class](https://engineering.fb.com/android/year-class-a-classification-system-for-android/) - Facebook's device classification system

## 🏗 Architecture

This microsite is built with:

- **Next.js 9.1.1** - React framework with SSR
- **React 16.11.0** - Component library
- **Firebase Hosting** - Static site deployment
- **GitHub Pages** - Alternative hosting
- **LazySizes** - Image lazy loading
- **React Markdown** - Documentation rendering

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](https://github.com/GoogleChromeLabs/adaptive-loading/blob/master/CONTRIBUTING.md) for details.

### **Development Setup**

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and test thoroughly
4. Commit your changes: `git commit -m 'Add amazing feature'`
5. Push to the branch: `git push origin feature/amazing-feature`
6. Open a Pull Request

## 📄 License

This project is licensed under the **Apache License 2.0** - see the [LICENSE](https://github.com/GoogleChromeLabs/adaptive-loading/blob/master/LICENSE) file for details.

## 👥 Team

- **[Addy Osmani](https://github.com/addyosmani)** - Engineering Manager, Chrome DevRel
- **[Anton Karlovskiy](https://github.com/anton-karlovskiy)** - Developer, Chrome DevRel

## 🔗 Links

- **Live Demo**: [adaptive-loading.web.app](https://adaptive-loading.web.app/)
- **GitHub Repository**: [GoogleChromeLabs/adaptive-loading](https://github.com/GoogleChromeLabs/adaptive-loading/)
- **React Hooks Library**: [react-adaptive-hooks](https://github.com/GoogleChromeLabs/react-adaptive-hooks/)
- **Chrome Dev Summit Talk**: [YouTube Video](https://www.youtube.com/watch?v=puUPpVrIRkc)

---

**Built with ❤️ by the Chrome DevRel team to help developers create better web experiences for all users.**