import FacebookIcon from '@iconify/icons-bx/bxl-facebook'
import InstagramIcon from '@iconify/icons-bx/bxl-instagram'
import LinkedinIcon from '@iconify/icons-bx/bxl-linkedin'


import type {
  
  TestimonialType,
  UserType,
  StatisticType
  
} from '@/views/landings/home/type'

export { FacebookIcon, InstagramIcon,  LinkedinIcon }
export const statsData: StatisticType[] = [
  {
    image: 'https://cali-girl-assets.s3.us-west-1.amazonaws.com/message.png',
    title: 'Bilingual Services: ',
    content: 'As a proud Latina-owned business, we offer services in both English and Spanish, ensuring clear communication and understanding throughout the notarization process.'
  },
  {
    image: 'https://cali-girl-assets.s3.us-west-1.amazonaws.com/courier.png',
    title: 'Mobile Convenience:',
    content: 'Our mobile notary services mean we come to your doorstep, whether at home or the office, equipped to print, prep, scan, deliver, and execute your documents with the utmost precision.'
  },
  {
    image: 'https://cali-girl-assets.s3.us-west-1.amazonaws.com/solution.png',
    title: 'Tailored Solutions',
    content: ' Understanding that every client’s needs are unique, we offer personalized service options to meet the specific requirements of your situation with flexibility and professionalism.'
  },
  {
    image: 'https://cali-girl-assets.s3.us-west-1.amazonaws.com/agreement.png',
    title: 'Commitment to Excellence:',
    content: 'Miryam Scott brings a dedication to excellence and a personal touch to each appointment, guaranteeing your satisfaction with every notary service provided.'
  }
]



const userData: UserType[] = [
  {
    image: 'https://cali-girl-assets.s3.us-west-1.amazonaws.com/04.png',
    name: 'Walid Alraheb',
  },
  {
    image: 'https://cali-girl-assets.s3.us-west-1.amazonaws.com/02.png',
    name: 'Annette Black',
  },
  {
    image: 'https://cali-girl-assets.s3.us-west-1.amazonaws.com/03.png',
    name: 'Jennifer Shaw',
  },
  {
    image: 'https://cali-girl-assets.s3.us-west-1.amazonaws.com/rocket-man.png',
    name: 'Gina Jimenez',
  },
  {
    image: 'https://cali-girl-assets.s3.us-west-1.amazonaws.com/05.png',
    name: 'Christopher Williams',
  }
  
]


export const testimonialData: TestimonialType[] = [
  {
    comment:
      'As a Realtor, I\'ve experienced my fair share of notarization services, but none have matched the convenience and flexibility of Cali-Girl Notary. Miryam’s efficiency and attention to detail during the loan signing process for my home purchase was truly commendable. Her friendly demeanor made what could have been a stressful experience, smooth and straightforward.',
    user: userData[0]
  },
  {
    comment:
      'When I needed certified notarization for an affidavit, I turned to Miryam, and she exceeded my expectations. She was not only punctual and well-prepared but also displayed an impressive level of professionalism throughout the process. Miryam\'s friendly and accommodating approach made a usually cumbersome process feel straightforward and hassle-free. As a Director, I value efficiency and precision, both of which Miryam delivered impeccably. I wholeheartedly recommend Cali-Girl notary for their top-notch notarial services',
    user: userData[1]
  },
  {
    comment:
    "When I found myself in need of quick notary services for a court-related document, Cali-Girl Notary was a lifesaver. Their focus on maintaining confidentiality and their ability to accommodate my last-minute request was exceptional. The empathy and understanding they provided made a challenging time a little easier. Highly recommend their services for anyone in a similar situation.",
    user: userData[2]
  },
  {
    comment:
    "I recently needed urgent notary services for a custody agreement and other legal documents for court. Miryam was incredibly nice and understood the sensitivity of my situation. She prioritized confidentiality and she was able to help me on very short notice. The professionalism and kindness she showed during such a stressful time was truly appreciated. Thank you, Miryam!",
    user: userData[3]
  },
  {
    comment:
    "I had the pleasure of using Cali-Girl Notary for the notarization of my Home Equity Line of Credit documents. The service was exceptionally professional and efficient. The notary public officer was thorough and made sure every document was perfectly in order, which gave me great peace of mind. The process was quick, and their attention to detail was impressive. I highly recommend Cali-Girl Notary to anyone needing reliable and meticulous notary services. Thank you for making this aspect of my financial management so easy and secure!"
,
    user: userData[4]
  }
]


