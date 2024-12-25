import React from 'react'

const Developers = () => {
  const DEVELOPERS = [{
      name: 'Anish Bar, CSE(22-26)',
      phone: '+919433766599',
      mail: 'anishbar2003@gmail.com'
    },{
      name: 'Anuvab Maity, CSE(22-26)',
      phone: '+918697512267',
      mail: 'anuvabmaity99@gmail.com'
    },{
      name: 'Kunal Das, CSE(22-26)',
      phone: '+916289138360',
      mail: 'das840kunal@gmail.com'
    },{
      name: 'Sunanda Manna, CSE(22-26)',
      phone: '+917439999724',
      mail: 'mannasunanda11705@gmail.com'
    }
  ]

  const websitedevs = DEVELOPERS.map((dev, index) =>
    <div key={index} className='devcard'>
      <p id='name'>{dev.name}</p>
      <a href={`tel:${dev.phone}`}>📞 {dev.phone}</a>
      <br/>
      <a href={`mailto:${dev.mail}`}>✉️ {dev.mail}</a>
    </div>
  );

  return (
    <div className='allthedevs' id='devs'>
      <h1>Contact the Devs</h1>
      <div className='devcards'>{websitedevs}</div>
    </div>
  );
}

export default Developers