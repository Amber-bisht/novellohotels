import React from "react";
import { CalendarX, AlertCircle } from "lucide-react";

const RefundPolicyPage = () => {
  return (
    <div className="min-h-screen bg-cream py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-navy mb-6">Refund Policy</h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 leading-relaxed font-light">
            At <span className="font-semibold text-navy">Novello Hotels</span>, we value transparency.
            Below is our clear and concise policy regarding booking cancellations and refunds.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12 border border-gray-100 space-y-10">

          {/* Policy 1 */}
          <div className="flex gap-6">
            <div className="flex-shrink-0 mt-1">
              <div className="w-12 h-12 bg-navy/5 rounded-full flex items-center justify-center">
                <CalendarX className="text-gold w-6 h-6" />
              </div>
            </div>
            <div>
              <h2 className="text-xl font-serif text-navy mb-3">Cancellation: 15 to 7 Days Before</h2>
              <p className="text-gray-600 font-light leading-relaxed">
                If you cancel your booking between 15 days and 7 days prior to your confirmed check-in date,
                <span className="font-medium text-red-500"> 50% of the total billing amount</span> will be charged as a cancellation fee.
              </p>
            </div>
          </div>

          <div className="w-full h-px bg-gray-100"></div>

          {/* Policy 2 */}
          <div className="flex gap-6">
            <div className="flex-shrink-0 mt-1">
              <div className="w-12 h-12 bg-navy/5 rounded-full flex items-center justify-center">
                <AlertCircle className="text-gold w-6 h-6" />
              </div>
            </div>
            <div>
              <h2 className="text-xl font-serif text-navy mb-3">Cancellation: Less Than 7 Days</h2>
              <p className="text-gray-600 font-light leading-relaxed">
                For cancellations made less than 7 days prior to the check-in date, the
                <span className="font-medium text-red-500"> total booking amount (100%)</span> will be charged. No refunds will be issued in this case.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RefundPolicyPage;
