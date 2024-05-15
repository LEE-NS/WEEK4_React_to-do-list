import React from 'react'

export default function Section({renderSection, sectionName}) {

  return (
    <div className="category">
      <h2>{sectionName}</h2>
      <ul>{renderSection}</ul>
    </div>
  )
}
