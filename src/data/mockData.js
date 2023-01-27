import { tokens } from "../theme";

export const mockDataDocuments = [
  {
    title: "Contrato de Arrendamiento de Vivienda",
    date: "22/11/22",
    price: 9.9,
    description:
      "Usa este documento cuando quieras arrendar una casa o un apartamento.",
    clausulas: [
      "Objeto del contrato",
      "Dirección del inmueble",
      "Destinación",
      "Precio del arrendamiento",
      "Incrementos del precio",
      "Vigencia del contrato",
      "Prórrogas",
      "Servicios y cargos",
      "Zonas o usos conexos",
      "Cuotas de administración",
      "Terminación anticipada",
      "Causales de terminación",
      "Cesión de derechos",
      "Recibo y estado",
      "Mejoras",
      "Cambios del inmueble",
      "Inspección del inmueble",
      "Autorización",
      "Abandono del inmueble",
      "Cláusula de deudores solidarios",
      "Divisibilidad",
      "Ley aplicable",
    ],
    category: "contratos",
    categoryId: 1,
    state: "contractual",
    signed: "firmado",
    area: "derecho-civil",
    signatures: "1/3",
    image: "/assets/document.jpg",
    myDocument: true,
    stock: 10,
  },
  {
    title: "Estatutos para Empresa (SAS)",
    date: "22/11/22",
    price: 50.0,
    description:
      "¿Necesitas constituir una empresa? ¿Quieres formalizar tu emprendimiento o tu compañía familiar en una sociedad? Éste es el documento que te sirve.",
    clausulas: [
      "Nombre Social",
      "Naturaleza y Nacionalidad",
      "Objeto social",
      "Órganos sociales",
      "Funcionamiento de la Asamblea General",
      "Representación legal",
      "Capital autorizado, suscrito y pagado",
      "Derecho de preferencia",
      "Disolución y liquidación",
    ],
    category: "acuerdos",
    categoryId: 2,
    state: "contractual",
    signed: "firmado",
    state: "pre-contractual",
    signed: "sinFirma",
    area: "derecho-comercial",
    signatures: "2/3",
    image: "/assets/document.jpg",
    myDocument: false,
    stock: 10,
  },
  {
    title: "Documentos para Divorcio",
    date: "22/11/22",
    price: 35.0,
    description:
      "Sabemos que un divorcio nunca es fácil, pero estos documentos te ayudarán a hacer más sencillo el proceso legal. ",
    clausulas: [
      "Acuerdo de cesación de efectos civiles, en el que pactan cómo va a ser la separación de la pareja y cuáles son sus obligaciones mutuas.",
      "Poder para el abogado/a que los represente ante una notaría (recuerda que el trámite de divorcio por notaría siempre debe hacerse por intermedio de un abogado)",
      "Solicitud ante la Notaría para la cesación de efectos civiles.",
    ],
    category: "templates",
    categoryId: 3,
    state: "contractual",
    signed: "firmado",
    signed: "firmado",
    area: "derecho-civil",
    signatures: "3/3",
    image: "/assets/document.jpg",
    myDocument: false,
    stock: 10,
  },
  {
    title: "Contrato de trabajo de Empleada Doméstica",
    date: "22/11/22",
    price: 15.0,
    description:
      "Este contrato te sirve para regular la relación frente a la empleada doméstica que trabaja para ti o para tu empresa.",
    clausulas: [
      "Objeto del contrato",
      "Cargo",
      "Funciones y obligaciones de la Trabajadora.",
      "Obligaciones del Empleador",
      "Remuneración",
      "Gastos",
      "Jornada de trabajo",
      "Periodo de prueba",
      "Terminación del contrato",
      "Ley aplicable",
      "Integridad y divisibilidad",
    ],
    category: "contratos",
    categoryId: 1,
    state: "contractual",
    signed: "firmado",
    state: "contractual",
    signed: "firmado",
    signatures: "1/3",
    image: "/assets/document.jpg",
    myDocument: true,
  },
  {
    title: "Autorización de Tratamiento de Datos",
    date: "22/11/22",
    price: 15.0,
    description:
      "Cuando vas a recolectar datos de tus clientes o proveedores necesitas su autorización. Usa este documento para que ellos te den la autorización que exige la ley.",
    clausulas: [
      "Finalidad del tratamiento",
      "Usuarios de la información",
      "Derechos del titular de la información",
      "Responsables y encargardos del tratamiento",
      "Autorización",
    ],
    category: "Agreement",
    categoryId: 2,
    state: "contractual",
    signed: "sinFirma",
    signatures: "2/3",
    image: "/assets/document.jpg",
    myDocument: false,
    stock: 10,
  },
  {
    title: "Contrato de Prestación de servicios",
    date: "22/11/22",
    price: 10.0,
    description:
      "¿Necesitas contratar la prestación de un servicio ofrecido por otra persona? ¿Te van a contratar para que prestes un servicio a favor de alguien más? Éste es el documento que te sirve.",
    clausulas: [
      "Objeto",
      "Valor del contrato",
      "Obligaciones del contratista",
      "Obligaciones del contratante",
      "Duración",
      "Cesión",
      "Lugar de ejecución",
      "Independencia",
      "Terminación del contrato",
      "Modificación del contrato",
      "Responsabilidad profesional",
      "Indemnidad",
      "Divisibilidad",
      "Ley aplicable",
    ],
    category: "templates",
    categoryId: 3,
    state: "contractual",
    signed: "firmado",
    signatures: "3/3",
    image: "/assets/document.jpg",
    myDocument: false,
    stock: 10,
  },
  {
    title: "Accion de Tutela",
    date: "22/11/22",
    price: 10.0,
    description:
      "La tutela es una acción judicial por medio de la cual puedes pedir que se protejan tus derechos fundamentales, como la vida, la igualdad, la libertad, la dignidad, la salud, el derecho al mínimo vital y la intimidad, entre otros.",
    category: "templates",
    categoryId: 3,
    state: "contractual",
    signed: "firmado",
    signatures: "3/3",
    image: "/assets/document.jpg",
    myDocument: false,
    stock: 10,
  },
  {
    title: "Contrato de trabajo a Término Indefinido",
    date: "22/11/22",
    price: 10.0,
    description:
      "Si necesitas contratar a un empleado por un término indefinido, éste es el documento para ti! Por medio de este contrato puedes definir toda la relación entre ese empleado y tú; puedes establecer cuál será su cargo, sus obligaciones y funciones, de cuánto será su salario y cómo se pagará, y cuáles son las causales para terminar el contrato, entre otros",
    clausulas: [
      "Objeto del contrato",
      "Cargo, funciones y obligaciones del Trabajador.",
      "Calidad del Trabajador",
      "Remuneración",
      "Gastos",
      "Jornada de trabajo",
      "Periodo de prueba",
      "Terminación del contrato",
      "Ley aplicable",
      "Integridad y divisibilidad",
    ],
    category: "contratos",
    categoryId: 3,
    state: "contractual",
    signed: "firmado",
    signatures: "3/3",
    image: "/assets/document.jpg",
    myDocument: false,
    stock: 10,
  },
  {
    title: "Promesa de compraventa de bien inmueble",
    date: "22/11/22",
    price: 10.0,
    description:
      "¿Quieres comprar o vender una casa, un apartamento, una finca, un lote o un local comercial? Este documento te sirve como promesa para celebrar ese contrato de compraventa sobre cualquier bien inmueble.",
    clausulas: [
      "Objeto y descripción del inmueble",
      "Precio y forma de pago",
      "Entrega",
      "Escritura pública",
      "Gastos",
      "Tradición",
      "Saneamiento",
      "Arras",
      "Título ejecutivo",
    ],
    category: "templates",
    categoryId: 3,
    state: "contractual",
    signed: "firmado",
    signatures: "3/3",
    image: "/assets/document.jpg",
    myDocument: false,
    stock: 10,
  },
  {
    title: "Contrato de Compraventa de Vehículo",
    date: "22/11/22",
    price: 12.0,
    description: "¿Vendes o compras un carro? Éste es el contrato para ti.",
    clausulas: [
      "Partes",
      "Información general del contrato",
      "Objeto y descripción del vehículo",
      "Precio y forma de pago",
      "Entrega",
      "Obligaciones del vendedor",
      "Gastos",
    ],
    category: "templates",
    categoryId: 3,
    state: "contractual",
    signed: "firmado",
    signatures: "3/3",
    image: "/assets/document.jpg",
    myDocument: false,
    stock: 10,
  },
  {
    title: "Requerimiento de Pago",
    date: "22/11/22",
    price: 10.0,
    description:
      "¿No te pagan? Usa este producto para escribirle a tu contraparte y decirle que está incumpliendo su obligación de pagarte por un servicio que tú prestaste o por un bien que le vendiste.",
    clausulas: [
      "Una descripción de lo que tú y tu contraparte acordaron. ",
      "Una explicación de que tú ya cumpliste con tu parte. ",
      "La afirmación de que tu contraparte está incumpliendo lo pactado al no pagarte. ",
      "Una advertencia de que se pueden estar causando intereses de mora. ",
      "El requerimiento de pago como tal, que es la exigencia de que te pague. ",
    ],
    category: "templates",
    categoryId: 3,
    state: "contractual",
    signed: "firmado",
    signatures: "3/3",
    image: "/assets/document.jpg",
    myDocument: false,
    stock: 10,
  },
  {
    title: "Acuerdo de Confidencialidad",
    date: "22/11/22",
    price: 10.0,
    description:
      "¿Quieres proteger la información que le entregas a tu proveedor o contraparte? Este acuerdo de confidencialidad te sirve para eso!",
    clausulas: [
      "Objeto del contrato",
      "Obligaciones",
      "No aplicación del acuerdo",
      "Devolución",
      "Alcance",
      "Vigencia y terminación",
      "Integridad y prohibición de cesión",
      "Divisibilidad",
      "Ley aplicable",
      "Fecha de inicio",
    ],
    category: "templates",
    categoryId: 3,
    state: "contractual",
    signed: "firmado",
    signatures: "3/3",
    image: "/assets/document.jpg",
    myDocument: false,
    stock: 10,
  },
  {
    title: "Contrato de Trabajo a Término Fijo",
    date: "22/11/22",
    price: 15.0,
    description:
      "Si necesitas contratar a un empleado por un término fijo, éste es el documento para ti! Por medio de este contrato puedes definir toda la relación entre ese empleado y tú; puedes establecer cuál será su cargo, sus obligaciones y funciones, de cuánto será su salario y cómo se pagará, cuál es la fecha de inicio y terminación del contrato y cuáles son las causales para terminar el contrato, entre otros.",
    clausulas: [
      "Objeto del contrato",
      "Cargo, funciones y obligaciones del Trabajador.",
      "Calidad del Trabajador",
      "Remuneración",
      "Gastos",
      "Jornada de trabajo",
      "Periodo de prueba",
      "Terminación del contrato",
      "Ley aplicable",
      "Integridad y divisibilidad",
    ],
    category: "templates",
    categoryId: 3,
    state: "contractual",
    signed: "firmado",
    signatures: "3/3",
    image: "/assets/document.jpg",
    myDocument: false,
    stock: 10,
  },
  {
    title: "Poder Judicial",
    date: "22/11/22",
    price: 7.0,
    description:
      "¿Necesitas un poder para tu abogado? o ¿Eres abogado y necesitas un poder para representar a tu cliente en un proceso? Éste es el documento para ti!",
    category: "templates",
    categoryId: 3,
    state: "contractual",
    signed: "firmado",
    signatures: "3/3",
    image: "/assets/document.jpg",
    myDocument: false,
    stock: 10,
  },
  {
    title: "Cláusula Compromisoria",
    date: "22/11/22",
    price: 10.0,
    description:
      "La cláusula compromisoria es un acuerdo para que las partes del contrato no resuelvan sus problemas, diferencias o conflictos ante los jueces comunes y corrientes, sino que los obliga a ir ante un Tribunal de Arbitraje.",
    category: "templates",
    categoryId: 3,
    state: "contractual",
    signed: "firmado",
    signatures: "3/3",
    image: "/assets/document.jpg",
    myDocument: false,
    stock: 10,
  },
  {
    title: "Acta de Asamblea de Accionistas",
    date: "22/11/22",
    price: 11.0,
    description:
      "Todas las sociedades deben hacer, al menos una vez al año, una asamblea general de accionistas y deben dejar un acta de esa reunión. Acá te presentamos un modelo que te sirve para estas asambleas, ya sean ordinarias o extraordinarias. Este documento está diseñado para Sociedades por Acciones Simplificadas (SAS), pero puede ser adaptado para otro tipo de entidad. ",
    category: "templates",
    categoryId: 3,
    state: "contractual",
    signed: "firmado",
    signatures: "3/3",
    image: "/assets/document.jpg",
    myDocument: false,
    stock: 10,
  },
  {
    title: "Poder para Divorcio",
    date: "22/11/22",
    price: 10.0,
    description:
      "Este poder se requiere para todos los trámites de divorcio por notaría; en estos casos la ley exige que se haga todo el proceso de divorcio (o de cesación de efectos civiles del matrimonio religioso) por medio de un abogado/a.",
    category: "templates",
    categoryId: 3,
    state: "contractual",
    signed: "firmado",
    signatures: "3/3",
    image: "/assets/document.jpg",
    myDocument: false,
    stock: 10,
  },
  {
    title: "Cláusula Penal",
    date: "22/11/22",
    price: 6.0,
    description:
      "La cláusula penal, que puedes incluir en prácticamente cualquier contrato, funciona como una multa que debe pagar la persona que incumpla el contrato. Puedes fijar la suma que requieras como multa, dependiendo del valor total del contrato.",
    category: "templates",
    categoryId: 3,
    state: "contractual",
    signed: "firmado",
    signatures: "3/3",
    image: "/assets/document.jpg",
    myDocument: false,
    stock: 10,
  },
  {
    title: "Carta de Renuncia",
    date: "22/11/22",
    price: 10.0,
    description:
      "¿Quieres renunciar pero no sabes cómo decirlo? Este documento, sencillo pero al grano, te ayuda!",
    category: "templates",
    categoryId: 3,
    state: "contractual",
    signed: "firmado",
    signatures: "3/3",
    image: "/assets/document.jpg",
    myDocument: false,
    stock: 10,
  },
  {
    title: "Cláusula Anticorrupción",
    date: "22/11/22",
    price: 10.0,
    description:
      "Esta cláusula, que puedes incluir en los contratos de prestación de servicios, te da una protección adicional de los actos fraudulentos o corruptos que llegue a realizar tu potencial contratista. Por medio de esta cláusula, el contratista se obliga a no realizar ninguna actividad que pueda ser considerada ilegal durante el tiempo en que te presta servicios. ",
    category: "templates",
    categoryId: 3,
    state: "contractual",
    signed: "firmado",
    signatures: "3/3",
    image: "/assets/document.jpg",
    myDocument: false,
    stock: 10,
  },
  {
    title: "Pagaré",
    date: "22/11/22",
    price: 10.0,
    description:
      "¿Le vas a prestar plata a alguien y necesitas una garantía? Éste es el documento para ti. El pagaré es una promesa de alguien que debe un dinero por medio de la cual se compromete a pagarlo. Descárgalo ya!",
    category: "templates",
    categoryId: 3,
    state: "contractual",
    signed: "firmado",
    signatures: "3/3",
    image: "/assets/document.jpg",
    myDocument: false,
    stock: 10,
  },
];

