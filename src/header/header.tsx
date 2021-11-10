import './header.css';
import LinkedIn from "../assets/linkedin.svg"

const Header = () => {

  

  return (
    <header>
      <div className="internal-nav">
        <a href="/">Home</a>
        <a href="/blogs">Blogs</a>
      </div>
      <div className="title">
        Matthew B. Bone
      </div>
      <div className="external-links">
        <a href="/">Email</a>
        <a href="https://github.com/matthewbbone">Github</a>
        <a href="https://www.linkedin.com/in/matthew-bone-05a73a160/">LinkedIn</a>
        <LinkedIn/>
      </div>
    </header>
  )
}

export default Header