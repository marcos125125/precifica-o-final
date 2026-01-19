import React from 'react';
import { LucideIcon } from "lucide-react";

export interface SlideProps {
  isActive: boolean;
}

export interface NavItem {
  icon: LucideIcon;
  label?: string;
  action?: () => void;
}

export interface SlideItem {
  id: string;
  component: React.ReactNode;
  isDark?: boolean;
}