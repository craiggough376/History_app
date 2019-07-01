use history_app;
db.dropDatabase();

db.events.insertMany([
  {
    "tag": "Rome",
    "title": "Sulla becomes Dictator",
    "date": '82 BC',
    "blurb": "Sulla defeats Marius in a civil war, becoming dictator-for-life. He purges his political enemies, and attempts to shore up the laws to prevent any one man from gaining too much power. He retires two years later",
    "location": "Rome",
    "image": "",
    "longitude":,
    "latitude":
  },
  {
    "tag": "Rome",
    "title": "The Rise of Pompey",
    "date": '71 BC',
    "blurb": "Pompey, an ambitious young man, bucks tradition by gaining political powers before his age should allow, and puts down a rebellion in Hispania",
    "location": "Spain",
    "image": "",
    "longitude":,
    "latitude":
  },
  {
    "tag": "Rome",
    "title": "The Defeat of Spartacus by Crassus",
    "date": "70 BC",
    "blurb": "Crassus, richest man in the republic, crushes the slave uprising, only for Pompey to swoop in and steal the glory.",
    "location": "Glasgow",
    "image": "Petelia, Italy",
    "longitude":,
    "latitude":
  },
  {
    "tag": "Rome",
    "title": "First Triumverate",
    "date": "60BC",
    "blurb": "A young Julius Ceaser allies himself with Crassus (with his money) and Pompey (with his connections) to form a powerful and ambitious first triumverate.",
    "location": "Rome",
    "image": "",
    "longitude":,
    "latitude":
  },
  {
    "tag": "Civil War",
    "title": "An Audience Came Out To Watch One Of The First Battles",
    "date": "02/07/1861",
    "blurb": "Soon, war broke out. On July 2, 1861, 30,000 Union soldiers marched to Centreville, Virginia, waiting to fight the First Battle of Bull Run (also known by the Confederate soldiers as the Battle of First Manassas).The battle was only a few miles from Washington, DC, and for the people there, it sounded like a good show. This was still in the early days of the war, and they were sure that the Union would have a quick, bloodless victory. A lot of civilians figured there’d be no harm in going out to watch the war. As dawn broke, a caravan of carriages and wagons made their way to the battlefield, where they set themselves on the side of a ridge to watch. One woman even brought opera glasses. As the battle began, she peered through her glasses for a good view of the fighting, letting out delighted little cries of “That is splendid!” and “Oh my! Is that not first-rate?”Having an audience got people excited. A few soldiers walked over to the spectators and gave a running commentary on everything that was happening. Meanwhile, a few civilians became so worked up that they tried to sneak onto the battlefield.Soon, though, it became clear that the Confederates were winning. A cavalry charge overran some civilians who had gotten too close. Some ended up as prisoners, and others didn’t make it out alive. As panic broke out, the audience had to flee and escape back to the capital.",
    "location": "Pennsylvania",
    "image": "https://listverse-wpengine.netdna-ssl.com/wp-content/uploads/2017/03/9a-bull-run-spectators.jpg"
  },
  {  "tag": "Civil War",
  "title": "Both before and during the Civil War, Abraham Lincoln pushed to send freed slaves abroad",
  "date": "02/07/1861",
  "blurb": "The policy, called colonization, had been supported by Thomas Jefferson, James Madison, Andrew Jackson, Henry Clay—a hero of Lincoln’s—and even Harriet Beecher Stowe, whose protagonists in “Uncle Tom’s Cabin” ultimately emigrate from the United States to Africa. In August 1862, Lincoln brought five black ministers to the White House and told them that slavery and the war had demonstrated that it would be “better for us both, therefore, to be separated.” He wanted to send freed blacks to Central America, even calling for a constitutional amendment authorizing Congress to pay for colonization. But prominent abolitionists such as Frederick Douglass and William Lloyd Garrison were appalled by the idea. Lincoln never succeeded at gathering support for the policy, and after he signed the Emancipation Proclamation he never mentioned it publicly again.",
  "location": "Pennsylvania",
  "image": "https://www.ducksters.com/history/graphics/abrahamlincolngenerals.jpg"
},
{
  "tag": "Civil War",
  "title": "Battle of Glorieta Pass",
  "date": "26/03/1862",
  "blurb": "The Battle of Glorieta Pass, fought from March 26–28, 1862, in the northern New Mexico Territory, was the decisive battle of the New Mexico Campaign during the American Civil War. Dubbed the 'Gettysburg of the West' (a term that 'serves the novelist better than the historian')[8] by some authors, it was intended as the decisive blow by Confederate forces to break the Union possession of the West along the base of the Rocky Mountains. It was fought at Glorieta Pass in the Sangre de Cristo Mountains in what is now New Mexico, and was an important event in the history of the New Mexico Territory in the American Civil War.There was a skirmish on March 26 between advance elements from each army, with the main battle occurring on March 28. Although the Confederates were able to push the Union force back through the pass, they had to retreat when their supply train was destroyed and most of their horses and mules killed or driven off. Eventually the Confederates had to withdraw entirely from the territory back into Confederate Arizona and then Texas. Glorieta Pass thus represented the climax of the campaign.",
  "location": "New Mexico",
  "image": "https://en.wikipedia.org/wiki/Battle_of_Glorieta_Pass#/media/File:Schlacht_von_Glorieta_Pass.JPG"
},
{
  "tag": "Civil War",
  "title": "The day Churchill burn his finger",
  "date": "09/05/1864",
  "blurb": "Union General John Sedgwick was an astoundingly brave and resilient man. He fought throughout the war, in bloody battles ranging from Antietam, to Chancellorsville, to Gettysburg. He was wounded three times at Antietam alone, and was well respected by both his men and the enemy. His soldiers gave him the affectionate title “Uncle John.” His most famous moment however, came at the very last moment of his life, at the battle of Spotsylvania Court house, on May 9th, 1864. While setting up artillery placements, Confederate sharpshooters armed with long distance rifles started firing on his command from about a thousand yards away. This caused his officers and men to start flinching and ducking for cover. General Sedgwick became angry and reprimanded them, “What? Men dodging this way for single bullets? What will you do when they open fire along the whole line? I am ashamed of you. They couldn’t hit an elephant at this distance.” Moments later, he was shot under the left eye and fell down dead.",
  "location": "Spotsylvania Court house, Virginia",
  "image": "https://newarena.com/wp-content/uploads/2018/06/GettyImages-50801826.jpg"
},
{
  "tag": "Civil War",
  "title": "General Lee’s Chicken",
  "date": "15/02/1862",
  "blurb": "Robert E. Lee was beloved by his countrymen and near-worshipped by his troops. And for good reason: he was a brilliant tactical commander, and a genuinely charismatic man who took pride in his men and their accomplishments. This story is an example of his personality in that respect. In 1862, a Virginia farmer gave Robert E. Lee a flock of chickens. Lee let his men eat all of them except for one, who had survived by making her roost in a tree overhanging Lee’s tent. Lee took a liking to the chicken. He named her “Nellie” and raised the flap of his tent so she could come and go as she pleased. She began laying eggs nearly every day under the general’s cot, and became a well-known fixture of Lee’s camp. On the eve of the Battle of the Wilderness, Lee invited a group of generals to dine with him, but his slave cook, William Mack Lee, couldn’t find sufficient food to make a meal. Although he “hated to lose her,” the cook said he “picked her good, and stuffed her with bread stuffing, mixed with butter.” He said it was the only time in four years that Lee scolded him. “It made Marse Robert awful sad to think of anything being killed,” he said, “whether ’twas one of his soldiers or his little black hen.”",
  "location": "Virginia",
  "image": "https://newarena.com/wp-content/uploads/2018/06/Untitled-design-6.png"
},
{
  "tag": "WW2",
  "title": "The day Churchill burn his finger",
  "date": 2,
  "blurb": "The day had",
  "location": "Glasgow",
  "image": ""
}

])