export const muckDataServices = [
  {
    id: 1,
    title: "Document Updated",
    categoryId: 1,
    category: "LegalTech",
    price: 10.999,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    signatures: "1/3",
    image: "/assets/create-document.jpg",
  },
  {
    id: 2,
    title: "Document Creation",
    categoryId: 2,
    category: "Smart-Contract",
    price: 10.999,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    signatures: "1/3",
    image: "/assets/create-document.jpg",
  },
  {
    id: 3,
    title: "Signing Documents",
    categoryId: 3,
    category: "Big-Data",
    price: 10.999,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    signatures: "1/3",
    image: "/assets/create-document.jpg",
  },
  {
    id: 4,
    title: "Implement Law Statues",
    categoryId: 1,
    category: "LegalTech",
    price: 10.999,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    signatures: "1/3",
    image: "/assets/create-document.jpg",
  },
  {
    id: 5,
    title: "Automatic Generation",
    categoryId: 2,
    category: "Smart-Contract",
    price: 10.999,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    signatures: "1/3",
    image: "/assets/create-document.jpg",
  },
  {
    id: 6,
    title: "Automatic signatures",
    categoryId: 3,
    category: "Big-Data",
    price: 10.999,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    signatures: "1/3",
    image: "/assets/create-document.jpg",
  },
];

