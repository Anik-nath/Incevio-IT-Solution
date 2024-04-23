import DailyDiscover from "../DailyDiscover/DailyDiscover";
import Offers from "../Offers/Offers";
import WeeklyVendors from "../WeeklyVendors/WeeklyVendors";

const Home = () => {
    return (
        <div>
            <section>home</section>
            <WeeklyVendors></WeeklyVendors>
            <Offers></Offers>
            <DailyDiscover></DailyDiscover>
        </div>
    );
};

export default Home;