import { SubNavbarLink } from "./SubNavbarLink"

interface SubNavbarProps {
  headings: string[]
  section: string
}

export const SubNavbar = ({ headings, section }: SubNavbarProps) => {
  return (
    <nav className="subnav slide-in">
      <div
        className="subnav-container navbar-container"
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
