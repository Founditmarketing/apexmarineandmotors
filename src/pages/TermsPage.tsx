import { Link } from 'react-router-dom';

export default function TermsPage() {
  return (
    <div className="bg-black min-h-screen pt-20 lg:pt-24 pb-16 lg:pb-24 flex flex-col relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow">
        <div className="mb-8">
          <h4 className="flex items-center gap-2 text-white/50 font-serif text-sm tracking-[0.3em] uppercase mb-4">
            <span className="text-primary font-black">///</span> Legal
          </h4>
          <h1 className="text-4xl md:text-5xl font-bold text-white uppercase font-serif tracking-wide mb-8">
            Terms & <span className="text-primary">Conditions</span>
          </h1>
        </div>

        <div className="bg-dark-bg/80 border border-white/5 p-6 md:p-10 space-y-8 text-gray-400 leading-relaxed text-sm md:text-base">
          <p>
            Welcome to Apex Marine & Motors. By accessing or using our website, services, or contacting us, you agree to comply with and be bound by the following terms and conditions.
          </p>

          <div>
            <h3 className="text-white font-bold tracking-wider uppercase mb-3">1. SMS & Communication Consent</h3>
            <p>
              By providing your phone number on any of our contact forms, you explicitly consent to receive text messages (SMS) and phone calls from Apex Marine & Motors LLC regarding your inquiries, quotes, and service updates. You may opt out of SMS communications at any time by replying "STOP" to any message you receive from us. Message and data rates may apply.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold tracking-wider uppercase mb-3">2. Service Estimates</h3>
            <p>
              Any quotes or estimates provided through our website or over the phone are preliminary and subject to change based on an in-person inspection of the vehicle or vessel. Final pricing will be agreed upon before any services are rendered.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold tracking-wider uppercase mb-3">3. Privacy Policy</h3>
            <p>
              We respect your privacy and are committed to protecting your personal information. Your phone number, email, and personal details will only be used by Apex Marine & Motors LLC for the purpose of fulfilling your service requests. We do not sell or share your personal information with third parties for marketing purposes.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold tracking-wider uppercase mb-3">4. Limitation of Liability</h3>
            <p>
              Apex Marine & Motors LLC shall not be liable for any indirect, incidental, or consequential damages resulting from the use of our website or the services provided, except as explicitly mandated by applicable law.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold tracking-wider uppercase mb-3">5. Updates to Terms</h3>
            <p>
              We reserve the right to update these terms and conditions at any time. Any changes will be posted on this page with an updated effective date.
            </p>
          </div>

          <div className="pt-8 border-t border-white/10 text-xs text-gray-500">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </div>
        </div>
      </div>
    </div>
  );
}
