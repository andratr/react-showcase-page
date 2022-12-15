// const App = () => {
//   return (
//     <>
//       <SectionWrapper
//         title="Everything you want to know about famous paintings in your pocket."
//         description="Search and discover unknown details about famous paintings all over the world!"
//         showBtn
//         mockupImg={assets.homeHero}
//         banner="banner"
//       />
//       <SectionWrapper
//         title="Smart User Interface"
//         description="Experience a buttery UI. Smooth constant colors of a fluent UI design."
//         mockupImg={assets.homeCards}
//       />
//     </>
//   );
// };

import { Download, Features, SectionWrapper } from "./components";
import assets from "./assets";

const App = () => {
  return (
    <>
      <SectionWrapper
        title="Everything you want to know about famous paintings in your pocket."
        description="Search and discover unknown details about famous paintings all over the world!"
        showBtn
        mockupImg={undefined}
        banner="banner"
      />
      <SectionWrapper
        mockupImg={assets.design}
        title="Featuring a Smart User Interface"
        description="Experience a buttery UI. Smooth constant colors of a fluent UI design."
        reverse
      />
      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p>
          Made with love by <span>Andra Trandafir in 🇷🇴</span>
        </p>
      </div>
    </>
  );
};

export default App;
