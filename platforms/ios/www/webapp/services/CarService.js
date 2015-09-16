acs.factory('CarService', function() {
  // Might use a resource here that returns a JSON array
  // I'll do it later =)
  // Some fake testing data
  var cars = [
    {
      id: 0,
      title: 'Ferrari',
      description: 'Ferrari S.p.A. is an Italian luxury sports car manufacturer based in Maranello. Founded by Enzo Ferrari in 1929, as Scuderia Ferrari, the company sponsored drivers and manufactured race cars before moving into production of street-legal vehicles in 1947. Fiat acquired 50% of Ferrari in 1969 and expanded its stake to 90% in 1988. Ferrari is the worlds most powerful brand according to Brand Finance. In May 2012 the 1962 Ferrari 250 GTO became the most expensive car in history, selling in a private transaction for $38,115,000 to American communications magnate Craig McCaw. In 2014 Fiat announced its intentions to sell a portion of its share in Ferrari; as of the announcement Fiat owned 90% of Ferrari.',
      mainImage: 'http://pictures.topspeed.com/IMG/crop/201303/2014-ferrari-laferrari-5_600x0w.jpg',
      images:[
        {
          title: 'Ferrari Image One',
          url:  'http://car-pictures.cars.com/images/?IMG=USC30FRC151A021001.png&WIDTH=624&HEIGHT=300&AUTOTRIM=1'
        },
        {
          title: 'Ferrari Image Two',
          url:  'http://488gtb.ferrari.com/img/carHome.png'
        },
        {
          title: 'Ferrari Image Three',
          url:  'http://www.saopaolo.ferraridealers.com/siteasset/ferraridealer/4f74a1a219b2b/961/420/selected/-216/0/0/4f74a1a219b2b.jpg'
        }
      ],
      facts: [
        {
          title: 'Ferrari Curiosity One',
          text: 'Text'
        },
        {
          title: 'Ferrari Curiosity Two',
          text: 'Text'
        },
        {
          title: 'Ferrari Curiosity Three',
          text: 'Text'
        }
      ]
    },
    {
      id: 1,
      title: 'Lamborghini Veneno',
      description: 'The Lamborghini Veneno is consistently focused on optimum aerodynamics and cornering stability, giving the Veneno the real dynamic experience of a racing prototype, yet it is fully homologated for the road.',
      mainImage: 'http://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2014/07/03/101811462-163099673.530x298.jpg?v=1404403550',
      images:[
        {
          title: 'Image One',
          url:  'https://s.yimg.com/bt/api/res/1.2/zDeX02CsjsBzmpYUvSQkSw--/YXBwaWQ9eW5ld3NfbGVnbztmaT1pbnNldDtoPTM4NTtpbD1wbGFuZTtxPTc1O3c9NjMw/http://l.yimg.com/os/publish-images/finance/2013-12-26/c0db089e-f656-4796-a71f-236461f982cb_Lamborghini-Veneno-Roadster.jpg'
        },
        {
          title: 'Image Two',
          url:  'http://www.autoguide.com/auto-news/wp-content/uploads/2013/03/Lamborghini-Veneno-awesome1.jpg'
        },
        {
          title: 'Image Three',
          url:  'http://autos.vocedeolhoemtudo.com.br/wp-content/gallery/lamborghini-veneno/lamborghini-veneno-11.jpg'
        }
      ],
      facts: [
        {
          title: 'Less Weight, More driving fun',
          text: 'The systematic, carbon-fiber, lightweight design is not only visible, it is also evident on the scales: With a power-to-weight ratio of 1.93 kg/hp (4,25 lbs/hp) and its forceful twelve-cylinder the Veneno guarantees a performance that is nothing short of mind-blowing.'
        },
        {
          title: 'High Tech Interior',
          text: 'Carbon fiber dominates the interior of the Veneno, too. The carbon fiber monocoque becomes visible inside the car in the area of the central tunnel and the sills. The two lightweight bucket seats are made from Lamborghini’s patented Forged Composite. The lightweight woven carbon-fiber CarbonSkin® is used to clad the entire cockpit, part of the seats and the headliner. These measures help reduce the weight and increase the driving fun.'
        },
        {
          title: 'Ready for any turn',
          text: 'Carbon fiber dominates the interior of the Veneno, too. The carbon fiber monocoque becomes visible inside the car in the area of the central tunnel and the sills. The two lightweight bucket seats are made from Lamborghini’s patented Forged Composite. The lightweight woven carbon-fiber CarbonSkin® is used to clad the entire cockpit, part of the seats and the headliner. These measures help reduce the weight and increase the driving fun.'
        }
      ]
    }
  ];

  return {
    all: function() {
      return cars;
    },
    get: function(carId) {
      return cars[carId];
    }
  }
});
