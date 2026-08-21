export type PassengerKind = "sem-desconto" | "com-desconto";

export type FieldType = "text" | "cpf" | "email" | "phone" | "date" | "country";

export interface PassengerField {
  id: string;
  label: string;
  type: FieldType;
  required: boolean;
  placeholder?: string;
}

export interface Passenger {
  id: string;
  index: number;
  kind: PassengerKind;
  priceLabel: string;
  fields: PassengerField[];
}

export interface CartItem {
  id: string;
  name: string;
  date: string;
  time: string;
  optional: string;
  lines: { label: string; value: string }[];
}

export const cartItems: CartItem[] = [
  {
    id: "transfer",
    name: "Transfer Privativo",
    date: "22/08/2026",
    time: "08:00",
    optional: "—",
    lines: [
      { label: "2x preço sem desconto", value: "R$ 800,00" },
      { label: "1x preço com desconto", value: "R$ 2.150,00" },
    ],
  },
];

export const subtotal = "R$ 2.950,00";
export const discountedTotal = "R$ 1.100,00";

const baseFields: PassengerField[] = [
  { id: "nome", label: "Nome do utilizador", type: "text", required: true, placeholder: "Digite o nome completo" },
  { id: "email", label: "E-mail", type: "email", required: true, placeholder: "nome@email.com" },
  { id: "telefone", label: "Telefone", type: "phone", required: true, placeholder: "(00) 00000-0000" },
  { id: "pais", label: "País de origem", type: "country", required: true },
  { id: "cpf", label: "CPF", type: "cpf", required: true, placeholder: "000.000.000-00" },
];

export const passengers: Passenger[] = Array.from({ length: 12 }, (_, i) => i + 1).map((index) => ({
  id: `passageiro-${index}`,
  index,
  kind: index > 10 ? "com-desconto" : "sem-desconto",
  priceLabel: index > 10 ? "preço com desconto" : "preço sem desconto",
  fields: baseFields,
}));

export const countries = [
  { code: "BR", label: "Brasil", flag: "🇧🇷" },
  { code: "PT", label: "Portugal", flag: "🇵🇹" },
  { code: "AR", label: "Argentina", flag: "🇦🇷" },
  { code: "US", label: "Estados Unidos", flag: "🇺🇸" },
  { code: "ES", label: "Espanha", flag: "🇪🇸" },
];

export const termsParagraphs = [
  "Os termos abaixo se referem aos serviços prestados pelo site da nossa empresa.",
  "1. Por este Termo de Uso, o USUÁRIO fica ciente e concorda que, ao utilizar os serviços oferecidos pelo portal da CONTRATADA, aceita automaticamente e integralmente todas as condições que constam neste Termo, bem como qualquer de suas alterações futuras.",
  "2. A CONTRATADA atua como intermediária entre o USUÁRIO e os fornecedores dos serviços turísticos, sendo responsável pela correta transmissão das informações de reserva.",
  "3. O USUÁRIO declara que todos os dados informados no processo de compra são verdadeiros, completos e de sua inteira responsabilidade, inclusive os dados de terceiros informados como passageiros.",
  "4. Cancelamentos e remarcações seguem a política específica de cada atividade, informada na página do produto no momento da compra.",
  "5. Os valores com desconto são condicionados à comprovação documental no momento do embarque. A ausência de comprovação implica cobrança da diferença tarifária.",
  "6. A CONTRATADA poderá alterar horários e itinerários por motivos de força maior, condições climáticas ou segurança dos participantes.",
  "7. Os dados pessoais coletados são tratados conforme a Lei Geral de Proteção de Dados (LGPD) e utilizados exclusivamente para a operação da reserva.",
  "8. Ao concluir a compra, o USUÁRIO declara ter lido, compreendido e aceito integralmente as condições descritas neste Termo de Uso.",
];
