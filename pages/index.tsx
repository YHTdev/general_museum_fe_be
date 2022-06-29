import { NextPage } from 'next'
import React from 'react'
import { HeroContent } from '../components/organisms/herocontent'
export interface commonProps {
  sliders: silderProps[]
  services: serviceProps[]
}
export interface silderProps {
  title: string
  src: string
  right: rightProps
}
export interface serviceProps {
  title: string
  subTitle: string
  src: string
}
export interface rightProps {
  title: string
  subtitle: string
  description: string
}
const HomePage: NextPage = () => {
  const homeDemoData: commonProps = {
    sliders: [
      {
        title: 'ဗိုလ်ချုပ်ပြတိုက်',
        src: '/assets/carousel/1.jpeg',
        right: {
          title: 'Around the world',
          subtitle: 'Discover our Reimagined History',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sunt fuga, nulla culpa distinctio reiciendis dolore, perspiciatis eveniet quaerat nihil porro ullam. Ullam accusantium, doloremque dolorum cupiditate ea hic debitis.'
        }
      },
      {
        title: 'ဗိုလ်ချုပ်ပြတိုက်',
        src: '/assets/carousel/2.jpeg',
        right: {
          title: 'Around the world',
          subtitle: 'Discover our Reimagined History',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sunt fuga, nulla culpa distinctio reiciendis dolore, perspiciatis eveniet quaerat nihil porro ullam. Ullam accusantium, doloremque dolorum cupiditate ea hic debitis.'
        }
      }
    ],
    services: [
      {
        title: 'Explore',
        subTitle: 'As a vistor',
        src: ''
      },
      {
        title: 'Be a hand',
        subTitle: 'As a Donor',
        src: ''
      },
      {
        title: 'Explore',
        subTitle: 'As a scientist',
        src: ''
      },
      {
        title: 'Be a part',
        subTitle: 'In our Fundraiser',
        src: ''
      }
    ]
  }
  return <HeroContent  {...homeDemoData}  />
}

export default HomePage
