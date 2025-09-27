import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

export function TermsOfService() {
  return (
    <>
      <Helmet>
        <title>Terms of Service - SynapseFlow Solutions</title>
        <meta name="description" content="Read SynapseFlow Solutions' Terms of Service to understand the rules and guidelines for using our website and services." />
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
              Terms of Service
            </h1>
            
            <div className="prose prose-invert max-w-none text-white/80">
              <p className="text-center text-lg mb-12">
                Last updated: September 27, 2025
              </p>

              <h2>1. Agreement to Terms</h2>
              <p>
                These Terms of Service ("Terms") constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you"), and SynapseFlow Solutions ("we," "us," or "our"), concerning your access to and use of the website <a href="https://www.synapseflow.solutions" className="text-primary-electric hover:underline">www.synapseflow.solutions</a> (the "Site") as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Service").
              </p>
              <p>
                You agree that by accessing the Service, you have read, understood, and agree to be bound by all of these Terms. If you do not agree to all of the Terms, then you are expressly prohibited from using the Service and you must discontinue use immediately.
              </p>

              <h2>2. Intellectual Property Rights</h2>
              <p>Unless otherwise indicated, the Service is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Service (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various intellectual property rights and unfair competition laws of the applicable jurisdictions.</p>
              <p>The Content and the Marks are provided on the Service "AS IS" for your information and personal use only. Except as expressly provided in these Terms, no part of the Service and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.</p>

              <h2>3. User Contributions</h2>
              <p>The Service does not offer users to submit or post content. However, if in the future we decide to offer such a feature, you retain any and all of your rights to any content you submit, post, or display on or through the Service and you are responsible for protecting those rights. You grant us a license to use, modify, and display such content on and through the Service. You represent and warrant that you own or have the necessary licenses, rights, consents, and permissions to use and to authorize us to use all Content that you submit.</p>

              <h2>4. Services Provided</h2>
              <p>SynapseFlow Solutions provides enterprise-level software development and technology consulting services. All proposals, quotes, and agreements for services are subject to a separate written contract signed by an authorized representative of SynapseFlow Solutions.</p>
              <p>We reserve the right to modify or discontinue, temporarily or permanently, the Service (or any part thereof) with or without notice to you. We shall not be liable to you or to any third party for any modification, suspension, or discontinuance of the Service.</p>

              <h2>5. Payment and Billing</h2>
              <p>If you purchase any product or service from us, the payment terms will be set forth in the applicable invoice or agreement. All payments are non-refundable except as may be required by law. You are responsible for paying all applicable taxes.</p>

              <h2>6. Prohibited Activities</h2>
              <p>You may access and use the Service only for lawful purposes. As a user of the Service, you agree not to:</p>
              <ul>
                <li>Systematically retrieve data or other content from the Service to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us</li>
                <li>Make any unauthorized use of the Service, including collecting usernames and/or email addresses of users by electronic or other means in order to send unsolicited email</li>
                <li>Use the Service to advertise or offer to sell goods or services not related to SynapseFlow Solutions</li>
                <li>Engage in automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools</li>
                <li>Interfere with, disrupt, or create an undue burden on the Service or the networks or services connected to the Service</li>
                <li>Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material that interferes with any party's uninterrupted use and enjoyment of the Service</li>
                <li>Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Service to you</li>
              </ul>

              <h2>7. Links to Other Resources</h2>
              <p>Although the Service may be linked to other resources that are not owned or controlled by us, we are not responsible for any such third-party content and we make no representations or warranties whatsoever with respect to any such third-party content. Your use of any such third-party resource is entirely at your own risk and subject to the terms and conditions of use for such resources.</p>

              <h2>8. Disclaimer of Warranties</h2>
              <p>The Service is provided on an "AS IS" and "AS AVAILABLE" basis. You expressly agree that your use of the Service is at your sole risk and that our entire liability, if any, to any party shall be limited to the amount paid, if any, by you to us during the twelve (12) month period prior to any cause of action arising. To the fullest extent permissible by law, the Service is provided without any warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance.</p>

              <h2>9. Limitation of Liability</h2>
              <p>In no event shall we or our directors, employees, partners, agents, suppliers, or affiliates be liable to any party for any direct, indirect, incidental, special, consequential, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the service or any products obtained through the service, even if we have been advised of the possibility of such damages.</p>

              <h2>10. Indemnification</h2>
              <p>You agree to indemnify and hold us harmless from and against any and all claims, liabilities, damages, losses, and costs, including reasonable attorneys' fees, arising out of or in any way connected with your breach of these Terms or your violation of any third-party right, including but not limited to any copyright, right of publicity, right of privacy, or other proprietary right.</p>

              <h2>11. Changes and Amendments</h2>
              <p>We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on the Site and updating the "Last updated" date at the top. You are responsible for reviewing and becoming familiar with any changes.</p>

              <h2>12. Governing Law</h2>
              <p>This agreement shall be governed by and construed in accordance with the laws of the Republic of Kenya, without regard to its conflict of law principles.</p>

              <h2>13. Contact Us</h2>
              <p>If you have any questions about these Terms, please contact us:</p>
              <ul>
                <li>By email: legal@synapseflow.solutions</li>
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