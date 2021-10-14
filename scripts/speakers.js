// create constants variables.//
const targetSection = document.querySelector('.speakers');
const title = document.createElement('h1');
const ligne = document.createElement('hr');
const mobDiv = document.createElement('div');
const desDiv = document.createElement('div');
const btn = document.createElement('p');
const speakers = {
  p1: {
    src: 'statics/images/p1.jpeg',
    name: 'Courtney Kissler',
    rule: 'CTO @zulily',
    description: 'Courtney Kissler joined Zulily in January 2021 as CTO and SVP of Technology',
  },
  p2: {
    src: 'statics/images/p2.jpeg',
    name: 'Chris Seaton',
    rule: 'Researcher (Senior Staff Engineer) @Shopify',
    description: 'Chris is a Researcher (Senior Staff Engineer) at Shopify, where he works on the Ruby programming Language, and a Visitor at the University of Manchester.',
  },
  p3: {
    src: 'statics/images/p3.jpeg',
    name: 'Max Stoiber',
    rule: 'Co-Founder @GraphCDN',
    description: 'Max is the co-founder of GraphCDN, the GraphQL CDN. Previously, he worked at Gatsby, and before that GitHub, who acquired his last startup.',
  },
  p4: {
    src: 'statics/images/p4.jpeg',
    name: 'Christi Schneider',
    rule: 'Software Engineer @Square',
    description: 'Christi recently became a software engineer at Square\'s office in Atlanta. She works on the extensibility team, building the tools and establishing patterns that other Square teams use to build the external developer program. ',
  },
  p5: {
    src: 'statics/images/p5.png',
    name: 'Alex Borysov',
    rule: 'Senior Software Engineer @Netflix',
    description: 'Alex is currently a senior software engineer at Netflix, where he is working on building a unified global digital Studio that powers the effective production of Netflix content.',
  },
  p6: {
    src: 'statics/images/p6.jpeg',
    name: 'Selina Liu',
    rule: 'Senior Software Engineer @Airbnb',
    description: 'Selina is a senior software engineer at Airbnb, the world’s largest platform for accommodation-sharing and unique travel experiences. ',
  },

};

// utilities //
function speakersCarte(nb, target) {
  for (let i = 0; i < nb; i += 1) {
    const person = Object.keys(speakers)[i];
    const mobileCard = document.createElement('div');
    const textHalf = document.createElement('div');
    const imgVisitor = document.createElement('img');
    const nameVisitor = document.createElement('h3');
    const ruleVisitor = document.createElement('p');
    const sepVisitor = document.createElement('hr');
    const desVisitor = document.createElement('p');
    imgVisitor.src = speakers[person].src;
    imgVisitor.alt = 'Speaker photo';
    imgVisitor.className = 'img-visitor';
    nameVisitor.textContent = speakers[person].name;
    nameVisitor.className = 'name-visitor';
    ruleVisitor.textContent = speakers[person].rule;
    ruleVisitor.className = 'rule-visitor';
    sepVisitor.className = 'rule-seperator';
    desVisitor.textContent = speakers[person].description;
    desVisitor.className = 'visitor-description';
    textHalf.appendChild(nameVisitor);
    textHalf.appendChild(ruleVisitor);
    textHalf.appendChild(sepVisitor);
    textHalf.appendChild(desVisitor);
    textHalf.className = 'text-half';
    mobileCard.appendChild(imgVisitor);
    mobileCard.appendChild(textHalf);
    mobileCard.className = 'mobile-card';
    if (nb === 6) {
      const startR = Math.floor(i / 2) + 1;
      const startC = (i % 2) + 1;
      mobileCard.style.gridRow = `${startR} / 1 span`;
      mobileCard.style.gridColumn = `${startC} / 1 span`;
      target.appendChild(mobileCard);
    } else {
      mobileCard.style.gridRow = `${i + 1} / 1 span`;
      target.appendChild(mobileCard);
    }
  }
}
// Prepare elemnts.//
title.textContent = 'Featured Speakers';
title.className = 'speakers-title';
ligne.className = 'ligne';
mobDiv.className = 'mob-div';
desDiv.className = 'des-div';
btn.innerHTML = 'MORE <img src="statics/images/fleche.png" alt="More">';
btn.className = 'btn';
speakersCarte(2, mobDiv);
speakersCarte(6, desDiv);
// Add elemnents to target Section.
targetSection.appendChild(title);
targetSection.appendChild(ligne);
targetSection.appendChild(mobDiv);
targetSection.appendChild(desDiv);
targetSection.appendChild(btn);
desDiv.style.display = 'none';
if (window.innerWidth > 768) {
  desDiv.style.display = 'grid';
  mobDiv.style.display = 'none';
  btn.style.display = 'none';
} else {
  desDiv.style.display = 'none';
  mobDiv.style.display = 'grid';
  btn.style.display = 'block';
}
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    desDiv.style.display = 'grid';
    mobDiv.style.display = 'none';
    btn.style.display = 'none';
  } else {
    desDiv.style.display = 'none';
    mobDiv.style.display = 'grid';
    btn.style.display = 'block';
  }
});