
import FacebookIcon from '@iconify/icons-bx/bxl-facebook'
import InstagramIcon from '@iconify/icons-bx/bxl-instagram'
import LinkedinIcon from '@iconify/icons-bx/bxl-linkedin'

import type { FaqsType } from "./type";
export { FacebookIcon, InstagramIcon,  LinkedinIcon }

type FaqsType = {
  question: string
  answers: string[]
}

export const faqsData: FaqsType[] = [
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