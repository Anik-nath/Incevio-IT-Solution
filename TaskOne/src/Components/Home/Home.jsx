import Accesories from "../Accesories/Accesories";
import Apple from "../Apple/Apple";
import DailyDiscover from "../DailyDiscover/DailyDiscover";
import DealsOfDay from "../DealsOfDay/DealsOfDay";
import MostViewItem from "../MostViewItem/MostViewItem";
import Offers from "../Offers/Offers";
import OnSelling from "../OnSelling/OnSelling";
import ShopByDepartment from "../ShopByDepartment/ShopByDepartment";
import TopBrands from "../TopBrands/TopBrands";
import WeeklyVendors from "../WeeklyVendors/WeeklyVendors";

const Home = () => {
    return (
        <div>
            <section>home</section>
            <ShopByDepartment></ShopByDepartment>
            <DealsOfDay></DealsOfDay>
            <Accesories></Accesories>
            <OnSelling></OnSelling>
            <Apple></Apple>
            <MostViewItem></MostViewItem>
            <TopBrands></TopBrands>
            <WeeklyVendors></WeeklyVendors>
            <Offers></Offers>
            <DailyDiscover></DailyDiscover>
        </div>
    );
};

export default Home;