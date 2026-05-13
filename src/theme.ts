import { useColorScheme } from 'react-native';

export const lightColors = { background: '#F8FAFC', surface: '#FFFFFF', textPrimary: '#0F172A', accent: '#0055FF', border: '#E2E8F0', exactMatchBg: '#D1FAE5', exactMatchText: '#065F46', aiMatchBg: '#FEF3C7', aiMatchText: '#92400E' };
export const darkColors = { background: '#020617', surface: '#0F172A', textPrimary: '#F8FAFC', accent: '#3B82F6', border: '#1E293B', exactMatchBg: '#064E3B', exactMatchText: '#34D399', aiMatchBg: '#451A03', aiMatchText: '#FBBF24' };

export function useTheme() {
  const isDark = useColorScheme() === 'dark';
  return { colors: isDark ? darkColors : lightColors, mono: 'monospace' };
}

