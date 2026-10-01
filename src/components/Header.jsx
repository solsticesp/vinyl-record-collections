export default function Header() {

    return (
        <header className="header">

            <div className="header-left">
                <button className="menu-btn">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav>
                    <a href="#">Home</a>
                    <a href="#">Collections</a>
                    <a href="#">New</a>
                </nav>
            </div>

            <div className="logo-mark">
                <span></span>
            </div>

            <div className="header-right">
                <button className="circle-btn">◔</button>

                <button className="cart-btn">
                    Cart
                    <span>▢</span>
                </button>

                <button className="circle-btn">♙</button>
            </div>

        </header>
    );
}