export const muckDataBlog = [
  {
    id: 1,
    title: "Improve your files",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: require("../../images/update-document.jpg"),
  },
  {
    id: 2,
    title: "Automatically update your legal files",
    description: "Lorem Ipsum is simply dummy text of.",
    image: require("../../images/create-document.jpg"),
  },
  {
    id: 3,
    title: "Improve your files",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: require("../../images/update-document.jpg"),
  },
  {
    id: 4,
    title: "Automatically update your legal files",
    description: "Lorem Ipsum is simply dummy text of.",
    image: require("../../images/create-document.jpg"),
  },
];

export const mockDataTeam = [
  {
    id: 1,
    name: "Jon Snow",
    email: "jonsnow@gmail.com",
    age: 35,
    phone: "(665)121-5454",
    access: "admin",
  },
  {
    id: 2,
    name: "Cersei Lannister",
    email: "cerseilannister@gmail.com",
    age: 42,
    phone: "(421)314-2288",
    access: "manager",
  },
  {
    id: 3,
    name: "Jaime Lannister",
    email: "jaimelannister@gmail.com",
    age: 45,
    phone: "(422)982-6739",
    access: "user",
  },
  {
    id: 4,
    name: "Anya Stark",
    email: "anyastark@gmail.com",
    age: 16,
    phone: "(921)425-6742",
    access: "admin",
  },
  {
    id: 5,
    name: "Daenerys Targaryen",
    email: "daenerystargaryen@gmail.com",
    age: 31,
    phone: "(421)445-1189",
    access: "user",
  },
  {
    id: 6,
    name: "Ever Melisandre",
    email: "evermelisandre@gmail.com",
    age: 150,
    phone: "(232)545-6483",
    access: "manager",
  },
  {
    id: 7,
    name: "Ferrara Clifford",
    email: "ferraraclifford@gmail.com",
    age: 44,
    phone: "(543)124-0123",
    access: "user",
  },
  {
    id: 8,
    name: "Rossini Frances",
    email: "rossinifrances@gmail.com",
    age: 36,
    phone: "(222)444-5555",
    access: "user",
  },
  {
    id: 9,
    name: "Harvey Roxie",
    email: "harveyroxie@gmail.com",
    age: 65,
    phone: "(444)555-6239",
    access: "admin",
  },
];

