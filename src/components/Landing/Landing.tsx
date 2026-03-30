import { useEffect, useRef, useState } from "react";
import * as S from "./Landing.styles"
import draw from "./canvasLogic";
import Home from "../Home/Home";

const Landing = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [nextPage, setNextPage] = useState<boolean>(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas)
            return;
        const ctx = canvas.getContext("2d");
        if (!ctx)
            return;
        draw(ctx, canvas);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => setNextPage(true), 5000);
        return () => clearTimeout(timer);
      }, []);

    return (
        <S.Container>
            <canvas ref={canvasRef} style={{ position: "absolute" }}></canvas>
            {!nextPage && (<S.LandingTitle>N tsuki.ii</S.LandingTitle>)}
            {nextPage && (
                <S.HomeContainer>
                    <Home />
                </S.HomeContainer>
            )}
        </S.Container>
    )
}

export default Landing;