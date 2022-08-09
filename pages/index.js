import Gacha from "./gacha";
import { userService } from "services";

export default function Home() {
    return (
        <>
            {/* <div>
                sup {userService.userValue?.username}
            </div> */}
            <Gacha/>
        </>
    )
}