
export default function HomePage() {
    return (
      <div className="flex justify-between top-0.5">
        <h1>Logo</h1>
        <nav className="text-2xl font-medium">
            <ul className="flex gap-5">
                <li className="hover:text-cyan-600"><a href="#">Home</a></li>
                <li className="hover:text-cyan-600"><a href="#">About Me</a></li>
                <li className="hover:text-cyan-600"><a href="#">Experience</a></li>
                <li className="hover:text-cyan-600"><a href="#">Contact</a></li>
            </ul>
        </nav>
        <div className="flex gap-5">
            <button className="bg-cyan-600 text-white px-5 py-2 rounded-full border-2">Let's work together</button>
        </div>
      </div>
    )
  }