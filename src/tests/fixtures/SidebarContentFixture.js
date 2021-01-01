const SidebarContentFixtureOne = [
  {
    companyName: "Stacauto",
    projects: [
      {
        slug: "backend-api",
        label: "Live Backend API",
        meta: {
          description:
            "I designed and built a robust Backend API to support Stacauto's frontend UX. This API has 6 endpoints that unlock access to all aspects of our database ranging from vehicle-specific information such as Make, Model, VIN, and Exterior and Interior Color to Dealer-specific information such as the Dealer ID, Address, and more.",
          techStack: [
            "Python",
            "Django",
            "MySQL",
            "Apache",
            "AWS EC2",
            "CRON",
            "Sentry",
          ],
          projectRequirements: [
            "RESTful API",
            "Endpoint that returns all unique Object Equipment Manufacturers (Makes)",
            "Endpoint that accepts the Make as a parameter and returns all models matching that make",
            "Endpoint that accepts the Make and Model as parameters and returns all matching vehicles",
            "Endpoint that accepts the VIN as a parameter and returns the one matching vehicle",
            "Endpoint that accepts a payload pertaining to a test drive submission and sends it to a MySQL database",
            "Error handling for errant submission and payload information",
          ],
          problemsSolved: [
            "Deployed with Apache on Ubuntu 18.04",
            "Learned CORS and CSRF Best Practices",
            "Allowed AWS Services to communicate with one another (specifically s3, ec2, rds)",
            "Learned about popular forms of authentication, specifically OAuth2 and JWT",
            "Configured Sentry for Django",
          ],
          video:
            "https://s3.amazonaws.com/www.dan-murphy.com/public/Stac-API-Demo.mov",
        },
      },
      {
        slug: "mysql-db-setup",
        label: "MySQL Design and Implementation",
        meta: {
          description:
            "I designed and built the development and production databases that stored information about our dealer partners, test drivers, and vehicle inventory. This includes a pipeline built with Python and MySQL that updated inventory each day, tracked test drives, and stored meta-data about our core businesses (test drives and dealer partnerships). Additionally, I was in charge of creating users and providing employees with credentials to access the database.",
          techStack: [
            "MySQL",
            "Python",
            "AWS RDS",
            "AWS S3",
            "AWS Cloudwatch (Logs)",
          ],
          projectRequirements: [
            "Reliable pipeline with intuitive logging",
            "Quick concurrent transactions",
          ],
          problemsSolved: [
            "Configured users and permissions for a database",
            "Diagrammed and built a production-ready database",
            "Set up and managed a database with RDS",
          ],
          image:
            "https://s3.amazonaws.com/www.dan-murphy.com/public/db-schema-inventory.png",
        },
      },
      {
        slug: "shopify-dynamic-inventory",
        label: "Ruby Lambda Function for Shopify Inventory",
        meta: {
          description:
            "I designed an AWS Lambda function that reads data from a CSV, adds new vehicles to the Stacauto Shopify site, deletes sold vehicles from the Stacauto Shopify site, and updates any vehicles whose information has changed.",
          techStack: [
            "Ruby",
            "AWS Lambda",
            "AWS Cloudwatch (Logs)",
            "CRON",
            "Sentry",
          ],
          projectRequirements: [
            "Asynchronous insertion of vehicle data into Shopify",
            "Reliable pipeline with intuitive logging",
            "Time and Cost sensitive",
          ],
          problemsSolved: [
            "Set up AWS Lambda function",
            "Set up continuous integration between GitHub and AWS S3",
            "Configured Sentry for Ruby 2.7",
          ],
          image:
            "https://s3.amazonaws.com/www.dan-murphy.com/public/Shopify+Live+Inventory.png",
        },
      },
      {
        slug: "vendor-integrations",
        label: "Vendor Integrations",
        meta: {
          description:
            "I was in charge of integrating data from various third-party vendors, such as Dealer Inspire and vAuto. Since each vendor supported different methods for transferring files, I leveraged both AWS S3 and AWS Transfer.",
          techStack: [
            "AWS Transfer",
            "AWS S3",
            "AWS Cloudwatch (Logs)",
            "AWS Secrets Manager",
            "CRON",
          ],
          projectRequirements: [
            "Provided reliable file delivery for each third-party vendor",
            "Provided seamless integration into our vendors current infrastructure",
            "Implemented a time and cost effective solution",
          ],
          problemsSolved: [
            "Set up SFTP with AWS Transfer",
            "Stored Secret values in AWS Secrets Manager and allowed AWS Lambda to pull from AWS Secrets",
            "Configured Public-private keys for access to the SFTP server",
          ],
          image:
            "https://s3.amazonaws.com/www.dan-murphy.com/public/Vendor+Integrations.png",
        },
      },
    ],
  },
];

