const categories = [
  { id: "tools_machines", name: "Tools & Machines", imageName: "tools_machines_img.png", isPopular: true },
  {
    id: "garden",
    name: "Garden",
    imageName: "garden_img.png",
    isPopular: true,
    subCategories: [
      { id: "garden_furniture", name: "Garden furniture" },
      { id: "grills", name: "Grills" },
      { id: "pools", name: "Pools" },
      { id: "garden_machinery_tools", name: "Garden machinery & tools" },
      { id: "carports", name: "Carports" },
      { id: "fences_screens", name: "Fences & screens" },
      { id: "landscaping", name: "Landscaping" },
      { id: "camping_supplies", name: "Camping supplies" },
    ],
  },
  { id: "kitchen", name: "Kitchen", imageName: "kitchen_img.png", isPopular: true },
  {
    id: "electrical_lights",
    name: "Electrical & Lights",
    imageName: "electrical_lights_img.png",
    isPopular: true,
  },
  { id: "home_decoration", name: "Home & Decoration", imageName: "home_decoration_img.png", isPopular: true },
  { id: "doors_windows_stairs", name: "Doors, Windows & Stairs", isPopular: false },
  { id: "building_materials", name: "Building Materials", isPopular: false },
  {
    id: "boats_cars_bikes",
    name: "Boats, Cars & Bikes",
    imageName: "boats_cars_bikes_img.png",
    isPopular: true,
  },
];

export default categories;
