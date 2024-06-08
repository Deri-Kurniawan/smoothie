import { Route, Routes } from "react-router";
import GuestLayout from "./components/layouts/guest-layout";
import { Smoothie } from "./hooks/use-smoothie";
import Home from "./pages/Home";
import { SmoothieProvider } from "./providers/smoothie-provider";

function App() {
  const smoothies: Smoothie[] = [
    {
      name: "Oatmeal Cranberry Smoothie",
      description: "A delicious and healthy oatmeal cranberry smoothie.",
      image: "/images/smoothies/bowl1.webp",
      imageFruitBase: "/images/smoothies/bowl1-fruitbase.webp",
      benefits: ["Antioxidants", "Vitamins", "Minerals", "Nutrients"],
      color: "text-primary",
      bgColor: "bg-primary",
      fillColor: "fill-primary",
    },
    {
      name: "Blueberry Banana Smoothie",
      description: "A refreshing blueberry banana smoothie.",
      image: "/images/smoothies/bowl2.webp",
      imageFruitBase: "",
      benefits: [
        "Rich in Antioxidants",
        "Good Source of Fiber",
        "Boosts Immunity",
        "Provides Energy",
      ],
      color: "text-secondary-blue",
      bgColor: "bg-secondary-blue",
      fillColor: "fill-secondary-blue",
    },
    {
      name: "Cucumber Smoothie",
      description: "A refreshing cucumber smoothie.",
      image: "/images/smoothies/bowl3.webp",
      imageFruitBase: "",
      benefits: [
        "Hydration",
        "Low in Calories",
        "Rich in Nutrients",
        "Promotes Detoxification",
      ],
      color: "text-secondary-green",
      bgColor: "bg-secondary-green",
      fillColor: "fill-secondary-green",
    },
    {
      name: "Mango-Almond Smoothie",
      description: "A delicious mango-almond smoothie.",
      image: "/images/smoothies/bowl4.webp",
      imageFruitBase: "",
      benefits: [
        "Rich in vitamin C",
        "Healthy fats",
        "Provides Energy",
        "Supports Skin Health",
      ],
      color: "text-secondary-orange",
      bgColor: "bg-secondary-orange",
      fillColor: "fill-secondary-orange",
    },
  ].map((smoothie, index) => ({ ...smoothie, id: ++index }));

  return (
    <GuestLayout>
      <SmoothieProvider smoothies={smoothies}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/specialties" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/contact-us" element={<Home />} />
        </Routes>
      </SmoothieProvider>
    </GuestLayout>
  );
}

export default App;
