use history_app;
db.dropDatabase();

db.events.insertMany([
  {
    "tag": "WW2",
    "title": "Germany Invades Poland!",
    "date": "1 Sep 1939",
    "blurb": "",
    "location": "Poland",
    "image": "",
    "coordinates": [52.21065456233482, 20.994053508327696]
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
<<<<<<< HEAD
    "coordinates": [1, 1]
  },
  {
    "tag": "Rome",
    "title": "The Defeat of Spartacus by Crassus",
    "date": "70 BC",
    "blurb": "Crassus, richest man in the republic, crushes the slave uprising, only for Pompey to swoop in and steal the glory.",
    "location": "Glasgow",
    "image": "Petelia, Italy",
    "coordinates": [1, 1]
  },
  {
    "tag": "Rome",
    "title": "First Triumverate",
    "date": "60BC",
    "blurb": "A young Julius Ceaser allies himself with Crassus (with his money) and Pompey (with his connections) to form a powerful and ambitious first triumverate.",
    "location": "Rome",
    "image": "",
    "coordinates": [1, 1]
  },
  {
    "tag": "Rome",
    "title": "Caesar conquers Gaul",
    "date": "58-50BC",
    "blurb": "Over a series of grueling campaigns, Julius Caesar leads Roman forces to victory over the tribes of Gaul, bringing the entire region under the control of the Roman empire",
    "location": "Gaul",
    "image": "",
    "coordinates": [1, 1]
  },
  {
    "tag": "Rome",
    "title": "Crassus Dies",
    "date": "53BC",
    "blurb": "Crassus, desperate to finally gain military glory and a triumph (military parade) perishes in battle trying conquer Parthia",
    "location": "Rome",
    "image": "",
    "coordinates": [1, 1]
  },
  {
    "tag": "Rome",
    "title": "Caesar crosses the Rubicon",
    "date": "60BC",
    "blurb": "Caesar, in Gaul, is ordered to disband his legion and return to Rome by the senate. ",
    "location": "Rome",
    "image": "",
    "coordinates": [1, 1]
=======
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
>>>>>>> 464f231892bf24b93bcac49e89922c574c72a38e
  },
  {
    "tag": "WW2",
    "title": "Liberation of Auchwitz",
    "date": "January 27, 1945",
    "blurb": "Its too sunny outside",
    "location": "Auchwitz, Poland",
    "image": "",
<<<<<<< HEAD
    "coordinates": [1, 1]
=======
    "coordinates": [50.10435411607842, -340.33805313366383]
>>>>>>> 464f231892bf24b93bcac49e89922c574c72a38e
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
//   {
//     "tag": "Rome",
//     "title": "Sulla becomes Dictator",
//     "date": '82 BC',
//     "blurb": "Sulla defeats Marius in a civil war, becoming dictator-for-life. He purges his political enemies, and attempts to shore up the laws to prevent any one man from gaining too much power. He retires two years later",
//     "location": "Rome",
//     "image": "",
//     "lat": 1,
//     "long": 1
//   },
//   {
//     "tag": "Rome",
//     "title": "The Rise of Pompey",
//     "date": '71 BC',
//     "blurb": "Pompey, an ambitious young man, bucks tradition by gaining political powers before his age should allow, and puts down a rebellion in Hispania",
//     "location": "Spain",
//     "image": "",
//     "lat": 1,
//     "long": 1
//   },
//   {
//     "tag": "Rome",
//     "title": "The Defeat of Spartacus by Crassus",
//     "date": "70 BC",
//     "blurb": "Crassus, richest man in the republic, crushes the slave uprising, only for Pompey to swoop in and steal the glory.",
//     "location": "Glasgow",
//     "image": "Petelia, Italy",
//     "lat": 1,
//     "long": 1
//   },
//   {
//     "tag": "Rome",
//     "title": "First Triumverate",
//     "date": "60BC",
//     "blurb": "A young Julius Ceaser allies himself with Crassus (with his money) and Pompey (with his connections) to form a powerful and ambitious first triumverate.",
//     "location": "Rome",
//     "image": "",
//     "lat": 1,
//     "long": 1
//   },
//   {
//     "tag": "Civil War",
//     "title": "An Audience Came Out To Watch One Of The First Battles",
//     "date": "02/07/1861",
//     "blurb": "Soon, war broke out. On July 2, 1861, 30,000 Union soldiers marched to Centreville, Virginia, waiting to fight the First Battle of Bull Run (also known by the Confederate soldiers as the Battle of First Manassas).The battle was only a few miles from Washington, DC, and for the people there, it sounded like a good show. This was still in the early days of the war, and they were sure that the Union would have a quick, bloodless victory. A lot of civilians figured there’d be no harm in going out to watch the war. As dawn broke, a caravan of carriages and wagons made their way to the battlefield, where they set themselves on the side of a ridge to watch. One woman even brought opera glasses. As the battle began, she peered through her glasses for a good view of the fighting, letting out delighted little cries of “That is splendid!” and “Oh my! Is that not first-rate?”Having an audience got people excited. A few soldiers walked over to the spectators and gave a running commentary on everything that was happening. Meanwhile, a few civilians became so worked up that they tried to sneak onto the battlefield.Soon, though, it became clear that the Confederates were winning. A cavalry charge overran some civilians who had gotten too close. Some ended up as prisoners, and others didn’t make it out alive. As panic broke out, the audience had to flee and escape back to the capital.",
//     "location": "Pennsylvania",
//     "image": "https://listverse-wpengine.netdna-ssl.com/wp-content/uploads/2017/03/9a-bull-run-spectators.jpg"
//   },
//   {  "tag": "Civil War",
//   "title": "Both before and during the Civil War, Abraham Lincoln pushed to send freed slaves abroad",
//   "date": "02/07/1861",
//   "blurb": "The policy, called colonization, had been supported by Thomas Jefferson, James Madison, Andrew Jackson, Henry Clay—a hero of Lincoln’s—and even Harriet Beecher Stowe, whose protagonists in “Uncle Tom’s Cabin” ultimately emigrate from the United States to Africa. In August 1862, Lincoln brought five black ministers to the White House and told them that slavery and the war had demonstrated that it would be “better for us both, therefore, to be separated.” He wanted to send freed blacks to Central America, even calling for a constitutional amendment authorizing Congress to pay for colonization. But prominent abolitionists such as Frederick Douglass and William Lloyd Garrison were appalled by the idea. Lincoln never succeeded at gathering support for the policy, and after he signed the Emancipation Proclamation he never mentioned it publicly again.",
//   "location": "Pennsylvania",
//   "image": "https://www.ducksters.com/history/graphics/abrahamlincolngenerals.jpg"
// },
// {
//   "tag": "Civil War",
//   "title": "Battle of Glorieta Pass",
//   "date": "26/03/1862",
//   "blurb": "The Battle of Glorieta Pass, fought from March 26–28, 1862, in the northern New Mexico Territory, was the decisive battle of the New Mexico Campaign during the American Civil War. Dubbed the 'Gettysburg of the West' (a term that 'serves the novelist better than the historian')[8] by some authors, it was intended as the decisive blow by Confederate forces to break the Union possession of the West along the base of the Rocky Mountains. It was fought at Glorieta Pass in the Sangre de Cristo Mountains in what is now New Mexico, and was an important event in the history of the New Mexico Territory in the American Civil War.There was a skirmish on March 26 between advance elements from each army, with the main battle occurring on March 28. Although the Confederates were able to push the Union force back through the pass, they had to retreat when their supply train was destroyed and most of their horses and mules killed or driven off. Eventually the Confederates had to withdraw entirely from the territory back into Confederate Arizona and then Texas. Glorieta Pass thus represented the climax of the campaign.",
//   "location": "New Mexico",
//   "image": "https://en.wikipedia.org/wiki/Battle_of_Glorieta_Pass#/media/File:Schlacht_von_Glorieta_Pass.JPG"
// },
// {
//   "tag": "Civil War",
//   "title": "The day Churchill burn his finger",
//   "date": "09/05/1864",
//   "blurb": "Union General John Sedgwick was an astoundingly brave and resilient man. He fought throughout the war, in bloody battles ranging from Antietam, to Chancellorsville, to Gettysburg. He was wounded three times at Antietam alone, and was well respected by both his men and the enemy. His soldiers gave him the affectionate title “Uncle John.” His most famous moment however, came at the very last moment of his life, at the battle of Spotsylvania Court house, on May 9th, 1864. While setting up artillery placements, Confederate sharpshooters armed with long distance rifles started firing on his command from about a thousand yards away. This caused his officers and men to start flinching and ducking for cover. General Sedgwick became angry and reprimanded them, “What? Men dodging this way for single bullets? What will you do when they open fire along the whole line? I am ashamed of you. They couldn’t hit an elephant at this distance.” Moments later, he was shot under the left eye and fell down dead.",
//   "location": "Spotsylvania Court house, Virginia",
//   "image": "https://newarena.com/wp-content/uploads/2018/06/GettyImages-50801826.jpg"
// },
// {
//   "tag": "Civil War",
//   "title": "General Lee’s Chicken",
//   "date": "15/02/1862",
//   "blurb": "Robert E. Lee was beloved by his countrymen and near-worshipped by his troops. And for good reason: he was a brilliant tactical commander, and a genuinely charismatic man who took pride in his men and their accomplishments. This story is an example of his personality in that respect. In 1862, a Virginia farmer gave Robert E. Lee a flock of chickens. Lee let his men eat all of them except for one, who had survived by making her roost in a tree overhanging Lee’s tent. Lee took a liking to the chicken. He named her “Nellie” and raised the flap of his tent so she could come and go as she pleased. She began laying eggs nearly every day under the general’s cot, and became a well-known fixture of Lee’s camp. On the eve of the Battle of the Wilderness, Lee invited a group of generals to dine with him, but his slave cook, William Mack Lee, couldn’t find sufficient food to make a meal. Although he “hated to lose her,” the cook said he “picked her good, and stuffed her with bread stuffing, mixed with butter.” He said it was the only time in four years that Lee scolded him. “It made Marse Robert awful sad to think of anything being killed,” he said, “whether ’twas one of his soldiers or his little black hen.”",
//   "location": "Virginia",
//   "image": "https://newarena.com/wp-content/uploads/2018/06/Untitled-design-6.png"
// },
// {
//   "tag": "WW2",
//   "title": "The day Churchill burn his finger",
//   "date": 2,
//   "blurb": "The day had",
//   "location": "Glasgow",
//   "image": ""
// }


])
