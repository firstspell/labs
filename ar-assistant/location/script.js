window.onload = () => {
  loadModels();
};

async function loadModels() {
  // await populateSceneInLocations();
  // console.log(":::ready::::");
}
let modelList = [
  {
    place: "test-1",
    url: "./assets/magnemite/scene.gltf",
    scale: "0.5 0.5 0.5",
    info: "Magnemite, Lv. 5, HP 10/10",
    rotation: "0 180 0",
    location: {
      lat: 13.0813613,
      lng: 77.6392601
    }
  },
  // {
  //   place: "test-1",
  //   url: "./assets/articuno/scene.gltf",
  //   scale: "0.2 0.2 0.2",
  //   rotation: "0 180 0",
  //   info: "Articuno, Lv. 80, HP 100/100",
  //   location: {
  //     lat: 13.081206160268227,
  //     lng: 77.64014750889895
  //   }
  // },
  // {
  //   place: "test-2",
  //   url: "./assets/dragonite/scene.gltf",
  //   scale: "0.08 0.08 0.08",
  //   rotation: "0 180 0",
  //   info: "Dragonite, Lv. 99, HP 150/150",
  //   location: {
  //     lat: 13.081206160268227,
  //     lng: 77.64014750889895
  //   }
  // },
  // {
  //   place: "test-2",
  //   url: "./assets/taps/scene.gltf",
  //   scale: "0.5 0.5 0.5",
  //   rotation: "0 180 0",
  //   info: "Tap, Lv. 99, HP 150/150",
  //   location: {
  //     lat: 13.081206160268227,
  //     lng: 77.64014750889895
  //   }
  // },
  // {
  //   place: "test-3",
  //   url: "./assets/beetle/scene.gltf",
  //   scale: "0.5 0.5 0.5",
  //   info: "beetle, Lv. 5, HP 10/10",
  //   rotation: "0 180 0",
  //   location: {
  //     lat: 13.081206160268227,
  //     lng: 77.64014750889895
  //   }
  // },
  // {
  //   place: "test-3",
  //   url: "./assets/phoenix_bird/scene.gltf",
  //   scale: "0.5 0.5 0.5",
  //   info: "phoenix_bird, Lv. 5, HP 10/10",
  //   rotation: "0 180 0",
  //   location: {
  //     lat: 13.0813751,
  //     lng: 77.6393936
  //   }
  // },

  {
    place: "test-4",
    url: "./assets/flamingosf/scene.gltf",
    scale: "0.5 0.5 0.5",
    info: "flamingo, Lv. 5, HP 10/10",
    rotation: "0 180 0",
    location: {
      lat: 13.0813675,
      lng: 77.6393704
    }
  }
];

var modelIndex = 0;
var setModel = function (model, entity) {
  if (model.scale) {
    entity.setAttribute("scale", model.scale);
  }

  if (model.rotation) {
    entity.setAttribute("rotation", model.rotation);
  }

  if (model.position) {
    entity.setAttribute("position", model.position);
  }

  entity.setAttribute("gltf-model", model.url);

  const div = document.querySelector(".instructions");
  div.innerText = model.info + model.position;
};

async function populateSceneInLocations(models) {
  // const response = await fetch("models_data.json");
  // const data = await response.json();
  console.log("::data ::::", modelList);
  let scene = document.querySelector("a-scene");
  modelList.forEach((modelItem) => {
    let entity = document.createElement("a-entity");
    entity.setAttribute(
      "gps-entity-place",
      `latitude: ${modelItem.location.lat}; longitude: ${modelItem.location.lng};`
    );
    setModel(modelItem, entity);
    entity.setAttribute("animation-mixer", "");
    console.log(entity.textContent);
    console.log(entity.getAttribute("gps-entity-place"));
    scene.appendChild(entity);
  });
  console.log("::scene ::::", scene);
}

function renderPlaces(places) {
  let scene = document.querySelector("a-scene");

  places.forEach((place) => {
    // let latitude = place.location.lat;
    // let longitude = place.location.lng;

    let model = document.createElement("a-entity");
    // model.setAttribute(
    //   "gps-entity-place",
    //   `latitude: ${latitude}; longitude: ${longitude};`
    // );
    model.setAttribute(
      "gps-entity-place",
      `latitude: ${model.latitude}; longitude: ${longitude};`
    );

    setModel(models[modelIndex], model);

    model.setAttribute("animation-mixer", "");

    document
      .querySelector('button[data-action="change"]')
      .addEventListener("click", function () {
        var entity = document.querySelector("[gps-entity-place]");
        modelIndex++;
        var newIndex = modelIndex % models.length;
        setModel(models[newIndex], entity);
      });

    scene.appendChild(model);
  });
}
