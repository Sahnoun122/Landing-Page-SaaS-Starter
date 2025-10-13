// Génération des données structurées JSON-LD pour le SEO

export function generateJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "SaaS Starter Kit",
    "description": "The most advanced SaaS starter kit with everything you need to launch your next big idea. Built with Next.js 14, TypeScript, and modern best practices.",
    "url": "https://saasstarterkit.com",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "29",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "author": {
      "@type": "Organization",
      "name": "SaaS Starter Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SaaS Starter",
      "url": "https://saasstarterkit.com"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "2000"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Sarah Chen"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "This SaaS starter saved me months of development time. The code quality is exceptional and the documentation is crystal clear. Highly recommended!"
      }
    ]
  }
}

export function generateOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SaaS Starter",
    "url": "https://saasstarterkit.com",
    "logo": "https://saasstarterkit.com/logo.png",
    "description": "Premium SaaS starter kits for developers",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "hello@saasstarterkit.com",
      "contactType": "Customer Service"
    },
    "sameAs": [
      "https://github.com/saas-starter",
      "https://twitter.com/saas_starter"
    ]
  }
}
