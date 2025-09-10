import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"

import { ImageContent } from "./ImageContent"
import { TextContent } from "./TextContent"
import { ContentItemType } from "../../../data/types"

import "./content-item.css"

interface ContentItemProps {
  contentData?: ContentItemType
  animationDelay: string
  imgOnLeft: boolean
}

export const ContentItem = ({ contentData, animationDelay, imgOnLeft }: ContentItemProps) => {
  // for loading a section when it scrolls into view
  const [isVisible, setVisible] = React.useState(true)
  const domRef = React.useRef(null)
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting))
    })
    if (domRef.current) {
      observer.observe(domRef.current)
      const current = domRef.current
      return () => {
        if (current) observer.unobserve(current)
      }
    }
  }, [])

  if (!contentData) return <></>

  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
      id={contentData.heading}
    >
      <div
        className="fade left"
        style={{
          WebkitAnimationDelay: animationDelay,
          MozAnimationDelay: animationDelay,
          OAnimationDelay: animationDelay,
          animationDelay: animationDelay,
        }}
      >
        <a href={contentData.links?.github} className={"popout-link"}>
          <h2>
            <i className="fa fa-github popout" aria-hidden="true" />
            {contentData.heading} {contentData.subheading && "- "} {contentData.subheading}
          </h2>
        </a>

        <div className={`content-item-container ${imgOnLeft ? "image-first" : ""}`}>
          <div className="text-content">
            <TextContent
              dates={contentData.dates}
              description={contentData.description}
              teamSize={contentData.teamSize}
              links={contentData.links}
              technologies={contentData.technologies}
            />
          </div>
          {contentData.images && (
            <div className="image-content">
              <ImageContent images={contentData.images} heading={contentData.heading} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
