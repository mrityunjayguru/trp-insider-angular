export type FAQType = {
  question: string
  answer: string
}

export type FAQDataType = {
  title: string
  faqs: FAQType[]
}

export const FaqData: FAQDataType[] = [
  {
    title: 'General',
    faqs: [
      {
        question: 'What is this service about?',
        answer:
          'This service provides a platform to manage your projects efficiently, collaborate with your team, and track progress in real-time.',
      },
      {
        question: 'Do I need an account to get started?',
        answer:
          'Yes, you need to create an account to access all features, save your data securely, and personalize your dashboard.',
      },
      {
        question: 'Is there a free trial available?',
        answer:
          'Absolutely! We offer a 14-day free trial for new users so you can explore all premium features before committing.',
      },
    ],
  },
  {
    title: 'Pricing',
    faqs: [
      {
        question: 'What are the available subscription plans?',
        answer:
          'We offer Free, Standard, and Premium plans with different levels of storage, bandwidth, and support options.',
      },
      {
        question: 'Can I switch plans later?',
        answer:
          'Yes, you can upgrade or downgrade your plan anytime from your account settings without losing your data.',
      },
      {
        question: 'Are there any discounts for annual subscriptions?',
        answer:
          'Yes, we provide a 20% discount if you choose an annual subscription instead of paying monthly.',
      },
    ],
  },
  {
    title: 'Technical',
    faqs: [
      {
        question: 'Which platforms are supported?',
        answer:
          'Our platform is web-based and works on all modern browsers. Mobile apps for iOS and Android are also available.',
      },
      {
        question: 'Is my data secure?',
        answer:
          'Yes, we use industry-standard encryption and security practices to ensure your data is safe and private.',
      },
      {
        question: 'How do I report a bug or issue?',
        answer:
          'You can report bugs through our support page or directly from the dashboard using the "Report Issue" button.',
      },
    ],
  },
  {
    title: 'Support',
    faqs: [
      {
        question: 'How can I contact customer support?',
        answer:
          'You can reach our support team via email, live chat, or through the help center on our website.',
      },
      {
        question: 'What are the support hours?',
        answer:
          'Our support team is available Monday to Friday from 9 AM to 6 PM. Queries outside these hours will be addressed the next business day.',
      },
      {
        question: 'Do you offer onboarding assistance?',
        answer:
          'Yes, we provide onboarding guides and personal assistance to help you get started quickly and efficiently.',
      },
    ],
  },
];

