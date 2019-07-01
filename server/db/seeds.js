use history_app;
db.dropDatabase();

db.events.insertMany([
  {
    "tag": "Rome",
    "title": "Sulla becomes Dictator",
    "date": '82 BC',
    "blurb": "Sulla defeats Marius in a civil war, becoming dictator-for-life. He purges his political enemies, and attempts to shore up the laws to prevent any one man from gaining too much power. He retires two years later.",
    "location": "Rome",
    "image": "https://www.globalsecurity.org/military/world/spqr/images/spqr-sulla.jpg",
    "coordinates": [41.89275569364862, 12.49186506281216]
  },
  {
    "tag": "Rome",
    "title": "The Rise of Pompey",
    "date": '71 BC',
    "blurb": "Pompey, an ambitious young man, bucks tradition by gaining political powers before his age should allow, and puts down a rebellion in Hispania.",
    "location": "Spain",
    "image": "https://i.pinimg.com/originals/35/61/99/356199bcd3ca17138792d971f81415b6.jpg",
    "coordinates": [40.215856421088205, -3.0723066655184206]
  },
  {
    "tag": "Rome",
    "title": "The Defeat of Spartacus by Crassus",
    "date": "70 BC",
    "blurb": "Crassus, richest man in the republic, crushes the slave uprising, only for Pompey to swoop in and steal the glory.",
    "location": "Petelia, Italy",
    "image": "https://www.historynet.com/wp-content/uploads/2006/07/Spartacus_by_Hermann_Vogel.jpg",
    "coordinates": [40.74490425886839, 15.231585527263018]
  },
  {
    "tag": "Rome",
    "title": "First Triumverate",
    "date": "60BC",
    "blurb": "A young Julius Ceaser allies himself with Crassus (with his money) and Pompey (with his connections) to form a powerful and ambitious first triumverate.",
    "location": "Rome",
    "image": "https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photos/9329214/imgres-1.jpg",
    "coordinates": [41.89275569364862, 12.49186506281216]
  },
  {
    "tag": "Rome",
    "title": "Caesar conquers Gaul",
    "date": "58-50BC",
    "blurb": "Over a series of grueling campaigns, Julius Caesar leads Roman forces to victory over the tribes of Gaul, bringing the entire region under the control of the Roman empire.",
    "location": "Gaul",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Siege-alesia-vercingetorix-jules-cesar.jpg/1920px-Siege-alesia-vercingetorix-jules-cesar.jpg",
    "coordinates": [46.99442304913762, 2.0358906061617215]
  },
  {
    "tag": "Rome",
    "title": "Crassus Dies",
    "date": "53BC",
    "blurb": "Crassus, desperate to finally gain military glory and a triumph (military parade) perishes in battle trying conquer Parthia.",
    "location": "Parthia",
    "image": "https://images.fineartamerica.com/images-medium-large/death-of-crassus-at-carrhae-against-photo-researchers.jpg",
    "coordinates": [37.18366358299065, 38.19188385062329]
  },
  {
    "tag": "Rome",
    "title": "Caesar crosses the Rubicon",
    "date": "49BC",
    "blurb": "Caesar, in Gaul, is ordered to disband his legion and return to Rome by the senate. In crossing the Rubicon river, the senate declares his actions an act of war, and Rome is in conflict with itself yet again.",
    "location": "Italy",
    "image": "http://clba.org/wp-content/uploads/2018/09/Caesar-1080x675.jpg",
    "coordinates": [44.0885196319852, 12.393019607549201]
  },
  {
    "tag": "Rome",
    "title": "Pompey killed in Egypt",
    "date": "48BC",
    "blurb": "After suffering several defeats at the hand of Julius Caesar, Pompey flees to Egypt looking for aid. An officer of Ptolemy strikes him down, by the order of the king of Egypt.",
    "location": "Egypt",
    "image": "https://upload.wikimedia.org/wikipedia/commons/5/51/Caesar-07.jpg",
    "coordinates": [31.157987962433836, 32.43867217775794]
  },
  {
    "tag": "Rome",
    "title": "Caesar murdered in the forum",
    "date": "44BC",
    "blurb": "Caesar rules Rome as defacto dictator, taking on more and more powers to himself. He is betrayed by his friend Brutus, cornered and stabbed by a group of concerned senators.",
    "location": "Rome",
    "image": "https://cdn.vox-cdn.com/thumbor/MnXj3KNjD9rw7j8OObK-cBXzBQk=/230x145:1575x1154/1200x800/filters:focal(230x145:1575x1154)/cdn.vox-cdn.com/uploads/chorus_image/image/45894920/deathofcaesar.0.0.jpg",
    "coordinates": [41.89275569364862, 12.49186506281216]
  },
  {
    "tag": "Rome",
    "title": "Second Triumverate",
    "date": "43BC",
    "blurb": "Julius Caesar's young heir, Octavian, joins forces with Mark Anthony and Lepidus to combat Brutus's forces.",
    "location": "Rome",
    "image": "http://augustusnhd.weebly.com/uploads/4/7/7/4/47744177/8189408_orig.jpg",
    "coordinates": [41.89275569364862, 12.49186506281216]
  },
  {
    "tag": "Rome",
    "title": "Brutus defeated at Phillipi",
    "date": "42BC",
    "blurb": "Mark Anthony and Octavian defeat Brutus at the battle of Phillipi. Brutus commits suicide before he can be captured.",
    "location": "Macedon",
    "image": "https://i.ytimg.com/vi/mjWlGf3ynnQ/hqdefault.jpg",
    "coordinates": [41.016940813939264, 24.310023261479895]
  },
  {
    "tag": "Rome",
    "title": "End of the Second Triumverate",
    "date": "33BC",
    "blurb": "Octavian and Mark Anthony officially break the triumverate, with Anthony allying with Egypt under the control of his lover, Cleopatra.",
    "location": "Egypt",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Sir_Lawrence_Alma-Tadema_-_The_Meeting_of_Antony_and_Cleopatra.jpg/1920px-Sir_Lawrence_Alma-Tadema_-_The_Meeting_of_Antony_and_Cleopatra.jpg",
    "coordinates": [31.14662305260475, 29.90453285798097]
  },
  {
    "tag": "Rome",
    "title": "Battle of Actium",
    "date": "31BC",
    "blurb": "Mark Anthony and Cleopatra are defeated by Octavian at the sea battle of Actium. After fleeing both commit suicide.",
    "location": "Actium",
    "image": "https://upload.wikimedia.org/wikipedia/commons/9/95/Castro_Battle_of_Actium.jpg",
    "coordinates": [38.943921989226524, 20.75927140422824]
  },
  {
    "tag": "Rome",
    "title": "Octavian Emperor",
    "date": "27BC",
    "blurb": "Octavian is name Caesar August, Emperor of Rome. The Roman Republic finally falls.",
    "location": "Rome",
    "image": "https://i2.wp.com/www.military-history.org/wp-content/uploads/2010/09/Augustus-Caesar.png?resize=423%2C308",
    "coordinates": [41.89275569364862, 12.49186506281216]
  },
  {
  "tag": "Civil War",
    "title": "The Peculiar Institution",
    "date": "1865",
    "blurb": "Slavery arrived in North America along side the Spanish and English colonists of the 17th and 18th centuries, with an estimated 645,000 Africans imported during the more than 250 years the institution was legal.",
    "location": "Alabama",
    "image": "http://icnacsj.org/wp-content/uploads/2016/03/Slavery.jpg",
    "coordinates": [32.624428528029995, -446.64248904679516]
  },
  {
  "tag": "Civil War",
  "title": "The Missouri Compromise",
  "date": "1820",
  "blurb": "In the growth years following the 1803 Louisiana Purchase, Congress was compelled to establish a policy to guide the expansion of slavery into the new western territory.",
  "location": "Missouri",
  "image": "https://www.history.com/.image/t_share/MTYyMjk5NzUyMTE1ODczNjkz/missouri-compromise.jpg",
  "coordinates": [38.2317623450261, -452.74296726914594]
},
{
  "tag": "Civil War",
  "title": "Nat Turner’s Rebellion",
  "date": "1831",
  "blurb": "TIn August of 1831, a slave named Nat Turner incited an uprising that spread through several plantations in southern Virginia.  Turner and approximately seventy cohorts killed around sixty white people.",
  "location": "Viginia",
  "image": "https://www.battlefields.org/sites/default/files/styles/gallery_item/public/thumbnails/image/nat-turner_0.jpg?itok=1Wnxd4fg",
  "coordinates": [37.36827230453463, -438.6290064839308]
},
{
  "tag": "Civil War",
  "title": "The Wilmot Proviso",
  "date": "1984",
  "blurb": "The Wilmot Proviso was a piece of legislation proposed by David Wilmot (D-FS-R PA) at the close of the Mexican-American War.  If passed, the Proviso would have outlawed slavery in territory acquired by the United States as a result of the war, which included most of the Southwest and extended all the way to California.",
  "location": "Washington",
  "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/David_Wilmot.png/220px-David_Wilmot.png",
  "coordinates":[38.78777138613269, -437.0478256199254]
},
{
  "tag": "Civil War",
  "title": "The Compromise of 1850",
  "date": "1850",
  "blurb": "With national relations soured by the debate over the Wilmot Proviso, senators Henry Clay and Stephen Douglas managed to broker a shaky accord with the Compromise of 1850.  The compromise admitted California as a free state and did not regulate slavery in the remainder of the Mexican cession all while strengthening the Fugitive Slave Act",
  "location": "California",
  "image": "https://apprend.io/wp-content/uploads/2017/06/Compromise-of-1850-Small.jpg",
  "coordinates": [36.36071475556519, -480.01485730423553]
},
{
  "tag": "Civil War",
  "title": " Uncle Tom’s Cabin",
  "date": "1852",
  "blurb": "Uncle Tom’s Cabin was the second-best-selling book in America in the 19th century, second only to the Bible.  Its popularity brought the issue of slavery to life for those few who remained unmoved after decades of legislative conflict and widened the division between North and South.",
  "location": "Georgia",
  "image": "http://prodimage.images-bn.com/pimages/2940013113671_p0_v1_s1200x630.jpg",
  "coordinates": [32.294664627915154, -442.9896739711822]
},
{
  "tag": "Civil War",
  "title": "Bleeding Kansas",
  "date": "1854",
  "blurb": "The Kansas-Nebraska Act of 1854 established Kansas and Nebraska as territories and set the stage for “Bleeding Kansas” by its adoption of popular sovereignty. Under popular sovereignty, it is the residents of the territories who decide by popular referendum if the state is to be a free or enslaved.",
  "location": "Kansas",
  "image": "https://unmistakablylawrence.com/wp-content/uploads/2018/07/Quantrills_Raid_on_Lawrence_Kansas._-768x520.jpg",
  "coordinates": [38.526189261405634, -458.3183440139016]
},
{
  "tag": "Civil War",
  "title": "Dred Scott v. Sanford",
  "date": "1857",
  "blurb": "Dred Scott was a Virginia slave who tried to sue for his freedom in court.  The case eventually rose to the level of the Supreme Court, where the justices found that, as a slave, Dred Scott was a piece of property that had none of the legal rights or recognitions afforded to a human being.",
  "location": "Virgina",
  "image": "https://www.battlefields.org/sites/default/files/styles/gallery_item/public/thumbnails/image/taney_0.jpg?itok=tUclsL4L",
  "coordinates": [37.36827230453463, -438.6290064839308]
},
{
  "tag": "Civil War",
  "title": "Lincoln-Douglas Debates",
  "date": "1858",
  "blurb": "In 1858, Democratic Senator Stephen Douglas faced a challenge for his seat from a relatively unknown one term former congressmen and “prairie lawyer” Abraham Lincoln. In the campaign that followed Lincoln and Douglas engaged in seven public debates across the state of Illinois where they debated the most controversial issue of the antebellum era: slavery.",
  "location": "California",
  "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Lincoln_Douglas.jpg/400px-Lincoln_Douglas.jpg",
  "coordinates": [36.36071475556519, -480.01485730423553]
},
{
  "tag": "Civil War",
  "title": "John Brown’s Raid",
  "date": "1858",
  "blurb": "Abolitionist John Brown supported violent action against the South to end slavery and played a major role in starting the Civil War. After the Pottawatomie Massacre during Bleeding Kansas, Brown returned to the North and plotted a far more threatening act. In October 1859, he and 19 supporters, armed with “Beecher’s Bibles,” led a raid on the federal armory and arsenal at Harpers Ferry, Virginia, in an effort to capture and confiscate the arms located there, distribute them among local slaves and begin armed insurrection. ",
  "location": "Virginia",
  "image": "https://apprend.io/wp-content/uploads/2017/06/Compromise-of-1850-Small.jpg",
  "coordinates": [37.36827230453463, -438.6290064839308]
},
{
  "tag": "Civil War",
  "title": "Abraham Lincoln’s Election",
  "date": "1860",
  "blurb": "Abraham Lincoln was elected by a considerable margin in 1860 despite not being included on many Southern ballots.  As a Republican, his party’s anti-slavery outlook struck fear into many Southerners.",
  "location": "South Carolina",
  "image": "https://www.intellectualtakeout.org/sites/ito/files/lincolndouglasdebates.jpg",
  "coordinates": [33.58660056211224, -441.2767280351763]
},
{
  "tag": "Civil War",
  "title": "The Battle of Fort Sumter",
  "date": "1861",
  "blurb": "With secession, several federal forts, including Fort Sumter in South Carolina, suddenly became outposts in a foreign land.  Abraham Lincoln made the decision to send fresh supplies to the beleaguered garrisons.",
  "location": "South Carolina",
  "image": "https://www.battlefields.org/sites/default/files/styles/gallery_item/public/thumbnails/image/sumter_2.jpg?itok=JYrphLZz",
  "coordinates": [33.58660056211224, -441.2767280351763]
},
{
    "tag": "WW2",
    "title": "Germany Invades Poland!",
    "date": "1 Sep 1939",
    "blurb": "",
    "location": "Poland",
    "image": "",
    "coordinates": [52.22269824588539, 19.31786494927118]
  },
  {
    "tag": "WW2",
    "title": "Invasion of France",
    "date": "10 May – 25 June 1940",
    "blurb": "Its too sunny outside",
    "location": "Paris, France",
    "image": "",
    "coordinates": [48.85674239993837, 2.3465638555402806]
  },
  {
    "tag": "WW2",
    "title": "Dunkirk Evacuation",
    "date": "26 May 1940",
    "blurb": "Im going to listen to tims podcast",
    "location": "Dunkirk, France",
    "image": "",
    "coordinates": [51.04550747510065, 2.262807875938338]
  },
  {
    "tag": "WW2",
    "title": "Battle of Britian",
    "date": "10 July – 31 October 1940",
    "blurb": "Its too sunny outside",
    "location": "British Airspace",
    "image": "",
    "coordinates": [51.43209696518812, -0.8031141037909008]
  },
  {
    "tag": "WW2",
    "title": "Operation Barbarosa",
    "date": "22 June 1941",
    "blurb": "Its too sunny outside",
    "location": "Moscow, Russia",
    "image": "",
    "coordinates": [55.65818117658415, 37.57214410086338]
  },
  {
    "tag": "WW2",
    "title": "Pearl Harbour Attack",
    "date": "7 Dec 1941",
    "blurb": "Its too sunny outside",
    "location": "Hawaii, USA",
    "image": "",
    "coordinates": [21.376281696871626, -157.96058881789511]
  },
  {
    "tag": "WW2",
    "title": "Battle of Stalingrad",
    "date": "23 August 1942 – 2 February 1943",
    "blurb": "Its too sunny outside",
    "location": "Volgograd, Russia",
    "image": "",
    "coordinates": [54.309856078753455, -311.61263287094084]
  },
  {
    "tag": "WW2",
    "title": "Invasion of Italy",
    "date": "3 Sep 1943",
    "blurb": "Its too sunny outside",
    "location": "Salerno, Italy",
    "image": "",
    "coordinates": [40.657028427145306, -345.42614377425025]
  },
  {
    "tag": "WW2",
    "title": "D-Day",
    "date": "6 June 1944",
    "blurb": "Its too sunny outside",
    "location": "Normandy, France",
    "image": "",
    "coordinates": [49.38647654077019, -360.51851392912397]
  },
  {
    "tag": "WW2",
    "title": "Liberation of Auchwitz",
    "date": "January 27, 1945",
    "blurb": "Its too sunny outside",
    "location": "Auchwitz, Poland",
    "image": "",
    "coordinates": [50.10435411607842, -340.33805313366383]
  },
  {
    "tag": "WW2",
    "title": "Germany Surrender",
    "date": "2 May 1945",
    "blurb": "Its too sunny outside",
    "location": "Berlin",
    "image": "",
    "coordinates": [52.49976227304273, -346.6326719279791]
  },
  {
    "tag": "WW2",
    "title": "Hiroshima Atomic Bombing",
    "date": "August 6 and 9, 1945",
    "blurb": "Its too sunny outside",
    "location": "Hiroshima, Japan",
    "image": "",
    "coordinates": [34.389017035105006, -587.5568499725138]
  }
])
