import {ScrollProgressBar} from "../scroll-progress-bar/scroll-progress-bar";
import {Header} from "../header/header";
import {Footer} from "../footer/footer";

export const Layout = ({ children }) => {
    return (
        <div className="mainWrapper">
            <ScrollProgressBar />
            <Header />
            {children}
            <Footer />
        </div>
    )
};
