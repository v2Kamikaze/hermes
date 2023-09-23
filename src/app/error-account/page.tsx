import { AppBar } from "../components/AppBar";
import Logo from "../components/Logo";
import Image from "next/image";
import errorAcountPicture from "../../../public/error-account.svg";

export default function Home() {
    return (
    <main>
        <AppBar.Root>
            <Logo />
            <AppBar.Actions>
                <AppBar.Action text="<-- Voltar ao Início" href="/"/>
            </AppBar.Actions>
        </AppBar.Root>

        <div className="flex items-center justify-center p-4">
            <Image
            src={errorAcountPicture}
            alt={"Uma ilustração de pessoas com fotos de gráficos nas mãos"}
            className="w-3/12" 
        />
        </div>
    </main>
    )
}