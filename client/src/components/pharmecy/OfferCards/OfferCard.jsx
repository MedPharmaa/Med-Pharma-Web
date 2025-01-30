import { useNavigate } from "react-router-dom";
import styles from "./offerCards.module.css";

const OfferCards = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.container}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ flex: "1.5" }}>
                    <div style={{ backgroundColor: "#cff0ea" }}>
                        <div className={styles.discount}>FLAT 15% OFF</div>
                        <div className={styles.heading}>Order Medicines</div>
                    </div>
                    <div>
                        <button
                            onClick={() => navigate("/products")}
                            className={styles.btn}
                        >
                            Order Now
                        </button>
                    </div>
                </div>
                <div style={{ flex: "1" }}>
                    <div style={{ backgroundColor: "#FFA500", height: "61%" }}></div>
                    <img
                        style={{ marginTop: "-120px" }}
                        width="100%"
                        src="https://assets.pharmeasy.in/web-assets/dist/7c645a8d.png?dim=186x0&dpr=1&q=100"
                        alt=""
                    />
                </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ flex: "1.5" }}>
                    <div style={{ backgroundColor: "#FFA500" }}>
                        <div className={styles.discount}>UPTO 60% OFF</div>
                        <div className={styles.heading}>Healthcare Products</div>
                    </div>
                    <div>
                        <button
                            style={{ backgroundColor: "##FFA500" }}
                            onClick={() => navigate("/products")}
                            className={styles.btn}
                        >
                            Order Now
                        </button>
                    </div>
                </div>
                <div style={{ flex: "1" }}>
                    <div style={{ backgroundColor: "#FFA500", height: "61%" }}></div>
                    <img
                        style={{ marginTop: "-120px" }}
                        width="100%"
                        src="https://assets.pharmeasy.in/web-assets/dist/c7c7095b.png?dim=186x0&dpr=1&q=100"
                        alt=""
                    />
                </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ flex: "1.5" }}>
                    <div style={{ backgroundColor: "#d6f0ff" }}>
                        <div className={styles.discount}>UPTO 70% OFF</div>
                        <div className={styles.heading}>Lab Tests</div>
                    </div>
                    <div>
                        <button
                            onClick={() => navigate("/lab-test")}
                            className={styles.btn}
                            style={{ backgroundColor: "#00b9e1" }}
                        >
                            Book Now
                        </button>
                    </div>
                </div>
                <div style={{ flex: "1" }}>
                    <div style={{ backgroundColor: "#d6f0ff", height: "61%" }}></div>
                    <img
                        style={{ marginTop: "-120px" }}
                        width="100%"
                        src="https://assets.pharmeasy.in/web-assets/dist/e1d3ac1c.png?dim=186x0&dpr=1&q=100"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default OfferCards;