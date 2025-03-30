import React, { useEffect } from 'react';

const seoConfig = {
  '/': {
    title: 'About Me - Portfolio Website',
    description: 'Learn more about my background, skills, and experiences.',
    keywords: 'about, portfolio, skills, experience',
  },
  '/about': {
    title: 'About Me - Portfolio Website',
    description: 'Learn more about my background, skills, and experiences.',
    keywords: 'about, portfolio, skills, experience',
  },
  '/contact': {
    title: 'Contact Me - Get in Touch',
    description: 'Reach out to me for collaborations, projects, or inquiries.',
    keywords: 'contact, reach out, collaboration, projects',
  },
  '/portfolio': {
    title: 'Portfolio - My Work Showcase',
    description: 'Explore my latest projects and creative work.',
    keywords: 'portfolio, projects, creative work, showcase',
  },
  '/service-and-pricing': {
    title: 'Services & Pricing - What I Offer',
    description: 'Discover my services and pricing for different projects.',
    keywords: 'services, pricing, offerings, projects',
  },
  '/resume': {
    title: 'Resume - My Professional Journey',
    description: 'View my professional resume highlighting my experience and skills.',
    keywords: 'resume, CV, professional journey, experience',
  },
  '/products': {
    title: 'Products - Explore My Products',
    description: 'Check out the products I offer, including digital and physical items.',
    keywords: 'products, digital, physical, offerings',
  },
  '/blog': {
    title: 'Blog - Insights & Articles',
    description: 'Read my latest blog posts about technology, design, and more.',
    keywords: 'blog, articles, insights, technology',
  },
  '*': {
    title: '404 - Page Not Found',
    description: 'Oops! The page you are looking for does not exist.',
    keywords: '404, error, not found',
  },
};

const Meta = ({ path }) => {
  useEffect(() => {
    const { title, description, keywords } = seoConfig[path] || seoConfig['*'];

    document.title = title;

    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      metaDescription.content = description;
      document.head.appendChild(metaDescription);
    }

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    } else {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      metaKeywords.content = keywords;
      document.head.appendChild(metaKeywords);
    }
  }, [path]);

  return null;
};

export default Meta;
