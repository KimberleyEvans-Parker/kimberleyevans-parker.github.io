import { SubNavbarLink } from "./SubNavbarLink";

interface SubNavbarProps {
  headings: string[];
  section: string;
}

export const SubNavbar = ({ headings, section }: SubNavbarProps) => {
  return (
    <nav className="nav2 slide-in">
      <div
        className="nav2-container navbar-container"
      >
        <ul>
          {headings.map((heading) => {
            return <SubNavbarLink section={section} heading={heading} />;
          })}
        </ul>
      </div>
    </nav>
  )
}
