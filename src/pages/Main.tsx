import GameModeCard from "../entities/GameModeCard/GameModeCard";

const Main = () => {
    return (
        <div>
            Main page
            <GameModeCard>
                Go first
            </GameModeCard>
            <GameModeCard>
                Go second
            </GameModeCard>
            <GameModeCard>
                SandBox
            </GameModeCard>
        </div>
    );
};

export default Main;