export const mockDataContacts = [
  {
    id: 1,
    name: "Jon Snow",
    email: "jonsnow@gmail.com",
    age: 35,
    phone: "(665)121-5454",
    address: "0912 Won Street, Alabama, SY 10001",
    city: "New York",
    zipCode: "10001",
    registrarId: 123512,
  },
  {
    id: 2,
    name: "Cersei Lannister",
    email: "cerseilannister@gmail.com",
    age: 42,
    phone: "(421)314-2288",
    address: "1234 Main Street, New York, NY 10001",
    city: "New York",
    zipCode: "13151",
    registrarId: 123512,
  },
  {
    id: 3,
    name: "Jaime Lannister",
    email: "jaimelannister@gmail.com",
    age: 45,
    phone: "(422)982-6739",
    address: "3333 Want Blvd, Estanza, NAY 42125",
    city: "New York",
    zipCode: "87281",
    registrarId: 4132513,
  },
  {
    id: 4,
    name: "Anya Stark",
    email: "anyastark@gmail.com",
    age: 16,
    phone: "(921)425-6742",
    address: "1514 Main Street, New York, NY 22298",
    city: "New York",
    zipCode: "15551",
    registrarId: 123512,
  },
  {
    id: 5,
    name: "Daenerys Targaryen",
    email: "daenerystargaryen@gmail.com",
    age: 31,
    phone: "(421)445-1189",
    address: "11122 Welping Ave, Tenting, CD 21321",
    city: "Tenting",
    zipCode: "14215",
    registrarId: 123512,
  },
  {
    id: 6,
    name: "Ever Melisandre",
    email: "evermelisandre@gmail.com",
    age: 150,
    phone: "(232)545-6483",
    address: "1234 Canvile Street, Esvazark, NY 10001",
    city: "Esvazark",
    zipCode: "10001",
    registrarId: 123512,
  },
  {
    id: 7,
    name: "Ferrara Clifford",
    email: "ferraraclifford@gmail.com",
    age: 44,
    phone: "(543)124-0123",
    address: "22215 Super Street, Everting, ZO 515234",
    city: "Evertin",
    zipCode: "51523",
    registrarId: 123512,
  },
  {
    id: 8,
    name: "Rossini Frances",
    email: "rossinifrances@gmail.com",
    age: 36,
    phone: "(222)444-5555",
    address: "4123 Ever Blvd, Wentington, AD 142213",
    city: "Esteras",
    zipCode: "44215",
    registrarId: 512315,
  },
  {
    id: 9,
    name: "Harvey Roxie",
    email: "harveyroxie@gmail.com",
    age: 65,
    phone: "(444)555-6239",
    address: "51234 Avery Street, Cantory, ND 212412",
    city: "Colunza",
    zipCode: "111234",
    registrarId: 928397,
  },
  {
    id: 10,
    name: "Enteri Redack",
    email: "enteriredack@gmail.com",
    age: 42,
    phone: "(222)444-5555",
    address: "4123 Easer Blvd, Wentington, AD 142213",
    city: "Esteras",
    zipCode: "44215",
    registrarId: 533215,
  },
  {
    id: 11,
    name: "Steve Goodman",
    email: "stevegoodmane@gmail.com",
    age: 11,
    phone: "(444)555-6239",
    address: "51234 Fiveton Street, CunFory, ND 212412",
    city: "Colunza",
    zipCode: "1234",
    registrarId: 92197,
  },
];

