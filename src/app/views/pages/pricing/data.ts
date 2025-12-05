export type ButtonType = {
  text: string
  enabled: boolean
}
export type PlanType = {
  name: string
  price: number
  period: string
  ribbon?: string
  features: string[]
  button: ButtonType
}

export const PricingPlans: PlanType[] = [
  {
    name: 'Starter',
    price: 0,
    period: 'Month',
    features: [
      '5 GB Cloud Storage',
      '100 GB Monthly Bandwidth',
      '1 Website',
      'Community Support',
      'Single User',
      'Basic Analytics',
    ],
    button: {
      text: 'Sign Up Free',
      enabled: true,
    },
  },
  {
    name: 'Pro',
    price: 24,
    period: 'Month',
    ribbon: 'Most Popular',
    features: [
      '50 GB Cloud Storage',
      '1 TB Monthly Bandwidth',
      '5 Websites',
      'Priority Email Support',
      'Up to 5 Users',
      'Advanced Analytics & Reports',
    ],
    button: {
      text: 'Upgrade Now',
      enabled: true,
    },
  },
  {
    name: 'Business',
    price: 49,
    period: 'Month',
    features: [
      '200 GB Cloud Storage',
      '5 TB Monthly Bandwidth',
      '20 Websites',
      '24/7 Phone & Email Support',
      'Up to 20 Users',
      'Custom Branding',
      'Advanced Security',
    ],
    button: {
      text: 'Get Started',
      enabled: true,
    },
  },
  {
    name: 'Enterprise',
    price: 99,
    period: 'Month',
    features: [
      '1 TB Cloud Storage',
      'Unlimited Bandwidth',
      'Unlimited Websites',
      'Dedicated Account Manager',
      'Unlimited Users',
      'Custom Integrations',
      'Enterprise Security & Compliance',
    ],
    button: {
      text: 'Contact Sales',
      enabled: true,
    },
  },
]

