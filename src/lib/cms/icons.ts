import {
  BarChart3,
  Bell,
  BellRing,
  BookOpen,
  Boxes,
  Briefcase,
  Building2,
  Bus,
  Calculator,
  Calendar,
  CalendarCheck,
  Car,
  ClipboardList,
  Cloud,
  Code2,
  Cpu,
  CreditCard,
  Database,
  Factory,
  FileText,
  Globe,
  GraduationCap,
  HeartPulse,
  Hotel,
  Layers,
  LayoutDashboard,
  LineChart,
  Lock,
  Mail,
  MapPin,
  MessageCircle,
  MessagesSquare,
  Package,
  PieChart,
  Receipt,
  ScanEye,
  School,
  Search,
  Settings,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Stethoscope,
  Store,
  Truck,
  Users,
  UtensilsCrossed,
  Wallet,
  Warehouse,
  Wrench,
  type LucideIcon,
} from 'lucide-react';

/** Icons the CMS can assign to products and project highlights, by name. */
export const CMS_ICONS = {
  BarChart3, Bell, BellRing, BookOpen, Boxes, Briefcase, Building2, Bus, Calculator, Calendar, CalendarCheck, Car,
  ClipboardList, Cloud, Code2, Cpu, CreditCard, Database, Factory, FileText, Globe, GraduationCap, HeartPulse, Hotel,
  Layers, LayoutDashboard, LineChart, Lock, Mail, MapPin, MessageCircle, MessagesSquare, Package, PieChart, Receipt,
  ScanEye, School, Search, Settings, ShieldCheck, ShoppingCart, Smartphone, Stethoscope, Store, Truck, Users,
  UtensilsCrossed, Wallet, Warehouse, Wrench,
} satisfies Record<string, LucideIcon>;

export type CmsIconName = keyof typeof CMS_ICONS;
export const CMS_ICON_NAMES = Object.keys(CMS_ICONS) as CmsIconName[];

/** The icon for a stored name; unknown names fall back to a neutral icon instead of breaking the page. */
export function cmsIcon(name: string | undefined, fallback: LucideIcon = Layers): LucideIcon {
  return (name && (CMS_ICONS as Record<string, LucideIcon>)[name]) || fallback;
}
