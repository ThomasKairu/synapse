import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

export function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - SynapseFlow Solutions</title>
        <meta name="description" content="Read SynapseFlow Solutions' Privacy Policy to understand how we collect, use, and protect your personal information." />
      </Helmet>
      <section className="py-20 bg-gradient-to-b from-background-dark to-background-gradient-end relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-display text-white mb-8 text-center">
              Privacy Policy
            </h1>
            
            <div className="prose prose-invert max-w-none text-white/80">
              <p className="text-center text-lg mb-12">
                Last updated: September 27, 2025
              </p>

              <h2>1. Introduction</h2>
              <p>
                Welcome to SynapseFlow Solutions ("we," "us," or "our"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, <a href="https://www.synapseflow.solutions" className="text-primary-electric hover:underline">www.synapseflow.solutions</a> (the "Site").
              </p>
              <p>
                By using the Site, you agree to the collection and use of information in accordance with this policy.
              </p>

              <h2>2. Information We Collect</h2>
              <p>We collect several different types of information for various purposes to provide and improve our service to you.</p>

              <h3>Types of Data Collected</h3>
              <h4>2.1. Personal Data</h4>
              <p>While using the Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:</p>
              <ul>
                <li>Email address</li>
                <li>First name and last name</li>
                <li>Phone number</li>
                <li>Company name</li>
                <li>Job title</li>
              </ul>

              <h4>2.2. Usage Data</h4>
              <p>We may also collect information on how the Site is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol (IP) address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages, and other diagnostic data.</p>

              <h2>3. Use of Data</h2>
              <p>SynapseFlow Solutions uses the collected data for various purposes:</p>
              <ul>
                <li>To provide and maintain our service</li>
                <li>To notify you about changes to our service</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information so that we can improve our service</li>
                <li>To monitor the usage of our service</li>
                <li>To detect, prevent, and address technical issues</li>
              </ul>

              <h2>4. Sharing and Disclosure of Data</h2>
              <p>We do not sell your personal information. We may share your information with trusted third parties who assist us in operating our business, such as service providers for payment processing, data analysis, email delivery, hosting services, and customer support. These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>
              <p>We may also disclose your Personal Data in the good faith belief that such action is necessary to comply with a legal obligation, protect and defend the rights or property of SynapseFlow Solutions, or protect the personal safety of users of the Site or the public.</p>

              <h2>5. Data Security</h2>
              <p>The security of your data is important to us. We use commercially reasonable administrative, technical, and physical measures to help protect your Personal Data from unauthorized access, use, or disclosure. However, no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>

              <h2>6. Your Data Protection Rights</h2>
              <p>We are committed to ensuring that your Personal Data is secure. You have certain data protection rights. We aim to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data.</p>
              <p>If you wish to be informed what Personal Data we hold about you or if you want it to be removed from our systems, please contact us.</p>

              <h2>7. Children's Privacy</h2>
              <p>Our Site is not intended for use by children under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we will take steps to remove that information from our servers.</p>

              <h2>8. Links to Other Sites</h2>
              <p>Our Site may contain links to other sites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</p>

              <h2>9. Changes to This Privacy Policy</h2>
              <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top. You are advised to review this Privacy Policy periodically for any changes.</p>

              <h2>10. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us:</p>
              <ul>
                <li>By email: privacy@synapseflow.solutions</li>
                <li>By visiting this page on our website: <a href="https://www.synapseflow.solutions/contact" className="text-primary-electric hover:underline">Contact Us</a></li>
                <li>By mail: SynapseFlow Solutions, P.O. Box 12345, Nairobi, Kenya</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}