export const mockDataInvoices = [
  {
    id: 1,
    name: "Jon Snow",
    email: "jonsnow@gmail.com",
    cost: "21.24",
    phone: "(665)121-5454",
    date: "03/12/2022",
  },
  {
    id: 2,
    name: "Cersei Lannister",
    email: "cerseilannister@gmail.com",
    cost: "1.24",
    phone: "(421)314-2288",
    date: "06/15/2021",
  },
  {
    id: 3,
    name: "Jaime Lannister",
    email: "jaimelannister@gmail.com",
    cost: "11.24",
    phone: "(422)982-6739",
    date: "05/02/2022",
  },
  {
    id: 4,
    name: "Anya Stark",
    email: "anyastark@gmail.com",
    cost: "80.55",
    phone: "(921)425-6742",
    date: "03/21/2022",
  },
  {
    id: 5,
    name: "Daenerys Targaryen",
    email: "daenerystargaryen@gmail.com",
    cost: "1.24",
    phone: "(421)445-1189",
    date: "01/12/2021",
  },
  {
    id: 6,
    name: "Ever Melisandre",
    email: "evermelisandre@gmail.com",
    cost: "63.12",
    phone: "(232)545-6483",
    date: "11/02/2022",
  },
  {
    id: 7,
    name: "Ferrara Clifford",
    email: "ferraraclifford@gmail.com",
    cost: "52.42",
    phone: "(543)124-0123",
    date: "02/11/2022",
  },
  {
    id: 8,
    name: "Rossini Frances",
    email: "rossinifrances@gmail.com",
    cost: "21.24",
    phone: "(222)444-5555",
    date: "05/02/2021",
  },
];

export const mockTransactions = [
  {
    txId: "01e4dsa",
    user: "johndoe",
    date: "2021-09-01",
    cost: "43.95",
  },
  {
    txId: "0315dsaa",
    user: "jackdower",
    date: "2022-04-01",
    cost: "133.45",
  },
  {
    txId: "01e4dsa",
    user: "aberdohnny",
    date: "2021-09-01",
    cost: "43.95",
  },
  {
    txId: "51034szv",
    user: "goodmanave",
    date: "2022-11-05",
    cost: "200.95",
  },
  {
    txId: "0a123sb",
    user: "stevebower",
    date: "2022-11-02",
    cost: "13.55",
  },
  {
    txId: "01e4dsa",
    user: "aberdohnny",
    date: "2021-09-01",
    cost: "43.95",
  },
  {
    txId: "120s51a",
    user: "wootzifer",
    date: "2019-04-15",
    cost: "24.20",
  },
  {
    txId: "0315dsaa",
    user: "jackdower",
    date: "2022-04-01",
    cost: "133.45",
  },
];

