import React from "react"
import Link from "next/link"

const HomePage: React.FC = () => {
  return (
    <div>
      <div>
        <h1>Meta-Carbon Coding Challenge</h1>
      </div>

      <div>
        <div>
          <p>Coder: Santiago Pablo Ortiz</p>
          <img src="" alt="" />
        </div>

        <div>
          <p>Reach me out</p>
          <div>
            <p>Add Portfolio Website</p>
            <p>Add GitHub Profile (Everything with emoticons)</p>
          </div>
        </div>
      </div>

      <Link href="/faq">
        <a>Go to the FAQ Section</a>
      </Link>
    </div>
  )
}

export default HomePage


