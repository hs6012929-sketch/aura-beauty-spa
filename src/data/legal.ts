export interface LegalSection {
  title: string;
  paragraphs: string[];
}

export type LegalDocument = 'privacy' | 'terms';

export const LEGAL_DOCUMENTS: Record<LegalDocument, { title: string; sections: LegalSection[] }> = {
  privacy: {
    title: 'Privacy Policy',
    sections: [
      {
        title: 'Demonstration Website',
        paragraphs: [
          'This website is a demonstration of a luxury beauty salon and spa. The business details, testimonials and booking system are examples only.',
          'Forms on this site do not transmit information to a salon or to any third party. Anything you type into the booking or contact forms stays in your browser and is cleared when you leave the page.',
        ],
      },
      {
        title: 'Information in a Live Website',
        paragraphs: [
          'If this website were operated by a real salon, it would typically collect your name, email address, phone number and appointment details so that bookings and enquiries can be handled.',
          'That information would only be used to manage your appointments and to respond to your messages, and it would not be sold to third parties.',
        ],
      },
      {
        title: 'Your Choices',
        paragraphs: [
          'You may ask for your personal information to be viewed, corrected or deleted at any time. Contact details for requests should be provided by the business operating the site.',
        ],
      },
    ],
  },
  terms: {
    title: 'Terms of Service',
    sections: [
      {
        title: 'Nature of This Site',
        paragraphs: [
          'This website is provided for demonstration purposes. Booking confirmations shown on this site are examples and do not represent confirmed appointments.',
        ],
      },
      {
        title: 'Prices and Services',
        paragraphs: [
          'All prices are shown in euros (EUR) and are placeholders for presentation. Service descriptions are illustrative and may change.',
        ],
      },
      {
        title: 'Intellectual Property',
        paragraphs: [
          'Text, layout and design on this website may be reused for your own project. Photographs are provided by Pexels under their free licence and remain the property of their photographers.',
        ],
      },
      {
        title: 'Limitation of Liability',
        paragraphs: [
          'The website is provided as is, without warranties of any kind. No liability is accepted for decisions made based on the content of this demonstration.',
        ],
      },
    ],
  },
};
