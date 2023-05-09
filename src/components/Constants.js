import L, { LatLngBounds } from 'leaflet';

//actual map area bounds for defining the right center
const MAP_SE = L.latLng(-33.70149279558436, -179.99443649732783);
const MAP_NE = L.latLng(85.0511287798066, -13.013472788599131);
const MAP_BOUNDS = new LatLngBounds([MAP_SE], [MAP_NE]);

//link to the git file and bounds on the map for the respective gif
//please follow the format and naming style
const image_7_URL = 'https://raw.githubusercontent.com/csongorb/devolution7/master/src/assets/images/leafletimages/image7.gif'; //path to raw file stored on github 
const image_7_sw = L.latLng(80.5359558187302, -103.98834228515626); //  southwest coordinate
const image_7_ne = L.latLng(81.06962428671915, -100.64849853515625); //  northeast coordinate

const image_8_URL = 'https://raw.githubusercontent.com/csongorb/devolution7/master/src/assets/images/leafletimages/image8.gif'; //path to raw file stored on github 
const image_8_sw = L.latLng(80.53956806928963, -100.45074462890626); //  southwest coordinate
const image_8_ne = L.latLng(81.49579959657608, -97.00653076171876); //  northeast coordinate

const image_9_URL = 'https://raw.githubusercontent.com/csongorb/devolution7/master/src/assets/images/leafletimages/image9.gif'; //path to raw file stored on github 
const image_9_sw = L.latLng(78.20689992375854, -101.25274658203126); //  southwest coordinate
const image_9_ne = L.latLng(78.61515968121294, -98.18206787109376); //  northeast coordinate

const image_10_URL = 'https://raw.githubusercontent.com/csongorb/devolution7/master/src/assets/images/leafletimages/image10.gif'; //path to raw file stored on github 
const image_10_sw = L.latLng(76.93341135810341, -105.03204345703126); //  southwest coordinate
const image_10_ne = L.latLng(77.40185061073129, -101.26922607421876); //  northeast coordinate

const image_16_URL = 'https://raw.githubusercontent.com/csongorb/devolution7/master/src/assets/images/leafletimages/image16.gif'; //path to raw file stored on github 
const image_16_sw = L.latLng(71.56716236106318, -85.63568115234376); //  southwest coordinate
const image_16_ne = L.latLng(72.23098799368212, -82.62542724609376); //  northeast coordinate

const image_17_URL = 'https://raw.githubusercontent.com/csongorb/devolution7/master/src/assets/images/leafletimages/image17.gif'; //path to raw file stored on github 
const image_17_sw = L.latLng(72.25779089910077, -85.63568115234376); //  southwest coordinate
const image_17_ne = L.latLng(72.88458958868159, -82.62542724609376); //  northeast coordinate

const image_35_URL = 'https://raw.githubusercontent.com/csongorb/devolution7/master/src/assets/images/leafletimages/image35.gif'; //path to raw file stored on github 
const image_35_sw = L.latLng(60.765330530709996, -69.41986083984376); //  southwest coordinate
const image_35_ne = L.latLng(61.664592399485905, -66.17889404296876); //  northeast coordinate

const image_36_URL = 'https://raw.githubusercontent.com/csongorb/devolution7/master/src/assets/images/leafletimages/image36.gif'; //path to raw file stored on github 
const image_36_sw = L.latLng(60.48239739097804, -66.09100341796876); //  southwest coordinate
const image_36_ne = L.latLng(61.66198505673872, -62.33367919921876); //  northeast coordinate

const image_60_URL = 'https://raw.githubusercontent.com/csongorb/devolution7/master/src/assets/images/leafletimages/image60.gif'; //path to raw file stored on github 
const image_60_sw = L.latLng(-0.13018794331111386, -83.04840087890626); //  southwest coordinate
const image_60_ne = L.latLng(2.1215242609344274, -79.06585693359376); //  northeast coordinate

const image_76_URL = 'https://raw.githubusercontent.com/csongorb/devolution7/master/src/assets/images/leafletimages/image76.gif'; //path to raw file stored on github 
const image_76_sw = L.latLng(-14.262786005452414, -53.17657470703125); //  southwest coordinate
const image_76_ne = L.latLng(-13.36664001412626, -52.01202392578126); //  northeast coordinate

const image_77_URL = 'https://raw.githubusercontent.com/csongorb/devolution7/master/src/assets/images/leafletimages/image77.gif'; //path to raw file stored on github 
const image_77_sw = L.latLng(-14.268109785093252, -51.79229736328126); //  southwest coordinate
const image_77_ne = L.latLng(-13.37198431269195, -50.63873291015626); //  northeast coordinate

const image_78_URL = 'https://raw.githubusercontent.com/csongorb/devolution7/master/src/assets/images/leafletimages/image78.gif'; //path to raw file stored on github 
const image_78_sw = L.latLng(-14.273433438939893, -54.55535888671875); //  southwest coordinate
const image_78_ne = L.latLng(-13.361295597106919, -53.40179443359376); //  northeast coordinate

//boxes for links with popups
const megagon_industries_URL = "https://megagonindustries.com/";
const megagon_industries_sw = L.latLng(81.92858708067713, -49.641554257440355);
const megagon_industries_ne = L.latLng(82.70354383450336, -42.88528433004333);

const greenlight_trailer_URL = "https://www.youtube.com/embed/_-KESI3qIBg";
const greenlight_trailer_sw =  L.latLng(68.82585011229355, -86.26998910745671); 
const greenlight_trailer_ne =  L.latLng(69.63989262488842, -83.21607799565199); 

//circular parameters for links with popups
const circular_area_radius = 50000;

const kickstarter_interview_URL = "https://www.redbull.com/ca-en/lonely-mountains-downhill-kickstarter-interview";
const kickstarter_interview_bubenik_center = L.latLng(83.35696994817707, -74.20223862097612); 
const kickstarter_interview_helbig_center = L.latLng(82.60875400198577, -83.36488354477183); 

const igf_interview_URL = "https://www.gamedeveloper.com/disciplines/road-to-the-igf-megagon-industries-i-lonely-mountains-downhill-i-"
const igf_interview_center = L.latLng(82.4198342344112, -62.930088148720806); 

export {
    MAP_BOUNDS,

    image_7_URL,
    image_7_sw,
    image_7_ne,

    image_8_URL,
    image_8_sw,
    image_8_ne,

    image_9_URL,
    image_9_sw,
    image_9_ne,

    image_10_URL,
    image_10_sw,
    image_10_ne,

    image_16_URL,
    image_16_sw,
    image_16_ne,

    image_17_URL,
    image_17_sw,
    image_17_ne,

    image_35_URL,
    image_35_sw,
    image_35_ne,

    image_36_URL,
    image_36_sw,
    image_36_ne,

    image_60_URL,
    image_60_sw,
    image_60_ne,

    image_76_URL,
    image_76_sw,
    image_76_ne,

    image_77_URL,
    image_77_sw,
    image_77_ne,

    image_78_URL,
    image_78_sw,
    image_78_ne,

    megagon_industries_URL,
    megagon_industries_sw,
    megagon_industries_ne,

    greenlight_trailer_URL,
    greenlight_trailer_sw,
    greenlight_trailer_ne,

    circular_area_radius,

    kickstarter_interview_URL,
    kickstarter_interview_bubenik_center,
    kickstarter_interview_helbig_center,
    igf_interview_URL,
    igf_interview_center

    };