interface User {
  id: string;
  createdAt: string;
  email: string;
  role: string;
  plan: string;
  avatar: string;
}

interface Product {
  id: string;
  createdAt: string;
  name: string;
  price: number;
  inventory: number;
  supplier: string;
}

interface ProfitPrediction {
  id: string;
  createdAt: string;
  predictedProfit: number;
  confidenceLevel: number;
}

interface InventoryOptimization {
  id: string;
  createdAt: string;
  recommendedInventoryLevel: number;
  reasons: string[];
}

interface PricingStrategy {
  id: string;
  createdAt: string;
  strategy: string;
  recommendedPrice: number;
}

interface RealTimeDashboard {
  id: string;
  createdAt: string;
  currentProfit: number;
  currentInventory: number;
  salesPerformance: string;
}

interface AutomatedAlert {
  id: string;
  createdAt: string;
  alertType: string;
  alertMessage: string;
}

type ApiResponse<T> = {
  ok: boolean;
  data?: T;
  error?: string;
}

type PaginatedResponse<T> = {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
}

export {
  User,
  Product,
  ProfitPrediction,
  InventoryOptimization,
  PricingStrategy,
  RealTimeDashboard,
  AutomatedAlert,
  ApiResponse,
  PaginatedResponse
}