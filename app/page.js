export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-24 bg-[#F8FAFC]">
      {/* Hero Section */}
      <section className="w-full max-w-4xl mx-auto text-center mb-20 mt-10">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1E293B] mb-6">Tame Your Digital Shame Pile.</h1>
        <p className="text-lg md:text-xl text-[#475569] mb-10 max-w-2xl mx-auto">Clarity is your AI-powered Chief of Staff. We curate one calm, daily briefing from the chaos of your inbox, podcasts, and saved content so you can find focus and never miss what matters.</p>
        <button className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-200">Join the Waitlist →</button>
        <p className="text-sm text-[#64748B] mt-4">Join thousands of professionals reclaiming their focus.</p>
        {/* Placeholder for mockup image */}
        <div className="mt-16 p-8 bg-white rounded-xl shadow-lg border border-gray-200">
          <p className="text-gray-500">[Visual of the Clarity Daily Briefing dashboard will go here]</p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full max-w-4xl mx-auto text-center mb-20">
        <h2 className="text-3xl font-bold text-[#1E293B] mb-12">How it works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6">
            <div className="text-3xl mb-4">🔗</div>
            <h3 className="font-semibold text-lg mb-2 text-[#2563EB]">Connect</h3>
            <p className="text-[#475569]">Securely link your apps in minutes. (Gmail, Spotify, Pocket, and more).</p>
          </div>
          <div className="p-6">
            <div className="text-3xl mb-4">✨</div>
            <h3 className="font-semibold text-lg mb-2 text-[#2563EB]">Curate</h3>
            <p className="text-[#475569]">Our AI works overnight to summarize, prioritize, and declutter your digital chaos.</p>
          </div>
          <div className="p-6">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="font-semibold text-lg mb-2 text-[#2563EB]">Conquer</h3>
            <p className="text-[#475569]">Wake up to your one-page briefing and a calm, focused day.</p>
          </div>
        </div>
      </section>

      {/* Pain Point Section */}
      <section className="w-full max-w-2xl mx-auto text-center mb-20">
        <h2 className="text-3xl font-bold text-[#1E293B] mb-8">Sound Familiar?</h2>
        <ul className="list-disc list-inside text-left text-lg text-[#475569] mb-8 space-y-2">
          <li>That sinking feeling of 100+ unread newsletters.</li>
          <li>The podcast queue that never gets shorter.</li>
          <li>The important message buried in a promotions tab.</li>
          <li>The online course you bought but never started.</li>
        </ul>
        <p className="italic text-[#64748B]">You are not disorganized. You are overwhelmed. We are here to help.</p>
      </section>

      {/* Final CTA Section */}
      <section className="w-full max-w-xl mx-auto text-center p-8 bg-white rounded-xl shadow-lg border border-gray-200">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1E293B] mb-4">Ready to Find Your Clarity?</h2>
        <p className="text-[#475569] mb-6">Join the waitlist for early access and a lifetime launch discount.</p>
        <form className="flex flex-col space-y-4">
          <input type="email" placeholder="Your best email address" required className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563EB] focus:outline-none"/>
          <button type="submit" className="bg-[#059669] hover:bg-[#047857] text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-200">Join the Waitlist</button>
        </form>
        <p className="text-xs text-[#64748B] mt-4">🔒 Your data is yours. We never sell it. Built with bank-level security.</p>
      </section>
    </main>
  )
}