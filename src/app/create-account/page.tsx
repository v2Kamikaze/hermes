import { Text } from "../components/Text";
import Image from "next/image";
import contactUsPicture from "../../../public/contact-us.svg";
import { Button } from "../components/Button";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { Input } from "../components/Input";
import { insertMaskInCpf } from "./cpf";

export default function Home() {
  return (
    <section className="px-9 py-16 space-y-4 max-w-7xl mx-auto">
      <Text.ExtraLargeBold>
        Faça parte da <Text.Span>maior revolução financeira</Text.Span> dos últimos tempos!
      </Text.ExtraLargeBold>
      <Text.BaseBold>
        Com apenas alguns dados você já estará um passo de mudar a forma como você lida com seu dinheiro!
      </Text.BaseBold>
      <div className="grid items-center gap-4 pt-4 justify-center grid-cols-[3fr_2fr] max-md:grid-cols-1">
        <form className="flex flex-col gap-4">
          <Text.BaseBold>Seu nome:</Text.BaseBold>
          <Input.Default id="name" placeholder="Herbert Viana" type="text" required/>

          <Text.BaseBold>CPF:</Text.BaseBold>
          <Input.Default
            id="cpf"
            placeholder="xxx.xxx.xxx-xx"
            type="text"
            pattern="\d{3}\.?\d{3}\.?\d{3}-?\d{2}" 
            required
          />

          <Text.BaseBold>Data de nascimento:</Text.BaseBold>
          <Input.Default id="birthdate" type="date" required/>

          <Text.BaseBold>Email:</Text.BaseBold>
          <Input.Default
            id="email"
            placeholder="herbertviana@email.com"
            type="email" required
          />

          <Text.BaseBold>Seu número de telefone:</Text.BaseBold>
          <Input.Default 
            id="phone" 
            placeholder="(99) 99999-99" 
            type="tel" 
            pattern="[0-9]{2} [0-9]{5}-[0-9]{4}" required/>

          <Button.Root>
            <Text.BaseBold>Cadastrar</Text.BaseBold>
            <PaperPlaneIcon className="w-6 h-6 stroke-white" />
            {/*<span className="w-6 h-6 animate-spin rounded-full border-white border-4 border-t-0"/>*/}
          </Button.Root>

        </form>
        <Image className="max-md:hidden" src={contactUsPicture} alt="" />
      </div>
  </section>
  )
}