export const mockBarData = [
  {
    country: "AD",
    "hot dog": 137,
    "hot dogColor": "hsl(229, 70%, 50%)",
    burger: 96,
    burgerColor: "hsl(296, 70%, 50%)",
    kebab: 72,
    kebabColor: "hsl(97, 70%, 50%)",
    donut: 140,
    donutColor: "hsl(340, 70%, 50%)",
  },
  {
    country: "AE",
    "hot dog": 55,
    "hot dogColor": "hsl(307, 70%, 50%)",
    burger: 28,
    burgerColor: "hsl(111, 70%, 50%)",
    kebab: 58,
    kebabColor: "hsl(273, 70%, 50%)",
    donut: 29,
    donutColor: "hsl(275, 70%, 50%)",
  },
  {
    country: "AF",
    "hot dog": 109,
    "hot dogColor": "hsl(72, 70%, 50%)",
    burger: 23,
    burgerColor: "hsl(96, 70%, 50%)",
    kebab: 34,
    kebabColor: "hsl(106, 70%, 50%)",
    donut: 152,
    donutColor: "hsl(256, 70%, 50%)",
  },
  {
    country: "AG",
    "hot dog": 133,
    "hot dogColor": "hsl(257, 70%, 50%)",
    burger: 52,
    burgerColor: "hsl(326, 70%, 50%)",
    kebab: 43,
    kebabColor: "hsl(110, 70%, 50%)",
    donut: 83,
    donutColor: "hsl(9, 70%, 50%)",
  },
  {
    country: "AI",
    "hot dog": 81,
    "hot dogColor": "hsl(190, 70%, 50%)",
    burger: 80,
    burgerColor: "hsl(325, 70%, 50%)",
    kebab: 112,
    kebabColor: "hsl(54, 70%, 50%)",
    donut: 35,
    donutColor: "hsl(285, 70%, 50%)",
  },
  {
    country: "AL",
    "hot dog": 66,
    "hot dogColor": "hsl(208, 70%, 50%)",
    burger: 111,
    burgerColor: "hsl(334, 70%, 50%)",
    kebab: 167,
    kebabColor: "hsl(182, 70%, 50%)",
    donut: 18,
    donutColor: "hsl(76, 70%, 50%)",
  },
  {
    country: "AM",
    "hot dog": 80,
    "hot dogColor": "hsl(87, 70%, 50%)",
    burger: 47,
    burgerColor: "hsl(141, 70%, 50%)",
    kebab: 158,
    kebabColor: "hsl(224, 70%, 50%)",
    donut: 49,
    donutColor: "hsl(274, 70%, 50%)",
  },
];

export const mockPieData = [
  {
    id: "hack",
    label: "hack",
    value: 239,
    color: "hsl(104, 70%, 50%)",
  },
  {
    id: "make",
    label: "make",
    value: 170,
    color: "hsl(162, 70%, 50%)",
  },
  {
    id: "go",
    label: "go",
    value: 322,
    color: "hsl(291, 70%, 50%)",
  },
  {
    id: "lisp",
    label: "lisp",
    value: 503,
    color: "hsl(229, 70%, 50%)",
  },
  {
    id: "scala",
    label: "scala",
    value: 584,
    color: "hsl(344, 70%, 50%)",
  },
];

export const mockLineData = [
  {
    id: "japan",
    color: tokens("dark").greenAccent[500],
    data: [
      {
        x: "plane",
        y: 101,
      },
      {
        x: "helicopter",
        y: 75,
      },
      {
        x: "boat",
        y: 36,
      },
      {
        x: "train",
        y: 216,
      },
      {
        x: "subway",
        y: 35,
      },
      {
        x: "bus",
        y: 236,
      },
      {
        x: "car",
        y: 88,
      },
      {
        x: "moto",
        y: 232,
      },
      {
        x: "bicycle",
        y: 281,
      },
      {
        x: "horse",
        y: 1,
      },
      {
        x: "skateboard",
        y: 35,
      },
      {
        x: "others",
        y: 14,
      },
    ],
  },
  {
    id: "france",
    color: tokens("dark").blueAccent[300],
    data: [
      {
        x: "plane",
        y: 212,
      },
      {
        x: "helicopter",
        y: 190,
      },
      {
        x: "boat",
        y: 270,
      },
      {
        x: "train",
        y: 9,
      },
      {
        x: "subway",
        y: 75,
      },
      {
        x: "bus",
        y: 175,
      },
      {
        x: "car",
        y: 33,
      },
      {
        x: "moto",
        y: 189,
      },
      {
        x: "bicycle",
        y: 97,
      },
      {
        x: "horse",
        y: 87,
      },
      {
        x: "skateboard",
        y: 299,
      },
      {
        x: "others",
        y: 251,
      },
    ],
  },
  {
    id: "us",
    color: tokens("dark").redAccent[200],
    data: [
      {
        x: "plane",
        y: 191,
      },
      {
        x: "helicopter",
        y: 136,
      },
      {
        x: "boat",
        y: 91,
      },
      {
        x: "train",
        y: 190,
      },
      {
        x: "subway",
        y: 211,
      },
      {
        x: "bus",
        y: 152,
      },
      {
        x: "car",
        y: 189,
      },
      {
        x: "moto",
        y: 152,
      },
      {
        x: "bicycle",
        y: 8,
      },
      {
        x: "horse",
        y: 197,
      },
      {
        x: "skateboard",
        y: 107,
      },
      {
        x: "others",
        y: 170,
      },
    ],
  },
];

