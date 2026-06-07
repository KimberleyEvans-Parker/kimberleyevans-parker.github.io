import { SubNavbarLink } from "./SubNavbarLink"
import navStyles from "./navigation.module.css"

interface SubNavbarProps {
  headings: string[]
  section: string
}

export const SubNavbar = ({ headings, section }: SubNavbarProps) => {
  return (
    <nav className={`${navStyles.subnav} ${navStyles['slide-in']}`}>
      <div
        className={`${navStyles['subnav-container']} ${navStyles['navbar-container']}`}
      >
        <ul>
          {headings.map((heading) => {
            return <SubNavbarLink section={section} heading={heading} key={heading} />
          })}
        </ul>
      </div>
    </nav>
  )
}