const SidebarContentFixtureTwo = [
  {
    companyName: "Stacauto",
    projects: [
      {
        slug: "backend-api",
        label: "Live Backend API",
        meta: {
          description:
            "I designed and built a robust Backend API to support Stacauto's frontend UX. This API has 6 endpoints that unlock access to all aspects of our database ranging from vehicle-specific information such as Make, Model, VIN, and Exterior and Interior Color to Dealer-specific information such as the Dealer ID, Address, and more.",
          techStack: [
            "Python",
            "Django",
            "MySQL",
            "Apache",
            "AWS EC2",
            "CRON",
            "Sentry",
          ],
          projectRequirements: [
            "RESTful API",
            "Endpoint that returns all unique Object Equipment Manufacturers (Makes)",
            "Endpoint that accepts the Make as a parameter and returns all models matching that make",
            "Endpoint that accepts the Make and Model as parameters and returns all matching vehicles",
            "Endpoint that accepts the VIN as a parameter and returns the one matching vehicle",
            "Endpoint that accepts a payload pertaining to a test drive submission and sends it to a MySQL database",
            "Error handling for errant submission and payload information",
          ],
          problemsSolved: [
            "Deployed with Apache on Ubuntu 18.04",
            "Learned CORS and CSRF Best Practices",
            "Allowed AWS Services to communicate with one another (specifically s3, ec2, rds)",
            "Learned about popular forms of authentication, specifically OAuth2 and JWT",
            "Configured Sentry for Django",
          ],
          video:
            "https://s3.amazonaws.com/www.dan-murphy.com/public/Stac-API-Demo.mov",
        },
      },
      {
        slug: "mysql-db-setup",
        label: "MySQL Design and Implementation",
        meta: {
          description:
            "I designed and built the development and production databases that stored information about our dealer partners, test drivers, and vehicle inventory. This includes a pipeline built with Python and MySQL that updated inventory each day, tracked test drives, and stored meta-data about our core businesses (test drives and dealer partnerships). Additionally, I was in charge of creating users and providing employees with credentials to access the database.",
          techStack: [
            "MySQL",
            "Python",
            "AWS RDS",
            "AWS S3",
            "AWS Cloudwatch (Logs)",
          ],
          projectRequirements: [
            "Reliable pipeline with intuitive logging",
            "Quick concurrent transactions",
          ],
          problemsSolved: [
            "Configured users and permissions for a database",
            "Diagrammed and built a production-ready database",
            "Set up and managed a database with RDS",
          ],
          image:
            "https://s3.amazonaws.com/www.dan-murphy.com/public/db-schema-inventory.png",
        },
      },
      {
        slug: "shopify-dynamic-inventory",
        label: "Ruby Lambda Function for Shopify Inventory",
        meta: {
          description:
            "I designed an AWS Lambda function that reads data from a CSV, adds new vehicles to the Stacauto Shopify site, deletes sold vehicles from the Stacauto Shopify site, and updates any vehicles whose information has changed.",
          techStack: [
            "Ruby",
            "AWS Lambda",
            "AWS Cloudwatch (Logs)",
            "CRON",
            "Sentry",
          ],
          projectRequirements: [
            "Asynchronous insertion of vehicle data into Shopify",
            "Reliable pipeline with intuitive logging",
            "Time and Cost sensitive",
          ],
          problemsSolved: [
            "Set up AWS Lambda function",
            "Set up continuous integration between GitHub and AWS S3",
            "Configured Sentry for Ruby 2.7",
          ],
          image:
            "https://s3.amazonaws.com/www.dan-murphy.com/public/Shopify+Live+Inventory.png",
        },
      },
      {
        slug: "vendor-integrations",
        label: "Vendor Integrations",
        meta: {
          description:
            "I was in charge of integrating data from various third-party vendors, such as Dealer Inspire and vAuto. Since each vendor supported different methods for transferring files, I leveraged both AWS S3 and AWS Transfer.",
          techStack: [
            "AWS Transfer",
            "AWS S3",
            "AWS Cloudwatch (Logs)",
            "AWS Secrets Manager",
            "CRON",
          ],
          projectRequirements: [
            "Provided reliable file delivery for each third-party vendor",
            "Provided seamless integration into our vendors current infrastructure",
            "Implemented a time and cost effective solution",
          ],
          problemsSolved: [
            "Set up SFTP with AWS Transfer",
            "Stored Secret values in AWS Secrets Manager and allowed AWS Lambda to pull from AWS Secrets",
            "Configured Public-private keys for access to the SFTP server",
          ],
          image:
            "https://s3.amazonaws.com/www.dan-murphy.com/public/Vendor+Integrations.png",
        },
      },
    ],
  },
  {
    companyName: "Western Sustainability Exchange",
    projects: [
      {
        slug: "ranch-assessment-tool",
        label: "Regenerative Agriculture Assessment Tool",
        meta: {
          description:
            "The Western Sustainability Exchange needed an update to their in-house assessment tool, and I was licensed as the sole developer to build a robust backend API that retrieved a ranches assessment responses from Airtable, performed scoring logic, and built a PDF that outlined core insights. Additionally, I then programmatically updated data in Airtable with the public AWS S3 link to the PDF and send the respondent an email with the PDF attached.",
          techStack: [
            "Python",
            "Flask",
            "Airtable API",
            "Docker",
            "GitHub CI/CD with Docker",
            "AWS S3",
            "Sentry",
          ],
          projectRequirements: [
            "Reliable delivery of emails to respondents",
            "Quick derivation of complex scoring logic",
            "Robust unit tests",
            "Well-documented code",
          ],
          problemsSolved: [
            "Deployed a Flask application with Docker",
            "Built a PDF with Python",
            "Provided respondents with data-driven insights",
          ],
          image:
            "https://s3.amazonaws.com/www.dan-murphy.com/public/WSE+Flow.png",
        },
      },
    ],
  },
];
export { SidebarContentFixtureOne, SidebarContentFixtureTwo };
