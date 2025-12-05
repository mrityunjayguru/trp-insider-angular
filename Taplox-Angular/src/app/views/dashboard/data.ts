export interface CardChange {
  percentage: number
  direction: 'up' | 'down'
  text: string
}

export interface StatType {
  icon: string
  title: string
  value: number
  change: CardChange
}
export const stat: StatType[] = [
  {
    icon: 'solar:globus-outline',
    title: 'Clicks',
    value: 15352,
    change: {
      percentage: 3.02,
      direction: 'up',
      text: 'From last month',
    },
  },
  {
    icon: 'solar:bag-check-outline',
    title: 'Sales',
    value: 8764,
    change: {
      percentage: 1.15,
      direction: 'down',
      text: 'From last month',
    },
  },
  {
    icon: 'solar:calendar-date-outline',
    title: 'Events',
    value: 5123,
    change: {
      percentage: 4.78,
      direction: 'up',
      text: 'From last month',
    },
  },
  {
    icon: 'solar:users-group-two-rounded-outline',
    title: 'Users',
    value: 12945,
    change: {
      percentage: 2.35,
      direction: 'up',
      text: 'From last month',
    },
  },
]
