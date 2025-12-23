export type Artist = {
  name: string;
  instrument: string;
  image: string;
  path: string;
  bio: string[];
  website?: string | undefined;
  title?: string | undefined;
};

export type Artists =
  | "amelia-taylor"
  | "alejandro-larumbe"
  | "kate-ellingham-hunt"
  | "maria-mo"
  | "jesbery-hartono-hall"
  | "callum"
  | "donald";

export const artists: Record<Artists, Artist> = {
  "amelia-taylor": {
    name: "Amelia Taylor",
    instrument: "Violin/Viola",
    title: "Director, Co-Founder",
    website: "https://www.ameliacetaylor.com",
    image: "amelia-4",
    path: "amelia-taylor",
    bio: [
      "New Zealand violinist Amelia Taylor has an active international career as a performer and pedagogue. Amelia is founder and director of ArcaSōnica, a chamber music collective that tours annually in Mexico bringing fresh and exciting performances with international musicians, as well as masterclasses, chamber music coachings, and side-by-side concerts with youth orchestra programs. As part of the Taylor-Larumbe duo, she has performed extensively in New Zealand, USA and Mexico. As well as keeping a busy chamber schedule, Taylor performs regularly with symphony orchestras, such as Opus Orchestra (NZ), Baton Rouge Symphony Orchestra, Louisiana Philharmonic, Lansing Symphony, and Midland Symphony Orchestra.",
      "A talented teacher, Amelia is a certified Suzuki instructor in both the USA and NZ. She currently has a private Suzuki studio in San Diego, USA and Tauranga, NZ.",
      "Amelia became fascinated with the violin as a toddler and began learning the violin through the Suzuki method. She holds a bachelor’s degree from Waikato University, where she was a Sir Edmund Hillary Scholar, as well as receiving multiple Blues awards. Her graduate studies include a master's in violin performance from Louisiana State University with Espen Lilleslaten, former concertmaster of Bergen Philharmonic (Norway), and an artist diploma at the University of Michigan with David Halen, concertmaster of St. Louis Symphony.",
      "Amelia has a rich and diverse pool of education to draw upon, from her teachers to her students. She is forever learning and experimenting with ways of teaching and self-improvement.",
    ],
  },
  "alejandro-larumbe": {
    name: "Alejandro Larumbe",
    instrument: "Violin, Orchestra Conductor",
    title: "Co-Founder",
    image: "alejandro",
    path: "alejandro-larumbe",
    bio: [
      "Alejandro Larumbe Martínez (RimuFest co-founder) is a violinist and conductor based in San Diego, California. Alejandro has performed as a violinist in the USA and Mexico with orchestras such as the Louisiana Philharmonic, Baton Rouge Symphony Orchestra, Lansing Symphony and the Miami Symphony Orchestra.",
      "Alejandro started his violin studies at age five in his native Mexico. He received a bachelor’s degree in violin performance from Florida International University, and a masters and doctoral degrees in orchestral conducting studying with Carlos Riazuelo at Louisiana State University.",
    ],
  },
  "kate-ellingham-hunt": {
    name: "Kate Ellingham-Hunt",
    instrument: "Violin, Alexander Technique",
    website: "https://kate-eh.co.nz",
    image: "kate",
    path: "kate-ellingham-hunt",
    bio: [
      "As a child, Kate learned the violin through the Suzuki method and later completed a Bmus in performance violin at the NZ School of Music.",
      "She has taught private and group Suzuki lessons for over 15 years in NZ and the UK.",
      "She spent three years training to be a teacher of the Alexander Technique in London where she got the chance to assist with the Alexander Technique programme at the Royal College of Music.",
      "She has an interest in the way we use our bodies and how that affects our health and technique as musicians.",
    ],
  },
  "maria-mo": {
    name: "Maria Mo",
    instrument: "Piano",
    image: "maria-mo",
    path: "maria-mo",
    bio: [
      "Maria Mo has performed in New Zealand, Australia, the United Kingdom, and across Europe as both a solo recitalist and chamber musician. She was an associate artist at the 2014 Australian Cello Awards (Sydney, Australia) and a guest artist at the 2010 Semaine Internationale de Piano festival (Blonay, Switzerland), as well as the Gesellschaft für Musiktheater in Vienna. She has toured as a concerto soloist with Opus Chamber Orchestra, the Trust Waikato Symphony Orchestra, Auckland Symphony Orchestra, Auckland Youth Orchestra, and Wairua Sinfonietta.",
      "In 2009, she was the winner of the Royal Over-Seas League Arts/Pettman International Scholarship for a New Zealand Chamber Ensemble as pianist for the Leonari trio, which led to an 8-week concert tour and study trip in the United Kingdom in 2010, playing prestigious venues and festivals such as St. Martin-in-the-Fields and Edinburgh Fringe Festival. The trio also toured with Chamber Music New Zealand in 2012 to critical acclaim. In December 2018, Maria had the honor of being selected to perform for South Korean President Moon Jae-In on his inaugural trip to New Zealand.",
      "Maria studied with Katherine Austin as a Sir Edmund Hillary Music Scholar at the University of Waikato, where she received the Hillary Medal and the Lili Kraus Piano Award and graduated with a Master of Music with First Class Honors in 2009. In 2013, she graduated with Excellence under Professor Doris Adam at the Vienna Conservatory and received further training from Professor Christopher Hinterhuber at the University for Music and Performing Arts Vienna.",
      "In 2022, Maria completed a Doctor of Musical Arts at the University of Waikato, where she researched the legacy of Janetta McStay, the renowned pianist and New Zealand’s first full-time lecturer in piano at the University of Auckland from 1963–1982.",
    ],
  },
  "jesbery-hartono-hall": {
    name: "Jesbery Hartono-Hall",
    instrument: "Cello",
    image: "jesbery",
    path: "jesbery-hartono-hall",
    bio: [
      "Jesbery Hartono-Hall holds a Master of Music with First Class Honours from the University of Auckland, New Zealand. She was awarded scholarships and funding such as the Anne Bellam and the Wallace Foundation to further her studies in Europe.",
      "Jesbery has played for and worked with many renowned artists such as cellists Daniel Müller-Schott, Torleif Thedéen, Alexander Gebert, Clemens Krieger (Dresdner Philharmonie), Dinar Enikeev (Robert Schumann Philharmonie), Ramón Jaffé, Mario di Secondi and Elisabeth Kufferath of the Tetzlaff String Quartet, amongst many others in Germany, America and New Zealand.",
      "She has played in prestigious venues around Europe, most notably the Berlin Konzerthaus and Predjama Castle, among many others. Jesbery has also played in film soundtracks and other music videos in New Zealand. A founding member of the prize-winning Akato Piano Trio, the group has also been successful in New Zealand and Europe.",
      "Jesbery is an active orchestral musician who performs regularly with the Christchurch Symphony Orchestra, Auckland Philharmonia Orchestra and the Royal New Zealand Ballet, and has also worked with the Auckland Chamber Orchestra, Bach Musica NZ, Orchestra Wellington and Trust Waikato Symphony Orchestra.",
      "Jesbery now teaches at the Epsom Music School and also runs a private cello studio of which all who have sat their ABRSM grade exams received marks with Distinction.",
    ],
  },
  callum: {
    name: "Callum Hall",
    instrument: "Cello",
    image: "callum",
    path: "callum",
    bio: [
      "Auckland musician Callum Hall has been making music since a young age, initially playing violin alongside his three siblings but quickly moving his focus to the beautiful sound of the cello. Currently Callum is found performing a diverse range of music around New Zealand, including chamber and orchestral music, contemporary and classical.",
      "Callum has toured for Chamber Music New Zealand, recorded for Atoll Records and performed on Radio NZ Concert. He played at Upsurge Festival 2022 in the Bay of Islands as well as the Asian Composers League Festival in Christchurch. Callum was a part of the Auckland String Quartet Summer School 2023, tutoring and playing with the Jade String Quartet. In April 2024 he performed in the inaugural Waiheke Chamber Music Festival.",
      "Callum performs frequently with the Auckland Chamber Orchestra and the Auckland Philharmonia. He has also played as Guest Principal of the Christchurch Symphony Orchestra and the Opus Chamber Orchestra.",
      "Callum studied with Suren Bagratuni at Michigan State University, where he graduated with a Doctorate of Musical Arts. Prior to his studies in the USA he completed his Masters degree at the University of Waikato, studying with James Tennant. At MSU Callum worked as a teaching assistant, and he now teaches cello in Auckland, on the North Shore as well as at Epsom Music School.",
    ],
  },
  donald: {
    name: "Donald Maurice",
    instrument: "Viola",
    image: "donald",
    path: "donald",
    bio: [
      "Donald was until retiring in 2020 Professor of Music at Victoria University of Wellington. He has performed internationally for four decades as a solo violist and chamber musician and has given world premieres and New Zealand premieres of many works. He has presented at twenty International Viola Congresses.",
      "He was awarded the Silver Alto Clef by the International Viola Society in 2000, was made an Honorary Life Member of the American Viola Society in 2007, and in 2009 he gave the William Primrose Memorial Concert in Utah. He has performed for New Zealand diplomatic missions in Washington DC, New York, Ottawa, Berlin, Bangkok, Kuala Lumpur and Warsaw. In 2014 he was made a Member of the New Zealand Order of Merit.",
      "Donald has books published on Béla Bartók and Alfred Hill. \"Bartók's Viola Concerto - The Remarkable Story of his Swansong\" (Oxford) is recognized as an authoritative text.",
      "The award-winning CD of his live 2008 performance of Boris Pigovat's \"Holocaust Requiem\" has received high acclaim in Europe and North America. He gave the German premiere of this work in Wuerzburg in 2011.",
      "He is producer of Lacrimosa, a documentary film about the composer and the Requiem.",
      "Donald's solo and chamber music discography spans 18 CDs on Naxos, Tantara, Acte Prealable, Atoll, and Kiwi Pacific. He is featured playing viola d'amore on a documentary film made in Poland about the baroque composer Christoph Graupner. His most recent viola d'amore CD with Archi d'Amore Zelanda (Atoll) features trios by New Zealand composers David Hamilton and Michael Williams.",
      "In 2018 Donald founded Sinfonia for Hope, an orchestra of professional musicians who donate their time once a year to raise funds for humanitarian causes.",
      "Donald studied under Nannie Jamieson at the Guildhall School of Music and Drama, Donald McInnes at the University of Washington, Max Rostal at the Aldeburgh Festival, and William Primrose at the Banff School of Fine Arts.",
    ],
  },
};
