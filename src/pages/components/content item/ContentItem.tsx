import "react-responsive-carousel/lib/styles/carousel.min.css"
import "./content-item.css"

import { ContentItemType } from "../../../data/types"
import { ImageContent } from "./ImageContent"
import React from "react"
import { TextContent } from "./TextContent"

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

  const title = `${contentData.heading}${contentData.subheading ? ` - ${contentData.subheading}` : ""}`

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
        {contentData.links?.github ? (
          <a href={contentData.links?.github} className={"popout-link"}>
          <h2>
            {title}
          </h2>
        </a>
        ) : (
          <h2>{title}</h2>
        )
        }

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
