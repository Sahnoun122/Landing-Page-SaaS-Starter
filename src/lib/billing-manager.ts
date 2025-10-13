/**
 * Billing Data Management System
 * 
 * This file manages all billing-related data including pricing plans and payment methods.
 * It provides a centralized way to manage billing information that can be used
 * across the application, including the landing page and admin settings.
 */

export interface PricingPlan {
  id: string
  name: string
  price: number
  currency: string
  billing: 'monthly' | 'yearly'
  description: string
  features: string[]
  popular: boolean
  color: string
  buttonText: string
  stripePriceId?: string
  active: boolean
  createdAt: string
  updatedAt: string
}

export interface PaymentMethod {
  id: string
  name: string
  type: 'card' | 'bank' | 'digital_wallet' | 'cryptocurrency'
  provider: string
  icon: string
  description: string
  fees: string
  processingTime: string
  currencies: string[]
  active: boolean
  createdAt: string
  updatedAt: string
}

// Default pricing plans
const defaultPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: 29,
    currency: 'USD',
    billing: 'monthly',
    description: 'Perfect for individuals and small teams getting started',
    features: [
      'Up to 5 projects',
      '10GB storage',
      'Basic analytics',
      'Email support',
      'Standard templates'
    ],
    popular: false,
    color: 'from-blue-500 to-cyan-500',
    buttonText: 'Get Started',
    active: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'professional',
    name: 'Professional',
    price: 79,
    currency: 'USD',
    billing: 'monthly',
    description: 'Ideal for growing teams and businesses',
    features: [
      'Unlimited projects',
      '100GB storage',
      'Advanced analytics',
      'Priority support',
      'Team collaboration',
      'API access',
      'Custom templates'
    ],
    popular: true,
    color: 'from-purple-500 to-pink-500',
    buttonText: 'Start Free Trial',
    active: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 199,
    currency: 'USD',
    billing: 'monthly',
    description: 'For large organizations with advanced needs',
    features: [
      'Everything in Professional',
      'Unlimited storage',
      'Advanced security',
      '24/7 phone support',
      'Custom integrations',
      'Dedicated account manager',
      'SLA guarantee'
    ],
    popular: false,
    color: 'from-green-500 to-emerald-500',
    buttonText: 'Contact Sales',
    active: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
]

