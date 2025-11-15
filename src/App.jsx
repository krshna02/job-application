import React from 'react'
import Cards from './components/Cards.jsx'
const jobopenings=[{company:"Amazon",role:"frontend engineer",tag1:"Full Time",tag2:"Junior Level",pay:"$150/hour",location:"Bangalore, India", brandlogo:"https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", dateposted:"2 days ago"},
  {company:"google",role:"backend engineer",tag1:"Part Time",tag2:"Senior Level",pay:"$130/hour",location:"California, USA",brandlogo:"https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", dateposted:"5 days ago"},
  {company:"Meta",role:"fullstack engineer",tag1:"Remote",tag2:"Mid Level",pay:"$140/hour",location:"New York, USA",brandlogo:"https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png", dateposted:"1 day ago"},
  {company:"Microsoft",role:"devops engineer",tag1:"Freelance",tag2:"Internship",pay:"$110/hour",location:"Redmond, USA",brandlogo:"https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", dateposted:"4 days ago"}, 
  {company:"Apple",role:"ios engineer",tag1:"Onsite",tag2:"Internship",pay:"$160/hour",location:"Cupertino, USA",brandlogo:"https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg", dateposted:"3 days ago"},
  {company:"Netflix",role:"data engineer",tag1:"Contract",tag2:"Senior Level",pay:"$170/hour",location:"Los Gatos, USA",brandlogo:"https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg", dateposted:"6 days ago"},

]


const App = () => {
  return (
    <div className='parent' > 
    
      {jobopenings.map(function(elem){
        return <Cards title={elem.company} role={elem.role} role1={elem.tag1} role2={elem.tag2} payout={elem.pay} location={elem.location} brand={elem.brandlogo} posted={elem.dateposted}/>
})}
    </div>
  )
}

export default App