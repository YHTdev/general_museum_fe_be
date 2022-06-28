import { books } from './books'
import { categories } from './categories'
import { IMGCash, IMGhelp, IMGInvestor, IMGMoney, IMGS1, IMGS2 } from './images'

export const appData = {
  appNm: 'ဗိုလ်ချုပ်ပြတိုက်',
  logo: '',
  phoneNum: '',
  email: '',
  address: '',
  facebook: '',
  categories: categories,
  books: books,
  heroContent: {
    sliders: [
      {
        title: 'ဗိုလ်ချုပ်ပြတိုက်',
        src: "/assets/carousel/1.jpeg",
        right: {
            title: 'Around the world',
            subtitle: 'Discover our Reimagined History',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sunt fuga, nulla culpa distinctio reiciendis dolore, perspiciatis eveniet quaerat nihil porro ullam. Ullam accusantium, doloremque dolorum cupiditate ea hic debitis.'
          }
      },
      {
        title: 'ဗိုလ်ချုပ်ပြတိုက်',
        src: "/assets/carousel/2.jpeg",
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
        src: IMGhelp,
       
      },
      {
        title: 'Be a hand',
        subTitle: 'As a Donor',
        src: IMGMoney,
        
      },
      {
        title: 'Explore',
        subTitle: 'As a scientist',
        src: IMGInvestor,
       
      },
      {
        title: 'Be a part',
        subTitle: 'In our Fundraiser',
        src: IMGCash,
       
      }
    ]
  }
}
