import { NextPage } from 'next';
import React from 'react';

import { TermsLayout } from '../layouts/terms';

const Page: NextPage = () => (
  <TermsLayout>
    <h1>Privacy Policy</h1>
    <h2>What Information Do We Collect?</h2>
    <p>We collect information from you when you register on our site, place an order, subscribe to our newsletter or respond to a survey.</p>
    <p>When ordering or registering on our site, as appropriate, you may be asked to enter your: name, email address, mailing address, phone number, or credit card information. You may, however, visit our site anonymously.</p>
    <h2>What Do We Use Your Information For?</h2>
    <p>Any of the information we collect from you may be used in one of the following ways:</p>
    <ul>
      <li>To personalize your experience: Your information helps us to better respond to your individual needs.</li>
      <li>To improve our website: We continually strive to improve our website offerings based on the information and feedback we receive from you.</li>
      <li>To improve customer service: Your information helps us to more effectively respond to your customer service requests and support needs.</li>
      <li>To process transactions: Your information, whether public or private, will not be sold, exchanged, transferred, or given to any other company for any reason whatsoever, without your consent, other than for the express purpose of delivering the purchased product or service requested.</li>
      <li>To administer a contest, promotion, survey or other site feature.</li>
      <li>To send periodic email: The email address you provide for order processing, may be used to send you information and updates pertaining to your order, in addition to receiving occasional company news, updates, related product or service information, etc.</li>
    </ul>
    <p><strong>Note: If at any time you would like to unsubscribe from receiving future email, we include detailed unsubscribe instructions at the bottom of each message.</strong></p>
    <h2>How Do We Protect Your Information?</h2>
    <p>We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information.</p>
    <p>We offer the use of a secure server. All supplied sensitive/credit information is transmitted via Secure Socket Layer (SSL) technology and then encrypted into our payment gateway providers database only to be accessible by those authorized with special access rights to such systems, and are required to keep the information confidential.</p>
    <p>After a transaction, your private information (credit cards, social security numbers, financials, etc.) will not be stored on our servers.</p>
    <h2>Do We Use Cookies?</h2>
    <p>Yes. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your web browser (if you allow) that enables the sites or service providers systems to recognize your browser and capture and remember certain information</p>
    <p>We use cookies to keep track of advertisements and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future. We may contract with third-party service providers to assist us in better understanding our site visitors. These service providers are not permitted to use the information collected on our behalf except to help us conduct and improve our business.</p>
    <h2>Do We Disclose any Information to Outside Parties?</h2>
    <p>We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include our parent company, QC Quality of Course Inc, or trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others rights, property, or safety. However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.</p>
    <h2>Your Consent</h2>
    <p>By using our site, you consent to our web site privacy policy.</p>
    <h2>Changes to our Privacy Policy</h2>
    <p>If we decide to change our privacy policy, we will update the Privacy Policy modification date below.</p>
    <p>This policy was last modified on June 12, 2019.</p>
    <h2>Contacting Us</h2>
    <p>If there are any questions regarding this privacy policy you may contact us using the information below.</p>
    <p>QC Quality of Course Ltd<br />R+<br />2 Blagrave Street<br />READING<br />RG1 1AZ</p>
    <p>Email: info@qccareerschool.com<br />Phone: 0800 066 4734</p>
    <p><em>This policy is powered by Free Privacy Policy and Rhino Support helpdesk software.</em></p>
    <p><a onClick={(): false => { window.print(); return false; }} href="#">Print This Page</a></p>
  </TermsLayout>
);

export default Page;
