
const Introduction = () => {
  return (
    <div className="introduction">
        <div className="all">
        <h3>Introduction to React</h3>
        <p>React एक JavaScript library है जो user interfaces 
            (UI) को बनाने के लिए इस्तेमाल होती है। इसे Facebook (अब Meta) ने develop किया था। React मुख्यतः Single Page Applications (SPA) और dynamic web apps के लिए उपयोगी है। यह component-based architecture पर आधारित है, जिससे UI को reusable और modular बनाया जा सकता है।</p>
        </div>
      <div className="all">
        <h3>History of React</h3>
        <ol>
            <li>2011: React को Facebook ने पहली बार अपने newsfeed feature के लिए बनाया। इसे Facebook engineers Jordan Walke द्वारा develop किया गया था।</li>
            <li>
            2013: React को Open Source किया गया और GitHub पर रिलीज़ किया गया।
            </li>
            <li> 2015: React के साथ React Native लॉन्च</li>
            <li>2015: React ke saath React Native launch hua, jo mobile app development ke liye tha.</li>
            <li>2016: React ne major updates laye jisme functional components aur hooks jaise features add kiye gaye.</li>
        </ol>
      </div>
      <div className="all">
        <h3>Why Use React?</h3>
        <ol>
            <li>
                <p>Component-Based Architecture:</p>
                <ul>
                    <li>App ko chhote-chhote reusable components me tod sakte hain, jisse code maintainable aur modular banta hai.</li>
                    <li>Example: Header, Footer, Sidebar ko alag-alag components ke form me manage kar sakte hain.</li>
                </ul>
            </li>
            
        </ol>
        <ol>
            <li>
                <p>Fast Rendering (Virtual DOM):</p>
                <ul>
                    <li>React Virtual DOM ka use karta hai jo actual DOM ke comparison me fast hota hai.</li>
                    <li>Sirf wahi part re-render hota hai jo change hota hai, puri page reload karne ki zarurat nahi hoti.</li>
                </ul>
            </li>
            
        </ol>
        <ol>
            <li>
                <p>Declarative UI:</p>
                <ul>
                    <li>UI ko state ke hisaab se dynamically update karna bahut simple hota hai.</li>
                    
                </ul>
            </li>
            
        </ol>
        <ol>
            <li>
                <p>Learn Once, Write Anywhere:</p>
                <ul>
                    <li>React ko web apps aur mobile apps dono me use kar sakte hain (React Native ke through).</li>
                   
                </ul>
            </li>
            
        </ol>
      </div>
      <div className="all">
        <h3>React App Code</h3>
        <img src="/Structure.jpg" alt="React Structure" width='400px' height='300px'/>
        <h4>Explanation:</h4>
        <ul>
            <li>import React from 'react'-->Yeh React library ko import karta hai.</li>
            <li>function App() -->Ek functional component hai jo UI ko return karta hai.</li>
            <li> Div -->HTML structure define karne ke liye.</li>
        </ul>
      </div>
      <div className="all">
        <h3>Meaning of SPA</h3>
        <h4>SPA ka full form hai -->Single Page Application.</h4>
        <p>Yeh ek aisi web application hai jo ek hi HTML page par kaam karti hai aur user ke interaction ke hisaab se dynamically content ko update karti hai bina poora page reload kiye.</p>
        <h4>React ko Single Page Application (SPA) kyu kaha jata hai?</h4>
        <ol>
            <li>Ek HTML File: Sirf ek baar index.html load hota hai, aur React components ke through UI dynamically render hota hai.</li>
            <li>No Reload: Sirf wahi part update hota hai jo change hua hai, poora page reload nahi hota (Virtual DOM use karta hai).</li>
            <li>Client-Side Routing: URL change hone par React Router use karta hai bina server se nayi file maange.</li>
        </ol>
        <h4>Example: SPA kaise kaam karta hai React me?</h4>
        <img src="/howToWorkSpa.png" alt="React Structure" width='400px' height='1000px'/>

      </div>
      <div className="all">
        <h3>Some key point</h3>
        <ul>
            <li>Virtual DOM: React ka ek feature jo DOM updates ko fast aur efficient banata hai.</li>
            <li>JSX: HTML aur JavaScript ka combination hai, jo readable aur writable code likhne me madad karta hai.</li>
            <li>Components: Reusable pieces of code jinke through UI ko tod kar manageable banate hain.</li>
            <li>Props: Parent component se child component tak data bhejne ke liye.</li>
            <li>State: Component ke internal data ko store aur manage karne ke liye.</li>
            <li>Hooks: Functional components me state aur lifecycle methods ko handle karne ke liye (e.g., useState, useEffect).</li>
            <li>Community and Ecosystem: Bahut saare third-party tools aur libraries React ke saath integrate ki ja sakti hain (e.g., Redux, Tailwind CSS).</li>
            <li>React Router: SPA me different pages handle karne ke liye.</li>
        </ul>
         </div>
    
    </div>
    
  )
}

export default Introduction
