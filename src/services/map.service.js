

// Client Side State of the store
// Kind of caching...
let markers = [];

const getMarkers = () => {
  return new Promise(resolve => {
    // simple caching mechanism
    if (markers.length) {
      resolve(markers);
    }
    else {
      setTimeout(() => {
        markers = generateMarkers();
        resolve(markers);
      }, 500);
    }
  });
}

function getMarkerById(markerId) {
  return getMarkers().then(markers => {
    const marker = markers.find(marker => markerId === marker.id);
    return marker;
  });
}

function deleteMarker(marker) {
  console.log('Deleting the marker', marker)
  var idx = markers.indexOf(marker)
  markers.splice(idx, 1);
}

function saveMarker(marker) {
  var idx = markers.findIndex(currmarker => currmarker.id === marker.id)
  if (idx > -1) {
    markers.splice(idx, 1, marker);
  } else {
    markers.push(marker);
  }
}

// Used to create local data with no AJAX
function generateMarkers() {
  // console.log('Generating markers!');
  const markers = [
    { title: 'home', lat: 32.3, lng: 35, markerAddress: 'secret',  tags: ['boring', 'far'] },
    { title: 'school', lat: 32.08, lng: 34.80, markerAddress: 'secret' },
    { title: 'beach', lat: 32.16, lng: 34.99, markerAddress: 'secret' },
    { title: 'last vacation', lat: 33.04, lng: 35.57, markerAddress: 'secret'},
  ];
  return markers.map(generateMarker);
}

function addEmptyMarker(lat, lng, markerAddress = 'address undetected') {
  let id = markers.reduce(function (acc, marker) {
    return Math.max(acc, marker.id);
  }, 0) + 1;
  let emptyMarker = generateMarker({ title: 'Info Window edit is tough. I give up!', lat, lng,
     markerAddress, tags: [], icon: null, content: 'edit me' }, id)
  console.log('I am the empty marker:', emptyMarker)
  markers.push(emptyMarker);
  return emptyMarker;
}

function generateMarker(data, i) {
  // console.log('Yes, I am generating!');
  return {
    id: i + 1,
    title: data.title || `no-title + ${i + 1}`,
    position: {lat: data.lat || null, lng: data.lng || null},
    markerAddress: data.markerAddress,
    tags: data.tags || ['local', 'my place'],
    icon: { url: '../../assets/img/home.png' },
    content: `<h4 contenteditable="true">${data.title}</h4>
    <h5> ${data.markerAddress} </h5>
     <p contenteditable="true"> this is just a fillup for the windowInfo stuff ect ect ect. 
    We're filling up with text to see something on the map </p> 
    <button>save</button><button>delete</button>`
  }
}

export default {
  getMarkers,
  getMarkerById,
  addEmptyMarker,
  deleteMarker,
  saveMarker
}


