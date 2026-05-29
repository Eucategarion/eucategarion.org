export interface Province {
  slug: string;
  name: string;
  latinName: string;
  authority: string;
  authorityTitle: string;
  image: string;
  imageAlt: string;
  description: string;
  detail: string;
  competencias: string[];
  lema: string;
}

export const provinces: Province[] = [
  {
    slug: 'orden',
    name: 'Provincia del Orden',
    latinName: 'Provincia Ordinis',
    authority: 'Prefecto del Orden',
    authorityTitle: 'Prefecto',
    image: '/gobierno-provincia-orden.png',
    imageAlt: 'Interior de la Provincia del Orden, sala de redacción con códices',
    description: 'La Provincia del Orden es la guardia jurídica del Reino. Toda norma nace aquí, se custodia aquí, y desde aquí se vela por la coherencia institucional.',
    detail: 'El Orden no es solo principio abstracto: necesita custodios concretos. La Provincia del Orden es ese cuerpo permanente que vela para que ningún acto del Reino contradiga los fundamentos sobre los cuales se sostiene. Interpreta, redacta y preserva la norma en servicio al Liber Ordinis.',
    competencias: [
      'Redacción normativa',
      'Custodia jurídica',
      'Supervisión de coherencia institucional',
      'Interpretación del Liber Ordinis',
      'Registro de precedentes y jurisprudencia',
    ],
    lema: 'Lex ante omnia',
  },
  {
    slug: 'fides',
    name: 'Provincia de la Fides',
    latinName: 'Provincia Fidei',
    authority: 'Metropolitano Provincial',
    authorityTitle: 'Metropolitano',
    image: '/gobierno-provincia-fides.png',
    imageAlt: 'Biblioteca iluminada de la Provincia de la Fides',
    description: 'La Provincia de la Fides custodia el sustrato espiritual e institucional del Reino. La Fe no se impone: se preserva y se transmite.',
    detail: 'La Fides de Eucategarion no es dogma impuesto. Es el reconocimiento compartido de que existe un Orden verdadero, anterior a toda institución humana, y que el Reino existe para manifestarlo. La Provincia de la Fides es el corazón doctrinal que alimenta todo lo demás.',
    competencias: [
      'Formación doctrinal del Reino',
      'Producción de contenido institucional',
      'Custodia simbólica interna',
      'Liturgia ceremonial',
      'Preservación de la memoria espiritual',
    ],
    lema: 'Fides non imponitur',
  },
  {
    slug: 'elevacion',
    name: 'Provincia de la Elevación',
    latinName: 'Provincia Elevationis',
    authority: 'Logoteta de la Elevación',
    authorityTitle: 'Logoteta',
    image: '/gobierno-provincia-elevacion.png',
    imageAlt: 'Sala de estudio y producción académica de la Provincia de la Elevación',
    description: 'La Provincia de la Elevación sostiene el crecimiento intelectual del Reino. Sin conocimiento no hay Orden duradero.',
    detail: 'El Reino que no crece intelectualmente se fosiliza. La Provincia de la Elevación existe para que Eucategarion nunca deje de aprender, producir y elevarse. Coordina la formación, la investigación y la difusión del saber en todas las disciplinas que sirven al Orden.',
    competencias: [
      'Desarrollo intelectual',
      'Producción académica',
      'Formación cultural y científica',
      'Coordinación de estudios superiores',
      'Archivo del saber',
    ],
    lema: 'Scientia et Elevatio',
  },
  {
    slug: 'artes',
    name: 'Provincia de las Artes y la Tradición',
    latinName: 'Provincia Artium et Traditionis',
    authority: 'Custodio de la Tradición',
    authorityTitle: 'Custodio',
    image: '/gobierno-provincia-artes.png',
    imageAlt: 'Taller ceremonial con estandartes y sellos de la Provincia de las Artes',
    description: 'La Provincia de las Artes y la Tradición preserva la identidad visible del Reino: sus formas, sus ceremonias, su memoria viva.',
    detail: 'Un Reino sin forma propia es invisible. La Provincia de las Artes y la Tradición es responsable de que Eucategarion tenga una presencia estética coherente, ceremonias que articulen sus valores, y un archivo histórico que garantice la continuidad de la memoria institucional a través del tiempo.',
    competencias: [
      'Estética institucional',
      'Diseño de ceremonias y rituales',
      'Archivo histórico del Reino',
      'Producción de obras representativas',
      'Custodia del patrimonio simbólico',
    ],
    lema: 'Forma et Memoria',
  },
  {
    slug: 'expansion',
    name: 'Provincia de la Expansión Digital',
    latinName: 'Provincia Expansionis Digitalis',
    authority: 'Exarca Digital',
    authorityTitle: 'Exarca',
    image: '/gobierno-provincia-expansion.png',
    imageAlt: 'Centro de operaciones digital de la Provincia de la Expansión',
    description: 'La Provincia de la Expansión Digital proyecta al Reino en el ámbito digital y gestiona su crecimiento hacia el exterior.',
    detail: 'Eucategarion existe primariamente en el espacio digital. La Provincia de la Expansión Digital no solo mantiene la infraestructura técnica del Reino, sino que es su puerta hacia el exterior: gestiona las relaciones con otros espacios, supervisa la incorporación de nuevos ciudadanos y garantiza que la presencia digital del Reino sea coherente con sus principios.',
    competencias: [
      'Infraestructura tecnológica del Reino',
      'Relaciones externas y diplomáticas',
      'Incorporación de ciudadanos',
      'Comunicación oficial en redes y plataformas',
      'Expansión y visibilidad del Reino',
    ],
    lema: 'Per Digitum ad Ordinem',
  },
];

export function getProvinceBySlug(slug: string): Province | undefined {
  return provinces.find((p) => p.slug === slug);
}
