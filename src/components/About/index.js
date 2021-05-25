import React, { useState } from "react"
import Fuse from "fuse.js"

const About = () => {
  const [searchTerm, setSearchTerm] = useState("")


  let sections = []


  const options = {
    includeScore: true,
    keys: ["title", "content"],
  }

  const fuse = new Fuse(sections, options)

  const result = fuse.search(searchTerm)

  const mappedResult = result.map(i => i.item)

  const shownResult = searchTerm ? mappedResult : sections
  return (
    <>
      <div className="search-bar">
        <div className="form-group search">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Rechercher"
            onChange={e => {
              setSearchTerm(e.target.value)
            }}
          />
        </div>
      </div>

      <div className="all-about-element">
        {shownResult.map(section => (
          <div className="about-element">
            <h4 className="about-element__title">{section.title}</h4>
            <p className="about-element__text">{section.content}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default About