// Default payment methods
const defaultPaymentMethods: PaymentMethod[] = [
  {
    id: 'visa',
    name: 'Visa',
    type: 'card',
    provider: 'Stripe',
    icon: '💳',
    description: 'Secure credit card payments',
    fees: '2.9% + $0.30',
    processingTime: 'Instant',
    currencies: ['USD', 'EUR', 'GBP'],
    active: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'mastercard',
    name: 'Mastercard',
    type: 'card',
    provider: 'Stripe',
    icon: '💳',
    description: 'Secure credit card payments',
    fees: '2.9% + $0.30',
    processingTime: 'Instant',
    currencies: ['USD', 'EUR', 'GBP'],
    active: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'paypal',
    name: 'PayPal',
    type: 'digital_wallet',
    provider: 'PayPal',
    icon: '🅿️',
    description: 'Pay with your PayPal account',
    fees: '3.49% + $0.49',
    processingTime: 'Instant',
    currencies: ['USD', 'EUR', 'GBP', 'CAD'],
    active: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'apple_pay',
    name: 'Apple Pay',
    type: 'digital_wallet',
    provider: 'Stripe',
    icon: '🍎',
    description: 'Quick payments with Touch ID',
    fees: '2.9% + $0.30',
    processingTime: 'Instant',
    currencies: ['USD', 'EUR', 'GBP'],
    active: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
]

// Storage keys
const STORAGE_KEYS = {
  PRICING_PLANS: 'saas_pricing_plans',
  PAYMENT_METHODS: 'saas_payment_methods'
}

/**
 * Pricing Plans Management
 */
export class PricingPlansManager {
  // Get all pricing plans
  static getPlans(): PricingPlan[] {
    if (typeof window === 'undefined') return defaultPlans
    
    const stored = localStorage.getItem(STORAGE_KEYS.PRICING_PLANS)
    if (stored) {
      try {
        return JSON.parse(stored)
      } catch (error) {
        console.error('Error parsing stored pricing plans:', error)
        return defaultPlans
      }
    }
    
    // Initialize with default plans
    this.savePlans(defaultPlans)
    return defaultPlans
  }

  // Get active pricing plans only
  static getActivePlans(): PricingPlan[] {
    return this.getPlans().filter(plan => plan.active)
  }

  // Get plan by ID
  static getPlanById(id: string): PricingPlan | undefined {
    return this.getPlans().find(plan => plan.id === id)
  }

  // Save all plans
  static savePlans(plans: PricingPlan[]): void {
    if (typeof window === 'undefined') return
    
    try {
      localStorage.setItem(STORAGE_KEYS.PRICING_PLANS, JSON.stringify(plans))
    } catch (error) {
      console.error('Error saving pricing plans:', error)
    }
  }

  // Add new plan
  static addPlan(plan: Omit<PricingPlan, 'id' | 'createdAt' | 'updatedAt'>): PricingPlan {
    const newPlan: PricingPlan = {
      ...plan,
      id: this.generateId(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

    const plans = this.getPlans()
    plans.push(newPlan)
    this.savePlans(plans)
    
    return newPlan
  }

  // Update existing plan
  static updatePlan(id: string, updates: Partial<PricingPlan>): PricingPlan | null {
    const plans = this.getPlans()
    const index = plans.findIndex(plan => plan.id === id)
    
    if (index === -1) return null

    plans[index] = {
      ...plans[index],
      ...updates,
      updatedAt: new Date().toISOString()
    }

    this.savePlans(plans)
    return plans[index]
  }

  // Delete plan
  static deletePlan(id: string): boolean {
    const plans = this.getPlans()
    const filtered = plans.filter(plan => plan.id !== id)
    
    if (filtered.length === plans.length) return false

    this.savePlans(filtered)
    return true
  }

  // Toggle plan active status
  static togglePlanStatus(id: string): boolean {
    const plan = this.getPlanById(id)
    if (!plan) return false

    return this.updatePlan(id, { active: !plan.active }) !== null
  }

  // Generate unique ID
  private static generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2)
  }
}

/**
 * Payment Methods Management
 */
export class PaymentMethodsManager {
  // Get all payment methods
  static getMethods(): PaymentMethod[] {
    if (typeof window === 'undefined') return defaultPaymentMethods
    
    const stored = localStorage.getItem(STORAGE_KEYS.PAYMENT_METHODS)
    if (stored) {
      try {
        return JSON.parse(stored)
      } catch (error) {
        console.error('Error parsing stored payment methods:', error)
        return defaultPaymentMethods
      }
    }
    
    // Initialize with default methods
    this.saveMethods(defaultPaymentMethods)
    return defaultPaymentMethods
  }

  // Get active payment methods only
  static getActiveMethods(): PaymentMethod[] {
    return this.getMethods().filter(method => method.active)
  }

  // Get method by ID
  static getMethodById(id: string): PaymentMethod | undefined {
    return this.getMethods().find(method => method.id === id)
  }

  // Save all methods
  static saveMethods(methods: PaymentMethod[]): void {
    if (typeof window === 'undefined') return
    
    try {
      localStorage.setItem(STORAGE_KEYS.PAYMENT_METHODS, JSON.stringify(methods))
    } catch (error) {
      console.error('Error saving payment methods:', error)
    }
  }

  // Add new method
  static addMethod(method: Omit<PaymentMethod, 'id' | 'createdAt' | 'updatedAt'>): PaymentMethod {
    const newMethod: PaymentMethod = {
      ...method,
      id: this.generateId(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

    const methods = this.getMethods()
    methods.push(newMethod)
    this.saveMethods(methods)
    
    return newMethod
  }

  // Update existing method
  static updateMethod(id: string, updates: Partial<PaymentMethod>): PaymentMethod | null {
    const methods = this.getMethods()
    const index = methods.findIndex(method => method.id === id)
    
    if (index === -1) return null

    methods[index] = {
      ...methods[index],
      ...updates,
      updatedAt: new Date().toISOString()
    }

    this.saveMethods(methods)
    return methods[index]
  }

  // Delete method
  static deleteMethod(id: string): boolean {
    const methods = this.getMethods()
    const filtered = methods.filter(method => method.id !== id)
    
    if (filtered.length === methods.length) return false

    this.saveMethods(filtered)
    return true
  }

  // Toggle method active status
  static toggleMethodStatus(id: string): boolean {
    const method = this.getMethodById(id)
    if (!method) return false

    return this.updateMethod(id, { active: !method.active }) !== null
  }

  // Generate unique ID
  private static generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2)
  }
}

// Utility functions
export const formatCurrency = (amount: number, currency: string = 'USD'): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency
  }).format(amount)
}

export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

// Export default data for initial setup
export { defaultPlans, defaultPaymentMethods }