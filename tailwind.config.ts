import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cis: {
          bg: '#FFFFFF',
          card: '#FFFFFF',
          'card-solid': '#FFFFFF',
          surface: '#F8FAFC',
          elevated: '#F1F5F9',
          border: '#E2E8F0',
          'border-hover': '#0284C7',
          text: '#0F172A',
          black: '#000000',
          muted: '#475569',
          dim: '#64748B',
          blue: '#0284C7',
          'blue-dark': '#0369A1',
          'blue-light': '#E0F2FE',
          'blue-50': '#F0F9FF',
          cyan: '#06B6D4',
          gold: '#F59E0B',
          amber: '#D97706',
          dark: '#0B1120',
          'dark-card': '#111827',
          'dark-border': '#1F2937',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        display: ['Space Grotesk', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      dropShadow: {
        'emblem-sm': '0 2px 8px rgba(2, 132, 199, 0.3)',
        'emblem-md': '0 6px 14px rgba(2, 132, 199, 0.15)',
        'emblem-lg': '0 10px 24px rgba(2, 132, 199, 0.12)',
        'emblem-glow': '0 8px 26px rgba(2, 132, 199, 0.55)',
      },
      boxShadow: {
        'clean-sm': '0 1px 3px 0 rgba(0, 0, 0, 0.05)',
        'clean-md': '0 4px 14px -2px rgba(15, 23, 42, 0.08)',
        'clean-lg': '0 10px 25px -3px rgba(15, 23, 42, 0.1)',
        'blue-sm': '0 2px 8px -1px rgba(2, 132, 199, 0.2)',
        'blue-md': '0 8px 20px -2px rgba(2, 132, 199, 0.25)',
        'blue-glow': '0 0 25px -3px rgba(2, 132, 199, 0.4)',
        'blue-card': '0 8px 26px rgba(2, 132, 199, 0.12)',
        'blue-hover': '0 12px 28px rgba(2, 132, 199, 0.16)',
        'gold-glow': '0 0 25px -3px rgba(245, 158, 11, 0.4)',
        'cyan-glow': '0 0 25px -3px rgba(6, 182, 212, 0.4)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 18s linear infinite',
        'float': 'float 4s ease-in-out infinite',
        'marquee': 'marquee 35s linear infinite',
        'marquee-reverse': 'marqueeReverse 35s linear infinite',
        'scanline': 'scanline 8s linear infinite',
        'circuit-pulse': 'circuitPulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
        circuitPulse: {
          '0%, 100%': { opacity: '0.4', filter: 'drop-shadow(0 0 2px #0284C7)' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 10px #0284C7)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