export const mockGeographyData = [
  {
    id: "AFG",
    value: 520600,
  },
  {
    id: "AGO",
    value: 949905,
  },
  {
    id: "ALB",
    value: 329910,
  },
  {
    id: "ARE",
    value: 675484,
  },
  {
    id: "ARG",
    value: 432239,
  },
  {
    id: "ARM",
    value: 288305,
  },
  {
    id: "ATA",
    value: 415648,
  },
  {
    id: "ATF",
    value: 665159,
  },
  {
    id: "AUT",
    value: 798526,
  },
  {
    id: "AZE",
    value: 481678,
  },
  {
    id: "BDI",
    value: 496457,
  },
  {
    id: "BEL",
    value: 252276,
  },
  {
    id: "BEN",
    value: 440315,
  },
  {
    id: "BFA",
    value: 343752,
  },
  {
    id: "BGD",
    value: 920203,
  },
  {
    id: "BGR",
    value: 261196,
  },
  {
    id: "BHS",
    value: 421551,
  },
  {
    id: "BIH",
    value: 974745,
  },
  {
    id: "BLR",
    value: 349288,
  },
  {
    id: "BLZ",
    value: 305983,
  },
  {
    id: "BOL",
    value: 430840,
  },
  {
    id: "BRN",
    value: 345666,
  },
  {
    id: "BTN",
    value: 649678,
  },
  {
    id: "BWA",
    value: 319392,
  },
  {
    id: "CAF",
    value: 722549,
  },
  {
    id: "CAN",
    value: 332843,
  },
  {
    id: "CHE",
    value: 122159,
  },
  {
    id: "CHL",
    value: 811736,
  },
  {
    id: "CHN",
    value: 593604,
  },
  {
    id: "CIV",
    value: 143219,
  },
  {
    id: "CMR",
    value: 630627,
  },
  {
    id: "COG",
    value: 498556,
  },
  {
    id: "COL",
    value: 660527,
  },
  {
    id: "CRI",
    value: 60262,
  },
  {
    id: "CUB",
    value: 177870,
  },
  {
    id: "-99",
    value: 463208,
  },
  {
    id: "CYP",
    value: 945909,
  },
  {
    id: "CZE",
    value: 500109,
  },
  {
    id: "DEU",
    value: 63345,
  },
  {
    id: "DJI",
    value: 634523,
  },
  {
    id: "DNK",
    value: 731068,
  },
  {
    id: "DOM",
    value: 262538,
  },
  {
    id: "DZA",
    value: 760695,
  },
  {
    id: "ECU",
    value: 301263,
  },
  {
    id: "EGY",
    value: 148475,
  },
  {
    id: "ERI",
    value: 939504,
  },
  {
    id: "ESP",
    value: 706050,
  },
  {
    id: "EST",
    value: 977015,
  },
  {
    id: "ETH",
    value: 461734,
  },
  {
    id: "FIN",
    value: 22800,
  },
  {
    id: "FJI",
    value: 18985,
  },
  {
    id: "FLK",
    value: 64986,
  },
  {
    id: "FRA",
    value: 447457,
  },
  {
    id: "GAB",
    value: 669675,
  },
  {
    id: "GBR",
    value: 757120,
  },
  {
    id: "GEO",
    value: 158702,
  },
  {
    id: "GHA",
    value: 893180,
  },
  {
    id: "GIN",
    value: 877288,
  },
  {
    id: "GMB",
    value: 724530,
  },
  {
    id: "GNB",
    value: 387753,
  },
  {
    id: "GNQ",
    value: 706118,
  },
  {
    id: "GRC",
    value: 377796,
  },
  {
    id: "GTM",
    value: 66890,
  },
  {
    id: "GUY",
    value: 719300,
  },
  {
    id: "HND",
    value: 739590,
  },
  {
    id: "HRV",
    value: 929467,
  },
  {
    id: "HTI",
    value: 538961,
  },
  {
    id: "HUN",
    value: 146095,
  },
  {
    id: "IDN",
    value: 490681,
  },
  {
    id: "IND",
    value: 549818,
  },
  {
    id: "IRL",
    value: 630163,
  },
  {
    id: "IRN",
    value: 596921,
  },
  {
    id: "IRQ",
    value: 767023,
  },
  {
    id: "ISL",
    value: 478682,
  },
  {
    id: "ISR",
    value: 963688,
  },
  {
    id: "ITA",
    value: 393089,
  },
  {
    id: "JAM",
    value: 83173,
  },
  {
    id: "JOR",
    value: 52005,
  },
  {
    id: "JPN",
    value: 199174,
  },
  {
    id: "KAZ",
    value: 181424,
  },
  {
    id: "KEN",
    value: 60946,
  },
  {
    id: "KGZ",
    value: 432478,
  },
  {
    id: "KHM",
    value: 254461,
  },
  {
    id: "OSA",
    value: 942447,
  },
  {
    id: "KWT",
    value: 414413,
  },
  {
    id: "LAO",
    value: 448339,
  },
  {
    id: "LBN",
    value: 620090,
  },
  {
    id: "LBR",
    value: 435950,
  },
  {
    id: "LBY",
    value: 75091,
  },
  {
    id: "LKA",
    value: 595124,
  },
  {
    id: "LSO",
    value: 483524,
  },
  {
    id: "LTU",
    value: 867357,
  },
  {
    id: "LUX",
    value: 689172,
  },
  {
    id: "LVA",
    value: 742980,
  },
  {
    id: "MAR",
    value: 236538,
  },
  {
    id: "MDA",
    value: 926836,
  },
  {
    id: "MDG",
    value: 840840,
  },
  {
    id: "MEX",
    value: 353910,
  },
  {
    id: "MKD",
    value: 505842,
  },
  {
    id: "MLI",
    value: 286082,
  },
  {
    id: "MMR",
    value: 915544,
  },
  {
    id: "MNE",
    value: 609500,
  },
  {
    id: "MNG",
    value: 410428,
  },
  {
    id: "MOZ",
    value: 32868,
  },
  {
    id: "MRT",
    value: 375671,
  },
  {
    id: "MWI",
    value: 591935,
  },
  {
    id: "MYS",
    value: 991644,
  },
  {
    id: "NAM",
    value: 701897,
  },
  {
    id: "NCL",
    value: 144098,
  },
  {
    id: "NER",
    value: 312944,
  },
  {
    id: "NGA",
    value: 862877,
  },
  {
    id: "NIC",
    value: 90831,
  },
  {
    id: "NLD",
    value: 281879,
  },
  {
    id: "NOR",
    value: 224537,
  },
  {
    id: "NPL",
    value: 322331,
  },
  {
    id: "NZL",
    value: 86615,
  },
  {
    id: "OMN",
    value: 707881,
  },
  {
    id: "PAK",
    value: 158577,
  },
  {
    id: "PAN",
    value: 738579,
  },
  {
    id: "PER",
    value: 248751,
  },
  {
    id: "PHL",
    value: 557292,
  },
  {
    id: "PNG",
    value: 516874,
  },
  {
    id: "POL",
    value: 682137,
  },
  {
    id: "PRI",
    value: 957399,
  },
  {
    id: "PRT",
    value: 846430,
  },
  {
    id: "PRY",
    value: 720555,
  },
  {
    id: "QAT",
    value: 478726,
  },
  {
    id: "ROU",
    value: 259318,
  },
  {
    id: "RUS",
    value: 268735,
  },
  {
    id: "RWA",
    value: 136781,
  },
  {
    id: "ESH",
    value: 151957,
  },
  {
    id: "SAU",
    value: 111821,
  },
  {
    id: "SDN",
    value: 927112,
  },
  {
    id: "SDS",
    value: 966473,
  },
  {
    id: "SEN",
    value: 158085,
  },
  {
    id: "SLB",
    value: 178389,
  },
  {
    id: "SLE",
    value: 528433,
  },
  {
    id: "SLV",
    value: 353467,
  },
  {
    id: "ABV",
    value: 251,
  },
  {
    id: "SOM",
    value: 445243,
  },
  {
    id: "SRB",
    value: 202402,
  },
  {
    id: "SUR",
    value: 972121,
  },
  {
    id: "SVK",
    value: 319923,
  },
  {
    id: "SVN",
    value: 728766,
  },
  {
    id: "SWZ",
    value: 379669,
  },
  {
    id: "SYR",
    value: 16221,
  },
  {
    id: "TCD",
    value: 101273,
  },
  {
    id: "TGO",
    value: 498411,
  },
  {
    id: "THA",
    value: 506906,
  },
  {
    id: "TJK",
    value: 613093,
  },
  {
    id: "TKM",
    value: 327016,
  },
  {
    id: "TLS",
    value: 607972,
  },
  {
    id: "TTO",
    value: 936365,
  },
  {
    id: "TUN",
    value: 898416,
  },
  {
    id: "TUR",
    value: 237783,
  },
  {
    id: "TWN",
    value: 878213,
  },
  {
    id: "TZA",
    value: 442174,
  },
  {
    id: "UGA",
    value: 720710,
  },
  {
    id: "UKR",
    value: 74172,
  },
  {
    id: "URY",
    value: 753177,
  },
  {
    id: "USA",
    value: 658725,
  },
  {
    id: "UZB",
    value: 550313,
  },
  {
    id: "VEN",
    value: 707492,
  },
  {
    id: "VNM",
    value: 538907,
  },
  {
    id: "VUT",
    value: 650646,
  },
  {
    id: "PSE",
    value: 476078,
  },
  {
    id: "YEM",
    value: 957751,
  },
  {
    id: "ZAF",
    value: 836949,
  },
  {
    id: "ZMB",
    value: 714503,
  },
  {
    id: "ZWE",
    value: 405217,
  },
  {
    id: "KOR",
    value: 171135,
  },
];
