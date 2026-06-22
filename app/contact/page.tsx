export default function Contact() {
  return (
    <section>
      <h2 className="text-2xl font-bold">Contact</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <form className="card-glass p-6 rounded-lg space-y-4">
          <input className="w-full p-3 rounded bg-black/20 border border-white/4" placeholder="Name" />
          <input className="w-full p-3 rounded bg-black/20 border border-white/4" placeholder="Email" />
          <textarea className="w-full p-3 rounded bg-black/20 border border-white/4" placeholder="Message" rows={5} />
          <button className="px-4 py-2 rounded bg-accent-500 text-black font-semibold">Send</button>
        </form>

        <div className="card-glass p-6 rounded-lg">
          <h4 className="font-semibold">Office</h4>
          <p className="text-slate-400 mt-2">For institutional inquiries, email: chris@yourfirm.com</p>
        </div>
      </div>
    </section>
  )
}
