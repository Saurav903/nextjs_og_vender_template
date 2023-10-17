import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      

     

      <div style={{margin:"auto"}}>
        {/* <Link
          href="/api/og"
          target="_blank"
    
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </Link> */}

       

       

        <iframe width={"90%"} height={"600px"} src='/api/og'/>

        
      </div>
    </main>
  )
}
