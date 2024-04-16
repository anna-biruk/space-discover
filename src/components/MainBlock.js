import Button from "./Button";
const MainBlock = () => {
    return (
        <div className="main">
            <div className="main__content">
                <h1 className="main__title">Discover the vast expanses of <strong className="main__title_accent">space</strong></h1>
                <div className="main__subtitle">Where the possibilities are <span className="main__subtitle_accent">endless!</span></div>
                <Button type="primary">Learn more</Button>
            </div>

        </div>
    )
}

export default MainBlock