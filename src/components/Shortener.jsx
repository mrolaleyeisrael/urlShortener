import bgMobile from "../images/bg-boost-mobile.svg"
import bgDesktop from "../images/bg-boost-desktop.svg"

import React, { useEffect, useState } from 'react'


const getLinks = () =>{
  let links = localStorage.getItem("links")
  if(links){
    return JSON.parse(localStorage.getItem("links"))
  } else {
    return[]
  }
}
export default function Shortener() {
  const [text, setText] = useState("")
  const [links, setLinks] = useState(getLinks)
  const [buttonText, setButtonText] = useState("Copy")

  const handleSubmit = (e) =>{
    e.preventDefault()

    if(!text){
      alert("Input is empty")
    } else {
      const shortenLink = async () => {
        const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${text}`)
        const data = await res.json()
        console.log(data.result)
        setLinks(data.result)
        setText("")
      }

      shortenLink()
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(links.full_short_link)
    setButtonText("Copied")
  }

  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(links))
  }, [links])

  return (
    <>
      <section className=" max-width -mb-28">
        <div className=" shortener relative">
          <picture>
            <source media="(min-width: 768px)" srcSet={bgDesktop} />
            <img src={bgMobile} alt="" />
          </picture>
          <form className=" form" onSubmit={handleSubmit}>
            <div className=" flex flex-col md:flex-row">
              <input
                onChange={(e) => setText(e.target.value)} type="url"
                value={text}
                placeholder="Shorten a link here"
                className=" w-full py-2 px-5 rounded-lg outline-0 shadow-2xl shadow-black ring-0 mb-2 md:mb-0 md:w-4/5"
              />

              <button
                onClick={handleSubmit}
                type="submit"
                className=" btn-cta rounded-lg w-full md:w-40 md:ml-5">Shorten It!
              </button>
            
            </div>
          </form>

          <div className=" flex flex-col items-center justify-center bg-white text-center md:flex-row md:justify-between p-3 mt-3 rounded-lg shadow">
            <article>
              <h6 className=" mb-3 md:mb-0">{links.original_link}</h6>
            </article>

            <article>
              <ul className=" md:flex md:items-center">
                <li className=" md:mr-5">
                  <button className=" text-cyan-500">{links.full_short_link}</button> </li>
                <li>
                  <button
                    onClick={handleCopy}
                    className=" btn-cta rounded-lg text-sm focus:bg-slate-600">
                      {buttonText}
                  </button>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}
