import type {  TestimonialType, UserType, FAQType } from './type'

import FacebookIcon from '@iconify/icons-bx/bxl-facebook'
import InstagramIcon from '@iconify/icons-bx/bxl-instagram'
import LinkedinIcon from '@iconify/icons-bx/bxl-linkedin'

export { FacebookIcon, InstagramIcon,  LinkedinIcon }

export const solutionData: SolutionType[] = [
  {
    image: 'https://cali-girl-assets.s3.us-west-1.amazonaws.com/translation.png',
    title: 'Bilingual Services: ',
    description: 'As a proud Latina-owned business, we offer services in both English and Spanish, ensuring clear communication and understanding throughout the notarization process.'
  },
  {
    image: 'https://cali-girl-assets.s3.us-west-1.amazonaws.com/delivery-service.png',
    title: 'Mobile Convenience:',
    description: 'Our mobile notary services mean we come to your doorstep, whether at home or the office, equipped to print, prep, scan, deliver, and execute your documents with the utmost precision.'
  },
  {
    image: 'https://cali-girl-assets.s3.us-west-1.amazonaws.com/problem-solving.png',
    title: 'Tailored Solutions:',
    description: 'Understanding that every client’s needs are unique, we offer personalized service options to meet the specific requirements of your situation with flexibility and professionalism.'
  },
  {
    image: 'https://cali-girl-assets.s3.us-west-1.amazonaws.com/talent.png',
    title: 'Commitment to Excellence:',
    description: 'Miryam Scott brings a dedication to excellence and a personal touch to each appointment, guaranteeing your satisfaction with every notary service provided.'
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
    name: "Christopher Williams"
  }
  
]

export const testimonialData: TestimonialType[] = [
  {
    comment:
      'As a Realtor, I\'ve experienced my fair share of notarization services, but none have matched the convenience and flexibility of Cali-Girl Notary. Miryam’s efficiency and attention to detail during the loan signing process for my home purchase was truly commendable. Her friendly demeanor made what could have been a stressful experience, smooth and straightforward.',
    rating: 5,
      user: userData[0]
  },
  {
    comment:
      'When I needed certified notarization for an affidavit, I turned to Miryam, and she exceeded my expectations. She was not only punctual and well-prepared but also displayed an impressive level of professionalism throughout the process. Miryam\'s friendly and accommodating approach made a usually cumbersome process feel straightforward and hassle-free. As a Director, I value efficiency and precision, both of which Miryam delivered impeccably. I wholeheartedly recommend Cali-Girl notary for their top-notch notarial services',
      rating: 5,
      user: userData[1]
  },
  {
    comment:
    "When I found myself in need of quick notary services for a court-related document, Cali-Girl Notary was a lifesaver. Their focus on maintaining confidentiality and their ability to accommodate my last-minute request was exceptional. The empathy and understanding they provided made a challenging time a little easier. Highly recommend their services for anyone in a similar situation.",
    rating: 5,
    user: userData[2]
  },
  {
    comment:
    "I recently needed urgent notary services for a custody agreement and other legal documents for court. Miryam was incredibly nice and understood the sensitivity of my situation. She prioritized confidentiality and she was able to help me on very short notice. The professionalism and kindness she showed during such a stressful time was truly appreciated. Thank you, Miryam!",
    rating: 5,
    user: userData[3]
  },
  {
    comment:
    "I had the pleasure of using Cali-Girl Notary for the notarization of my Home Equity Line of Credit documents. The service was exceptionally professional and efficient. The notary public officer was thorough and made sure every document was perfectly in order, which gave me great peace of mind. The process was quick, and their attention to detail was impressive. I highly recommend Cali-Girl Notary to anyone needing reliable and meticulous notary services. Thank you for making this aspect of my financial management so easy and secure!",
    rating: 5,
    user: userData[4]
  }
]


export const faqData: FAQType[] = [
  {
    question: 'What is a notary public?',
    answers: [
      `A notary public is a state-appointed official who is authorized to witness the signing of important 
      documents to prevent fraud and to ensure they are properly executed. A notary public verifies the identity 
      of signers, ensures they understand the contents of the documents, and witnesses the signatures.`
    ]
  },
  {
    question: 'What services does a mobile notary provide?',
    answers: [
      `A mobile notary provides all the services of a traditional notary but with the added convenience of traveling to the 
      client’s location. This includes notarizing estate documents, powers of attorney, real estate documents, contracts, and 
      more, at locations such as homes, offices, hospitals, and even public venues?`
    ]
  },
  {
    question: 'How do I prepare for a notary appointment?',
    answers: [
      `To prepare for a notary appointment, ensure that all documents are complete and free of blanks except for the necessary signatures
       and dates. Bring a valid, government-issued photo ID such as a driver’s license, passport, or state ID card. All parties required to 
       sign the document should be present with their IDs.`
    ]
  },
  {
    question: 'Are mobile notary services available on weekends and holidays?',
    answers: [
      `Availability can vary; however, many mobile notaries offer services during weekends and holidays to accommodate clients with tight schedules 
      or urgent notarization needs. It’s best to schedule in advance to ensure availability.`
    ]
  },
  {
    question: 'What are the benefits of using a mobile notary service?',
    answers: [
      `The primary benefit of using a mobile notary service is convenience. Mobile notaries save you time 
      and effort by coming to your location, which is especially beneficial for transactions involving multiple
      parties or for individuals with mobility challenges. They also offer flexible scheduling, including after-hours services.`
    ]
  },
  {
    question: 'How much does notarization cost?',
    answers: [
      `Fees for notarization can vary based on the type of service, the number of signatures, and location. Most states have a maximum 
      fee that notaries can charge per notarized signature. Additional travel fees may apply for mobile services. It’s advisable to discuss 
       fees upfront with the notary.`
    ]
  },
  {
    question: 'Is electronic notarization valid like traditional notarization?',
    answers: [
      `Yes, electronic notarization is legally valid and holds the same weight as traditional paper notarization in many jurisdictions. 
      Electronic notarization involves using digital tools and electronic signatures but still requires the physical presence of the signer
      before the notary.`
    ]
  },
  {
    question: 'Can a notary refuse to notarize a document?',
    answers: [
      `A notary can refuse to notarize.`
    ]
  }
]