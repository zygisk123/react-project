import AvailableShoes from "./AvailableShoes/AvailableShoes";
import { Fragment } from "react";
import ShoesSummary from "./ShoesSummary/ShoesSummary";

const Shoes = () =>
{
    return(
        <Fragment>
            <ShoesSummary />
            <AvailableShoes />
        </Fragment>
    );
}

export default Shoes;