import React from "react";
import { Shield, Info, User, Share2, UserCheck, Edit } from "lucide-react";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-cream py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-navy mb-6">Privacy Policy</h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 leading-relaxed font-light">
            At <span className="font-semibold text-navy">Novello Hotels</span>, we are committed to safeguarding your personal information and respecting your privacy.
            This detailed policy outlines how we collect, use, and protect your data.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12 border border-gray-100 space-y-10">

          {/* Section 1 */}
          <div className="flex gap-6">
            <div className="flex-shrink-0 mt-1">
              <div className="w-10 h-10 bg-navy/5 rounded-full flex items-center justify-center">
                <User className="text-gold w-5 h-5" />
              </div>
            </div>
            <div>
              <h2 className="text-xl font-serif text-navy mb-3">Collection of Personal Information</h2>
              <p className="text-gray-600 font-light leading-relaxed">
                We may collect personal information from you when you make a reservation, sign up for our loyalty program, or subscribe to our newsletter.
                This includes your name, email, phone number, and payment details necessary to provide our services.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="flex gap-6">
            <div className="flex-shrink-0 mt-1">
              <div className="w-10 h-10 bg-navy/5 rounded-full flex items-center justify-center">
                <Info className="text-gold w-5 h-5" />
              </div>
            </div>
            <div>
              <h2 className="text-xl font-serif text-navy mb-3">Use of Personal Information</h2>
              <p className="text-gray-600 font-light leading-relaxed">
                We use your data to facilitate reservations, respond to inquiries, and personalize your experience.
                We may also use it to improve our services and send relevant promotional materials with your consent.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="flex gap-6">
            <div className="flex-shrink-0 mt-1">
              <div className="w-10 h-10 bg-navy/5 rounded-full flex items-center justify-center">
                <Share2 className="text-gold w-5 h-5" />
              </div>
            </div>
            <div>
              <h2 className="text-xl font-serif text-navy mb-3">Sharing of Information</h2>
              <p className="text-gray-600 font-light leading-relaxed">
                We generally do not share your personal information, except with trusted third-party service providers (payment processors, IT support)
                necessary for our operations, or when required by law.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="flex gap-6">
            <div className="flex-shrink-0 mt-1">
              <div className="w-10 h-10 bg-navy/5 rounded-full flex items-center justify-center">
                <UserCheck className="text-gold w-5 h-5" />
              </div>
            </div>
            <div>
              <h2 className="text-xl font-serif text-navy mb-3">Your Rights</h2>
              <p className="text-gray-600 font-light leading-relaxed">
                You have the right to access, correct, or delete your personal data held by us.
                Please contact us if you wish to exercise these rights regarding your information.
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="flex gap-6">
            <div className="flex-shrink-0 mt-1">
              <div className="w-10 h-10 bg-navy/5 rounded-full flex items-center justify-center">
                <Edit className="text-gold w-5 h-5" />
              </div>
            </div>
            <div>
              <h2 className="text-xl font-serif text-navy mb-3">Policy Updates</h2>
              <p className="text-gray-600 font-light leading-relaxed">
                We may obtain the right to update this policy. Any changes will be posted here, and your continued use of our services constitutes acceptance of these changes.
              </p>
            </div>
          </div>

          {/* Section 6 */}
          <div className="flex gap-6">
            <div className="flex-shrink-0 mt-1">
              <div className="w-10 h-10 bg-navy/5 rounded-full flex items-center justify-center">
                <Shield className="text-gold w-5 h-5" />
              </div>
            </div>
            <div>
              <h2 className="text-xl font-serif text-navy mb-3">Contact Us</h2>
              <p className="text-gray-600 font-light leading-relaxed">
                If you have questions about our privacy practices, please reach out to us directly through our contact page.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
