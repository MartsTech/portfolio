export type ResumeData = {
  main: {
    name: string;
    occupation: string;
    description: string;
    image: string;
    bio: string;
    contactmessage: string;
    email: string;
    phone: string;
    address: {
      street: string;
      city: string;
      state: string;
      zip: string;
    };
    website: string;
    resumedownload: string;
    social: [
      {
        name: string;
        url: string;
      },
      {
        name: string;
        url: string;
      },
      {
        name: string;
        url: string;
      },
      {
        name: string;
        url: string;
      },
      {
        name: string;
        url: string;
      }
    ];
  };
  resume: {
    skillmessage: string;
    education: [
      {
        school: string;
        degree: string;
        graduated: string;
        description: string;
      }
    ];
    work: [
      {
        company: string;
        title: string;
        years: string;
        description: string;
      }
    ];
    skills: [
      {
        name: string;
        level: string;
      },
      {
        name: string;
        level: string;
      },
      {
        name: string;
        level: string;
      },
      {
        name: string;
        level: string;
      },
      {
        name: string;
        level: string;
      }
    ];
  };
  portfolio: {
    projects: [
      {
        title: string;
        category: string;
        image: string;
        url: string;
      },
      {
        title: string;
        category: string;
        image: string;
        url: string;
      },
      {
        title: string;
        category: string;
        image: string;
        url: string;
      }
    ];
  };
  testimonials: {
    testimonials: [
      {
        text: string;
        user: string;
      },
      {
        text: string;
        user: string;
      }
    ];
  };
};
