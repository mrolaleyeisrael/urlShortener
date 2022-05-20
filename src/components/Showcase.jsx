import showcase from '../images/illustration-working.svg'

function Showcase() {
  return (
    <>
      <section className=' pt-24 pb-10 lg:pt-40 lg:pb-20'>
        <div className="max-width grid grid-cols-1 md:grid-cols-2 md:gap-10 md:place-items-center">
          <article className=' text-center md:text-left'>
            <h1 className=' text-5xl lg:text-6xl mb-5 font-bold text-slate-800'>More than just shorter links</h1>
            <p className=' lg:text-lg text-slate-400 mb-10'>
            Build your brand’s recognition and get detailed insights on how your links are performing.
            </p>
            <button className=' btn-cta rounded-full'>Get Started</button>
          </article>

          <article>
            <img src={showcase} alt="" />
          </article>
        </div>
      </section>
    </>

    )
}

export default Showcase